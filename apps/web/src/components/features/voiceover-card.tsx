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
	{ name: "Priya", style: "Energetic", pct: 85 },
];

export function VoiceoverCard() {
	return (
		<motion.div
			initial="idle"
			whileHover="hovered"
			animate="idle"
			className="md:row-span-2 h-full"
		>
			<Card className="rounded-3xl border-0 bg-accent/50 shadow-none p-0 h-full">
				<CardHeader className="p-8 pb-0">
					<div className="bg-accent w-10 h-10 rounded-xl flex items-center justify-center mb-2">
						<AudioLines className="h-5 w-5 text-accent-foreground" />
					</div>
					<CardTitle className="text-2xl font-bold">AI Voiceover</CardTitle>
					<CardDescription className="leading-relaxed">
						50+ ultra-realistic voices across 20+ languages. Powered by
						ElevenLabs and OpenAI for natural, human-like narration.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-8 pt-4 mt-auto">
					<motion.div
						className="space-y-3"
						variants={{
							hovered: { transition: { staggerChildren: 0.08 } },
						}}
					>
						{voices.map((voice) => (
							<div key={voice.name} className="flex items-center gap-3">
								<span className="text-xs text-muted-foreground w-24 shrink-0">
									{voice.name} &middot; {voice.style}
								</span>
								<div className="flex-1 h-2 rounded-full bg-accent overflow-hidden">
									<motion.div
										className="h-full rounded-full bg-primary"
										variants={{
											idle: { width: "0%" },
											hovered: { width: `${voice.pct}%` },
										}}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 25,
										}}
									/>
								</div>
								<span className="text-xs font-mono font-medium text-primary w-10 text-right">
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
