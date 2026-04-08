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

export function VisualGenCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-3xl border-0 bg-primary/5 shadow-none p-0 h-full">
				<CardHeader className="p-8 pb-0">
					<div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-2">
						<ImagePlus className="h-5 w-5 text-primary" />
					</div>
					<CardTitle className="text-2xl font-bold">
						AI Visual Generation
					</CardTitle>
					<CardDescription className="leading-relaxed">
						Generate stunning visuals and video clips that match your script.
						Multiple art styles with image-to-video motion.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-8 pt-4">
					<motion.div
						className="flex flex-wrap gap-2"
						variants={{
							hovered: { transition: { staggerChildren: 0.05 } },
						}}
					>
						{styles.map((style) => (
							<motion.div
								key={style}
								className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary"
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
