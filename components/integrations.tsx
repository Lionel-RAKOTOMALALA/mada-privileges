import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
	BedDoubleIcon,
	LandmarkIcon,
	ScissorsIcon,
	ShoppingCartIcon,
	StoreIcon,
	UtensilsIcon,
	WifiIcon,
} from "lucide-react";
import type React from "react";

type TileData = {
	row: number;
	col: number;
	icon: React.ReactNode;
	label: string;
};

export function Integrations() {
	return (
		<section className="relative bg-muted/40 py-24 md:py-28" id="secteurs">
			<div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 border-x md:grid-cols-2 md:items-center">
				<FullWidthDivider className="-top-px" />

				{/* Contenu */}
				<div className="p-4 md:p-6" data-animate="block">
					<div className="space-y-5">
						<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
							Tout ce qui rythme votre ville, réuni ici
						</h2>
						<p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
							De la table du coin à votre banque, un programme unique.
							Plus vaste est le réseau, plus fidèle est la communauté.
						</p>
						<Button
							variant="outline"
							render={<a href="#programme" />}
							nativeButton={false}
						>
							Explorer le programme
						</Button>
					</div>
				</div>

				{/* Visuel */}
				<div className="place-items-end py-6 md:py-0">
					<div className="relative size-80">
						<div
							className={cn(
								"absolute inset-0 size-full",
								"bg-[linear-gradient(to_right,theme(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,theme(--color-border)_1px,transparent_1px)]",
								"bg-[size:64px_64px]",
								"mask-[radial-gradient(ellipse_at_center,black,black,transparent)]"
							)}
						/>
						{tiles.map((tile) => (
							<SectorBadge key={tile.label} {...tile} />
						))}
					</div>
				</div>

				<FullWidthDivider className="-bottom-px" />
			</div>
		</section>
	);
}

function SectorBadge({ row, col, icon, label }: TileData) {
	return (
		<div
			className="absolute flex size-16 items-center justify-center"
			style={{ left: col * 64, top: row * 64 }}
			title={label}
		>
			<span
				className={cn(
					"flex size-13 items-center justify-center rounded-full border border-border bg-card text-foreground/60 shadow-sm",
					"transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:text-foreground",
					"[&_svg]:size-6 [&_svg]:stroke-width-1"
				)}
			>
				{icon}
			</span>
		</div>
	);
}

const tiles: TileData[] = [
	{ row: 0, col: 1, icon: <UtensilsIcon />, label: "Restauration" },
	{ row: 0, col: 3, icon: <BedDoubleIcon />, label: "Hôtellerie & santé" },
	{ row: 1, col: 2, icon: <WifiIcon />, label: "Télécom & médias" },
	{ row: 1, col: 4, icon: <ScissorsIcon />, label: "Mode & beauté" },
	{ row: 2, col: 1, icon: <LandmarkIcon />, label: "Banques & fintech" },
	{ row: 2, col: 3, icon: <ShoppingCartIcon />, label: "Grande distribution" },
	{ row: 3, col: 2, icon: <StoreIcon />, label: "Commerces de proximité" },
];