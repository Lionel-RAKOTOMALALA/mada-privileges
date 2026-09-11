import { Button } from "@/components/ui/button";
import { platformLabels, platformLinks } from "@/lib/links";
import {
	ArrowRightIcon,
	CreditCardIcon,
	StampIcon,
	TicketPercentIcon,
	WalletCardsIcon,
} from "lucide-react";

/** « Les quatre formats de cartes » (cahier de contenu, § 5.6). */
const formats = [
	{
		icon: <CreditCardIcon />,
		name: "Carte de fidélité",
		principle:
			"Chaque achat rapporte des points, échangeables contre une récompense définie par le commerçant.",
		example:
			"Une agence de location de voitures qui crédite des points à chaque location.",
	},
	{
		icon: <StampIcon />,
		name: "Carte à tampons",
		principle:
			"Un tampon par passage. Au seuil atteint, la récompense est due.",
		example:
			"La Carte Beauté Amazones : un tampon par séance, et un soin bien-être offert à la dixième, dans l'institut de votre choix.",
	},
	{
		icon: <TicketPercentIcon />,
		name: "Bon",
		principle:
			"Une offre ponctuelle, à faire valoir chez le partenaire pendant sa durée de validité.",
		example: "Une remise de lancement sur une nouvelle prestation.",
	},
	{
		icon: <WalletCardsIcon />,
		name: "Carte multi-visites prépayée",
		principle:
			"Plusieurs prestations réglées à l'avance, à un tarif préférentiel.",
		example:
			"Un forfait de dix séances acheté en une fois et consommé au fil des visites.",
	},
];

export function CardFormats() {
	return (
		<section className="relative bg-muted/40 py-24 md:py-28" id="formats">
			<div className="mx-auto max-w-5xl px-4">
				<div className="max-w-2xl" data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
						Quatre façons de récompenser la fidélité
					</h2>
					<p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
						Chaque commerçant choisit le format qui correspond à son
						activité. En tant que membre, vous les retrouvez tous dans le
						même portefeuille.
					</p>
				</div>

				<ul className="mt-12 grid gap-4 md:grid-cols-2">
					{formats.map((format) => (
						<li
							className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
							data-animate="card"
							key={format.name}
						>
							<span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground [&_svg]:size-5 [&_svg]:stroke-1">
								{format.icon}
							</span>
							<h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
								{format.name}
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{format.principle}
							</p>
							{/* L'exemple est cité, pas confondu avec le principe. */}
							<p className="mt-auto border-l-2 border-surface-accent pl-3 text-sm leading-relaxed text-muted-foreground italic">
								{format.example}
							</p>
						</li>
					))}
				</ul>

				<div className="mt-10" data-animate="block">
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
			</div>
		</section>
	);
}
