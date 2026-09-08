import { ThemeToggle } from "@/components/motion/theme-toggle";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Logo } from "@/components/logo";
import Link from "next/link";
import {
	CONTACT_EMAIL,
	legalLinks,
	platformLabels,
	platformLinks,
} from "@/lib/links";

/**
 * Pied de page (cahier de contenu, § 5.11).
 *
 * Les icônes de réseaux sociaux ont été retirées : les comptes n'existent pas
 * encore et pointaient vers « # ». À réintégrer une fois ouverts.
 */
const programme = [
	{ title: "Le programme", href: "/#programme" },
	{ title: "Pour les membres", href: "/#membres" },
	{ title: "Pour les enseignes", href: "/#enseignes" },
	{ title: "FAQ", href: "/#faq" },
];

const company = [
	{ title: "Contact", href: "/#contact" },
	{ title: "Mentions légales", href: legalLinks.mentions },
	{ title: "Politique de confidentialité", href: legalLinks.privacy },
	{ title: "Conditions d'utilisation", href: legalLinks.terms },
];

export function Footer() {
	return (
		<footer className="surface-invert relative bg-foreground text-background">
			<FullWidthDivider
				position="top"
				style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
			/>
			<div className="mx-auto max-w-5xl px-4 py-16">
				<div className="grid gap-10 md:grid-cols-6">
					<div className="flex flex-col gap-4 md:col-span-3">
						<Link className="w-max" href="/#accueil">
							{/* Version verticale : la baseline y est plus petite que
							    l'icône, il faut donc un peu plus de hauteur qu'avec
							    le bloc horizontal pour qu'elle reste lisible. */}
							<Logo className="h-14" orientation="vertical" />
						</Link>
						<p className="max-w-sm text-balance text-sm leading-relaxed text-background/70">
							Toutes vos cartes de fidélité, dans votre téléphone. Vous
							scannez le QR code de vos commerçants, vos cartes vous
							suivent.
						</p>
						<p className="font-mono text-[11px] tracking-[0.2em] text-background/50 uppercase">
							Conçu &amp; opéré par EDS Group — Antananarivo
						</p>
						<a
							className="w-max text-sm font-medium text-background underline decoration-background/30 underline-offset-4 transition-colors hover:decoration-background"
							href={platformLinks.partnerRegister}
						>
							{platformLabels.partnerRegister}
						</a>
						<ThemeToggle
							variant="rectangle"
							className="size-9 rounded-md border border-background/25 text-background transition-colors hover:border-background/50 hover:bg-background/10"
							iconClassName="size-4"
						/>
					</div>
					<div className="md:col-span-1">
						<span className="font-mono text-xs tracking-[0.2em] text-background/50 uppercase">
							Le programme
						</span>
						<div className="mt-3 flex flex-col gap-2">
							{programme.map(({ href, title }) => (
								<Link
									className="w-max text-sm text-background/75 transition-colors hover:text-background hover:underline"
									href={href}
									key={title}
								>
									{title}
								</Link>
							))}
						</div>
					</div>
					<div className="md:col-span-2">
						<span className="font-mono text-xs tracking-[0.2em] text-background/50 uppercase">
							Informations
						</span>
						<div className="mt-3 flex flex-col gap-2">
							{company.map(({ href, title }) => (
								<Link
									className="w-max text-sm text-background/75 transition-colors hover:text-background hover:underline"
									href={href}
									key={title}
								>
									{title}
								</Link>
							))}
							<a
								className="w-max font-mono text-sm text-background/75 transition-colors hover:text-background hover:underline"
								href={`mailto:${CONTACT_EMAIL}`}
							>
								{CONTACT_EMAIL}
							</a>
						</div>
					</div>
				</div>
			</div>
			<FullWidthDivider
				style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
			/>
			<div className="flex flex-col items-center justify-center gap-1 py-6 text-center">
				<p className="text-sm text-background/60">
					&copy; {new Date().getFullYear()} Mada Privilèges —
					madaprivileges.com
				</p>
			</div>
		</footer>
	);
}
