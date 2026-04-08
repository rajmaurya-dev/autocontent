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

/* YouTube Red accents */
export function AIScriptCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-2xl border-0 shadow-none p-0 h-full bg-muted/40">
				<CardHeader className="p-5 pb-0">
					<div className="bg-[#FF0000] w-8 h-8 rounded-lg flex items-center justify-center mb-1.5">
						<PenLine className="h-4 w-4 text-white" />
					</div>
					<CardTitle className="text-lg font-bold">AI Script Writer</CardTitle>
					<CardDescription className="text-[13px] leading-relaxed">
						Enter a topic and get a viral-ready script in seconds with niche-specific tone.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-5 pt-3">
					<motion.div
						className="flex flex-wrap gap-2"
						variants={{ hovered: { transition: { staggerChildren: 0.05 } } }}
					>
						{scriptSteps.map((step) => (
							<motion.div
								key={step}
								className="rounded-lg bg-[#FF0000]/10 px-3 py-2 text-xs font-medium text-[#FF0000]"
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
