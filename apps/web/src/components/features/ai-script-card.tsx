import { PenLine } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const scriptSteps = [
	"Hook & Opening",
	"Story Arc",
	"Call to Action",
	"SEO Tags",
];

export function AIScriptCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-3xl border-0 bg-primary/5 shadow-none p-0 h-full">
				<CardHeader className="p-8 pb-0">
					<div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-2">
						<PenLine className="h-5 w-5 text-primary" />
					</div>
					<CardTitle className="text-2xl font-bold">AI Script Writer</CardTitle>
					<CardDescription className="leading-relaxed">
						Enter a topic and get a viral-ready script in seconds. Powered by
						the latest AI models with niche-specific tone and structure.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-8 pt-4">
					<motion.div
						className="flex flex-wrap gap-2"
						variants={{
							hovered: { transition: { staggerChildren: 0.05 } },
						}}
					>
						{scriptSteps.map((step) => (
							<motion.div
								key={step}
								className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary"
								variants={{
									idle: { opacity: 0.7, scale: 0.95, y: 4 },
									hovered: { opacity: 1, scale: 1, y: 0 },
								}}
								transition={{ type: "spring", stiffness: 400, damping: 20 }}
							>
								{step}
							</motion.div>
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
