import Image from "next/image";
import { EDITOR } from "@/lib/legal";
import { cn } from "@/lib/utils";

/**
 * Identité de l'éditeur — raison sociale et logotype.
 *
 * EDS Group édite Mada Privilèges sans être Mada Privilèges : le nom revient
 * une quarantaine de fois dans les pages annexes, et à chaque fois il désigne
 * la personne morale qui répond de l'engagement énoncé. C'est elle qu'un
 * lecteur cherche du regard quand il parcourt une clause, d'où la règle : le
 * nom est toujours en gras.
 *
 * Une règle qui vaut « toujours » tient dans un composant, pas dans des
 * `<strong>` recopiés — quarante occurrences écrites à la main finissent
 * toujours par diverger.
 */

/**
 * La raison sociale.
 *
 * Deux graphies coexistent, et ce n'est pas une négligence : le texte courant
 * dit « EDS Group », tandis que les trois passages qui identifient l'éditeur
 * au sens de la loi reprennent la raison sociale telle qu'immatriculée, en
 * capitales — `formal` sert à celles-là, et va la chercher dans `lib/legal.ts`
 * pour qu'elle reste identique partout.
 *
 * La couleur, elle, n'est pas figée : le nom paraît aussi bien dans le corps
 * de texte gris des pages annexes que sur le pied de page inversé, et un ton
 * codé en dur y serait illisible une fois sur deux. Par défaut il passe au ton
 * plein du texte, un cran au-dessus du gris qui l'entoure ; `className` laisse
 * la surface d'accueil en décider autrement.
 */
export function EDS({
	className,
	formal = false,
}: {
	className?: string;
	formal?: boolean;
}) {
	return (
		<strong className={cn("font-semibold text-foreground", className)}>
			{formal ? EDITOR.name : "EDS Group"}
		</strong>
	);
}

/**
 * Le logotype.
 *
 * Le fichier fourni est un JPEG sur fond blanc : il lui faut sa propre plaque
 * claire, sinon il découpe un rectangle blanc dans le thème sombre. La plaque
 * est donc blanche dans les deux thèmes, cernée d'un filet qui la rattache à
 * la page.
 *
 * Dimensions intrinsèques de l'image, pour que la place lui soit réservée
 * avant son chargement : 1038 × 222.
 */
export function EdsLogo({ className }: { className?: string }) {
	return (
		<span
			className={cn(
				"inline-flex shrink-0 items-center rounded-lg bg-white px-3 py-2 ring-1 ring-border",
				className,
			)}
		>
			<Image
				// Partout où il paraît, le logotype est accompagné du nom en toutes
				// lettres : le redire dans l'alternative le ferait entendre deux fois.
				alt=""
				className="h-6 w-auto md:h-7"
				height={222}
				src="/brand/eds-group.jpg"
				width={1038}
			/>
		</span>
	);
}
