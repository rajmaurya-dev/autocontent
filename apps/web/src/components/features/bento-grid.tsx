import { HugeiconsIcon } from "@hugeicons/react";
import {
	TiktokIcon,
	YoutubeIcon,
	InstagramIcon,
	Facebook01Icon,
	WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import { useState } from "react";

/* ─── Colors ──────────────────────────────────────── */
const B = "#FF5200";
const YT = "#FF0000";
const TT_PINK = "#fe2c55";
const IG_PURPLE = "#833ab4";
const FB_BLUE = "#1877F2";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* ━━━ 1. AI Voiceover — waveform plays on hover ━━━━ */
function VoiceoverCard() {
	const [hovered, setHovered] = useState(false);
	const bars = [0.4, 0.7, 0.3, 1, 0.5, 0.9, 0.35, 0.8, 0.6, 1, 0.45, 0.75, 0.5, 0.85, 0.3, 0.95, 0.55, 0.7, 0.4, 0.9];

	return (
		<div
			className="md:col-span-2 rounded-2xl bg-card border border-border/50 p-5 cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="flex items-end justify-center gap-[3px] h-12">
				{bars.map((h, i) => (
					<motion.div
						key={`bar-${i}`}
						className="w-[4px] rounded-full"
						style={{ backgroundColor: i < 12 ? B : `${B}30` }}
						animate={
							hovered
								? { height: [`${h * 36}px`, `${h * 10}px`, `${h * 36}px`] }
								: { height: `${h * 16}px` }
						}
						transition={
							hovered
								? { duration: 0.7 + (i % 3) * 0.2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.04, ease: "easeInOut" }
								: { duration: 0.3, ease: EASE_OUT }
						}
					/>
				))}
			</div>
			<div className="mt-4 text-sm font-semibold text-foreground">AI Voiceover</div>
			<div className="text-xs mt-0.5 text-muted-foreground">50+ voices across 20+ languages</div>
		</div>
	);
}

/* ━━━ 2/3. Stat — count up on hover ━━━━━━━━━━━━━━━━ */
function StatCard({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 flex flex-col justify-center items-center text-center h-full cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<motion.div
				className="text-3xl font-bold text-foreground mb-1"
				animate={{ scale: hovered ? 1.15 : 1 }}
				transition={{ type: "spring", stiffness: 400, damping: 15 }}
			>
				<motion.span
					key={hovered ? "up" : "idle"}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, ease: EASE_OUT }}
				>
					{hovered ? `${value.toLocaleString()}+` : `${(value / 1000).toFixed(0)}K+`}
				</motion.span>
				{suffix}
			</motion.div>
			<div className="text-xs text-muted-foreground">{label}</div>
		</div>
	);
}

function BigStatCard({ value, label }: { value: string; label: string }) {
	const [hovered, setHovered] = useState(false);
	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 flex flex-col justify-center items-center text-center h-full cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<motion.div
				className="text-3xl font-bold mb-1"
				animate={{ scale: hovered ? 1.15 : 1, color: hovered ? B : "var(--color-foreground)" }}
				transition={{ type: "spring", stiffness: 400, damping: 15 }}
			>
				{value}
			</motion.div>
			<div className="text-xs text-muted-foreground">{label}</div>
		</div>
	);
}

/* ━━━ 4. Script Writer — lines reveal on hover ━━━━━ */
function ScriptCard() {
	const [hovered, setHovered] = useState(false);
	const lines = [
		{ label: "[HOOK]", text: "What lurks beneath the ocean has baffled scientists..." },
		{ label: "[SCENE 1]", text: "In 1997, NOAA recorded a sound detected 5,000km away." },
		{ label: "[CTA]", text: "Follow for more mysteries..." },
	];

	return (
		<div
			className="md:row-span-2 rounded-2xl bg-card border border-border/50 p-5 flex flex-col h-full cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="flex gap-1.5 mb-3">
				{["Hook", "Scene 1", "CTA"].map((t, i) => (
					<span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: i === 0 ? `${B}15` : "var(--color-muted)", color: i === 0 ? B : "var(--color-muted-foreground)" }}>{t}</span>
				))}
			</div>
			<div className="flex-1 rounded-xl p-3 space-y-2.5 font-mono text-[11px] bg-muted/50 overflow-hidden">
				{lines.map((l, i) => (
					<motion.div
						key={l.label}
						animate={{
							opacity: hovered ? 1 : 0.4 + i * 0.15,
							x: hovered ? 0 : -6,
							filter: hovered ? "blur(0px)" : `blur(${i * 1.5}px)`,
						}}
						transition={{ duration: 0.3, delay: hovered ? i * 0.08 : 0, ease: EASE_OUT }}
					>
						<span style={{ color: B }}>{l.label}</span>
						<div className="text-foreground/55 mt-0.5">{l.text}</div>
					</motion.div>
				))}
			</div>
			<div className="mt-3 text-sm font-semibold text-foreground">AI Script Writer</div>
			<div className="text-xs mt-0.5 text-muted-foreground">Topic to viral script in seconds</div>
		</div>
	);
}

