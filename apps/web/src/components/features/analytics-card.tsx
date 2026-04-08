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
	{ label: "Views", value: "1.2M", change: "+24%", color: "#fe2c55" },
	{ label: "Engagement", value: "8.4%", change: "+12%", color: "#833ab4" },
	{ label: "Revenue", value: "$3.2K", change: "+31%", color: "#FF0000" },
];

/* Reels gradient on icon */
export function AnalyticsCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle" className="h-full">
			<Card className="rounded-2xl border-0 shadow-none p-0 h-full bg-muted/40">
				<CardHeader className="p-5 pb-0">
					<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-1.5" style={{ background: "linear-gradient(135deg, #f77737, #fd1d1d, #c13584)" }}>
						<BarChart3 className="h-4 w-4 text-white" />
					</div>
					<CardTitle className="text-lg font-bold">Analytics & Insights</CardTitle>
					<CardDescription className="text-[13px] leading-relaxed">
						Track performance across platforms with AI-powered insights.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-5 pt-3">
					<motion.div
						className="space-y-2"
						variants={{ hovered: { transition: { staggerChildren: 0.08 } } }}
					>
						{metrics.map((m) => (
							<motion.div
								key={m.label}
								className="flex items-center justify-between rounded-lg px-3 py-2"
								style={{ backgroundColor: `${m.color}10` }}
								variants={{
									idle: { opacity: 0.6, y: 6 },
									hovered: { opacity: 1, y: 0 },
								}}
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
							>
								<div>
									<span className="text-[11px] text-muted-foreground">{m.label}</span>
									<div className="text-sm font-bold text-foreground">{m.value}</div>
								</div>
								<span className="text-[11px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: m.color }}>
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
