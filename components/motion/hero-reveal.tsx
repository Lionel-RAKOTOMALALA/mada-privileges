"use client";

import { useTimelineReveal } from "gsap-animations-lionel";

/**
 * Entrée en cascade du hero, jouée une fois au montage — contrairement aux
 * révélations au défilement, il n'y a rien à « scrubber » ici : le bloc est
 * déjà à l'écran. Les sélecteurs utilisent `data-hero` et non `data-animate`
 * pour que les deux systèmes ne se disputent jamais le même élément.
 *
 * Les décalages négatifs font se chevaucher les étapes : la cascade se lit
 * comme un seul mouvement plutôt que comme cinq animations à la file.
 */
export function HeroReveal() {
	useTimelineReveal([
		{
			selector: '[data-hero="badge"]',
			from: { opacity: 0, y: 16 },
			to: { opacity: 1, y: 0 },
			duration: 0.7,
		},
		{
			selector: '[data-hero="title"]',
			from: { opacity: 0, y: 34 },
			to: { opacity: 1, y: 0 },
			duration: 1,
			position: "-=0.45",
		},
		{
			selector: '[data-hero="lede"]',
			from: { opacity: 0, y: 26 },
			to: { opacity: 1, y: 0 },
			duration: 0.9,
			position: "-=0.7",
		},
		{
			selector: '[data-hero="actions"]',
			from: { opacity: 0, y: 22 },
			to: { opacity: 1, y: 0 },
			duration: 0.8,
			position: "-=0.6",
		},
		{
			// La carte porte déjà `-rotate-2` en CSS ; on n'anime que l'échelle
			// et l'opacité pour ne pas écraser cette transformation.
			selector: '[data-hero="card"]',
			from: { opacity: 0, scale: 0.94 },
			to: { opacity: 1, scale: 1 },
			duration: 1.1,
			position: "-=0.55",
		},
		{
			selector: '[data-hero="stat"]',
			from: { opacity: 0, y: 20 },
			to: { opacity: 1, y: 0, stagger: 0.09 },
			duration: 0.7,
			position: "-=0.7",
		},
	]);

	return null;
}
