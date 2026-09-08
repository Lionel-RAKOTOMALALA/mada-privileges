"use client";

import { useActionState } from "react";
import { sendContact } from "@/app/actions/contact";
import {
	INITIAL_CONTACT_STATE,
	PROFILES,
	SUBJECTS,
} from "@/lib/contact";
import { legalLinks } from "@/lib/links";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";

/**
 * Formulaire de contact (cahier de contenu, § 6). Neutres pris aux tokens de
 * thème, accent et alerte au rôle que pose la surface : rien n'est figé, la
 * section suit donc le thème.
 *
 * Le bouton fait exception et reste un aplat or sur bleu dans les deux
 * thèmes : son contraste utile est interne (5,6:1 entre le fond et le
 * libellé) et ne dépend pas de la surface derrière lui.
 */
const fieldClass = cn(
	"w-full rounded-lg border border-border bg-card px-4 py-3",
	"text-sm text-foreground placeholder:text-muted-foreground/70",
	"transition-colors focus-visible:border-surface-accent focus-visible:outline-none",
	"focus-visible:ring-2 focus-visible:ring-surface-accent/30"
);

const labelClass = "text-xs font-medium tracking-wide text-muted-foreground";
const errorClass = "text-xs text-surface-alerte";

export function ContactForm() {
	const [state, formAction, pending] = useActionState(
		sendContact,
		INITIAL_CONTACT_STATE
	);

	if (state.status === "sent") {
		return (
			<div
				aria-live="polite"
				// Le message remplace le formulaire : sans région live, un
				// lecteur d'écran ne saurait pas que l'envoi a abouti.
				className="flex min-h-72 flex-col items-start justify-center gap-3 rounded-2xl border border-surface-accent/50 bg-card p-8"
				role="status"
			>
				<h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
					Demande envoyée
				</h3>
				<p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
					{state.message}
				</p>
			</div>
		);
	}

	return (
		<form action={formAction} className="flex flex-col gap-5">
			{/* Champ piège (§ 6.1) : masqué à l'écran comme aux lecteurs d'écran. */}
			<div aria-hidden="true" className="hidden">
				<label htmlFor="website">Ne pas remplir</label>
				<input
					autoComplete="off"
					id="website"
					name="website"
					tabIndex={-1}
					type="text"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label className={labelClass} htmlFor="nom">
					Nom et prénom
				</label>
				<input
					aria-describedby={state.errors?.nom ? "nom-error" : undefined}
					aria-invalid={state.errors?.nom ? true : undefined}
					autoComplete="name"
					className={fieldClass}
					defaultValue={state.values?.nom ?? ""}
					id="nom"
					name="nom"
					placeholder="Votre nom"
					required
					type="text"
				/>
				{state.errors?.nom && (
					<p className={errorClass} id="nom-error">
						{state.errors.nom}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label className={labelClass} htmlFor="email">
					Adresse e-mail
				</label>
				<input
					aria-describedby={state.errors?.email ? "email-error" : undefined}
					aria-invalid={state.errors?.email ? true : undefined}
					autoComplete="email"
					className={fieldClass}
					defaultValue={state.values?.email ?? ""}
					id="email"
					name="email"
					placeholder="votre.email@exemple.com"
					required
					type="email"
				/>
				{state.errors?.email && (
					<p className={errorClass} id="email-error">
						{state.errors.email}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label className={labelClass} htmlFor="telephone">
					Téléphone ou WhatsApp
				</label>
				<input
					autoComplete="tel"
					className={fieldClass}
					defaultValue={state.values?.telephone ?? ""}
					id="telephone"
					name="telephone"
					placeholder="+261 …"
					type="tel"
				/>
			</div>

			{/*
				`key` force le remontage des listes quand le serveur renvoie la
				saisie : React réapplique `defaultValue` aux <input> déjà montés,
				mais pas aux <select>. Sans ça, une erreur de validation
				ramènerait le choix au premier item et le visiteur renverrait le
				mauvais.
			*/}
			<div className="flex flex-col gap-2">
				<label className={labelClass} htmlFor="profil">
					Vous êtes
				</label>
				<select
					className={fieldClass}
					defaultValue={state.values?.profil || PROFILES[0]}
					id="profil"
					key={state.values?.profil ?? "profil-defaut"}
					name="profil"
					required
				>
					{PROFILES.map((profile) => (
						<option key={profile} value={profile}>
							{profile}
						</option>
					))}
				</select>
			</div>

			<div className="flex flex-col gap-2">
				<label className={labelClass} htmlFor="objet">
					Objet
				</label>
				<select
					className={fieldClass}
					defaultValue={state.values?.objet || SUBJECTS[0]}
					id="objet"
					key={state.values?.objet ?? "objet-defaut"}
					name="objet"
					required
				>
					{SUBJECTS.map((subject) => (
						<option key={subject} value={subject}>
							{subject}
						</option>
					))}
				</select>
			</div>

			<div className="flex flex-col gap-2">
				<label className={labelClass} htmlFor="message">
					Votre message
				</label>
				<textarea
					aria-describedby={
						state.errors?.message ? "message-error" : undefined
					}
					aria-invalid={state.errors?.message ? true : undefined}
					className={cn(fieldClass, "min-h-36 resize-y")}
					defaultValue={state.values?.message ?? ""}
					id="message"
					name="message"
					placeholder="Comment pouvons-nous vous aider ?"
					required
				/>
				{state.errors?.message && (
					<p className={errorClass} id="message-error">
						{state.errors.message}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<label
					className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"
					htmlFor="consentement"
				>
					<input
						aria-describedby={
							state.errors?.consentement ? "consentement-error" : undefined
						}
						aria-invalid={state.errors?.consentement ? true : undefined}
						className="mt-0.5 size-4 shrink-0 rounded border-border accent-surface-accent"
						defaultChecked={state.values?.consentement ?? false}
						id="consentement"
						name="consentement"
						required
						type="checkbox"
					/>
					<span>
						J&apos;accepte que mes données soient utilisées pour traiter ma
						demande. Voir la{" "}
						<a
							className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
							href={legalLinks.privacy}
						>
							politique de confidentialité
						</a>
						.
					</span>
				</label>
				{state.errors?.consentement && (
					<p className={errorClass} id="consentement-error">
						{state.errors.consentement}
					</p>
				)}
			</div>

			<button
				className={cn(
					"mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg",
					"bg-brand-or text-sm font-semibold text-brand-navy transition-colors",
					"hover:bg-brand-or-clair focus-visible:outline-none focus-visible:ring-2",
					"focus-visible:ring-brand-or/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					"disabled:cursor-not-allowed disabled:opacity-60"
				)}
				disabled={pending}
				type="submit"
			>
				{pending ? "Envoi…" : "Envoyer ma demande"}
				{!pending && <SendHorizontal className="size-4" />}
			</button>

			{state.status === "error" && (
				<p
					aria-live="polite"
					className="text-sm leading-relaxed text-muted-foreground"
					role="status"
				>
					{state.message}{" "}
					{state.fallback && (
						// Repli : la demande déjà saisie part dans le client mail
						// du visiteur, plutôt que d'être perdue.
						<a
							className="font-medium text-surface-accent underline decoration-surface-accent/40 underline-offset-4 hover:decoration-surface-accent"
							href={state.fallback}
						>
							Ouvrir dans votre messagerie
						</a>
					)}
				</p>
			)}
		</form>
	);
}
