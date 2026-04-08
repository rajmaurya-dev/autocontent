import { BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const metrics = [
	{ label: "Views", value: "1.2M", change: "+24%" },
	{ label: "Engagement", value: "8.4%", change: "+12%" },
	{ label: "Followers", value: "45K", change: "+18%" },
	{ label: "Revenue", value: "$3.2K", change: "+31%" },
];

export function AnalyticsCard() {
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
						<BarChart3 className="h-5 w-5 text-accent-foreground" />
					</div>
					<CardTitle className="text-2xl font-bold">
						Analytics & Insights
					</CardTitle>
					<CardDescription className="leading-relaxed">
						Track performance across all platforms. AI-powered insights tell you
						what topics and styles drive the most engagement.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-8 pt-4 mt-auto">
					<motion.div
						className="space-y-3"
						variants={{
							hovered: { transition: { staggerChildren: 0.08 } },
						}}
					>
						{metrics.map((m) => (
							<motion.div
								key={m.label}
								className="flex items-center justify-between rounded-lg bg-accent px-3 py-2.5"
								variants={{
									idle: { opacity: 0.6, y: 6 },
									hovered: { opacity: 1, y: 0 },
								}}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
							>
								<div>
									<span className="text-xs text-muted-foreground">
										{m.label}
									</span>
									<div className="text-sm font-bold text-foreground">
										{m.value}
									</div>
								</div>
								<span className="text-xs font-semibold text-green-600 dark:text-green-400">
									{m.change}
								</span>
							</motion.div>
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
