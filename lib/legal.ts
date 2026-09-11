/**
 * Identité de l'éditeur et données juridiques.
 *
 * Source : « Mada Privilèges — Documentation juridique de la plateforme »,
 * version 1.0 du 9 septembre 2026, EDS Group. Source unique pour les trois
 * pages annexes et la rubrique Contact : ces informations ne sont recopiées
 * nulle part ailleurs, pour qu'une correction se fasse en un seul endroit.
 *
 * Le document porte le statut « Projet de publication, à compléter et à faire
 * relire avant mise en ligne ». Les pages l'assument : elles publient le texte
 * fourni et signalent ce qui manque, plutôt que de combler les trous.
 */

export const EDITOR = {
	name: "EDS GROUP",
	/** Mentions légales, « Éditeur du site ». */
	quality:
		"cabinet de conseil et d'ingénierie numérique de droit malgache, propriétaire de la marque Mada Privilèges",
	address: "Lot II M 92 Antsakaviro-Ambodirotra, Antananarivo, Madagascar",
	city: "Antananarivo",
	rcs: "2025B101473",
	nif: "5019494748",
	stat: "70202 11 2025 0 11502",
	publicationDirector: "Fetra RAVALISON",
} as const;

/**
 * Quatre lignes consécutives. Un lien `tel:` ne peut en viser qu'une : c'est
 * la première, les trois autres restent affichées comme dans le document.
 */
export const PHONE = {
	primary: "+261 3 50 101 010",
	/** Forme composable pour `href="tel:"` — sans espaces ni séparateurs. */
	primaryHref: "+261350101010",
	display: "+261 3 50 101 010 / 011 / 012 / 013",
	hours: "Du lundi au vendredi, 8h – 17h.",
} as const;

/**
 * Le même prestataire héberge le site vitrine et la plateforme — le document
 * répète la mention pour chacun des deux, à l'identique.
 *
 * `name` est un nom de domaine et non une raison sociale : c'est ce que le
 * document fournit, et l'annexe réclame précisément la raison sociale.
 */
export const HOST = {
	name: "www.madagascar-internet.mg",
	address:
		"Rue Massignon, Lot IVE 110 E Ankorondrano Est, Antananarivo, 101, Madagascar",
} as const;

/**
 * Adresse dédiée aux demandes relatives aux données personnelles.
 *
 * L'annexe la donne comme « à créer, ou à faire pointer vers l'adresse de
 * contact » : elle est donc publiée, mais reste listée dans `PENDING.privacy`
 * tant que la boîte n'existe pas.
 */
export const PRIVACY_EMAIL = "confidentialite@madaprivileges.com";

/** Autorité de contrôle malgache, saisissable par les personnes concernées. */
export const AUTHORITY = {
	name: "Commission Malagasy de l'Informatique et des Libertés",
	short: "CMIL",
} as const;

/** Textes de référence cités au chapitre « Droit applicable ». */
export const REFERENCE_LAWS = [
	"loi n° 2014-038 du 9 janvier 2015 sur la protection des données à caractère personnel",
	"loi n° 2014-006 du 17 juillet 2014 sur la lutte contre la cybercriminalité",
	"loi n° 2014-024 sur les transactions électroniques",
	"loi n° 2014-025 sur la signature électronique",
] as const;

export const LAST_UPDATED = "10 septembre 2026";
export const DOC_VERSION = "1.0 du 9 septembre 2026";

/**
 * Ce qu'EDS doit encore fournir, repris de l'annexe « À compléter avant
 * publication ». Les éléments que le document livre déjà n'y figurent plus :
 * il ne reste ici que ce qui manque réellement.
 *
 * Tant que ces listes ne sont pas vides, les pages affichent leur encadré de
 * statut — et l'annexe demande de ne pas ouvrir le formulaire de contact au
 * public avant la publication effective des deux premières pages.
 */
export const PENDING = {
	legal: [
		"Forme juridique et capital social d'EDS Group.",
		"Qualité du directeur de la publication : le document en donne le nom, pas la fonction.",
		"Raison sociale de l'hébergeur : le document n'en fournit que le nom de domaine.",
		"Date d'entrée en vigueur du document.",
	],
	privacy: [
		"Identité et pays des prestataires qui hébergent ou traitent des données hors de Madagascar (chapitre 5).",
		"Décision sur l'activation d'un outil de mesure d'audience (chapitre 9) : aucun n'est installé à ce jour.",
		"Ouverture effective de la boîte " +
			PRIVACY_EMAIL +
			", ou décision de la faire pointer vers l'adresse de contact.",
		"Vérification auprès de la CMIL de la formalité applicable au titre de la loi 2014-038, avant l'ouverture au public.",
		"Date d'entrée en vigueur du document.",
	],
	terms: [
		"Confirmation des durées et délais signalés dans le texte, par un juriste malgache.",
		"Relecture des articles 10, 24 et 25 en particulier, que l'annexe désigne nommément.",
		"Date d'entrée en vigueur du document.",
	],
} as const;
