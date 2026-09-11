import { LogoCloud } from "@/components/logo-cloud";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Button } from "@/components/ui/button";
import { platformLabels, platformLinks } from "@/lib/links";
import { ArrowRightIcon } from "lucide-react";

/**
 * « Secteurs couverts » (cahier de contenu, § 5.7).
 *
 * Unique rubrique secteurs de la page : la grille de pastilles qui suivait
 * répétait les mêmes libellés et le même propos, et son bouton menait à une
 * ancre interne. Le § 5.7 demande de conserver le défilement horizontal —
 * c'est celui-ci.
 *
 * Formulation au présent ouvert (« accueille les enseignes de tous secteurs »)
 * et non comme une couverture déjà acquise ; pas de compteur de partenaires
 * tant que les volumes ne sont pas significatifs.
 */
export function LogosSection() {
	return (
		<section className="py-16 md:py-20" id="secteurs">
			<div
				className="mx-auto max-w-5xl px-4 text-center"
				data-animate="heading"
			>
				<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
					Un programme, tous les commerces du quotidien
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
					Le réseau démarre à Antananarivo et accueille les enseignes de tous
					secteurs. Plus il s&apos;élargit, plus votre portefeuille se remplit.
				</p>
			</div>
			<div className="relative mt-10 *:border-0">
				<DecorIcon className="size-4" position="top-left" />
				<DecorIcon className="size-4" position="top-right" />
				<DecorIcon className="size-4" position="bottom-left" />
				<DecorIcon className="size-4" position="bottom-right" />

				<FullWidthDivider className="-top-px" />
				<LogoCloud />
				<FullWidthDivider className="-bottom-px" />
			</div>
			<div
				className="mx-auto mt-10 flex max-w-5xl justify-center px-4"
				data-animate="block"
			>
				<Button
					nativeButton={false}
					render={<a data-outbound="programs" href={platformLinks.programs} />}
					size="lg"
					variant="outline"
				>
					{platformLabels.programs}
					<ArrowRightIcon data-icon="inline-end" />
				</Button>
			</div>
		</section>
	);
}
