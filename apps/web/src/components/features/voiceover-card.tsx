import { AudioLines } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const voices = [
	{ name: "Alex", style: "Narrator", pct: 92 },
	{ name: "Sofia", style: "Storyteller", pct: 88 },
	{ name: "Marcus", style: "Documentary", pct: 95 },
];

/* TikTok — pink #fe2c55, cyan #25f4ee */
export function VoiceoverCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle" className="h-full">
			<Card className="rounded-2xl border-0 shadow-none p-0 h-full bg-muted/40">
				<CardHeader className="p-5 pb-0">
					<div className="bg-[#fe2c55] w-8 h-8 rounded-lg flex items-center justify-center mb-1.5">
						<AudioLines className="h-4 w-4 text-white" />
					</div>
					<CardTitle className="text-lg font-bold">AI Voiceover</CardTitle>
					<CardDescription className="text-[13px] leading-relaxed">
						50+ ultra-realistic voices across 20+ languages powered by ElevenLabs.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-5 pt-3">
					<motion.div
						className="space-y-2"
						variants={{ hovered: { transition: { staggerChildren: 0.08 } } }}
					>
						{voices.map((voice) => (
							<div key={voice.name} className="flex items-center gap-3">
								<span className="text-xs text-muted-foreground w-24 shrink-0">
									{voice.name} &middot; {voice.style}
								</span>
								<div className="flex-1 h-2 rounded-full bg-[#25f4ee]/15 overflow-hidden">
									<motion.div
										className="h-full rounded-full bg-[#25f4ee]"
										variants={{
											idle: { width: "0%" },
											hovered: { width: `${voice.pct}%` },
										}}
										transition={{ type: "spring", stiffness: 300, damping: 25 }}
									/>
								</div>
								<span className="text-xs font-mono font-medium text-[#fe2c55] w-10 text-right">
									{voice.pct}%
								</span>
							</div>
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
