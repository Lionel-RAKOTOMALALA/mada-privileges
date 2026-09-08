import type React from "react";
import { Button } from "@/components/ui/button";
import { platformLabels, platformLinks } from "@/lib/links";
import {
	ArrowRightIcon,
	QrCodeIcon,
	SlidersHorizontalIcon,
	TrendingUpIcon,
	UsersIcon,
} from "lucide-react";

/**
 * « Pour les enseignes » (cahier de contenu, § 5.5).
 * Rubrique commerciale principale du site : la plus développée, et accessible
 * depuis la navigation.
 */
type Benefit = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

const benefits: Benefit[] = [
	{
		// Le QR code au comptoir est toute l'installation demandée : l'icône
		// dit l'argument aussi vite que le titre.
		icon: <QrCodeIcon />,
		title: "Rien à développer, rien à installer",
		description:
			"Vous créez votre programme depuis votre espace partenaire. Pas de logiciel à acheter, pas d'intégration avec votre caisse, pas de matériel spécifique. Un QR code affiché au comptoir suffit.",
	},
	{
		icon: <SlidersHorizontalIcon />,
		title: "Vous fixez vos propres règles",
		description:
			"Points, tampons, bon promotionnel ou carte prépayée multi-visites : vous choisissez la mécanique, le seuil et la récompense. Vous pouvez les modifier à tout moment, sans réimprimer quoi que ce soit.",
	},
	{
		icon: <UsersIcon />,
		title: "Une visibilité au-delà de vos habitués",
		description:
			"Votre programme apparaît dans le catalogue de la plateforme, consultable par tous les membres. Un client qui découvre le réseau chez un confrère découvre aussi votre enseigne.",
	},
	{
		icon: <TrendingUpIcon />,
		title: "Vous mesurez ce que ça rapporte",
		description:
			"Chaque tampon, chaque point et chaque récompense est enregistré. Vous savez combien de clients reviennent, à quelle fréquence, et ce que votre programme vous rapporte réellement.",
	},
];

export function Partners() {
	return (
		<section
			className="surface-invert relative overflow-hidden bg-foreground py-24 text-background md:py-28"
			id="enseignes"
		>
			<div aria-hidden="true" className="absolute inset-0 -z-1">
				<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_75%)]" />
			</div>

			<div className="relative mx-auto max-w-5xl px-4">
				<div className="max-w-2xl" data-animate="heading">
					<span className="font-mono text-[11px] tracking-[0.2em] text-surface-accent uppercase">
						Pour les enseignes
					</span>
					<h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-background md:text-5xl">
						Faites revenir vos clients, sans changer votre caisse
					</h2>
					<p className="mt-5 text-sm leading-relaxed text-background/75 md:text-base">
						Créer un programme de fidélité ne devrait pas demander un
						développement informatique ni un budget publicitaire. Sur Mada
						Privilèges, vous configurez le vôtre et vous l&apos;ouvrez à vos
						clients le jour même.
					</p>
				</div>

				{/*
					Les arguments sont posés dans des cartes, comme les formats et
					les coordonnées : c'est le vocabulaire déjà employé ailleurs sur
					la page. Ils étaient auparavant séparés par des traits dorés qui,
					ajoutés au filet du groupe, chargeaient la zone sans structurer.
				*/}
				<ul className="mt-14 grid gap-4 md:grid-cols-2">
					{benefits.map((benefit) => (
						<li
							className="flex flex-col gap-4 rounded-xl border border-background/15 bg-background/5 p-6 transition-colors hover:border-background/30 hover:bg-background/10"
							data-animate="card"
							key={benefit.title}
						>
							<span className="flex size-10 items-center justify-center rounded-lg bg-background/10 text-surface-accent [&_svg]:size-5 [&_svg]:stroke-[1.5]">
								{benefit.icon}
							</span>
							<h3 className="font-heading text-lg font-semibold tracking-tight text-background">
								{benefit.title}
							</h3>
							<p className="text-sm leading-relaxed text-background/70">
								{benefit.description}
							</p>
						</li>
					))}
				</ul>

				<div
					className="mt-12 flex flex-col items-start gap-3"
					data-animate="block"
				>
					<Button
						nativeButton={false}
						render={<a href={platformLinks.partnerRegister} />}
						size="lg"
						variant="secondary"
					>
						{platformLabels.partnerRegister}
						<ArrowRightIcon data-icon="inline-end" />
					</Button>
					<p className="max-w-md text-xs leading-relaxed text-background/60">
						Création du programme en autonomie. Notre équipe à Antananarivo
						vous accompagne si vous le souhaitez.
					</p>
				</div>
			</div>
		</section>
	);
}
