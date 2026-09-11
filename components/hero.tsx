import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Logo, LogoMark } from "@/components/logo";
import { HeroReveal } from "@/components/motion/hero-reveal";
import { platformLabels, platformLinks } from "@/lib/links";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

/**
 * Cartes du portefeuille — illustration.
 *
 * À REMPLACER (cahier de contenu, § 7) par une capture réelle du portefeuille
 * tel qu'il apparaît sur un téléphone. En attendant, la maquette montre des
 * programmes distincts par enseigne, avec des mécaniques différentes : c'est
 * le produit réel, pas un compte de points commun à tout le réseau.
 */
const walletCards = [
	{
		merchant: "Kaly Be",
		sector: "Restauration",
		mechanic: "Carte à tampons",
		progress: 7,
		total: 10,
		reward: "Le 10ᵉ repas offert",
	},
	{
		merchant: "Institut Amazones",
		sector: "Beauté et bien-être",
		mechanic: "Carte à tampons",
		progress: 4,
		total: 10,
		reward: "Un soin bien-être à la 10ᵉ séance",
	},
];

export function HeroSection() {
	return (
		<section
			className="surface-invert relative overflow-hidden bg-foreground text-background"
			id="accueil"
		>
			{/* Arrière-plan : grille + halo + filets verticaux */}
			<div aria-hidden="true" className="absolute inset-0 -z-1">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_35%,transparent_78%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_8%,rgba(255,255,255,0.08),transparent_70%)]" />
				<div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-background/20 to-transparent" />
				<div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-background/20 to-transparent" />
			</div>

			<HeroReveal />

			<div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-24 pb-24 text-center md:pt-32">
				{/*
					Pastille d'information, pas un appel à l'action : elle ne mène
					nulle part, la règle « chaque CTA vers une URL réelle de la
					plateforme » ne s'y applique donc pas.
				*/}
				<div
					className="mx-auto flex w-fit items-center gap-3 rounded-sm border border-background/20 bg-background/5 p-1 backdrop-blur-sm"
					data-hero="badge"
				>
					<span className="flex items-center gap-1.5 rounded-xs bg-background/90 px-2 py-1 font-mono text-[10px] font-semibold tracking-widest text-foreground uppercase">
						<span className="relative flex size-1.5">
							<span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-60" />
							<span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
						</span>
						En ligne
					</span>
					<span className="pr-2 text-xs text-background/80">
						Le réseau démarre à Antananarivo
					</span>
				</div>

				<h1
					className="mt-8 max-w-3xl text-balance text-4xl leading-[1.06] font-light tracking-tight text-background md:text-6xl lg:text-7xl"
					data-hero="title"
				>
					Toutes vos cartes de fidélité,{" "}
					<em className="italic">dans votre téléphone.</em>
				</h1>

				<p
					className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-background/75 sm:text-base md:text-lg"
					data-hero="lede"
				>
					Mada Privilèges rassemble les programmes de fidélité de vos
					commerçants à Madagascar. Vous scannez, vous cumulez, vous êtes
					récompensé. C&apos;est gratuit, et il n&apos;y a rien à installer.
				</p>

				<div
					className="mt-10 flex w-fit flex-col items-center gap-4"
					data-hero="actions"
				>
					<div className="flex w-fit flex-wrap items-center justify-center gap-3">
						<Button
							nativeButton={false}
							render={<a data-outbound="register" href={platformLinks.register} />}
							size="lg"
							variant="secondary"
						>
							{platformLabels.register}
							<ArrowRightIcon data-icon="inline-end" />
						</Button>
						<a
							className="inline-flex h-10 items-center gap-1.5 rounded-md border border-background/25 px-4 text-sm font-medium text-background transition-colors hover:border-background/50 hover:bg-background/10"
							data-outbound="partnerRegister" href={platformLinks.partnerRegister}
						>
							{platformLabels.partnerRegister}
						</a>
					</div>
					<p className="text-xs text-background/60">
						Gratuit pour les membres. Disponible en français et en anglais.
					</p>
				</div>

				{/* Portefeuille de cartes */}
				<div
					className="relative mt-20 w-full max-w-md"
					data-hero="card"
				>
					<div
						aria-hidden="true"
						className="absolute top-1/2 left-1/2 -z-1 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/10 blur-[90px]"
					/>
					<div className="relative -rotate-2 rounded-2xl bg-linear-to-br from-background/40 from-5% via-background/15 to-transparent p-px shadow-2xl shadow-black/40 transition-transform duration-700 ease-out hover:rotate-0 hover:scale-[1.01]">
						<div className="rounded-[calc(1rem-1px)] bg-foreground p-5 sm:p-6">
							<div className="flex items-center justify-between gap-3">
								<Logo className="h-7" orientation="horizontal" />
								<span className="rounded-full border border-background/25 px-2.5 py-1 font-mono text-[10px] tracking-widest text-background/70 uppercase">
									Mon portefeuille
								</span>
							</div>

							<div className="mt-5 flex flex-col gap-3">
								{walletCards.map((card) => (
									<div
										className="rounded-xl border border-background/15 bg-background/5 p-4 text-left"
										key={card.merchant}
									>
										<div className="flex items-start justify-between gap-3">
											<div className="min-w-0">
												<p className="truncate text-sm font-semibold text-background">
													{card.merchant}
												</p>
												<p className="mt-0.5 font-mono text-[10px] tracking-[0.18em] text-background/50 uppercase">
													{card.sector} · {card.mechanic}
												</p>
											</div>
											<LogoMark
												className="size-5 shrink-0 opacity-40"
												tone="current"
											/>
										</div>

										{/* Tampons : la progression est propre à cette enseigne. */}
										<div
											aria-label={`${card.progress} tampons sur ${card.total}`}
											className="mt-3 flex flex-wrap gap-1.5"
											role="img"
										>
											{Array.from({ length: card.total }, (_, i) => (
												<span
													className={cn(
														"flex size-5 items-center justify-center rounded-full border",
														i < card.progress
															? "border-transparent bg-background text-foreground"
															: "border-background/25 text-transparent"
													)}
													key={i}
												>
													<CheckIcon className="size-3" />
												</span>
											))}
										</div>

										<p className="mt-3 text-xs text-background/60">
											{card.reward}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<FullWidthDivider position="bottom" />
		</section>
	);
}
