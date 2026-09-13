import type React from "react";
import { cn } from "@/lib/utils";

/**
 * Le nom de la marque, en toutes lettres.
 *
 * Pendant textuel de `logo.tsx` : celui-ci trace le logotype, celui-là écrit
 * le nom dans le corps du texte. Même règle que pour l'éditeur — le nom est
 * toujours en gras — et même raison de la loger dans un composant : une règle
 * qui vaut « toujours » ne survit pas à des `<strong>` recopiés.
 *
 * Voir `components/eds-group.tsx`, qui fait le même travail pour EDS Group.
 * La marque appartient à l'un, elle est éditée par l'autre, et les pages
 * annexes les nomment souvent dans la même phrase.
 */

/**
 * La couleur n'est pas figée : le nom paraît sur le fond clair des pages
 * annexes comme sur l'accroche inversée de l'accueil, et un ton codé en dur y
 * serait illisible une fois sur deux. Par défaut il passe au ton plein du
 * texte, un cran au-dessus du gris qui l'entoure ; `className` laisse la
 * surface d'accueil en décider autrement.
 */
export function MP({ className }: { className?: string }) {
	return (
		<strong className={cn("font-semibold text-foreground", className)}>
			Mada Privilèges
		</strong>
	);
}

/**
 * Détache le nom dans une chaîne venue d'un module de données.
 *
 * Tout le texte affiché n'est pas écrit en JSX : la qualité de l'éditeur vient
 * de `lib/legal.ts`, les réponses de la FAQ d'un tableau de chaînes. Les
 * recopier en JSX romprait la source unique dans un cas, alourdirait la
 * donnée dans l'autre — le nom est donc détaché au moment de l'affichage, ce
 * qui couvre aussi les textes que ces modules gagneront plus tard.
 */
export function highlightMP(text: string): React.ReactNode[] {
	return text
		.split("Mada Privilèges")
		.flatMap((part, index) =>
			index === 0 ? [part] : [<MP key={index} />, part],
		);
}
