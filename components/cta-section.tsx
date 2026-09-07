import { Button } from "@/components/ui/button";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { ArrowRightIcon } from "lucide-react";

const assurances = [
	"Sans engagement",
	"Candidature étudiée sous 72 h",
	"Accompagnement à l'installation",
];

export function CtaSection() {
	return (
		<section
			className="surface-invert relative overflow-hidden bg-foreground text-background"
			id="partenaire"
		>
			<div aria-hidden="true" className="absolute inset-0 -z-1">
				<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_75%)]" />
				<div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-background/20 to-transparent" />
				<div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-background/20 to-transparent" />
			</div>

			<div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center md:py-32">
				<DecorIcon
					className="size-5 stroke-background/60"
					position="top-left"
				/>
				<DecorIcon
					className="size-5 stroke-background/60"
					position="top-right"
				/>
				<DecorIcon
					className="size-5 stroke-background/60"
					position="bottom-left"
				/>
				<DecorIcon
					className="size-5 stroke-background/60"
					position="bottom-right"
				/>

				<h2 className="text-balance text-4xl leading-[1.05] font-light tracking-tight text-background md:text-6xl">
					Faites de vos clients vos ambassadeurs.
				</h2>
				<p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-background/75 md:text-lg">
					Rejoignez le réseau national qui transforme la fidélité en
					levier de croissance. Une candidature simple, une équipe
					locale, et la visibilité de toute la communauté.
				</p>

				<div className="mt-10 flex w-fit flex-wrap items-center justify-center gap-3">
					<Button
						size="lg"
						variant="secondary"
						render={<a href="#contact" />}
						nativeButton={false}
					>
						Candidater comme partenaire
						<ArrowRightIcon data-icon="inline-end" />
					</Button>
					<a
						className="inline-flex h-10 items-center gap-1.5 rounded-md border border-background/25 px-4 text-sm font-medium text-background transition-colors hover:border-background/50 hover:bg-background/10"
						href="#contact"
					>
						Contactez l&apos;équipe
					</a>
				</div>

				<ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
					{assurances.map((item) => (
						<li
							className="flex items-center gap-2 text-xs text-background/65"
							key={item}
						>
							<span
								aria-hidden="true"
								className="size-1 rounded-full bg-background/60"
							/>
							{item}
						</li>
					))}
				</ul>
			</div>

			<FullWidthDivider position="bottom" />
		</section>
	);
}