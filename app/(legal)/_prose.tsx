import Link from "next/link";
import type React from "react";
import { legalLinks } from "@/lib/links";
import { cn } from "@/lib/utils";

/**
 * Composition des trois documents juridiques.
 *
 * Ce sont des textes longs, lus en diagonale par la plupart des visiteurs et
 * mot à mot par les rares qui y cherchent une clause précise. D'où une échelle
 * typographique courte, des ancres sur chaque chapitre, et des tableaux qui
 * défilent dans leur propre conteneur plutôt que d'élargir la page.
 *
 * Aucune couleur n'est figée : tout vient des tokens de thème et du rôle
 * `--surface-accent` posé par la surface, comme le reste du site.
 */

/** Corps de texte commun — une seule définition, pour que les trois pages aient la même voix. */
const BODY = "text-sm leading-relaxed text-muted-foreground md:text-[15px]";

export function DocTitle({
	title,
	kicker,
	children,
}: {
	title: string;
	kicker: string;
	children?: React.ReactNode;
}) {
	return (
		<header>
			<p className="font-mono text-[11px] tracking-[0.2em] text-surface-accent uppercase">
				{kicker}
			</p>
			<h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
				{title}
			</h1>
			{children && (
				<div className={cn("mt-5 flex flex-col gap-4", BODY)}>{children}</div>
			)}
		</header>
	);
}

/**
 * Chapitre. `scroll-mt` compense la barre de navigation collante : sans ça,
 * un lien d'ancre déposerait le titre sous l'en-tête.
 */
export function Section({
	id,
	title,
	children,
}: {
	id?: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="mt-12 scroll-mt-24 border-t border-border pt-8" id={id}>
			<h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
				{title}
			</h2>
			<div className={cn("mt-4 flex flex-col gap-4", BODY)}>{children}</div>
		</section>
	);
}

/** Titre de partie des conditions générales (TITRE I, II, III). */
export function Part({
	id,
	label,
	title,
}: {
	id: string;
	label: string;
	title: string;
}) {
	return (
		<div className="mt-14 scroll-mt-24" id={id}>
			<div className="flex items-center gap-4">
				<p className="font-mono text-[11px] tracking-[0.2em] text-surface-accent uppercase">
					{label}
				</p>
				<span aria-hidden="true" className="h-px flex-1 bg-surface-accent/30" />
			</div>
			<p className="mt-3 font-heading text-lg font-semibold tracking-tight text-foreground">
				{title}
			</p>
		</div>
	);
}

/** Article numéroté des conditions générales. */
export function Article({
	n,
	title,
	children,
}: {
	n: number;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="mt-10 scroll-mt-24" id={`article-${n}`}>
			<h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
				<span className="mr-2 font-mono text-sm text-surface-accent">{n}.</span>
				{title}
			</h3>
			<div className={cn("mt-3 flex flex-col gap-3", BODY)}>{children}</div>
		</section>
	);
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
	return (
		<ul className="flex flex-col gap-2.5">
			{items.map((item, index) => (
				<li
					className="flex items-start gap-3"
					// Ces listes sont fixes et ordonnées : l'index est une clé stable.
					key={index}
				>
					<span
						aria-hidden="true"
						className="mt-2 size-1 shrink-0 rounded-full bg-surface-accent"
					/>
					<span className="min-w-0">{item}</span>
				</li>
			))}
		</ul>
	);
}

/**
 * Tableau de données. Le conteneur défile horizontalement pour lui seul :
 * sur un téléphone, un tableau de trois colonnes ne doit pas faire déborder
 * la page entière.
 */
