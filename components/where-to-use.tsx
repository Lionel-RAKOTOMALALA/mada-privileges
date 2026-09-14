import {
	Bed,
	Car,
	GraduationCap,
	Landmark,
	type LucideIcon,
	Scissors,
	Shirt,
	Sofa,
	Stethoscope,
	Store,
	Ticket,
	Utensils,
	Wrench,
} from "lucide-react";
import Image from "next/image";
import { type SectorSlug, sectors } from "@/lib/sectors";

/**
 * « Où l'utiliser » — contenu lu dans lib/sectors.ts.
 *
 * La liste à deux colonnes du cahier des charges était juste mais aride :
 * douze lignes de texte à la file, que l'œil ne parcourait plus. Chaque
 * secteur porte donc son illustration, et la grille passe en cartes.
 *
 * La grille se remplit ligne par ligne : l'ordre de la liste détermine la
 * répartition. Ne pas la trier ici sans vérifier le rendu à trois colonnes.
 */

/**
 * Pictogrammes, en médaillon à cheval sur le bandeau.
 *
 * Ils ne redisent pas la photographie : ils la rattachent au site. Douze
 * cartes de photo et de texte, sans une once d'ocre, pourraient appartenir à
 * n'importe quelle marque — c'est le médaillon qui pose l'accent de la charte
 * et reprend la pastille d'icône de « Quatre façons de récompenser ».
 *
 * Le `Record` typé sur l'union des secteurs rend la table exhaustive : un
 * secteur ajouté sans pictogramme ne compile pas.
 */
const ICONS: Record<SectorSlug, LucideIcon> = {
	restauration: Utensils,
	hotellerie: Bed,
	sante: Stethoscope,
	beaute: Scissors,
	formation: GraduationCap,
	automobile: Car,
	maison: Sofa,
	loisirs: Ticket,
	mode: Shirt,
	commerces: Store,
	finance: Landmark,
	services: Wrench,
};

/**
 * Harmonisation des photographies.
 *
 * Douze photographies de douze auteurs différents arrivent avec douze
 * colorimétries, alors que la charte demande expressément de « ne pas
 * introduire de couleur hors de cette gamme ». Les publier telles quelles
 * ferait de cette section une mosaïque étrangère au reste du site — le rayon
 * de fruits, à lui seul, apporte plus de teintes que toute la charte.
 *
 * D'où ce traitement commun, qui n'est pas un effet mais une mise au ton :
 * saturation abaissée, puis voile navy posé par-dessus. Les photos restent
 * lisibles, leur dominante se rapproche, et l'ensemble se lit comme une
 * série. Le voile s'allège en thème sombre, où il alourdirait l'image.
 */
const VEIL =
	"pointer-events-none absolute inset-0 bg-brand-navy/20 dark:bg-brand-navy/10";

/*
 * Bandeau en 16/10 et non au format des fichiers (4/3) : douze cartes en
 * pleine hauteur d'image feraient de cette section le plus long morceau de
 * la page, alors qu'elle ne fait qu'énumérer. Le recadrage se fait au rendu,
 * les originaux restent entiers.
 *
 * Le zoom au survol reste discret — 4 %, sur une demi-seconde : la carte
 * n'est pas cliquable, le mouvement anime la grille sans promettre un lien
 * qui n'existe pas. `motion-reduce` le neutralise entièrement plutôt que de
 * le laisser sauter d'un coup, comme ailleurs sur le site.
 */
const PICTURE = [
	"aspect-[16/10] w-full object-cover saturate-[0.85]",
	"transition-transform duration-500 ease-out group-hover:scale-[1.04]",
	"motion-reduce:transition-none motion-reduce:group-hover:scale-100",
].join(" ");

/*
 * Médaillon. Opaque — il se détache sur la photographie — et cerné du même
 * filet que la carte, le site n'ayant aucune ombre portée.
 */
const BADGE = [
	"absolute -top-5 left-5 flex size-10 items-center justify-center",
	"rounded-lg border border-border bg-card text-surface-accent",
	"[&_svg]:size-5 [&_svg]:stroke-1",
].join(" ");

export function WhereToUse() {
	return (
		<section className="relative bg-muted/40 py-24 md:py-28" id="ou-utiliser">
			<div className="mx-auto max-w-5xl px-4">
				<div className="max-w-xl" data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
						Où l&apos;utiliser
					</h2>
					<p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
						Le réseau s&apos;étend à Antananarivo, Toamasina, Nosy Be,
						Mahajanga et Fianarantsoa, et s&apos;enrichit chaque mois.
					</p>
				</div>

				{/*
					Cartes bordées et non images libres : c'est la forme que prennent
					déjà « Quatre façons de récompenser » et la rubrique Contact.
					L'image y entre comme bandeau plutôt que de flotter au-dessus
					d'un texte sans attache.
				*/}
				<ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{sectors.map((sector) => {
						const Icon = ICONS[sector.slug];

						return (
							<li
								className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-surface-accent/50"
								data-animate="card"
								key={sector.slug}
							>
								{/*
									`bg-muted` sous l'image : la section est loin du haut
									de page, les douze fichiers se chargent donc en différé
									et la carte doit tenir sa place en attendant, sans
									clignoter en blanc.

									`overflow-hidden` ici et pas seulement sur la carte :
									l'image agrandie au survol déborderait sinon par-dessus
									le filet et mordrait sur le texte.
								*/}
								<div className="relative overflow-hidden border-b border-border bg-muted">
									<Image
										// Décorative : le nom du secteur et son détail
										// suivent immédiatement, en toutes lettres. Les
										// décrire une seconde fois ne ferait qu'allonger
										// la lecture d'un lecteur d'écran.
										alt=""
										className={PICTURE}
										height={660}
										sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 92vw"
										src={`/sectors/${sector.slug}.jpg`}
										width={880}
									/>
									<span aria-hidden="true" className={VEIL} />
								</div>
								{/*
									`pt-7` et non `p-5` : le médaillon remonte de 20 px
									sur le bandeau, il faut lui laisser retomber sa moitié
									basse avant que le titre ne commence.
								*/}
								<div className="relative flex flex-col gap-2 px-5 pt-7 pb-5">
									<span aria-hidden="true" className={BADGE}>
										<Icon />
									</span>
									<h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
										{sector.name}
									</h3>
									<p className="text-sm leading-relaxed text-muted-foreground">
										{sector.detail}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
