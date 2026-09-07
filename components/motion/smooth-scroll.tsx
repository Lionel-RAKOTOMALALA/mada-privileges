"use client";

import React from "react";
import { SmoothScrollProvider, useLenis } from "gsap-animations-lionel";

/**
 * Lenis pilote désormais le défilement, et `scroll-behavior: smooth` a été
 * retiré de globals.css : les deux se disputent le même scroll et produisent
 * des à-coups. Les ancres internes passent donc par Lenis, ce qui permet au
 * passage de compenser la hauteur du header collant — le saut natif plaçait
 * la cible dessous.
 */
function AnchorScroll() {
	const lenisRef = useLenis();

	React.useEffect(() => {
		// Le menu mobile verrouille `body{overflow:hidden}` le temps de son
		// animation de sortie : tant qu'il l'est, aucun défilement ne passe.
		// On attend la levée du verrou plutôt que de coder en dur sa durée.
		const whenUnlocked = (run: () => void) => {
			let frames = 0;
			const tick = () => {
				if (document.body.style.overflow !== "hidden" || frames++ > 45) {
					run();
					return;
				}
				requestAnimationFrame(tick);
			};
			tick();
		};

		const onClick = (event: MouseEvent) => {
			if (event.defaultPrevented || event.button !== 0) return;
			if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
				return;
			}

			const from = event.target instanceof Element ? event.target : null;
			const anchor = from?.closest('a[href^="#"]') as HTMLAnchorElement | null;
			if (!anchor) return;

			const hash = anchor.getAttribute("href");
			if (!hash || hash === "#") return;

			const target = document.querySelector(hash);
			const lenis = lenisRef?.current;
			// Pas d'instance Lenis (mouvement réduit) : on laisse faire le natif.
			if (!target || !lenis) return;

			event.preventDefault();

			const header = document.querySelector("header");
			const offset = header
				? -(header.getBoundingClientRect().height + 12)
				: 0;

			whenUnlocked(() => {
				lenis.scrollTo(target as HTMLElement, { offset });
				window.history.pushState(null, "", hash);
			});
		};

		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, [lenisRef]);

	return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<SmoothScrollProvider>
			<AnchorScroll />
			{children}
		</SmoothScrollProvider>
	);
}
