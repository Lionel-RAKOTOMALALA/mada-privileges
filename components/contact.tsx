import type React from "react";
import { ContactForm } from "@/components/contact-form";
import { EDITOR, PHONE } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/links";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

type Channel = {
	icon: React.ReactNode;
	label: string;
	href?: string;
	value: React.ReactNode;
	hint: string;
};

/**
 * Trois blocs de coordonnées (cahier de contenu, § 5.10).
 *
 * Les numéros et l'adresse de la maquette (« +261 34 05 000 00 », « Lot II
 * K 47 ») étaient des exemples que le cahier interdit explicitement d'envoyer
 * en production. Ils portaient depuis un marqueur « À compléter » ; la
 * documentation juridique fournit désormais les vraies coordonnées, reprises
 * de `lib/legal.ts` pour qu'elles restent identiques ici et sur les mentions
 * légales.
 *
 * Le lien téléphonique ne vise que la première des quatre lignes : `tel:` ne
 * sait pas en composer plusieurs, et les trois autres restent lisibles.
 */
const channels: Channel[] = [
	{
		icon: <Mail />,
		label: "E-mail",
		href: `mailto:${CONTACT_EMAIL}`,
		value: CONTACT_EMAIL,
		hint: "Réponse sous 48 heures ouvrées.",
	},
	{
		icon: <MapPin />,
		label: "Bureau",
		value: EDITOR.address,
		hint: "EDS Group, éditeur de Mada Privilèges.",
	},
	{
		icon: <Phone />,
		label: "Téléphone",
		href: `tel:${PHONE.primaryHref}`,
		value: PHONE.display,
		hint: PHONE.hours,
	},
];

const cardClass =
	"flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5";

export function Contact() {
	return (
		/*
		 * Surface courante, comme la FAQ ou les secteurs : la section suit le
		 * thème au lieu de s'y opposer. Les couleurs viennent donc des tokens
		 * de thème, et l'accent du rôle `--surface-accent` que la surface pose
		 * — l'or ne tient pas sur fond clair, c'est l'ocre qui prend le relais.
		 */
		<section className="relative bg-muted/40 py-24 md:py-28" id="contact">
			<div className="mx-auto max-w-5xl px-4">
				<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<div>
						<div data-animate="heading">
							<h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
								Une question ?{" "}
								<span className="text-surface-accent">Écrivez-nous.</span>
							</h2>
							<p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
								Notre équipe est basée à Antananarivo et répond sous 48
								heures ouvrées.
							</p>
						</div>

						<div className="mt-8 flex flex-col gap-3">
							{channels.map((channel) => {
								const inner = (
									<>
										<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground [&_svg]:size-4 [&_svg]:stroke-1">
											{channel.icon}
										</span>
										{/* min-w-0 : sans ça une adresse longue élargit
										    la carte au lieu de passer à la ligne. */}
										<div className="min-w-0 flex-1">
											<p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
												{channel.label}
											</p>
											<div className="mt-0.5 text-sm font-semibold break-words text-foreground">
												{channel.value}
											</div>
											<p className="mt-1 text-xs leading-relaxed text-muted-foreground">
												{channel.hint}
											</p>
										</div>
									</>
								);

								// Sans `href` : rendu en <div>, sans chevron. Un chevron
								// sur un élément qui ne mène nulle part promet une action
								// qui n'existe pas.
								return channel.href ? (
									<a
										className={`${cardClass} group transition-colors hover:border-surface-accent/50 hover:bg-accent`}
										data-animate="row"
										href={channel.href}
										key={channel.label}
									>
										{inner}
										<ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
									</a>
								) : (
									<div
										className={`${cardClass} opacity-70`}
										data-animate="row"
										key={channel.label}
									>
										{inner}
									</div>
								);
							})}
						</div>
					</div>

					<div data-animate="block">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
