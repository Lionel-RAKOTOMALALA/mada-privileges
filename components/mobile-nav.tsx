"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
	AnimatePresence,
	motion,
	useReducedMotion,
	type Variants,
} from "motion/react";
import { Portal } from "@/components/portal";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/components/header";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { EASE_OUT, SPRING_PRESS } from "@/lib/ease";

const APP_EMAIL = "contact@madaprivileges.mg";

type MobileNavProps = Record<string, never>;

export function MobileNav({}: MobileNavProps) {
	const [open, setOpen] = React.useState(false);
	const reduce = useReducedMotion() ?? false;

	const close = React.useCallback(() => setOpen(false), []);

	// Entrée : les liens remontent la piste, masqués, et se calent en place.
	// Sortie : ils redescendent — chemin symétrique (même axe, sens inverse).
	const rowVariants = (i: number): Variants => ({
		hidden: reduce ? { opacity: 0 } : { y: "110%" },
		show: {
			y: "0%",
			opacity: 1,
			transition: reduce
				? { duration: 0.2, ease: EASE_OUT, delay: 0.05 * i }
				: {
						type: "spring" as const,
						stiffness: 240,
						damping: 31,
						mass: 0.6,
						delay: 0.08 + i * 0.07,
					},
		},
		exit: {
			y: reduce ? "0%" : "70%",
			opacity: 0,
			transition: { duration: 0.18, ease: EASE_OUT },
		},
	});

	// La surface se matérialise (scale + fade, origine en haut) plutôt qu'un
	// simple fondu : elle arrive comme un matériau qui recouvre la page.
	const surfaceVariants: Variants = {
		hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985 },
		show: reduce
			? { opacity: 1, transition: { duration: 0.2, ease: EASE_OUT } }
			: {
					opacity: 1,
					scale: 1,
					transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
				},
		exit: reduce
			? { opacity: 0, transition: { duration: 0.15, ease: EASE_OUT } }
			: {
					opacity: 0,
					scale: 0.985,
					transition: { duration: 0.3, ease: [0.77, 0, 0.175, 1] },
				},
	};

	return (
		<div className="md:hidden">
			<motion.button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
				className="relative flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				onClick={() => setOpen((prev) => !prev)}
				whileTap={reduce ? undefined : { scale: 0.92 }}
				transition={SPRING_PRESS}
				type="button"
			>
				<span
					aria-hidden="true"
					className={cn(
						"absolute h-px w-4 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
						open ? "rotate-45" : "-translate-y-[3.5px]"
					)}
				/>
				<span
					aria-hidden="true"
					className={cn(
						"absolute h-px w-4 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
						open ? "-rotate-45" : "translate-y-[3.5px]"
					)}
				/>
			</motion.button>

			<Portal
				className={cn(
					"transition-opacity duration-300",
					open
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				)}
				id="mobile-menu"
				lock={open}
			>
				<AnimatePresence>
					{open && (
						<motion.div
							animate="show"
							className="relative flex min-h-full origin-top flex-1 flex-col bg-background pt-14 md:hidden"
							exit="exit"
							initial="hidden"
							variants={surfaceVariants}
						>
							<div className="flex flex-1 flex-col px-5 pt-4 pb-6">
								<nav className="flex flex-1 flex-col justify-center gap-2">
									{navLinks.map((item, i) => (
										<div className="overflow-hidden" key={item.href}>
											<motion.a
												animate="show"
												className="group flex items-baseline justify-between gap-4 border-b border-border py-3 pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
												exit="exit"
												href={item.href}
												initial="hidden"
												onClick={close}
												variants={rowVariants(i)}
											>
												<span className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl">
													{item.label}
												</span>
												<ArrowUpRightIcon className="size-6 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transition-none" />
											</motion.a>
										</div>
									))}
								</nav>

								<div className="mt-8">
									<motion.div
										animate="show"
										exit="exit"
										initial="hidden"
										variants={rowVariants(navLinks.length)}
									>
										<Button
											className="w-full"
											nativeButton={false}
											render={<a href="#partenaire" onClick={close} />}
											size="lg"
											variant="default"
										>
											Devenir partenaire
											<ArrowRightIcon data-icon="inline-end" />
										</Button>
									</motion.div>

									<motion.div
										animate="show"
										className="mt-6 flex items-center justify-between gap-4 pb-2"
										exit="exit"
										initial="hidden"
										variants={rowVariants(navLinks.length + 1)}
									>
										<a
											className="font-mono text-xs tracking-wide text-muted-foreground hover:text-foreground hover:underline"
											href={`mailto:${APP_EMAIL}`}
										>
											{APP_EMAIL}
										</a>
										<div className="flex items-center gap-4">
											{socials.map((s) => (
												<a
													aria-label={s.label}
													className="text-muted-foreground transition-colors hover:text-foreground"
													href={s.href}
													key={s.label}
													rel="noopener noreferrer"
													target="_blank"
												>
													{s.icon}
												</a>
											))}
										</div>
									</motion.div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</Portal>
		</div>
	);
}

const socials = [
	{
		label: "Instagram",
		href: "#",
		icon: <InstagramIcon className="size-4.5" />,
	},
	{
		label: "X (Twitter)",
		href: "#",
		icon: <XIcon className="size-4.5" />,
	},
];