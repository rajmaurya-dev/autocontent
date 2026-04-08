import { ImagePlus } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const styles = ["Cinematic", "Realistic", "Anime", "3D Render", "Watercolor", "Comic"];

/* Instagram gradient on accents */
export function VisualGenCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-2xl border-0 shadow-none p-0 h-full bg-muted/40">
				<CardHeader className="p-5 pb-0">
					<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-1.5" style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
						<ImagePlus className="h-4 w-4 text-white" />
					</div>
					<CardTitle className="text-lg font-bold">AI Visual Generation</CardTitle>
					<CardDescription className="text-[13px] leading-relaxed">
						Generate stunning visuals and clips with multiple art styles.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-5 pt-3">
					<motion.div
						className="flex flex-wrap gap-2"
						variants={{ hovered: { transition: { staggerChildren: 0.05 } } }}
					>
						{styles.map((style) => (
							<motion.div
								key={style}
								className="rounded-lg px-3 py-2 text-xs font-medium text-[#833ab4] bg-[#833ab4]/10"
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
