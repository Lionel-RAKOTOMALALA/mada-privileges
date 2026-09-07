import { StoreIcon, UserRoundIcon } from "lucide-react";
import type { ReactNode } from "react";

type Step = {
	number: string;
	title: string;
	description: string;
};

type Journey = {
	id: string;
	label: string;
	icon: ReactNode;
	tag: string;
	steps: Step[];
};

export function HowItWorks() {
	return (
		<section className="relative py-24 md:py-28" id="fonctionnement">
			<div className="mx-auto max-w-5xl px-4">
				<div className="text-center" data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
						Deux parcours, une même destination
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
						Un programme d&apos;une simplicité radicale — pour ceux qui
						consomment comme pour ceux qui accueillent.
					</p>
				</div>

				<div className="mt-14 grid gap-y-12 md:grid-cols-2 md:gap-y-0 md:border-x">
					{journeys.map((journey) => (
						<div
							className="relative border-t border-border md:border-r md:px-8 lg:px-10"
							data-animate="card"
							key={journey.id}
						>
							<div className="flex items-center justify-between gap-4 pt-8">
								<div className="flex items-center gap-3">
									<span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background [&_svg]:size-5 [&_svg]:stroke-width-1.5">
										{journey.icon}
									</span>
									<div>
										<p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
											{journey.label}
										</p>
										<p className="text-xs text-muted-foreground">
											{journey.tag}
										</p>
									</div>
								</div>
							</div>

							<ul className="mt-4">
								{journey.steps.map((step) => (
									<li
										className="relative flex gap-6 border-t border-border py-7 first:border-t-0"
										key={step.number}
									>
										<span className="text-2xl font-semibold text-muted-foreground italic">
											{step.number}
										</span>
										<div>
											<h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
												{step.title}
											</h3>
											<p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
												{step.description}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const journeys: Journey[] = [
	{
		id: "members",
		label: "Pour les membres",
		tag: "Gratuit, sans engagement",
		icon: <UserRoundIcon />,
		steps: [
			{
				number: "01",
				title: "Inscrivez-vous gratuitement",
				description:
					"Depuis l'application, le site ou par SMS/USSD — en moins de deux minutes.",
			},
			{
				number: "02",
				title: "Consultez les privilèges autour de vous",
				description:
					"Géolocalisez les offres des commerces membres, près de chez vous.",
			},
			{
				number: "03",
				title: "Présentez votre QR code en caisse",
				description:
					"Chaque passage cumule des points, instantanément, sans friction.",
			},
			{
				number: "04",
				title: "Allez de récompense en récompense",
				description:
					"Échangez vos points contre des privilèges dans tout le réseau.",
			},
		],
	},
	{
		id: "partners",
		label: "Pour les enseignes",
		tag: "Visibilité + fidélité mesurée",
		icon: <StoreIcon />,
		steps: [
			{
				number: "01",
				title: "Adhérez au réseau",
				description:
					"Rejoignez une communauté qui vient déjà consommer chez vos voisins.",
			},
			{
				number: "02",
				title: "Publiez votre fiche et vos offres",
				description:
					"Votre enseigne est référencée et visible auprès de tous les membres.",
			},
			{
				number: "03",
				title: "Validez les privilèges en caisse",
				description:
					"Un code à valider, deux secondes, zéro friction pour votre équipe.",
			},
			{
				number: "04",
				title: "Mesurez votre fréquentation",
				description:
					"Suivez vos visites et ajustez vos offres dans votre espace dédié.",
			},
		],
	},
];