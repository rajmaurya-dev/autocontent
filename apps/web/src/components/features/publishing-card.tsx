import { Share2 } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const platforms = [
	{ name: "TikTok", status: "Live", color: "#fe2c55" },
	{ name: "YouTube Shorts", status: "Live", color: "#FF0000" },
	{ name: "Instagram Reels", status: "Live", color: "#833ab4" },
];

/* Facebook Blue accents */
export function PublishingCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-2xl border-0 shadow-none p-0 h-full bg-muted/40">
				<CardHeader className="p-5 pb-0">
					<div className="bg-[#1877F2] w-8 h-8 rounded-lg flex items-center justify-center mb-1.5">
						<Share2 className="h-4 w-4 text-white" />
					</div>
					<CardTitle className="text-lg font-bold">Auto-Publish</CardTitle>
					<CardDescription className="text-[13px] leading-relaxed">
						Publish directly to all platforms. Set once, post daily on autopilot.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-5 pt-3">
					<motion.div
						className="space-y-2"
						variants={{ hovered: { transition: { staggerChildren: 0.06 } } }}
					>
						{platforms.map((p) => (
							<motion.div
								key={p.name}
								className="flex items-center justify-between rounded-lg px-3 py-2"
								style={{ backgroundColor: `${p.color}10` }}
								variants={{
									idle: { opacity: 0.7, x: -8 },
									hovered: { opacity: 1, x: 0 },
								}}
								transition={{ type: "spring", stiffness: 400, damping: 20 }}
							>
								<span className="text-xs font-medium" style={{ color: p.color }}>
									{p.name}
								</span>
								<span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: p.color }}>
									{p.status}
								</span>
							</motion.div>
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
