import { HugeiconsIcon } from "@hugeicons/react";
import {
	SparklesIcon,
	PencilEdit01Icon,
	Mic01Icon,
	Image01Icon,
	ClosedCaptionIcon,
	Share01Icon,
	PlayIcon,
	PauseIcon,
	VolumeHighIcon,
	Tick01Icon,
	CheckmarkCircle02Icon,
	MusicNote01Icon,
	MailSend01Icon,
} from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

/* ─── Shared constants ────────────────────────────── */
const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const STEP_DURATION = 3600;
const TOTAL_STEPS = 6;
/* no fixed content height — driven by 9:16 aspect ratio */

/* ─── Color system — warm, muted, sophisticated ──── */
const palette = {
	topic:   { text: "#8b6cc1", bg: "rgba(139,108,193,0.08)", border: "rgba(139,108,193,0.18)", solid: "#8b6cc1" },
	script:  { text: "#4a8ec2", bg: "rgba(74,142,194,0.08)",  border: "rgba(74,142,194,0.18)",  solid: "#4a8ec2" },
	voice:   { text: "#c2883a", bg: "rgba(194,136,58,0.08)",  border: "rgba(194,136,58,0.18)",  solid: "#c2883a" },
	visuals: { text: "#5a9e6f", bg: "rgba(90,158,111,0.08)",  border: "rgba(90,158,111,0.18)",  solid: "#5a9e6f" },
	caption: { text: "#c26a7a", bg: "rgba(194,106,122,0.08)", border: "rgba(194,106,122,0.18)", solid: "#c26a7a" },
	publish: { text: "#5a6fc2", bg: "rgba(90,111,194,0.08)",  border: "rgba(90,111,194,0.18)",  solid: "#5a6fc2" },
	done:    { text: "#5a9e6f", bg: "rgba(90,158,111,0.10)" },
};