export function Table({
	head,
	rows,
}: {
	head: string[];
	rows: React.ReactNode[][];
}) {
	return (
		<div className="overflow-x-auto rounded-xl border border-border">
			<table className="w-full border-collapse text-left text-sm">
				<thead>
					<tr className="bg-muted/60">
						{head.map((cell) => (
							<th
								className="px-4 py-3 font-mono text-[10px] font-normal tracking-[0.15em] text-muted-foreground uppercase"
								key={cell}
								scope="col"
							>
								{cell}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr className="border-t border-border align-top" key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<td
									className={cn(
										"px-4 py-3 leading-relaxed",
										// Première colonne : c'est l'intitulé de la ligne,
										// il porte la lecture du tableau.
										cellIndex === 0
											? "font-medium text-foreground"
											: "text-muted-foreground",
									)}
									key={cellIndex}
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

/**
 * Valeur provisoire.
 *
 * Le document d'origine encadre ces chiffres de crochets : ce sont des durées
 * proposées, que l'annexe demande de faire confirmer. Les publier sans marque
 * les présenterait comme arbitrées. Le souligné pointillé le signale sans
 * casser la lecture ; l'encadré de statut, en bas de page, dit pourquoi.
 */
export function Prov({ children }: { children: React.ReactNode }) {
	return (
		<span
			className="underline decoration-surface-accent/70 decoration-dotted underline-offset-4"
			title="Valeur provisoire, à confirmer avant publication"
		>
			{children}
		</span>
	);
}

/** Lien courant dans le corps du texte. */
export function A({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const className =
		"font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

	// Les pages annexes et les adresses e-mail ne se comportent pas pareil :
	// `Link` préfetche une route interne, un `mailto:` n'en est pas une.
	return href.startsWith("/") ? (
		<Link className={className} href={href}>
			{children}
		</Link>
	) : (
		<a className={className} href={href}>
			{children}
		</a>
	);
}

/**
 * Sommaire d'un document long. Rendu seulement pour les conditions générales :
 * vingt-huit articles ne se parcourent pas au défilement.
 */
export function Toc({
	groups,
}: {
	groups: { label: string; items: { n: number; title: string }[] }[];
}) {
	return (
		<nav
			aria-label="Sommaire"
			className="mt-10 rounded-xl border border-border bg-muted/40 p-6"
		>
			<p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
				Sommaire
			</p>
			<div className="mt-5 grid gap-6 sm:grid-cols-2">
				{groups.map((group) => (
					<div key={group.label}>
						<p className="text-xs font-semibold tracking-wide text-foreground">
							{group.label}
						</p>
						<ul className="mt-2 flex flex-col gap-1.5">
							{group.items.map((item) => (
								<li key={item.n}>
									<Link
										className="flex gap-2 text-xs leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
										href={`#article-${item.n}`}
									>
										<span className="font-mono text-surface-accent tabular-nums">
											{String(item.n).padStart(2, "0")}
										</span>
										<span>{item.title}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</nav>
	);
}

const DOCUMENTS = [
	{ href: legalLinks.mentions, title: "Mentions légales" },
	{ href: legalLinks.privacy, title: "Politique de confidentialité" },
	{ href: legalLinks.terms, title: "Conditions générales d'utilisation" },
];

/**
 * Pied de document.
 *
 * « Ces trois documents forment un ensemble cohérent et se renvoient l'un à
 * l'autre » : la navigation entre eux est une information, pas un agrément.
 * La date de mise à jour ferme la page, comme dans le document d'origine.
 */
export function DocFooter({
	current,
	updated,
}: {
	current: string;
	updated: string;
}) {
	const others = DOCUMENTS.filter((document) => document.href !== current);

	return (
		<footer className="mt-14 border-t border-border pt-8">
			<p className="text-xs text-muted-foreground">
				Dernière mise à jour : {updated}.
			</p>
			<div className="mt-5 flex flex-col gap-2">
				{others.map((document) => (
					<Link
						className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-surface-accent/50 hover:bg-accent"
						href={document.href}
						key={document.href}
					>
						<span className="text-sm font-medium text-foreground">
							{document.title}
						</span>
						<span
							aria-hidden="true"
							className="text-sm text-muted-foreground transition-transform group-hover:translate-x-0.5"
						>
							&rarr;
						</span>
					</Link>
				))}
			</div>
		</footer>
	);
}
