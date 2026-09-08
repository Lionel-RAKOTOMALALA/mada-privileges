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
export type Sector = {
	name: string;
	/** Sous-libellé affiché dans « Où l'utiliser ». */
	detail: string;
	/** Clé d'icône, résolue dans components/integrations.tsx. */
	icon: string;
};

export const sectors: Sector[] = [
	// — descriptions issues du cahier des charges —
	{
		name: "Restauration",
		detail: "Restaurants, cafés, traiteurs, livraison",
		icon: "utensils",
	},
	{
		name: "Hôtellerie",
		detail: "Hôtels, lodges, locations de vacances",
		icon: "bed",
	},
	{
		name: "Santé",
		detail: "Cliniques, laboratoires, pharmacies, optique",
		icon: "stethoscope",
	},
	{
		name: "Beauté & Bien-être",
		detail: "Salons, spas, instituts, produits de soin",
		icon: "scissors",
	},
	{
		name: "Formation & Éducation",
		detail: "Écoles privées, cours du soir, centres de formation",
		icon: "graduation",
	},
	{
		name: "Automobile",
		detail: "Location de voitures, garages, transferts aéroport",
		icon: "car",
	},
	{
		name: "Maison & Déco",
		detail: "Ameublement, électroménager, matériaux, jardinage",
		icon: "sofa",
	},
	{
		name: "Loisirs & Divertissements",
		detail: "Excursions, salles de sport, cinéma, culture",
		icon: "ticket",
	},

	// — descriptions à valider : ces secteurs n'existaient nulle part —
	{
		name: "Mode",
		detail: "Prêt-à-porter, chaussures, accessoires, maroquinerie",
		icon: "shirt",
	},
	{
		name: "Commerces & Boutiques",
		detail: "Épiceries, supérettes, cadeaux, artisanat",
		icon: "store",
	},
	{
		name: "Services Financiers",
		detail: "Banques, assurances, microfinance, transfert d'argent",
		icon: "landmark",
	},
	{
		name: "Services",
		detail: "Imprimerie, nettoyage, réparation, conseil",
		icon: "wrench",
	},
];
