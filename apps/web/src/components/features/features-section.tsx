import { Badge } from "@/components/ui/badge";
import { AIScriptCard } from "./ai-script-card";
import { VoiceoverCard } from "./voiceover-card";
import { VisualGenCard } from "./visual-gen-card";
import { CaptionsCard } from "./captions-card";
import { PublishingCard } from "./publishing-card";
import { AnalyticsCard } from "./analytics-card";

export function FeaturesSection() {
	return (
		<section id="features" className="py-20 lg:py-28">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
				<div className="text-center mb-14">
					<Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
						Features
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Everything to create viral videos
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						From script to screen in minutes. AI handles the writing, voiceover,
						visuals, captions, and publishing — you just pick the topic.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<AIScriptCard />
					<VoiceoverCard />
					<VisualGenCard />
					<CaptionsCard />
					<PublishingCard />
					<AnalyticsCard />
				</div>
			</div>
		</section>
	);
}
