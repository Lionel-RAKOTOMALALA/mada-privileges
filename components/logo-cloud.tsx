import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { sectors } from "@/lib/sectors";



export function LogoCloud() {
	return (
		<div className="mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] overflow-hidden py-8">
			<InfiniteSlider gap={56} speed={70} speedOnHover={25}>
				{sectors.map(({ name: sector }) => (
					<span
						className="flex items-center gap-14"
						key={sector}
					>
						<span className="font-heading text-xl font-semibold tracking-tight text-foreground/55 italic md:text-2xl">
							{sector}
						</span>
						<span
							aria-hidden="true"
							className="size-1.5 rounded-full bg-foreground/40"
						/>
					</span>
				))}
			</InfiniteSlider>
		</div>
	);
}