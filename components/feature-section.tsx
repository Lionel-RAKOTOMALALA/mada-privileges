import { cn } from "@/lib/utils";
import type React from "react";
import { DecorIcon } from "@/components/decor-icon";
import { InfinityIcon, StoreIcon, UsersIcon } from "lucide-react";

type FeatureType = {
	title: string;
	icon: React.ReactNode;
	description: string;
};

export function FeatureSection() {
	return (
		<section className="relative bg-muted/40 py-24 md:py-28" id="programme">
			<div className="mx-auto max-w-5xl px-4">
				<div className="text-center" data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
						Un cercle vertueux qui profite à tous
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">
						Plus il y a de membres, plus les enseignes s&apos;engagent.
						Plus les enseignes s&apos;engagent, plus il y a de raisons
						de venir. Chacun nourrit l&apos;autre.
					</p>
				</div>

				<div className="relative mt-14">
					{/* Coins décoratifs */}
					<DecorIcon
						className="size-6 stroke-2 stroke-muted-foreground/60"
						position="top-left"
					/>
					<DecorIcon
						className="size-6 stroke-2 stroke-muted-foreground/60"
						position="top-right"
					/>
					<DecorIcon
						className="size-6 stroke-2 stroke-muted-foreground/60"
						position="bottom-left"
					/>
					<DecorIcon
						className="size-6 stroke-2 stroke-muted-foreground/60"
						position="bottom-right"
					/>

					<DashedLine className="-top-[1.5px] right-3 left-3" />
					<DashedLine className="top-3 -right-[1.5px] bottom-3" />
					<DashedLine className="top-3 bottom-3 -left-[1.5px]" />
					<DashedLine className="right-3 -bottom-[1.5px] left-3" />

					<div className="grid grid-cols-1 md:grid-cols-3">
						{features.map((feature) => (
							<div
								className="group relative p-8"
								data-animate="card"
								key={feature.title}
							>
								<div className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5 [&_svg]:size-5 [&_svg]:stroke-width-1.5">
									{feature.icon}
								</div>
								<h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-foreground">
									{feature.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{feature.description}
								</p>
								<DashedLine className="right-5 bottom-0 left-5 group-last:hidden md:top-5 md:right-0 md:bottom-5 md:left-full" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function DashedLine({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"absolute border-collapse border border-dashed border-foreground/15",
				className
			)}
			{...props}
		/>
	);
}

const features: FeatureType[] = [
	{
		title: "Pour vos clients",
		icon: (
			<UsersIcon
			/>
		),
		description:
			"Un compte, tous leurs achats. Les points s'accumulent chez tous les commerces du réseau et s'échangent contre des privilèges.",
	},
	{
		title: "Pour votre enseigne",
		icon: (
			<StoreIcon
			/>
		),
		description:
			"Gagnez en visibilité auprès de toute la communauté, fidélisez sans effort et faites de vos meilleurs clients vos ambassadeurs.",
	},
	{
		title: "Pour la communauté",
		icon: (
			<InfinityIcon
			/>
		),
		description:
			"Plus nous sommes nombreux, plus les privilèges sont beaux : c'est tout l'effet réseau de Mada Privileges.",
	},
];