import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Image de partage (cahier de contenu, § 5.1) : 1200 × 630, logo et texte
 * « Vos cartes de fidélité, dans votre téléphone ».
 *
 * Le cahier demande un fond vert. La charte (« Charte ok MP vect.pdf ») ne
 * comporte aucun vert : le fond est donc le bleu MP, couleur primaire de la
 * gamme, pour que l'aperçu de partage ressemble au site. À arbitrer si EDS
 * tient au vert.
 */
export const alt =
	"Mada Privilèges — vos cartes de fidélité, dans votre téléphone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	// Le tracé du logotype vient du SVG extrait de la charte, pas d'un redessin.
	const logo = await readFile(
		join(process.cwd(), "public/brand/mp-logo-horizontal-or.svg"),
		"utf8"
	);
	const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logo).toString("base64")}`;

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background: "#083342",
					padding: "72px 80px",
					fontFamily: "sans-serif",
				}}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img alt="" height={96} src={logoSrc} width={339} />

				<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
					<div
						style={{
							color: "#e9e0cc",
							fontSize: 68,
							fontWeight: 700,
							letterSpacing: "-0.02em",
							lineHeight: 1.1,
							maxWidth: 900,
						}}
					>
						Vos cartes de fidélité, dans votre téléphone
					</div>
					<div style={{ color: "#c3a546", fontSize: 30 }}>
						madaprivileges.com
					</div>
				</div>
			</div>
		),
		size
	);
}
