"use client";

/**
 * Envoi du formulaire de contact depuis le navigateur.
 *
 * Le site est exporté en fichiers statiques : aucune Server Function n'est
 * disponible. Le travail se fait donc dans `public/contact.php`, exécuté par
 * Apache, et ce module ne fait que lui porter la saisie.
 *
 * La signature est celle qu'attend `useActionState` — `(état, FormData)` —
 * exactement comme l'action serveur qu'il remplace : le formulaire n'a pas
 * changé de forme, seulement de destinataire.
 *
 * Aucune validation n'est refaite ici. Le navigateur applique déjà `required`
 * et `type="email"`, et PHP revalide tout de son côté : dupliquer les règles
 * une troisième fois garantirait surtout qu'elles divergent un jour.
 */

import type { ContactFields, ContactState } from "@/lib/contact";
import { CONTACT_EMAIL } from "@/lib/links";

/** Déposé dans `public/`, donc servi à la racine du site à côté des pages. */
const ENDPOINT = "/contact.php";

/** Forme de la réponse JSON de `contact.php`. */
type ContactResponse = {
	status?: "sent" | "error";
	message?: string;
	errors?: ContactState["errors"];
	/** Vrai quand l'envoi a échoué côté serveur — on propose alors le repli. */
	fallback?: boolean;
};

function readValues(formData: FormData): ContactFields {
	const text = (name: string) => {
		const raw = formData.get(name);
		return typeof raw === "string" ? raw.trim() : "";
	};

	return {
		nom: text("nom"),
		email: text("email"),
		telephone: text("telephone"),
		profil: text("profil"),
		objet: text("objet"),
		message: text("message"),
		consentement: formData.get("consentement") === "on",
	};
}

/**
 * Compose le message tel qu'il partirait par mail, pour le repli `mailto:`.
 *
 * Mise en forme reprise de `contact.php` (§ 6.3) : si la demande finit dans la
 * messagerie du visiteur, elle doit arriver dans la boîte de contact sous la
 * même forme que les autres.
 */
function compose(values: ContactFields) {
	const subject = `[Site] ${values.objet} — ${values.nom}`;
	const body = [
		`Nom       : ${values.nom}`,
		`E-mail    : ${values.email}`,
		`Téléphone : ${values.telephone || "—"}`,
		`Profil    : ${values.profil}`,
		`Objet     : ${values.objet}`,
		"",
		"Message :",
		values.message,
		"",
		"—",
		"Envoyé depuis le formulaire de madaprivileges.com",
	].join("\n");

	return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;
}

export async function sendContact(
	_prev: ContactState,
	formData: FormData
): Promise<ContactState> {
	const values = readValues(formData);

	try {
		const response = await fetch(ENDPOINT, {
			method: "POST",
			body: formData,
		});

		// Un hébergement qui n'exécute pas PHP renvoie le source du script avec
		// un code 200 : sans cette lecture, on annoncerait un envoi qui n'a pas
		// eu lieu. Une réponse illisible est donc traitée comme un échec.
		const payload = (await response.json()) as ContactResponse;

		if (payload.status === "sent") {
			return { status: "sent", message: payload.message ?? "" };
		}

		return {
			status: "error",
			message: payload.message ?? "L'envoi a échoué.",
			errors: payload.errors,
			values,
			// Le repli n'est proposé que si la demande est complète : l'offrir
			// sur une erreur de saisie ferait partir un message incomplet.
			fallback: payload.fallback ? compose(values) : undefined,
		};
	} catch {
		// Réseau coupé, script absent, réponse qui n'est pas du JSON : dans
		// tous les cas la demande n'est pas partie, et ce que le visiteur vient
		// d'écrire ne doit pas être perdu.
		return {
			status: "error",
			message: "L'envoi a échoué. Vous pouvez nous écrire directement.",
			values,
			fallback: compose(values),
		};
	}
}
