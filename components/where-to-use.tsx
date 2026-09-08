import { sectors } from "@/lib/sectors";

/**
 * « Où l'utiliser » — mise en page reprise du cahier des charges, contenu lu
 * dans lib/sectors.ts. La grille se remplit ligne par ligne : l'ordre de la
 * liste détermine donc la répartition gauche/droite. Ne pas la trier ici sans
 * vérifier le rendu à deux colonnes.
 */
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
					Pas de filet supérieur ici : porté par le `ul`, il traverserait
					la gouttière entre les deux colonnes alors que les filets de
					lignes s'arrêtent à chaque colonne.
				*/}
				<ul className="mt-12 grid grid-cols-1 gap-x-14 md:grid-cols-2">
					{sectors.map((sector) => (
						<li
							className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-baseline sm:gap-5"
							data-animate="row"
							key={sector.name}
						>
							{/*
								10,5 rem plutôt que les 8,5 de la maquette : les noms
								de secteurs retenus sont plus longs (« Loisirs &
								Divertissements ») et se cassaient sur deux lignes.
							*/}
							<h3 className="font-heading text-base font-semibold tracking-tight text-foreground sm:w-42 sm:shrink-0">
								{sector.name}
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{sector.detail}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
