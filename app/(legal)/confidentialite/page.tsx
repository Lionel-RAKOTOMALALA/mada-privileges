import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/links";
import { Pending } from "../_pending";

export const metadata: Metadata = {
	title: "Politique de confidentialité — Mada Privilèges",
	description:
		"Données collectées par le site madaprivileges.com, finalité, conservation et exercice de vos droits.",
	alternates: { canonical: "/confidentialite" },
};

export default function Page() {
	return (
		<>
			<h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
				Politique de confidentialité
			</h1>
			<p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
				Le site vitrine collecte des données uniquement par son formulaire de
				contact : nom, adresse e-mail, téléphone si vous le renseignez, profil,
				objet et message. Elles servent à traiter votre demande et ne sont ni
				revendues ni cédées à des tiers. Pour toute question, écrivez à{" "}
				<a
					className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
					href={`mailto:${CONTACT_EMAIL}`}
				>
					{CONTACT_EMAIL}
				</a>
				.
			</p>
			<p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
				Les données traitées par la plateforme madaprivileges.mg relèvent de sa
				propre politique : ce sont deux produits distincts.
			</p>
			<Pending
				items={[
					"Liste des données collectées par la plateforme, en plus de celles du formulaire.",
					"Finalité précise de chaque collecte.",
					"Durée de conservation.",
					"Destinataires et sous-traitants éventuels (hébergeur, service d'envoi d'e-mails).",
					"Modalités d'exercice des droits d'accès, de rectification et de suppression.",
				]}
			/>
		</>
	);
}