/* ━━━ 5. Multi-platform — marquee on hover ━━━━━━━━━ */
function PlatformCard() {
	const [hovered, setHovered] = useState(false);
	const platforms = [
		{ bg: "#010101", color: TT_PINK, icon: TiktokIcon },
		{ bg: YT, color: "#fff", icon: YoutubeIcon },
		{ bg: `linear-gradient(135deg, ${IG_PURPLE}, #fd1d1d, #fcb045)`, color: "#fff", icon: InstagramIcon },
		{ bg: FB_BLUE, color: "#fff", icon: Facebook01Icon },
		{ bg: "#25D366", color: "#fff", icon: WhatsappIcon },
	];

	/* 5 icons × 40px + 4 gaps × 12px = 248px per set */
	const setWidth = platforms.length * 40 + (platforms.length - 1) * 12;
	/* add one gap between the two sets */
	const totalShift = setWidth + 12;

	const renderIcons = (offset: number) =>
		platforms.map((p, i) => (
			<div
				key={`p-${offset}-${i}`}
				className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0"
				style={{ background: p.bg }}
			>
				<HugeiconsIcon icon={p.icon} size={20} color={p.color} />
			</div>
		));

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 flex flex-col items-center justify-center cursor-default overflow-hidden"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div
				className="overflow-hidden mb-4 w-full"
				style={{
					maskImage: hovered ? "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" : "none",
				}}
			>
				<div className={hovered ? "flex gap-3 w-max" : "flex gap-3 justify-center w-full"}>
					{hovered ? (
						<div
							className="flex gap-3 shrink-0"
							style={{
								animation: `platform-scroll ${platforms.length * 0.8}s linear infinite`,
							}}
						>
							{renderIcons(0)}
							{renderIcons(1)}
						</div>
					) : (
						renderIcons(0)
					)}
				</div>
			</div>
			<div className="text-sm font-semibold text-foreground">Multi-platform publishing</div>
			<div className="text-xs mt-0.5 text-muted-foreground">One click, all platforms</div>
			<style>{`
				@keyframes platform-scroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-${totalShift}px); }
				}
			`}</style>
		</div>
	);
}

