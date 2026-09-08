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
 * Elles s'ouvrent dans le même onglet : le visiteur part y accomplir une
 * action, il n'a pas à revenir en arrière. Donc pas de `target="_blank"`.
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

/** Site vitrine — pages annexes. */
export const legalLinks = {
	mentions: "/mentions-legales",
	privacy: "/confidentialite",
	terms: "/conditions",
} as const;

/** Adresse de contact du site vitrine (cahier de contenu, § 5.10). */
export const CONTACT_EMAIL = "contact@madaprivileges.com";

/** URL canonique du site vitrine. */
export const SITE_URL = "https://madaprivileges.com";
