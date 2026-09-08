/**
 * Constantes et types du formulaire de contact (cahier de contenu, § 6).
 *
 * Séparés de l'action serveur : un fichier « use server » ne peut exporter que
 * des fonctions asynchrones, or le client a besoin des listes et de l'état
 * initial.
 */

/** Profils proposés (§ 6.1). */
export const PROFILES = [
	"Un particulier",
	"Un commerçant ou une entreprise",
	"Autre",
] as const;

/** Objets de la demande (§ 6.1). */
export const SUBJECTS = [
	"Question sur le programme",
	"Inscrire mon enseigne",
	"Support technique",
	"Presse et partenariats",
	"Autre",
] as const;

export type ContactFields = {
	nom: string;
	email: string;
	telephone: string;
	profil: string;
	objet: string;
	message: string;
	consentement: boolean;
};

export type ContactState = {
	status: "idle" | "sent" | "error";
	message: string;
	/** Champs en faute, pour un rendu au bon endroit. */
	errors?: Partial<
		Record<"nom" | "email" | "profil" | "objet" | "message" | "consentement", string>
	>;
	/**
	 * Ce que le visiteur avait saisi, renvoyé tel quel en cas d'échec.
	 * React 19 réinitialise un formulaire non contrôlé dès que l'action rend
	 * la main : sans ce renvoi, une erreur de validation effacerait la saisie.
	 */
	values?: ContactFields;
	/**
	 * Lien `mailto:` pré-rempli, renvoyé quand l'envoi n'aboutit pas. Le
	 * visiteur peut alors transmettre sa demande lui-même plutôt que de perdre
	 * ce qu'il vient d'écrire (§ 6.2).
	 */
	fallback?: string;
};

export const INITIAL_CONTACT_STATE: ContactState = {
	status: "idle",
	message: "",
};

/** Confirmation affichée en place du formulaire (§ 6.2), reprise mot pour mot. */
export const SUCCESS_MESSAGE =
	"Merci, votre message est parti. Nous vous répondons sous 48 heures ouvrées.";
