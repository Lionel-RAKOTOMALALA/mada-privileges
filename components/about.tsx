/**
 * « Qui porte la plateforme » (cahier de contenu, § 5.8).
 *
 * À COMPLÉTER par EDS : une ou deux phrases sur l'ancienneté et les références
 * du groupe, et une photo de l'équipe ou du bureau (cf. § 7).
 */
export function About() {
	return (
		<section className="relative py-24 md:py-28" id="eds">
			<div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_1.2fr] md:gap-14">
				<div data-animate="heading">
					<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
						Une plateforme malgache, opérée depuis Antananarivo
					</h2>
				</div>
				<div data-animate="block">
					<p className="text-sm leading-relaxed text-muted-foreground md:text-base">
						Mada Privilèges est conçue et opérée par EDS Group, cabinet de
						conseil et d&apos;ingénierie numérique établi à Antananarivo et
						actif dans plusieurs pays d&apos;Afrique subsaharienne. Les
						données sont hébergées et administrées par nos équipes, et
						l&apos;accompagnement des enseignes se fait sur place, en
						malgache comme en français.
					</p>
				</div>
			</div>
		</section>
	);
}
