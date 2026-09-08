"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import {
	PROFILES,
	SUBJECTS,
	SUCCESS_MESSAGE,
	type ContactFields,
	type ContactState,
} from "@/lib/contact";
import { CONTACT_EMAIL } from "@/lib/links";

/** Bornes de longueur — un POST direct ne passe pas par les limites du DOM. */
const LIMITS = {
	nom: 120,
	email: 200,
	telephone: 40,
	profil: 80,
	objet: 80,
	message: 4000,
} as const;

/**
 * Limitation : cinq envois par heure et par adresse IP (§ 6.2).
 *
 * Compteur en mémoire du processus : il suffit pour freiner un envoi répété
 * depuis un navigateur, mais il repart à zéro à chaque redémarrage et n'est
 * pas partagé entre instances. Sur un hébergement à plusieurs instances ou
 * sans état, le faire porter par le pare-feu applicatif ou un stockage
 * partagé — c'est la seule façon d'obtenir une limite réellement globale.
 */
const RATE_LIMIT = { max: 5, windowMs: 60 * 60 * 1000 };
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
	const now = Date.now();
	const recent = (hits.get(ip) ?? []).filter(
		(t) => now - t < RATE_LIMIT.windowMs
	);
	if (recent.length >= RATE_LIMIT.max) {
		hits.set(ip, recent);
		return true;
	}
	recent.push(now);
	hits.set(ip, recent);
	// Purge opportuniste : la table ne doit pas croître indéfiniment.
	if (hits.size > 5000) {
		for (const [key, stamps] of hits) {
			if (stamps.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
		}
	}
	return false;
}

function field(formData: FormData, name: keyof typeof LIMITS) {
	const raw = formData.get(name);
	return typeof raw === "string" ? raw.trim().slice(0, LIMITS[name]) : "";
}

function mailto(subject: string, body: string) {
	return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;
}

/**
 * Envoie une demande du formulaire de contact.
 *
 * Le destinataire ne vient jamais du formulaire : une Server Function est
 * joignable par un POST direct, pas seulement via l'interface du site, et une
 * adresse prise dans les données reçues ferait du serveur un relais d'envoi
 * ouvert. Tout le reste est validé ici, côté serveur, pour la même raison.
 */
export async function sendContact(
	_prev: ContactState,
	formData: FormData
): Promise<ContactState> {
	// Champ piège (§ 6.1) : masqué en CSS, jamais rempli par un humain. On
	// répond « envoyé » sans rien envoyer, pour ne pas renseigner le robot.
	if (formData.get("website")) {
		return { status: "sent", message: SUCCESS_MESSAGE };
	}

	const nom = field(formData, "nom");
	const email = field(formData, "email");
	const telephone = field(formData, "telephone");
	const profil = field(formData, "profil");
	const objet = field(formData, "objet");
	const message = field(formData, "message");
	const consentement = formData.get("consentement") === "on";

	const values: ContactFields = {
		nom,
		email,
		telephone,
		profil,
		objet,
		message,
		consentement,
	};

	const errors: ContactState["errors"] = {};
	if (nom.length < 2) errors.nom = "Indiquez votre nom.";
	// Volontairement permissif : la seule validation qui vaille est l'envoi.
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = "Cette adresse e-mail semble incomplète.";
	}
	// Les listes sont fermées : un POST direct ne doit pas y glisser autre chose.
	if (!PROFILES.includes(profil as (typeof PROFILES)[number])) {
		errors.profil = "Choisissez une option.";
	}
	if (!SUBJECTS.includes(objet as (typeof SUBJECTS)[number])) {
		errors.objet = "Choisissez un objet.";
	}
	if (message.length < 10) {
		errors.message = "Décrivez votre demande en quelques mots.";
	}
	if (!consentement) {
		errors.consentement = "Votre accord est nécessaire pour traiter la demande.";
	}
	if (Object.keys(errors).length > 0) {
		return {
			status: "error",
			message: "Le formulaire n'est pas complet.",
			errors,
			values,
		};
	}

	const headerList = await headers();
	const ip =
		headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
		headerList.get("x-real-ip") ||
		"inconnue";
	if (rateLimited(ip)) {
		return {
			status: "error",
			message:
				"Vous avez envoyé plusieurs demandes coup sur coup. Réessayez dans une heure.",
			values,
		};
	}

	// Objet formaté « [Site] Objet sélectionné — Nom du contact » (§ 6.3).
	const subject = `[Site] ${objet} — ${nom}`;
	const body = [
		`Nom       : ${nom}`,
		`E-mail    : ${email}`,
		`Téléphone : ${telephone || "—"}`,
		`Profil    : ${profil}`,
		`Objet     : ${objet}`,
		"",
		"Message :",
		message,
		"",
		"—",
		"Envoyé depuis le formulaire de madaprivileges.com",
	].join("\n");

	const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM } =
		process.env;

	if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
		// Sans configuration SMTP, on ne fait pas croire à un envoi.
		return {
			status: "error",
			message:
				"L'envoi automatique n'est pas encore configuré sur ce serveur.",
			fallback: mailto(subject, body),
			values,
		};
	}

	try {
		const port = Number(SMTP_PORT ?? 587);
		const transport = nodemailer.createTransport({
			host: SMTP_HOST,
			port,
			// 465 est le port TLS implicite ; les autres passent par STARTTLS.
			secure: port === 465,
			auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
		});

		const from = SMTP_FROM ?? `Mada Privilèges <${SMTP_USER}>`;

		await transport.sendMail({
			from,
			to: CONTACT_EMAIL,
			// Le visiteur ne peut pas être l'expéditeur — SPF et DKIM feraient
			// rejeter le message — mais un « Répondre à » permet de lui
			// répondre directement depuis la boîte de contact.
			replyTo: `${nom} <${email}>`,
			subject,
			text: body,
		});

		// Accusé de réception à l'expéditeur (§ 6.3). Son échec ne doit pas
		// faire croire au visiteur que sa demande n'est pas partie : elle l'est.
		try {
			await transport.sendMail({
				from,
				to: email,
				replyTo: CONTACT_EMAIL,
				subject: "Nous avons bien reçu votre message — Mada Privilèges",
				text: [
					`Bonjour ${nom},`,
					"",
					"Nous avons bien reçu votre demande et vous répondons sous 48 heures ouvrées.",
					"",
					`Objet : ${objet}`,
					"",
					"Votre message :",
					message,
					"",
					"—",
					"Mada Privilèges — EDS Group, Antananarivo",
					CONTACT_EMAIL,
				].join("\n"),
			});
		} catch (ackError) {
			console.error("[contact] accusé de réception non envoyé", ackError);
		}

		return { status: "sent", message: SUCCESS_MESSAGE };
	} catch (error) {
		console.error("[contact] échec de l'envoi SMTP", error);
		return {
			status: "error",
			message: "L'envoi a échoué. Vous pouvez nous écrire directement.",
			fallback: mailto(subject, body),
			values,
		};
	}
}
