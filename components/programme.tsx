import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";

/**
 * « Le programme » (cahier de contenu, § 5.3).
 *
 * Point de vigilance rédactionnelle du cahier : ne jamais laisser entendre que
 * les points sont communs à toutes les enseignes. Chaque programme est
 * indépendant — c'est la question la plus posée, et elle est reprise
 * explicitement dans la FAQ.
 */
export function Programme() {
	return (
		<section className="relative bg-muted/40 py-24 md:py-28" id="programme">
			<div className="mx-auto max-w-5xl px-4">
				<div className="max-w-2xl" data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
						Le carnet de tampons de votre commerçant, en mieux
					</h2>
				</div>

				<div className="relative mt-12">
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
					<FullWidthDivider className="-top-px" contained />
					<FullWidthDivider className="-bottom-px" contained />

					{/*
						Textes resserrés par rapport au § 5.3, à faire valider : les
						trois paragraphes d'origine étaient trop longs à l'écran. Le
						troisième reprenait en outre mot pour mot les arguments de la
						rubrique « Pour les membres » (gratuit, pas d'application,
						hors connexion) ; il porte désormais la règle du § 1, qui
						n'apparaissait nulle part ailleurs que dans la FAQ.
					*/}
					<div className="grid gap-10 py-10 md:grid-cols-3 md:gap-8">
						<p
							className="text-sm leading-relaxed text-muted-foreground md:text-base"
							data-animate="card"
						>
							La carte cartonnée qu&apos;on tamponne à chaque passage, et
							qu&apos;on finit par perdre. Mada Privilèges fait la même
							chose, en numérique.
						</p>
						<p
							className="text-sm leading-relaxed text-muted-foreground md:text-base"
							data-animate="card"
						>
							Chaque commerçant crée son propre programme et choisit sa
							mécanique : points, tampons, bon ou séances prépayées.
						</p>
						<p
							className="text-sm leading-relaxed text-muted-foreground md:text-base"
							data-animate="card"
						>
							Vous récupérez ses cartes en scannant son QR code. Chaque
							carte progresse indépendamment, chez le commerçant qui
							l&apos;a émise.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
