import { Badge } from "@/components/ui/badge";
import { BentoFeatures } from "./bento-grid";

export function FeaturesSection() {
	return (
		<section id="features" className="py-10 lg:py-14">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
				<div className="text-center mb-6">
					<Badge variant="secondary" className="mb-2 px-3 py-1 text-sm">
						Features
					</Badge>
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5">
						Everything to create viral videos
					</h2>
					<p className="text-sm text-muted-foreground max-w-2xl mx-auto">
						From script to screen in minutes — you just pick the topic.
					</p>
				</div>

				<BentoFeatures />
			</div>
		</section>
	);
}
