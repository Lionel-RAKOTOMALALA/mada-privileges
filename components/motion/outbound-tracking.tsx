"use client";

import { useEffect } from "react";

/**
 * Marquage des clics sortants vers la plateforme (cahier de contenu, § 1 et
 * § 4) : « le seul indicateur de performance réellement utile pour ce site ».
 *
 * Aucun outil de mesure n'est installé, et en choisir un est une décision qui
 * ne m'appartient pas. L'instrumentation est donc posée sans dépendance : à
 * chaque clic sur un lien portant `data-outbound`, l'événement est poussé dans
 * `window.dataLayer` s'il existe, et dans `window.gtag` s'il existe. Le jour
 * où GTM, GA4 ou Plausible est branché, la mesure démarre sans toucher au
 * code ; d'ici là, rien n'est envoyé nulle part.
 */
declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

export function OutboundTracking() {
	useEffect(() => {
		const onClick = (event: MouseEvent) => {
			const from = event.target instanceof Element ? event.target : null;
			const link = from?.closest("[data-outbound]") as HTMLElement | null;
			if (!link) return;

			const action = link.dataset.outbound;
			// Le <a> peut être le parent ou l'enfant selon le composant Button.
			const anchor =
				link instanceof HTMLAnchorElement
					? link
					: link.closest("a") ?? link.querySelector("a");
			const destination = anchor?.getAttribute("href") ?? "";

			const payload = {
				event: "outbound_click",
				outbound_action: action,
				outbound_destination: destination,
			};

			window.dataLayer?.push(payload);
			window.gtag?.("event", "outbound_click", {
				outbound_action: action,
				outbound_destination: destination,
			});
		};

		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);

	return null;
}
