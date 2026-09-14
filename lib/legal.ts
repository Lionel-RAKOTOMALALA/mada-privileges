/**
 * Identité de l'éditeur et données juridiques.
 *
 * Source : « Mada Privilèges — Documentation juridique de la plateforme »,
 * version 1.0 du 9 septembre 2026, EDS Group. Source unique pour les trois
 * pages annexes et la rubrique Contact : ces informations ne sont recopiées
 * nulle part ailleurs, pour qu'une correction se fasse en un seul endroit.
 *
 * Le document porte le statut « Projet de publication, à compléter et à faire
 * relire avant mise en ligne ». Les pages publient le texte fourni sans jamais
 * combler les trous d'elles-mêmes : là où une information manque, elles le
 * disent à la place du lecteur plutôt que d'inventer une formule.
 *
 * Le tableau de l'éditeur est complet depuis le 14 septembre 2026 — forme
 * juridique et capital social ont été fournis. Il ne reste à obtenir que la
 * raison sociale de l'hébergeur (cf. `HOST`).
 *
 * Ce qui reste à trancher se suit dans l'annexe du document source, pas sur le
 * site : l'encadré de statut qui la recopiait a été retiré, c'étaient des
 * consignes internes et non du texte à publier.
 */

/**
 * Espace insécable, construit en code plutôt que frappé au clavier.
 *
 * Un U+00A0 littéral est invisible en relecture et redevient un espace
 * ordinaire à la première réécriture de la ligne — ce qui s'est produit ici
 * avant qu'on ne passe par cette constante.
 */
const NB = String.fromCharCode(160);

export const EDITOR = {
	name: "EDS GROUP",
	/** Mentions légales, « Éditeur du site ». */
	quality:
		"cabinet de conseil et d'ingénierie numérique de droit malgache, propriétaire de la marque Mada Privilèges",
	/** Société à responsabilité limitée unipersonnelle. Fourni le 14 septembre 2026. */
	legalForm: "SARLU",
	/*
	 * Montant en ariary, séparateurs en espaces insécables : dans la colonne
	 * étroite du tableau sur téléphone, une coupure entre deux groupes de
	 * chiffres donnerait à lire deux nombres au lieu d'un.
	 */
	capital: `5${NB}000${NB}000${NB}Ar`,
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
 * répète la mention pour chacun des deux, à l'identique. Les mentions légales
 * les réunissent en une phrase : répétée telle quelle, elle passait pour une
 * erreur de copie.
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
 * contact » : elle est publiée en attendant que la boîte soit ouverte.
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

