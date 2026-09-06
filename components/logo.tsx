import type React from "react";
import { cn } from "@/lib/utils";

export const LogoMark = (props: React.ComponentProps<"svg">) => (
	<svg
		viewBox="0 0 40 40"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		{...props}
	>
		<rect
			width="40"
			height="40"
			rx="11"
			fill="currentColor"
			opacity="0.08"
		/>
		<rect
			width="38"
			height="38"
			x="1"
			y="1"
			rx="10"
			stroke="currentColor"
			strokeOpacity="0.35"
		/>
		<path
			d="M9.5 27.5V12.5L20 23.5L30.5 12.5V27.5"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3.5"
		/>
	</svg>
);

type LogoProps = React.ComponentProps<"span">;

export function Logo({ className, ...props }: LogoProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-2 whitespace-nowrap",
				className
			)}
			{...props}
		>
			<LogoMark className="size-7" />
			<span className="font-heading text-lg leading-none font-semibold tracking-tight">
				Mada Privileges
			</span>
		</span>
	);
}