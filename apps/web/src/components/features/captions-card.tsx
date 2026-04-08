import { Captions } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const captionStyles = ["Bold Pop", "Minimal", "Karaoke", "Gradient", "Outline"];

export function CaptionsCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-3xl border-0 bg-accent/50 shadow-none p-0 h-full">
				<CardHeader className="p-8 pb-0">
					<div className="bg-accent w-10 h-10 rounded-xl flex items-center justify-center mb-2">
						<Captions className="h-5 w-5 text-accent-foreground" />
					</div>
					<CardTitle className="text-2xl font-bold">Smart Captions</CardTitle>
					<CardDescription className="leading-relaxed">
						Auto-generated, word-level captions with viral styling. Choose from
						trending caption designs or customize your own.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-8 pt-4">
					<motion.div
						className="flex flex-wrap gap-2"
						variants={{
							hovered: { transition: { staggerChildren: 0.05 } },
						}}
					>
						{captionStyles.map((style) => (
							<motion.div
								key={style}
								className="rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground"
								variants={{
									idle: { opacity: 0.7, scale: 0.95, y: 4 },
									hovered: { opacity: 1, scale: 1, y: 0 },
								}}
								transition={{ type: "spring", stiffness: 400, damping: 20 }}
							>
								{style}
							</motion.div>
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
