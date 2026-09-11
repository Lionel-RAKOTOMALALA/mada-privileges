/**
 * Encadré de statut des pages annexes.
 *
 * La documentation juridique porte la mention « Projet de publication, à
 * compléter et à faire relire avant mise en ligne », et se termine par une
 * annexe listant ce qui manque. Le texte fourni est publié tel quel ; ce qui
 * manque est dit ici, au lieu d'être comblé par des formules inventées.
 *
 * Une page légale qui a l'air complète mais ne l'est pas est plus dangereuse
 * qu'une page qui annonce ses lacunes : elle n'appelle aucune correction.
 */
export function Pending({ items }: { items: string[] }) {
	return (
		<aside className="mt-14 rounded-xl border border-surface-accent/40 bg-muted/40 p-6">
			<p className="font-mono text-[11px] tracking-[0.2em] text-surface-accent uppercase">
				Éléments à compléter avant publication
			</p>
			<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
				Le texte ci-dessus est celui de la documentation juridique d&apos;EDS
				Group, version 1.0. Il reste en projet tant que les points suivants ne
				sont pas tranchés. Les valeurs soulignées en pointillé dans le texte
				sont provisoires.
			</p>
			<ul className="mt-4 flex flex-col gap-2">
				{items.map((item) => (
					<li
						className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
						key={item}
					>
						<span
							aria-hidden="true"
							className="mt-1.5 size-1.5 shrink-0 rounded-full bg-surface-accent"
						/>
						{item}
					</li>
				))}
			</ul>
		</aside>
	);
}
