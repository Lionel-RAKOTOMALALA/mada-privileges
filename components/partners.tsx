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
					Pas de cartes ici. La page en compte déjà là où elles disent
					quelque chose — le portefeuille du hero et les quatre formats
					montrent des cartes de fidélité, le bloc contact reprend un
					traitement demandé. Quatre arguments de vente n'en sont pas :
					ils sont tenus par la pastille dorée et l'écart, pas par une
					boîte. Pastille ronde et cerclée, pour ne pas répéter non plus
					le carré plein des cartes.
				*/}
				<ul className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
					{benefits.map((benefit) => (
						<li
							className="flex gap-5"
							data-animate="card"
							key={benefit.title}
						>
							<span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full border border-surface-accent/40 text-surface-accent [&_svg]:size-5 [&_svg]:stroke-[1.5]">
								{benefit.icon}
							</span>
							<div className="min-w-0">
								<h3 className="font-heading text-lg font-semibold tracking-tight text-background">
									{benefit.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-background/70">
									{benefit.description}
								</p>
							</div>
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
