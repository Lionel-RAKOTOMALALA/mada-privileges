import { ThemeToggle } from "@/components/motion/theme-toggle";
import { FullWidthDivider } from "@/components/full-width-divider";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="relative bg-foreground text-background">
			<FullWidthDivider
				position="top"
				style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
			/>
			<div className="mx-auto max-w-5xl px-4 py-16">
				<div className="grid gap-10 md:grid-cols-6">
					<div className="flex flex-col gap-4 md:col-span-3">
						<a className="w-max text-background" href="#accueil">
							<Image
								src="/logo-mp.png"
								alt="Mada Privileges"
								width={321}
								height={224}
								className="h-9 w-auto"
							/>
						</a>
						<p className="max-w-sm text-balance text-sm leading-relaxed text-background/70">
							La première plateforme nationale de fidélité
							multi-partenaires de Madagascar. Un seul compte, tous
							vos commerces préférés, des privilèges partout.
						</p>
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
							{program.map(({ href, title }) => (
								<a
									className="w-max text-sm text-background/75 transition-colors hover:text-background hover:underline"
									href={href}
									key={title}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="md:col-span-2">
						<span className="font-mono text-xs tracking-[0.2em] text-background/50 uppercase">
							Entreprise
						</span>
						<div className="mt-3 flex flex-col gap-2">
							{company.map(({ href, title }) => (
								<a
									className="w-max text-sm text-background/75 transition-colors hover:text-background hover:underline"
									href={href}
									key={title}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<FullWidthDivider
				style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
			/>
			<div className="flex flex-col items-center justify-center gap-1 py-6 text-center">
				<p className="text-sm text-background/60">
					&copy; {new Date().getFullYear()} Mada Privileges. Tous droits
					réservés.
				</p>
				<p className="font-mono text-[11px] tracking-[0.2em] text-background/40 uppercase">
					Conçu &amp; opéré par EDS Group — Antananarivo
				</p>
			</div>
		</footer>
	);
}

const program = [
	{
		title: "Pour les membres",
		href: "#programme",
	},
	{
		title: "Fonctionnement",
		href: "#fonctionnement",
	},
	{
		title: "Secteurs",
		href: "#secteurs",
	},
	{
		title: "FAQ",
		href: "#faq",
	},
];

const company = [
	{
		title: "EDS Group",
		href: "#",
	},
	{
		title: "Contact",
		href: "#contact",
	},
	{
		title: "Mentions légales",
		href: "#",
	},
	{
		title: "Confidentialité",
		href: "#",
	},
];