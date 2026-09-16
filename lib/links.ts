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
 * Par défaut elles s'ouvrent dans le même onglet : le visiteur part y
 * accomplir une action, il n'a pas à revenir en arrière.
 *
 * Exception, demandée le 16 septembre 2026 : `register`, `login` et
 * `partnerRegister` ouvrent systématiquement un nouvel onglet, partout où ils
 * apparaissent (navbar, accroche, rubrique membres, rubrique Enseignes, FAQ,
 * pied de page) — le site vitrine reste ouvert derrière le visiteur, qui peut
 * y revenir sans tout recharger. C'est la mesure la plus large qui a fini par
 * s'imposer : ce qui n'était d'abord qu'un bouton précis (la navbar), puis
 * une rubrique (Enseignes), s'est étendu de proche en proche à ces trois
 * liens partout où ils se trouvent — inutile de la restreindre à nouveau au
 * prochain ajout d'un de ces trois boutons ailleurs sur le site.
 *
 * `programs` n'a pas cette exception : voir les programmes n'est pas une
 * action qui engage, rien ne justifie d'y garder le site vitrine ouvert.
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
