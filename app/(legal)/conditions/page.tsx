import type { Metadata } from "next";
import { Pending } from "../_pending";

export const metadata: Metadata = {
	title: "Conditions d'utilisation — Mada Privilèges",
	description:
		"Conditions d'accès au site vitrine madaprivileges.com.",
	alternates: { canonical: "/conditions" },
};

export default function Page() {
	return (
		<>
			<h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
				Conditions d&apos;utilisation
			</h1>
			<p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
				Ces conditions portent sur l&apos;accès au site vitrine
				madaprivileges.com. Les conditions d&apos;usage de la plateforme sont
				publiées sur madaprivileges.mg et doivent être reliées depuis cette
				page plutôt que recopiées : deux versions finiraient par diverger.
			</p>
			<Pending
				items={[
					"Conditions d'accès au site vitrine.",
					"Lien exact vers les conditions d'usage publiées sur la plateforme.",
				]}
			/>
		</>
	);
}
