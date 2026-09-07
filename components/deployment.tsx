import { cn } from "@/lib/utils";
import { ParallaxSection } from "gsap-animations-lionel";

const cities = [
	{
		name: "Antananarivo",
		status: "En ligne",
		year: "2026",
		active: true,
	},
	{
		name: "Toamasina",
		status: "Prochainement",
		year: "2027",
		active: false,
	},
	{
		name: "Mahajanga",
		status: "Prochainement",
		year: "2027",
		active: false,
	},
	{
		name: "Antsirabe",
		status: "Prochainement",
		year: "2027",
		active: false,
	},
];

export function Deployment() {
	return (
		/*
		 * Seule section à passer par ParallaxSection : son contenu dérive
		 * légèrement contre le fond de page pendant le défilement. Les autres
		 * sections portent des filets et des décors en `absolute`, qui se
		 * retrouveraient dans la couche mobile et dériveraient avec elle —
		 * ici il n'y en a aucun. Le site n'ayant pas de photo, la couche
		 * `bgImage` du composant n'a rien à porter : seul `contentSpeed` sert.
		 */
		<ParallaxSection
			className="py-24 md:py-28"
			contentSpeed={0.35}
			id="deploiement"
		>
			<div className="mx-auto max-w-5xl px-4">
				<div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
					<div>
						<h2
							className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
							data-animate="heading"
						>
							Quatre villes, une seule carte
						</h2>
					</div>

					<div data-animate="block">
						<p className="text-sm leading-relaxed text-muted-foreground md:text-base">
							Le programme démarre à Antananarivo puis s&apos;étend
							aux grandes villes du pays. Chaque enseigne rejoint le
							réseau là où elle opère — et le suit partout où il
							grandit.
						</p>
					</div>
				</div>

				<ul className="mt-8 border-t border-border">
					{cities.map((city) => (
						<li
							className="group flex flex-col gap-2 border-b border-border py-6 transition-colors sm:flex-row sm:items-center sm:gap-6"
							data-animate="row"
							key={city.name}
						>
							<h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
								{city.name}
							</h3>
							<div className="flex items-center gap-3 sm:ml-auto">
								<span
									className={cn(
										"flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase",
										city.active
											? "border-foreground bg-foreground text-background"
											: "border-border bg-card text-muted-foreground"
									)}
								>
									<span
										className={cn(
											"size-1.5 rounded-full",
											city.active
												? "bg-background"
												: "bg-muted-foreground/70"
										)}
									/>
									{city.status}
								</span>
								<span className="w-12 text-right font-mono text-xs tracking-[0.2em] text-foreground/40">
									{city.year}
								</span>
							</div>
						</li>
					))}
				</ul>

				<p className="mt-6 text-center text-sm text-muted-foreground">
					Votre ville n&apos;est pas encore là ?{" "}
					<a
						className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
						href="#partenaire"
					>
						Faites-la candidater dès aujourd&apos;hui
					</a>
				</p>
			</div>
		</ParallaxSection>
	);
}