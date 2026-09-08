import type { Metadata } from "next";
import { Pending } from "../_pending";

export const metadata: Metadata = {
	title: "Mentions légales — Mada Privilèges",
	description:
		"Mentions légales du site madaprivileges.com, édité par EDS Group, Antananarivo.",
	alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
	return (
		<>
			<h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
				Mentions légales
			</h1>
			<p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
				Le site madaprivileges.com est édité par EDS Group, cabinet de conseil
				et d&apos;ingénierie numérique établi à Antananarivo, Madagascar.
			</p>
			<Pending
				items={[
					"Raison sociale complète et forme juridique d'EDS Group.",
					"Adresse du siège social.",
					"Numéro d'immatriculation et NIF.",
					"Nom du directeur de la publication.",
					"Coordonnées de l'hébergeur du site.",
				]}
			/>
		</>
	);
}
