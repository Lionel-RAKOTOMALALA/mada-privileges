"use client";

import { useScrollReveal } from "gsap-animations-lionel";

/**
 * Chef d'orchestre des révélations au défilement. Monté une fois dans la page,
 * il lie tous les `data-animate` du document — les sections restent donc des
 * composants serveur et n'ont qu'un attribut à porter, au lieu de devenir
 * client une par une pour un effet purement visuel.
 *
 * Vocabulaire :
 *   heading  en-tête de section
 *   block    bloc de texte ou de contenu isolé
 *   card     élément d'une grille, décalé selon son rang
 *   row      ligne d'une liste, décalage plus serré
 *
 * Les tweens sont « scrubbés » : leur progression suit le défilement au lieu
 * de se rejouer d'un coup. Un élément déjà passé au chargement est donc rendu
 * à l'état final, et `prefers-reduced-motion` court-circuite tout.
 */
export function ScrollReveal() {
	useScrollReveal('[data-animate="heading"]', {
		from: { opacity: 0, y: 26 },
		to: { opacity: 1, y: 0 },
	});

	useScrollReveal('[data-animate="block"]', {
		from: { opacity: 0, y: 30 },
		to: { opacity: 1, y: 0 },
	});

	useScrollReveal('[data-animate="card"]', {
		from: { opacity: 0, y: 34 },
		to: { opacity: 1, y: 0 },
		staggerDelay: 0.06,
	});

	useScrollReveal('[data-animate="row"]', {
		from: { opacity: 0, y: 18 },
		to: { opacity: 1, y: 0 },
		staggerDelay: 0.04,
	});

	return null;
}