/* helper for icon wrapper */
function Icon({ icon, size = 14, color = "currentColor" }: { icon: Parameters<typeof HugeiconsIcon>[0]["icon"]; size?: number; color?: string }) {
	return <HugeiconsIcon icon={icon} size={size} color={color} strokeWidth={1.8} />;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 0 — Topic Input
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function TopicStep() {
	const [typed, setTyped] = useState("");
	const fullText = "Top 5 unsolved mysteries of the deep ocean";

	useEffect(() => {
		let i = 0;
		const iv = setInterval(() => {
			if (i <= fullText.length) { setTyped(fullText.slice(0, i)); i++; }
			else clearInterval(iv);
		}, 42);
		return () => clearInterval(iv);
	}, []);

	const suggestions = [
		"Dark history of ancient empires",
		"How billionaires actually think",
		"Scary facts about space",
	];

	return (
		<div className="flex flex-col h-full">
			<div className="rounded-xl border bg-background/80 p-3.5 mb-3">
				<div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
					What's your video about?
				</div>
				<div className="flex items-start gap-2.5">
					<span className="shrink-0 mt-0.5"><Icon icon={SparklesIcon} size={16} color={palette.topic.text} /></span>
					<div className="flex-1 text-[13px] text-foreground leading-snug min-h-[40px]">
						{typed}
						<motion.span
							className="inline-block w-[2px] h-[14px] rounded-full ml-0.5 align-middle"
							style={{ backgroundColor: palette.topic.text }}
							animate={{ opacity: [1, 0] }}
							transition={{ duration: 0.53, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
						/>
					</div>
				</div>
			</div>

			<div className="mb-3">
				<div className="text-[10px] font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
					<Icon icon={SparklesIcon} size={12} color={palette.topic.text} />
					Trending now
				</div>
				<div className="space-y-1">
					{suggestions.map((s, i) => (
						<motion.div
							key={s}
							initial={{ opacity: 0, transform: "translateY(6px)" }}
							animate={{ opacity: 1, transform: "translateY(0px)" }}
							transition={{ duration: 0.22, delay: 0.9 + i * 0.06, ease: EASE_OUT }}
							className="flex items-center gap-2 text-[11px] text-muted-foreground rounded-lg bg-muted/40 px-3 py-2 cursor-default"
						>
							<div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: palette.topic.text }} />
							{s}
						</motion.div>
					))}
				</div>
			</div>

			<div className="flex flex-wrap gap-1.5 mb-4">
				{["Horror", "Finance", "History", "Science", "Motivation"].map((niche, i) => (
					<motion.span
						key={niche}
						initial={{ opacity: 0, transform: "scale(0.96)" }}
						animate={{ opacity: 1, transform: "scale(1)" }}
						transition={{ duration: 0.18, delay: 1.6 + i * 0.04, ease: EASE_OUT }}
						className="text-[9px] font-medium px-2.5 py-1 rounded-full cursor-default"
						style={
							i === 3
								? { backgroundColor: palette.topic.bg, color: palette.topic.text, boxShadow: `inset 0 0 0 1px ${palette.topic.border}` }
								: { backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }
						}
					>
						{niche}
					</motion.span>
				))}
			</div>

			<div className="mt-auto" />

			<motion.div
				initial={{ opacity: 0, transform: "translateY(4px)" }}
				animate={{ opacity: 1, transform: "translateY(0px)" }}
				transition={{ duration: 0.2, delay: 2.2, ease: EASE_OUT }}
			>
				<div
					className="flex items-center justify-center gap-2 rounded-xl text-white px-4 py-2.5 text-xs font-semibold cursor-default transition-transform duration-150 active:scale-[0.97]"
					style={{ backgroundColor: palette.topic.solid }}
				>
					<Icon icon={MailSend01Icon} size={14} color="#fff" />
					Generate Video
				</div>
			</motion.div>
		</div>
	);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 1 — AI Script
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const scriptSections = [
	{ label: "HOOK", text: "What lurks beneath the ocean's surface has baffled scientists for decades..." },
	{ label: "SCENE 1", text: "The Bloop — In 1997, NOAA recorded a sound so powerful it was detected by sensors 5,000km apart." },
	{ label: "SCENE 2", text: "The Baltic Sea Anomaly — A 60-meter disc resting on the ocean floor, defying explanation." },
	{ label: "CTA", text: "Follow for more unexplained mysteries. Which one do you think is real?" },
];

function ScriptStep() {
	const [visible, setVisible] = useState(0);

	useEffect(() => {
		const iv = setInterval(() => {
			setVisible((p) => { if (p >= scriptSections.length) { clearInterval(iv); return p; } return p + 1; });
		}, 450);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="flex flex-col h-full">
			<div className="flex items-center justify-between mb-2.5">
				<div className="flex items-center gap-1.5">
					<Icon icon={PencilEdit01Icon} size={14} color={palette.script.text} />
					<span className="text-[11px] font-semibold">AI Script</span>
				</div>
				<div className="flex items-center gap-2 text-[10px] text-muted-foreground">
					<span className="font-mono">487 words</span>
					<span className="opacity-30">|</span>
					<span>2:34 read time</span>
				</div>
			</div>

			<div className="flex-1 rounded-xl border bg-background/80 p-3.5 overflow-hidden">
				<div className="space-y-2.5">
					{scriptSections.slice(0, visible).map((s, i) => (
						<motion.div
							key={`s-${i}`}
							initial={{ opacity: 0, transform: "translateY(8px)" }}
							animate={{ opacity: 1, transform: "translateY(0px)" }}
							transition={{ duration: 0.22, ease: EASE_OUT }}
						>
							<div className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: palette.script.text }}>
								{s.label}
							</div>
							<p className="text-[11px] text-foreground/80 leading-relaxed">{s.text}</p>
						</motion.div>
					))}
					{visible < scriptSections.length && (
						<div className="flex items-center gap-1.5">
							<motion.span
								className="inline-block w-[2px] h-3.5 rounded-full"
								style={{ backgroundColor: palette.script.text }}
								animate={{ opacity: [1, 0.2] }}
								transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
							/>
							<span className="text-[10px] opacity-50" style={{ color: palette.script.text }}>Writing...</span>
						</div>
					)}
				</div>
			</div>

			<div className="flex flex-wrap gap-1.5 mt-2.5">
				{["#Mystery", "#Ocean", "#Science", "#Viral"].map((tag, i) => (
					<motion.span
						key={tag}
						initial={{ opacity: 0, transform: "scale(0.96)" }}
						animate={{ opacity: 1, transform: "scale(1)" }}
						transition={{ duration: 0.18, delay: 2.0 + i * 0.05, ease: EASE_OUT }}
						className="text-[9px] font-medium px-2 py-0.5 rounded-full"
						style={{ backgroundColor: palette.script.bg, color: palette.script.text }}
					>
						{tag}
					</motion.span>
				))}
			</div>
		</div>
	);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 2 — Voice Selection
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const voices = [
	{ name: "Marcus", style: "Documentary", selected: true },
	{ name: "Sofia", style: "Storyteller", selected: false },
	{ name: "Alex", style: "Energetic", selected: false },
	{ name: "Priya", style: "Calm Narrator", selected: false },
];
const waveHeights = [0.5, 0.8, 0.3, 1, 0.6, 0.9, 0.4, 0.7, 1, 0.5, 0.8, 0.3, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.6, 1, 0.4, 0.9, 0.7, 0.3];

function VoiceStep() {
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const t = setTimeout(() => setPlaying(true), 500);
		return () => clearTimeout(t);
	}, []);

	useEffect(() => {
		if (!playing) return;
		const iv = setInterval(() => {
			setProgress((p) => { if (p >= 85) { setPlaying(false); clearInterval(iv); return 85; } return p + 1.5; });
		}, 40);
		return () => clearInterval(iv);
	}, [playing]);

	return (
		<div className="flex flex-col h-full">
			<div className="flex items-center gap-1.5 mb-2.5">
				<Icon icon={Mic01Icon} size={14} color={palette.voice.text} />
				<span className="text-[11px] font-semibold">Voice Selection</span>
			</div>

			<div className="grid grid-cols-2 gap-2 mb-3">
				{voices.map((v, i) => (
					<motion.div
						key={v.name}
						initial={{ opacity: 0, transform: "translateY(6px)" }}
						animate={{ opacity: 1, transform: "translateY(0px)" }}
						transition={{ duration: 0.2, delay: i * 0.05, ease: EASE_OUT }}
						className="rounded-xl border px-3 py-2.5 cursor-default transition-colors duration-150"
						style={v.selected
							? { borderColor: palette.voice.border, backgroundColor: palette.voice.bg }
							: { borderColor: "transparent", backgroundColor: "var(--color-muted)" }
						}
					>
						<div className="flex items-center justify-between mb-0.5">
							<span className="text-[11px] font-semibold" style={{ color: v.selected ? palette.voice.text : "var(--color-foreground)" }}>
								{v.name}
							</span>
							{v.selected && (
								<div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: palette.voice.solid }}>
									<Icon icon={Tick01Icon} size={9} color="#fff" />
								</div>
							)}
						</div>
						<div className="text-[9px] text-muted-foreground">{v.style}</div>
					</motion.div>
				))}
			</div>

			<div className="rounded-xl border bg-background/80 p-3 flex-1 flex flex-col">
				<div className="flex items-center gap-2.5 mb-3">
					<button type="button" className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 cursor-default transition-transform duration-150 active:scale-[0.95]" style={{ backgroundColor: palette.voice.bg }}>
						<Icon icon={playing ? PauseIcon : PlayIcon} size={14} color={palette.voice.text} />
					</button>
					<div className="flex-1 min-w-0">
						<div className="text-[11px] font-semibold text-foreground">Marcus · Documentary</div>
						<div className="text-[9px] text-muted-foreground font-mono">
							{`0:${String(Math.floor((progress / 85) * 154)).padStart(2, "0")}`} / 2:34
						</div>
					</div>
					<Icon icon={VolumeHighIcon} size={14} color="var(--color-muted-foreground)" />
				</div>

				<div className="flex items-end justify-center gap-[3px] h-10 mb-2.5 px-1">
					{waveHeights.map((h, i) => {
						const isPlayed = i / waveHeights.length < progress / 100;
						return (
							<motion.div
								key={`w-${i}`}
								className="w-[4px] rounded-full"
								style={{ backgroundColor: isPlayed ? palette.voice.solid : `${palette.voice.solid}30` }}
								animate={
									playing && isPlayed
										? { height: [`${h * 28}px`, `${h * 8}px`, `${h * 28}px`] }
										: { height: `${h * 16}px` }
								}
								transition={
									playing && isPlayed
										? { duration: 0.6 + (i % 3) * 0.15, repeat: Number.POSITIVE_INFINITY, delay: i * 0.03, ease: "easeInOut" }
										: { duration: 0.25, ease: EASE_OUT }
								}
							/>
						);
					})}
				</div>

				<div className="h-1 rounded-full bg-muted overflow-hidden">
					<motion.div className="h-full rounded-full" style={{ backgroundColor: palette.voice.solid, width: `${progress}%` }} />
				</div>
			</div>
		</div>
	);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 3 — Visual Generation
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const scenes = [
	{ label: "Deep ocean abyss",   from: "#1a2e3b", to: "#0d1821" },
	{ label: "The Bloop wave",     from: "#1a3b2e", to: "#0d211a" },
	{ label: "Baltic anomaly",     from: "#2a2d3b", to: "#14161f" },
	{ label: "Sunken ruins",       from: "#1e2e45", to: "#0f1725" },
	{ label: "NOAA vessel",        from: "#1e3548", to: "#0f1b28" },
	{ label: "Sonar scan",         from: "#1a3838", to: "#0d1f1f" },
];

