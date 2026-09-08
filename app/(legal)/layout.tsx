import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

/**
 * Gabarit des pages annexes (cahier de contenu, § 8).
 *
 * Ces trois pages conditionnent la mise en ligne du formulaire : le site
 * collecte des données personnelles, il doit les documenter.
 */
export default function LegalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className="flex-1">
				<Header />
				<article className="mx-auto max-w-3xl px-4 py-20 md:py-28">
					{children}
				</article>
			</main>
			<Footer />
		</>
	);
}
