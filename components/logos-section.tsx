import { LogoCloud } from "@/components/logo-cloud"; // @efferd/logo-cloud-2
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";

export function LogosSection() {
	return (
		<section className="py-16 md:py-20">
			<div
				className="mx-auto max-w-5xl px-4 text-center"
				data-animate="heading"
			>
				<h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
					Un réseau multi-secteurs, un seul compte
				</h2>
			</div>
			<div className="relative mt-10 *:border-0">
				<DecorIcon className="size-4" position="top-left" />
				<DecorIcon className="size-4" position="top-right" />
				<DecorIcon className="size-4" position="bottom-left" />
				<DecorIcon className="size-4" position="bottom-right" />

				<FullWidthDivider className="-top-px" />
				<LogoCloud />
				<FullWidthDivider className="-bottom-px" />
			</div>
		</section>
	);
}