function VisualStep() {
	const [generated, setGenerated] = useState(0);

	useEffect(() => {
		const iv = setInterval(() => {
			setGenerated((p) => { if (p >= scenes.length) { clearInterval(iv); return p; } return p + 1; });
		}, 380);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="flex flex-col h-full">
			<div className="flex items-center justify-between mb-2.5">
				<div className="flex items-center gap-1.5">
					<Icon icon={Image01Icon} size={14} color={palette.visuals.text} />
					<span className="text-[11px] font-semibold">AI Visuals</span>
				</div>
				<span className="text-[10px] text-muted-foreground font-mono">
					{Math.min(generated, scenes.length)}/{scenes.length} scenes
				</span>
			</div>

			<div className="flex gap-1.5 mb-3">
				{["Cinematic", "Realistic", "Anime", "3D"].map((s, i) => (
					<span
						key={s}
						className="text-[9px] font-medium px-2.5 py-1 rounded-full cursor-default"
						style={
							i === 0
								? { backgroundColor: palette.visuals.bg, color: palette.visuals.text, boxShadow: `inset 0 0 0 1px ${palette.visuals.border}` }
								: { backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }
						}
					>
						{s}
					</span>
				))}
			</div>

			<div className="grid grid-cols-3 gap-2 flex-1">
				{scenes.map((scene, i) => {
					const done = i < generated;
					const generating = i === generated;
					return (
						<motion.div
							key={scene.label}
							initial={{ opacity: 0.12 }}
							animate={done ? { opacity: 1 } : generating ? { opacity: 0.55 } : { opacity: 0.12 }}
							transition={{ duration: 0.25, ease: EASE_OUT }}
							className="relative aspect-[9/16] rounded-lg overflow-hidden"
						>
							<div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${scene.from}, ${scene.to})` }} />
							{generating && (
								<motion.div
									className="absolute inset-0"
									style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
									animate={{ transform: ["translateX(-100%)", "translateX(100%)"] }}
									transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
								/>
							)}
							{done && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.15, ease: EASE_OUT }}
									className="absolute inset-x-0 bottom-0 px-1.5 pt-4 pb-1.5"
									style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
								>
									<span className="text-[7px] text-white/85 font-medium leading-none block">{scene.label}</span>
								</motion.div>
							)}
							{done && (
								<motion.div
									initial={{ opacity: 0, transform: "scale(0.8)" }}
									animate={{ opacity: 1, transform: "scale(1)" }}
									transition={{ duration: 0.18, ease: EASE_OUT }}
									className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
									style={{ backgroundColor: palette.visuals.solid }}
								>
									<Icon icon={Tick01Icon} size={8} color="#fff" />
								</motion.div>
							)}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 4 — Captions & Music
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const captionWords = ["What", "lurks", "beneath", "the", "ocean's", "surface"];

function CaptionStep() {
	const [activeWord, setActiveWord] = useState(0);
	const [musicReady, setMusicReady] = useState(false);

	useEffect(() => {
		const iv = setInterval(() => { setActiveWord((p) => (p + 1) % captionWords.length); }, 380);
		const mt = setTimeout(() => setMusicReady(true), 1000);
		return () => { clearInterval(iv); clearTimeout(mt); };
	}, []);

	return (
		<div className="flex flex-col h-full">
			<div className="flex items-center gap-1.5 mb-2.5">
				<Icon icon={ClosedCaptionIcon} size={14} color={palette.caption.text} />
				<span className="text-[11px] font-semibold">Captions & Music</span>
			</div>

			{/* Video preview */}
			<div className="relative rounded-xl overflow-hidden flex-1 min-h-0 mb-2.5" style={{ aspectRatio: "9/15" }}>
				<div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #1a2e3b, #0d1821)" }} />
				<div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

				<div className="absolute inset-0 flex items-end justify-center pb-10 px-3">
					<div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
						{captionWords.map((word, i) => (
							<motion.span
								key={`c-${i}`}
								className="text-[15px] font-black uppercase tracking-wide"
								animate={{
									color: i <= activeWord ? "#ffffff" : "rgba(255,255,255,0.2)",
									transform: i === activeWord ? "scale(1.12) translateY(-2px)" : "scale(1) translateY(0px)",
								}}
								transition={{ duration: 0.18, ease: EASE_OUT }}
								style={i <= activeWord ? { textShadow: "0 0 16px rgba(255,255,255,0.3), 0 2px 6px rgba(0,0,0,0.5)" } : undefined}
							>
								{word}
							</motion.span>
						))}
					</div>
				</div>

				<div className="absolute bottom-2 inset-x-2.5">
					<div className="h-[3px] rounded-full bg-white/10">
						<motion.div
							className="h-full rounded-full"
							style={{ backgroundColor: palette.caption.solid }}
							animate={{ width: ["0%", "100%"] }}
							transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
						/>
					</div>
				</div>
			</div>

			<div className="flex gap-1.5 mb-2.5">
				{["Bold Pop", "Minimal", "Karaoke", "Outline"].map((s, i) => (
					<span
						key={s}
						className="text-[9px] font-medium px-2.5 py-1 rounded-full cursor-default"
						style={
							i === 0
								? { backgroundColor: palette.caption.bg, color: palette.caption.text, boxShadow: `inset 0 0 0 1px ${palette.caption.border}` }
								: { backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }
						}
					>
						{s}
					</span>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, transform: "translateY(4px)" }}
				animate={musicReady ? { opacity: 1, transform: "translateY(0px)" } : {}}
				transition={{ duration: 0.22, ease: EASE_OUT }}
				className="flex items-center gap-2.5 rounded-xl border bg-background/80 px-3 py-2"
			>
				<div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: palette.caption.bg }}>
					<Icon icon={MusicNote01Icon} size={14} color={palette.caption.text} />
				</div>
				<div className="flex-1 min-w-0">
					<div className="text-[10px] font-semibold text-foreground truncate">Ambient Ocean Depths</div>
					<div className="text-[9px] text-muted-foreground">Background · 2:34</div>
				</div>
				<div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: palette.done.text }}>
					<Icon icon={Tick01Icon} size={9} color="#fff" />
				</div>
			</motion.div>
		</div>
	);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 5 — Publish
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const platforms = [
	{ name: "TikTok",          handle: "@oceandarkfacts",  brandColor: "#25252d" },
	{ name: "YouTube Shorts",  handle: "Ocean Mysteries",  brandColor: "#c23b2e" },
	{ name: "Instagram Reels", handle: "@ocean.mysteries", brandColor: "#8a3b8f" },
	{ name: "Facebook Reels",  handle: "Ocean Mysteries",  brandColor: "#3b5998" },
];

function PublishStep() {
	const [published, setPublished] = useState(0);

	useEffect(() => {
		const iv = setInterval(() => {
			setPublished((p) => { if (p >= platforms.length) { clearInterval(iv); return p; } return p + 1; });
		}, 600);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="flex flex-col h-full">
			<div className="flex items-center gap-1.5 mb-3">
				<Icon icon={Share01Icon} size={14} color={palette.publish.text} />
				<span className="text-[11px] font-semibold">Publish to Platforms</span>
			</div>

			<div className="space-y-2 flex-1">
				{platforms.map((p, i) => {
					const done = i < published;
					const active = i === published;
					return (
						<motion.div
							key={p.name}
							initial={{ opacity: 0.2, transform: "translateX(-8px)" }}
							animate={
								done ? { opacity: 1, transform: "translateX(0px)" }
								: active ? { opacity: 0.65, transform: "translateX(0px)" }
								: { opacity: 0.2, transform: "translateX(-8px)" }
							}
							transition={{ duration: 0.22, ease: EASE_OUT }}
							className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
							style={done ? { borderColor: `${p.brandColor}25`, backgroundColor: `${p.brandColor}08` } : {}}
						>
							<div
								className="w-8 h-8 rounded-lg flex items-center justify-center"
								style={{ backgroundColor: done ? `${p.brandColor}15` : "var(--color-muted)" }}
							>
								<Icon icon={Share01Icon} size={14} color={done ? p.brandColor : "var(--color-muted-foreground)"} />
							</div>
							<div className="flex-1 min-w-0">
								<div className="text-[11px] font-semibold text-foreground">{p.name}</div>
								<div className="text-[9px] text-muted-foreground">{p.handle}</div>
							</div>
							{done ? (
								<motion.div
									initial={{ opacity: 0, transform: "scale(0.92)" }}
									animate={{ opacity: 1, transform: "scale(1)" }}
									transition={{ duration: 0.18, ease: EASE_OUT }}
									className="flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full"
									style={{ color: palette.done.text, backgroundColor: palette.done.bg }}
								>
									<Icon icon={CheckmarkCircle02Icon} size={12} color={palette.done.text} />
									Live
								</motion.div>
							) : active ? (
								<motion.div
									className="w-3.5 h-3.5 rounded-full border-[2px]"
									style={{ borderColor: palette.publish.solid, borderTopColor: "transparent" }}
									animate={{ rotate: 360 }}
									transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
								/>
							) : (
								<span className="text-[9px] text-muted-foreground/40">Queued</span>
							)}
						</motion.div>
					);
				})}
			</div>

			<AnimatePresence>
				{published >= platforms.length && (
					<motion.div
						initial={{ opacity: 0, transform: "translateY(6px) scale(0.97)" }}
						animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
						exit={{ opacity: 0, transform: "translateY(-4px) scale(0.98)" }}
						transition={{ duration: 0.22, ease: EASE_OUT }}
						className="rounded-xl px-4 py-3 flex items-center gap-3 mt-3"
						style={{ backgroundColor: palette.done.bg, border: `1px solid ${palette.done.text}20` }}
					>
						<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${palette.done.text}18` }}>
							<Icon icon={CheckmarkCircle02Icon} size={18} color={palette.done.text} />
						</div>
						<div>
							<div className="text-[11px] font-semibold" style={{ color: palette.done.text }}>Published everywhere!</div>
							<div className="text-[9px] text-muted-foreground">Live on {platforms.length} platforms</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Tabs
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const tabs = [
	{ icon: SparklesIcon,       label: "Topic",    p: palette.topic },
	{ icon: PencilEdit01Icon,   label: "Script",   p: palette.script },
	{ icon: Mic01Icon,          label: "Voice",    p: palette.voice },
	{ icon: Image01Icon,        label: "Visuals",  p: palette.visuals },
	{ icon: ClosedCaptionIcon,  label: "Captions", p: palette.caption },
	{ icon: Share01Icon,        label: "Publish",  p: palette.publish },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Main
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export function HeroPipeline() {
	const [active, setActive] = useState(0);
	const [key, setKey] = useState(0);

	useEffect(() => {
		const iv = setInterval(() => {
			setActive((p) => { const n = (p + 1) % TOTAL_STEPS; setKey((k) => k + 1); return n; });
		}, STEP_DURATION);
		return () => clearInterval(iv);
	}, []);

	const goTo = useCallback((i: number) => { setActive(i); setKey((k) => k + 1); }, []);

	const current = tabs[active];

	return (
		<div className="relative w-full max-w-[320px] mx-auto">
			{/* Phone frame */}
			<div
				className="relative rounded-[2.5rem] border-[3px] border-foreground/10 bg-card overflow-hidden shadow-2xl shadow-black/10"
				style={{ aspectRatio: "9/16" }}
			>
				{/* ── Status bar ── */}
				<div className="flex items-center justify-between px-6 pt-3 pb-1">
					<span className="text-[10px] font-semibold text-foreground/70">9:41</span>
					{/* Dynamic Island / notch */}
					<div className="w-20 h-[22px] rounded-full bg-foreground/90 mx-auto" />
					<div className="flex items-center gap-1">
						<div className="flex gap-[2px] items-end">
							<div className="w-[3px] h-[4px] rounded-[1px] bg-foreground/50" />
							<div className="w-[3px] h-[6px] rounded-[1px] bg-foreground/50" />
							<div className="w-[3px] h-[8px] rounded-[1px] bg-foreground/50" />
							<div className="w-[3px] h-[10px] rounded-[1px] bg-foreground/70" />
						</div>
						<div className="w-[18px] h-[9px] rounded-[2px] border border-foreground/50 relative ml-0.5">
							<div className="absolute inset-[1.5px] rounded-[1px] bg-foreground/50" style={{ width: "60%" }} />
						</div>
					</div>
				</div>

				{/* ── App header ── */}
				<div className="px-4 pt-1 pb-2">
					<div className="text-[13px] font-bold text-foreground">AutoContent</div>
					<div className="text-[9px] text-muted-foreground">Create a new video</div>
				</div>

				{/* ── Progress steps ── */}
				<div className="px-4 pb-2">
					<div className="flex items-center gap-1">
						{tabs.map((tab, i) => {
							const isDone = i < active;
							const isActive = i === active;
							return (
								<button
									key={tab.label}
									type="button"
									onClick={() => goTo(i)}
									className="flex-1 cursor-default"
								>
									<div
										className="h-[3px] rounded-full transition-colors duration-200"
										style={{
											backgroundColor: isDone
												? palette.done.text
												: isActive
													? tab.p.solid
													: "var(--color-muted)",
										}}
									/>
								</button>
							);
						})}
					</div>
				</div>

				{/* ── Content area ── */}
				<div className="px-3.5 flex-1" style={{ height: "calc(100% - 130px)" }}>
					<AnimatePresence mode="wait">
						<motion.div
							key={`step-${active}-${key}`}
							className="h-full"
							initial={{ opacity: 0, filter: "blur(3px)", transform: "translateY(8px)" }}
							animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
							exit={{ opacity: 0, filter: "blur(2px)", transform: "translateY(-6px)" }}
							transition={{ duration: 0.22, ease: EASE_OUT }}
						>
							{active === 0 && <TopicStep />}
							{active === 1 && <ScriptStep />}
							{active === 2 && <VoiceStep />}
							{active === 3 && <VisualStep />}
							{active === 4 && <CaptionStep />}
							{active === 5 && <PublishStep />}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* ── Bottom tab bar ── */}
				<div className="absolute bottom-0 inset-x-0 border-t bg-card/95 backdrop-blur-sm pb-4 pt-1.5 px-1">
					<div className="flex">
						{tabs.map((tab, i) => {
							const isActive = i === active;
							const isDone = i < active;
							return (
								<button
									key={tab.label}
									type="button"
									onClick={() => goTo(i)}
									className="flex-1 flex flex-col items-center gap-0.5 py-1 cursor-default transition-colors duration-150"
									style={{ color: isActive ? tab.p.text : isDone ? palette.done.text : "var(--color-muted-foreground)" }}
								>
									{isDone ? (
										<div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: palette.done.bg }}>
											<Icon icon={Tick01Icon} size={9} color={palette.done.text} />
										</div>
									) : (
										<Icon icon={tab.icon} size={16} color={isActive ? tab.p.text : "var(--color-muted-foreground)"} />
									)}
									<span className="text-[8px]" style={{ fontWeight: isActive ? 600 : 400 }}>{tab.label}</span>
									{isActive && (
										<motion.div
											layoutId="pipeline-tab"
											className="w-1 h-1 rounded-full"
											style={{ backgroundColor: tab.p.solid }}
											transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
										/>
									)}
								</button>
							);
						})}
					</div>
					{/* Home indicator */}
					<div className="flex justify-center mt-1">
						<div className="w-28 h-1 rounded-full bg-foreground/15" />
					</div>
				</div>
			</div>

			{/* Glow */}
			<div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-30 blur-3xl" style={{ background: `radial-gradient(ellipse at center, ${current.p.solid}15, transparent 70%)` }} />
		</div>
	);
}
