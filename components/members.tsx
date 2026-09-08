import { Button } from "@/components/ui/button";
import { platformLabels, platformLinks } from "@/lib/links";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

/** « Pour les membres » (cahier de contenu, § 5.4). */
const steps = [
	{
		number: "01",
		title: "Créez votre compte",
		description:
			"Une adresse e-mail, un mot de passe, moins d'une minute. Rien à installer, rien à payer.",
	},
	{
		number: "02",
		// Le sens du scan est celui du produit réel : c'est le membre qui
		// scanne le QR code du commerçant, et non l'inverse.
		title: "Scannez le QR code du commerçant",
		description:
			"Chez le partenaire, au moment de payer. Sa carte s'ajoute aussitôt à votre portefeuille. Vous n'avez rien à saisir.",
	},
	{
		number: "03",
		title: "Cumulez, puis profitez",
		description:
			"Points, tampons ou visites selon le programme. Vous suivez votre progression en temps réel et vous savez toujours ce qu'il vous reste à faire avant la récompense.",
	},
];

const arguments_ = [
	"Gratuit, sans engagement, sans abonnement.",
	"Aucune application à installer : tout se passe dans le navigateur.",
	"Vos cartes restent affichées même hors connexion.",
	"Interface en français et en anglais.",
];

export function Members() {
	return (
		<section className="relative py-24 md:py-28" id="membres">
			<div className="mx-auto max-w-5xl px-4">
				<div className="max-w-2xl" data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
						Trois gestes, et vous êtes récompensé
					</h2>
				</div>

				{/*
					Retrait symétrique de part et d'autre du filet : chaque cellule
					n'avait qu'un padding à droite, donc les colonnes 2 et 3 avaient
					leur texte collé au filet qui les précède. Les bords extérieurs
					restent alignés sur le titre — d'où `first:pl-0` et `last:pr-0`.
				*/}
				<ol className="mt-12 grid gap-px border-t border-border md:grid-cols-3">
					{steps.map((step) => (
						<li
							className="flex flex-col gap-3 border-b border-border py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
							data-animate="card"
							key={step.number}
						>
							<span className="font-heading text-2xl font-semibold text-muted-foreground italic">
								{step.number}
							</span>
							<h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
								{step.title}
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{step.description}
							</p>
						</li>
					))}
				</ol>

				<ul
					className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2"
					data-animate="block"
				>
					{arguments_.map((argument) => (
						<li
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
							key={argument}
						>
							<CheckIcon className="mt-0.5 size-4 shrink-0 text-surface-accent" />
							{argument}
						</li>
					))}
				</ul>

				<div className="mt-10" data-animate="block">
					<Button
						nativeButton={false}
						render={<a href={platformLinks.register} />}
						size="lg"
					>
						{platformLabels.register}
						<ArrowRightIcon data-icon="inline-end" />
					</Button>
				</div>
			</div>
		</section>
	);
}
