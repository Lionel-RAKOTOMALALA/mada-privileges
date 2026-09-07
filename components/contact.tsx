import { cn } from "@/lib/utils";
import type React from "react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Mail, MapPin, Phone } from "lucide-react";

const APP_EMAIL = "contact@madaprivileges.mg";
const APP_PHONE = "+261 34 05 000 00";
const APP_PHONE_2 = "+261 20 22 000 00";

export function Contact() {
	const socialLinks = [
		{
			icon: <InstagramIcon className="size-3.5 text-muted-foreground" />,
			href: "#",
			label: "Instagram",
		},
		{
			icon: <XIcon className="size-3.5 text-muted-foreground" />,
			href: "#",
			label: "X (Twitter)",
		},
	];

	return (
		<section
			className="relative bg-muted/40 py-24 md:py-28"
			id="contact"
		>
			<div className="relative mx-auto max-w-5xl border-x px-0">
				<div
					className="flex flex-col justify-center px-4 py-10 md:items-center md:py-14"
					data-animate="heading"
				>
					<h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
						Parlons de votre projet
					</h1>
					<p className="mt-4 max-w-md text-base text-muted-foreground">
						Une question sur le programme ? Notre équipe basée à
						Antananarivo vous répond sous 24 heures.
					</p>
				</div>
				<FullWidthDivider contained />
				<div className="grid md:grid-cols-3" data-animate="block">
					<Box
						description="Nous répondons à tous les e-mails sous 24 heures."
						icon={<Mail />}
						title="E-mail"
					>
						<a
							className="font-mono text-sm font-medium tracking-wide hover:underline"
							href={`mailto:${APP_EMAIL}`}
						>
							{APP_EMAIL}
						</a>
					</Box>
					<Box
						description="EDS Group · Lot II K 47, Antananarivo"
						icon={<MapPin />}
						title="Bureau"
					>
						<span className="font-mono text-sm font-medium tracking-wide">
							Antananarivo, Madagascar
						</span>
					</Box>
					<Box
						className="border-b-0 md:border-r-0"
						description="Du lundi au vendredi, 8h–17h."
						icon={<Phone />}
						title="Téléphone"
					>
						<div>
							<a
								className="block font-mono text-sm font-medium tracking-wide hover:underline"
								href={`tel:${APP_PHONE}`}
							>
								{APP_PHONE}
							</a>
							<a
								className="block font-mono text-sm font-medium tracking-wide hover:underline"
								href={`tel:${APP_PHONE_2}`}
							>
								{APP_PHONE_2}
							</a>
						</div>
					</Box>
				</div>
				<FullWidthDivider contained />
				<div className="z-1 flex flex-col items-center justify-center gap-4 py-16">
					<h2 className="font-heading text-center text-2xl font-semibold tracking-tight md:text-3xl">
						Suivez le réseau de plus près
					</h2>
					<div className="flex flex-wrap items-center gap-2">
						{socialLinks.map((link) => (
							<a
								className="flex items-center gap-x-2 rounded-full border bg-card px-3 py-1.5 shadow hover:bg-accent"
								href={link.href}
								key={link.label}
								rel="noopener noreferrer"
								target="_blank"
							>
								{link.icon}
								<span className="font-mono text-xs font-medium tracking-wide">
									{link.label}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

type ContactBox = React.ComponentProps<"div"> & {
	icon: React.ReactNode;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				"flex flex-col justify-between border-b md:border-r md:border-b-0",
				className
			)}
		>
			<div
				className={cn(
					"flex items-center gap-x-3 border-b bg-card/60 p-4",
					"[&_svg]:size-5 [&_svg]:stroke-width-1 [&_svg]:text-muted-foreground"
				)}
			>
				{props.icon}
				<h2 className="font-heading text-lg font-medium tracking-wider">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t p-4">
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
}