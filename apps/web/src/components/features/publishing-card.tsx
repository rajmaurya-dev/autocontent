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
	{ name: "TikTok", status: "Live" },
	{ name: "YouTube Shorts", status: "Live" },
	{ name: "Instagram Reels", status: "Live" },
	{ name: "Facebook Reels", status: "Live" },
];

export function PublishingCard() {
	return (
		<motion.div initial="idle" whileHover="hovered" animate="idle">
			<Card className="rounded-3xl border-0 bg-primary/5 shadow-none p-0 h-full">
				<CardHeader className="p-8 pb-0">
					<div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-2">
						<Share2 className="h-5 w-5 text-primary" />
					</div>
					<CardTitle className="text-2xl font-bold">Auto-Publish</CardTitle>
					<CardDescription className="leading-relaxed">
						Schedule and publish directly to all major platforms. Set it once and
						post daily on autopilot.
					</CardDescription>
				</CardHeader>
				<CardContent className="p-8 pt-4">
					<motion.div
						className="space-y-2"
						variants={{
							hovered: { transition: { staggerChildren: 0.06 } },
						}}
					>
						{platforms.map((p) => (
							<motion.div
								key={p.name}
								className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2"
								variants={{
									idle: { opacity: 0.7, x: -8 },
									hovered: { opacity: 1, x: 0 },
								}}
								transition={{ type: "spring", stiffness: 400, damping: 20 }}
							>
								<span className="text-xs font-medium text-primary">
									{p.name}
								</span>
								<span className="text-[10px] font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
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
