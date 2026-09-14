/**
 * Taxonomie des secteurs — source unique de vérité.
 *
 * Trois endroits du site listaient des secteurs et divergeaient : la bande
 * défilante, la grille de pastilles et « Où l'utiliser ». Ils lisent tous
 * cette liste désormais ; ne pas réintroduire de liste locale.
 *
 * Provenance des libellés :
 *  - les noms suivent la nomenclature fournie par le client ;
 *  - « Restauration » et « Hôtellerie » n'y figuraient pas alors qu'ils sont
 *    au cœur du programme (cf. doc/context.md et le cahier des charges, dont
 *    l'accroche cite « restaurants, hôtels, cliniques, écoles ») : conservés ;
 *  - les descriptions marquées ci-dessous viennent mot pour mot du cahier des
 *    charges ; les quatre autres sont des propositions, à valider.
 */

/**
 * Identifiant d'un secteur. Il nomme aussi son illustration, servie depuis
 * `public/sectors/<slug>.jpg` — un seul nom pour la donnée et le fichier,
 * plutôt qu'un chemin recopié douze fois.
 *
 * L'union rend la liste close : ajouter un secteur sans déposer l'image
 * correspondante ne compile pas, au lieu de laisser un trou dans la grille.
 *
 * Provenance des photographies. Deux origines depuis le remplacement du
 * 14 septembre 2026 — ne pas recréditer en bloc.
 *
 * Fournies par le client, provenance et droits à confirmer avant mise en
 * ligne : le site est commercial, une image reprise sans licence y engage
 * l'éditeur.
 *
 *  hotellerie    · maison · sante · services
 *
 * Unsplash, licence libre d'usage commercial sans obligation d'attribution.
 * Les auteurs sont cités si l'on souhaite tout de même les mentionner, et les
 * sources permettent de retrouver l'original — ces huit-là restent des images
 * génériques, à remplacer par des prises de vue malgaches le jour venu.
 *
 *  restauration  Jordan González          unsplash.com/photos/TpDMcAwWGaU
 *  beaute        Brooke Cagle             unsplash.com/photos/cFm3sVTnV9M
 *  formation     Nathan Cima              unsplash.com/photos/zXgVSgnfjSs
 *  automobile    Kato Blackmore           unsplash.com/photos/M7Jf2VvXWlM
 *  loisirs       Curated Lifestyle        unsplash.com/photos/qZ5lPCPvdXE
 *  mode          Clark Street Mercantile  unsplash.com/photos/P3pI6xzovu0
 *  commerces     Gemma C                  unsplash.com/photos/OFgmFGm7tqk
 *  finance       Planet Volumes           unsplash.com/photos/lSc6TfvNFo8
 */
export type SectorSlug =
	| "restauration"
	| "hotellerie"
	| "sante"
	| "beaute"
	| "formation"
	| "automobile"
	| "maison"
	| "loisirs"
	| "mode"
	| "commerces"
	| "finance"
	| "services";

export type Sector = {
	slug: SectorSlug;
	name: string;
	/** Sous-libellé affiché dans « Où l'utiliser ». */
	detail: string;
};

export const sectors: Sector[] = [
	// — descriptions issues du cahier des charges —
	{
		slug: "restauration",
		name: "Restauration",
		detail: "Restaurants, cafés, traiteurs, livraison",
	},
	{
		slug: "hotellerie",
		name: "Hôtellerie",
		detail: "Hôtels, lodges, locations de vacances",
	},
	{
		slug: "sante",
		name: "Santé",
		detail: "Cliniques, laboratoires, pharmacies, optique",
	},
	{
		slug: "beaute",
		name: "Beauté & Bien-être",
		detail: "Salons, spas, instituts, produits de soin",
	},
	{
		slug: "formation",
		name: "Formation & Éducation",
		detail: "Écoles privées, cours du soir, centres de formation",
	},
	{
		slug: "automobile",
		name: "Automobile",
		detail: "Location de voitures, garages, transferts aéroport",
	},
	{
		slug: "maison",
		name: "Maison & Déco",
		detail: "Ameublement, électroménager, matériaux, jardinage",
	},
	{
		slug: "loisirs",
		name: "Loisirs & Divertissements",
		detail: "Excursions, salles de sport, cinéma, culture",
	},

	// — descriptions à valider : ces secteurs n'existaient nulle part —
	{
		slug: "mode",
		name: "Mode",
		detail: "Prêt-à-porter, chaussures, accessoires, maroquinerie",
	},
	{
		slug: "commerces",
		name: "Commerces & Boutiques",
		detail: "Épiceries, supérettes, cadeaux, artisanat",
	},
	{
		slug: "finance",
		name: "Services Financiers",
		detail: "Banques, assurances, microfinance, transfert d'argent",
	},
	{
		slug: "services",
		name: "Services",
		detail: "Imprimerie, nettoyage, réparation, conseil",
	},
];