/* ━━━ 7. AI Visuals — thumbnails flip on card hover ━ */
function VisualsCard() {
	const [hovered, setHovered] = useState(false);
	const scenes = [
		{ from: "#1a2e3b", to: "#0d1821" },
		{ from: "#1a3b2e", to: "#0d211a" },
		{ from: "#2a2d3b", to: "#14161f" },
	];

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="grid grid-cols-3 gap-1.5 mb-3" style={{ perspective: "600px" }}>
				{scenes.map((s, i) => (
					<motion.div
						key={`sc-${i}`}
						className="aspect-[9/16] rounded-lg overflow-hidden relative"
						animate={{
							rotateY: hovered ? 12 - i * 6 : 0,
							scale: hovered ? 1.05 : 1,
						}}
						transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
						style={{ transformStyle: "preserve-3d" }}
					>
						<div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${s.from}, ${s.to})` }} />
						<div className="absolute top-1 right-1 w-3 h-3 rounded-full flex items-center justify-center" style={{ backgroundColor: B }}>
							<svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
						</div>
					</motion.div>
				))}
			</div>
			<div className="text-sm font-semibold text-foreground">AI Visuals</div>
			<div className="text-xs mt-0.5 text-muted-foreground">Cinematic scene generation</div>
		</div>
	);
}

/* ━━━ 8. Smart Captions — words highlight on hover ━━ */
function CaptionsCard() {
	const [hovered, setHovered] = useState(false);
	const words = ["What", "lurks", "beneath", "the", "ocean"];

	return (
		<div
			className="md:col-span-2 rounded-2xl border border-border/50 overflow-hidden relative cursor-default"
			style={{ minHeight: "160px" }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0f1825, #080c12)" }} />
			<div className="relative flex items-end justify-center h-full px-5 pb-12 pt-5">
				<div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
					{words.map((w, i) => (
						<motion.span
							key={w}
							className="text-[18px] font-black uppercase tracking-wide"
							animate={{
								color: hovered
									? "#ffffff"
									: i <= 2
										? "#ffffff"
										: "rgba(255,255,255,0.15)",
								y: hovered ? [0, -4, 0] : 0,
								textShadow: hovered
									? `0 0 20px ${B}80, 0 0 40px ${B}40`
									: i <= 2
										? `0 0 16px ${B}50`
										: "none",
							}}
							transition={{
								y: hovered ? { duration: 0.4, delay: i * 0.06, ease: "easeInOut" } : {},
								color: { duration: 0.2 },
								textShadow: { duration: 0.3 },
							}}
						>
							{w}
						</motion.span>
					))}
				</div>
			</div>
			<div className="absolute bottom-4 left-5 flex gap-1.5">
				{["Bold Pop", "Minimal", "Karaoke"].map((s, i) => (
					<span key={s} className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: i === 0 ? `${B}30` : "rgba(255,255,255,0.08)", color: i === 0 ? B : "rgba(255,255,255,0.5)" }}>{s}</span>
				))}
			</div>
			<div className="absolute bottom-4 right-5 text-sm font-semibold text-white">Smart Captions</div>
		</div>
	);
}

/* ━━━ 9. Auto-Schedule — spinner speeds up on hover ━ */
function ScheduleCard() {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 flex flex-col items-center justify-center text-center h-full cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="flex gap-2 mb-3">
				{["Daily", "Weekly"].map((s, i) => (
					<motion.span
						key={s}
						className="text-[10px] font-semibold px-3 py-1 rounded-full"
						style={{ backgroundColor: i === 0 ? `${B}15` : "var(--color-muted)", color: i === 0 ? B : "var(--color-muted-foreground)" }}
						animate={{ scale: hovered && i === 0 ? [1, 1.1, 1] : 1 }}
						transition={{ duration: 0.4, repeat: hovered ? Number.POSITIVE_INFINITY : 0, repeatDelay: 0.8 }}
					>
						{s}
					</motion.span>
				))}
			</div>
			<motion.div
				className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-3"
				style={{ borderColor: `${B}30` }}
				animate={{ rotate: 360 }}
				transition={{ duration: hovered ? 0.8 : 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
			>
				<motion.div
					className="w-2 h-2 rounded-full"
					style={{ backgroundColor: B }}
					animate={{ scale: hovered ? [1, 1.4, 1] : 1 }}
					transition={{ duration: 0.6, repeat: hovered ? Number.POSITIVE_INFINITY : 0 }}
				/>
			</motion.div>
			<div className="text-sm font-semibold text-foreground">Auto-Schedule</div>
			<div className="text-xs mt-0.5 text-muted-foreground">Set once, post forever</div>
		</div>
	);
}

/* ━━━ 10. Analytics — bars grow taller on hover ━━━━━ */
function AnalyticsCard() {
	const [hovered, setHovered] = useState(false);
	const heights = [65, 42, 88, 55, 72, 90, 48, 80, 60, 95, 70, 45];

	return (
		<div
			className="md:col-span-2 rounded-2xl bg-card border border-border/50 p-5 cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="flex items-end gap-2 mb-3 h-14">
				{heights.map((h, i) => (
					<motion.div
						key={`a-${i}`}
						className="flex-1 rounded-sm"
						style={{ backgroundColor: i >= 8 ? B : `${B}25` }}
						animate={{ height: hovered ? `${Math.min(h + 15, 100)}%` : `${h}%` }}
						transition={{ duration: 0.4, delay: i * 0.03, ease: EASE_OUT }}
					/>
				))}
			</div>
			<div className="flex items-center justify-between">
				<div>
					<div className="text-sm font-semibold text-foreground">Analytics & Insights</div>
					<div className="text-xs mt-0.5 text-muted-foreground">Track what goes viral</div>
				</div>
				<div className="flex gap-3">
					{[
						{ label: "Views", value: "1.2M", color: TT_PINK },
						{ label: "Engagement", value: "8.4%", color: IG_PURPLE },
					].map((m) => (
						<motion.div
							key={m.label}
							className="text-right"
							animate={{ scale: hovered ? 1.05 : 1 }}
							transition={{ type: "spring", stiffness: 300, damping: 20 }}
						>
							<div className="text-xs font-bold" style={{ color: m.color }}>{m.value}</div>
							<div className="text-[10px] text-muted-foreground">{m.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

/* ━━━ 11. Music — tracks cascade on card hover ━━━━━ */
function MusicCard() {
	const [hovered, setHovered] = useState(false);
	const tracks = [
		{ name: "Ocean Depths", dur: "2:34" },
		{ name: "Dark Ambient", dur: "3:12" },
		{ name: "Epic Cinematic", dur: "1:58" },
	];

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 flex flex-col cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="space-y-1 mb-3">
				{tracks.map((t, i) => (
					<motion.div
						key={t.name}
						className="flex items-center gap-2 rounded-lg px-2.5 py-2 -mx-1"
						animate={{
							backgroundColor: hovered && i === 0 ? `${B}10` : "transparent",
							x: hovered ? 4 : 0,
						}}
						transition={{ duration: 0.25, delay: i * 0.06, ease: EASE_OUT }}
					>
						<motion.div
							className="w-6 h-6 rounded flex items-center justify-center"
							style={{ backgroundColor: hovered && i === 0 ? `${B}20` : "var(--color-muted)" }}
							animate={{ scale: hovered && i === 0 ? [1, 1.15, 1] : 1 }}
							transition={{ duration: 0.5, repeat: hovered && i === 0 ? Number.POSITIVE_INFINITY : 0, repeatDelay: 0.5 }}
						>
							<svg width="8" height="8" viewBox="0 0 24 24" fill={hovered && i === 0 ? B : "var(--color-muted-foreground)"}><polygon points="5 3 19 12 5 21 5 3" /></svg>
						</motion.div>
						<div className="flex-1 min-w-0">
							<div className="text-[11px] font-medium text-foreground truncate">{t.name}</div>
						</div>
						<span className="text-[10px] font-mono text-muted-foreground">{t.dur}</span>
					</motion.div>
				))}
			</div>
			<div className="text-sm font-semibold text-foreground">1,000+ Tracks</div>
			<div className="text-xs mt-0.5 text-muted-foreground">Background music library</div>
		</div>
	);
}

/* ━━━ 12. Export — format rotates on hover ━━━━━━━━━━ */
function ExportCard() {
	const [hovered, setHovered] = useState(false);
	const formats = ["MP4", "MOV", "GIF"];

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 flex flex-col items-center justify-center text-center h-full cursor-default"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<motion.div
				className="text-2xl font-bold text-foreground mb-2"
				animate={{ rotateX: hovered ? [0, 360] : 0 }}
				transition={{ duration: 0.6, ease: EASE_OUT }}
			>
				1080p
			</motion.div>
			<div className="flex gap-1.5 mb-2">
				{formats.map((f, i) => (
					<motion.span
						key={f}
						className="text-[9px] font-medium px-2 py-0.5 rounded-full"
						style={{ backgroundColor: `${B}15`, color: B }}
						animate={{
							scale: hovered ? [1, 1.15, 1] : 1,
							backgroundColor: hovered ? [`${B}15`, `${B}30`, `${B}15`] : `${B}15`,
						}}
						transition={{ duration: 0.5, delay: i * 0.1, repeat: hovered ? Number.POSITIVE_INFINITY : 0, repeatDelay: 1 }}
					>
						{f}
					</motion.span>
				))}
			</div>
			<div className="text-sm font-semibold text-foreground">HD Export</div>
			<div className="text-xs mt-0.5 text-muted-foreground">No watermark on paid plans</div>
		</div>
	);
}

/* ━━━ 6. Languages — 3 rows of pills, each scrolling opposite ━━ */
const langRows = [
	["English", "Spanish", "French", "German", "Hindi", "Japanese", "Korean", "Arabic", "Portuguese"],
	["Italian", "Turkish", "Polish", "Dutch", "Swedish", "Thai", "Vietnamese", "Russian", "Chinese"],
	["Indonesian", "Malay", "Czech", "Romanian", "Greek", "Hebrew", "Filipino", "Bengali", "Ukrainian"],
];

function LanguagesCard() {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="rounded-2xl bg-card border border-border/50 p-5 cursor-default overflow-hidden flex flex-col justify-center"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
		>
			<div className="space-y-1.5 mb-3">
				{langRows.map((row, rowIdx) => {
					const reverse = rowIdx % 2 === 1;
					return (
						<div key={`row-${rowIdx}`} className="overflow-hidden">
							<div
								className="flex gap-1.5 w-max"
								style={{
									animation: hovered
										? `lang-scroll-${reverse ? "right" : "left"} ${row.length * 0.9}s linear infinite`
										: "none",
								}}
							>
								{[...row, ...row].map((lang, i) => (
									<span
										key={`${lang}-${i}`}
										className="text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0"
										style={{
											backgroundColor: `${B}10`,
											color: B,
										}}
									>
										{lang}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
			<style>{`
				@keyframes lang-scroll-left {
					from { transform: translateX(0); }
					to { transform: translateX(calc(-50% - 3px)); }
				}
				@keyframes lang-scroll-right {
					from { transform: translateX(calc(-50% - 3px)); }
					to { transform: translateX(0); }
				}
			`}</style>
			<div className="text-sm font-semibold text-foreground">20+ Languages</div>
			<div className="text-xs mt-0.5 text-muted-foreground">Voices in every major language</div>
		</div>
	);
}

/* ━━━ Main Grid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function BentoFeatures() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-auto">
			<VoiceoverCard />
			<BigStatCard value="2M+" label="Videos generated" />
			<StatCard value={50000} label="Active creators" />
			<ScriptCard />
			<PlatformCard />
			<CaptionsCard />
			<LanguagesCard />
			<VisualsCard />
			<ScheduleCard />
			<AnalyticsCard />
			<MusicCard />
			<ExportCard />
		</div>
	);
}
