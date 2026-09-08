/**
 * Encadré « à rédiger ».
 *
 * Les trois pages annexes attendent des informations juridiques que seul EDS
 * peut fournir (§ 9). Plutôt qu'un texte générique qui aurait l'apparence
 * d'une page conforme, la page affiche ce qu'il manque : une page légale
 * inventée est pire que pas de page du tout.
 */
export function Pending({ items }: { items: string[] }) {
	return (
		<div className="mt-10 rounded-xl border border-surface-accent/40 bg-muted/40 p-6">
			<p className="font-mono text-[11px] tracking-[0.2em] text-surface-accent uppercase">
				À rédiger avant la mise en ligne
			</p>
			<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
				Cette page doit être complétée avec les informations ci-dessous, à
				fournir par EDS Group. Le formulaire de contact ne doit pas être
				ouvert au public tant qu&apos;elle ne l&apos;est pas.
			</p>
			<ul className="mt-4 flex flex-col gap-2">
				{items.map((item) => (
					<li
						className="flex items-start gap-2.5 text-sm text-muted-foreground"
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
		</div>
	);
}
