/**
 * Liens sortants vers la plateforme (cahier de contenu, § 4).
 *
 * Deux domaines, deux produits : madaprivileges.com est le site vitrine,
 * madaprivileges.mg la plateforme applicative. Toute action réelle — créer un
 * compte, se connecter, inscrire une enseigne — se passe sur le .mg.
 *
 * Ces URL restent en .mg, jamais réécrites en .com « pour l'homogénéité » :
 * elles pointent vers l'application, qui n'a pas vocation à migrer. Aucune
 * redirection entre les deux domaines.
 *
 * Elles s'ouvrent toutes dans un nouvel onglet : le site vitrine reste ouvert
 * derrière le visiteur, qui peut y revenir sans tout recharger — demandé le
 * 16 septembre 2026, d'abord pour un bouton précis (la navbar), puis étendu
 * de proche en proche à chacun de ces liens, partout où il apparaît.
 *
 * D'où la règle pour tout nouvel emplacement de `register`, `login`,
 * `partnerRegister` ou `programs` : `target="_blank"` et
 * `rel="noopener noreferrer"` sur l'ancre, sans exception à re-décider —
 * l'exception, ici, s'est déjà généralisée à la règle.
 */
const PLATFORM = "https://madaprivileges.mg";

/** Locale servie par défaut ; /en-us le jour où le site aura sa version anglaise. */
const LOCALE = "fr-fr";

export const platformLinks = {
	/** Navigation, accroche, rubrique membres, FAQ. */
	register: `${PLATFORM}/${LOCALE}/register`,
	/** Navigation. */
	login: `${PLATFORM}/${LOCALE}/login`,
	/** Accroche, rubrique enseignes, pied de page. */
	partnerRegister: `${PLATFORM}/${LOCALE}/partner/register`,
	/** Rubrique formats, rubrique secteurs. */
	programs: `${PLATFORM}/${LOCALE}`,
} as const;

export const platformLabels = {
	register: "Commencer gratuitement",
	login: "Se connecter",
	partnerRegister: "Inscrire mon enseigne",
	programs: "Voir les programmes disponibles",
} as const;

/**
 * Réseaux sociaux.
 *
 * Le § 5.11 ne les réintègre qu'une fois les comptes réellement ouverts : ne
 * rien ajouter ici tant qu'un compte n'existe pas. X/Twitter reste donc
 * absent — seul Instagram est ouvert à ce jour.
 */
export const socialLinks = {
	instagram: "https://www.instagram.com/madaprivileges/",
} as const;

/** Site vitrine — pages annexes. */
export const legalLinks = {
	mentions: "/mentions-legales",
	privacy: "/confidentialite",
	terms: "/conditions",
} as const;

/**
 * Plaquette de présentation, servie depuis `public/`.
 *
 * Elle paraît à deux moments, et les deux comptent : en repli du bouton
 * d'inscription pour l'enseigne qui hésite encore, puis en clair sur la page
 * de remerciement, où le prospect vient de se qualifier.
 *
 * `label` porte le poids et le format : un lien de téléchargement qui ne dit
 * pas ce qu'il va coûter se clique mal sur une connexion mobile. À corriger si
 * le fichier est remplacé.
 */
export const BROCHURE = {
	href: "/plaquette-mada-privileges-2026.pdf",
	/** Nom du fichier tel qu'il arrivera dans les téléchargements du visiteur. */
	download: "Plaquette Mada Privileges 2026.pdf",
	label: "Télécharger la plaquette",
	meta: "PDF · 4 pages · 600 Ko",
} as const;

/** Adresse de contact du site vitrine (cahier de contenu, § 5.10). */
export const CONTACT_EMAIL = "contact@madaprivileges.com";

/** URL canonique du site vitrine. */
export const SITE_URL = "https://madaprivileges.com";
