import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/**
	 * Le site est livré en fichiers plats sur un hébergement mutualisé cPanel,
	 * qui ne fait tourner aucun serveur Node. `next build` produit donc `out/`,
	 * dont le contenu est déposé tel quel dans `public_html`.
	 *
	 * Conséquence directe : plus aucune Server Function. L'envoi du formulaire
	 * de contact passe par `public/contact.php`, exécuté par Apache à côté des
	 * pages — voir `doc/deploiement-cpanel.md`.
	 */
	output: "export",

	/**
	 * Apache sert `dossier/index.html` sans la moindre configuration, là où des
	 * fichiers `page.html` exigeraient une réécriture pour répondre à `/page`.
	 * On produit donc des dossiers : les URL gagnent une barre finale, et rien
	 * ne dépend plus d'un `.htaccess` que le Gestionnaire de fichiers pourrait
	 * écraser.
	 */
	trailingSlash: true,

	images: {
		/**
		 * L'optimiseur de `next/image` est un service qui tourne côté serveur :
		 * sans lui, le build échoue. Les photos sont donc servies telles
		 * qu'elles sont dans `public/` — d'où l'importance de les y déposer
		 * déjà redimensionnées et compressées.
		 */
		unoptimized: true,
	},
};

export default nextConfig;
