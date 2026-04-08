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

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const STEP_DURATION = 3800;
const TOTAL_STEPS = 6;

/* Brand */
const B = "#FF5200";
const B_BG = "rgba(255,82,0,0.06)";
const B_BORDER = "rgba(255,82,0,0.15)";
const DONE = "#2d9b5a";
const DONE_BG = "rgba(45,155,90,0.08)";

function Icon({ icon, size = 14, color = "currentColor" }: { icon: Parameters<typeof HugeiconsIcon>[0]["icon"]; size?: number; color?: string }) {
	return <HugeiconsIcon icon={icon} size={size} color={color} strokeWidth={1.8} />;
}

/* ━━━ Step 0 — Topic Input ━━━━━━━━━━━━━━━━━━━━━━━━━ */
function TopicStep() {
	const [typed, setTyped] = useState("");
	const full = "Top 5 unsolved mysteries of the deep ocean";

	useEffect(() => {
		let i = 0;
		const iv = setInterval(() => {
			if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
			else clearInterval(iv);
		}, 38);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="space-y-3">
			<div className="rounded-xl border border-border/60 bg-card p-3">
				<div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Enter your video topic</div>
				<div className="flex items-start gap-2.5">
					<span className="mt-0.5"><Icon icon={SparklesIcon} size={16} color={B} /></span>
					<div className="flex-1 text-[13px] text-foreground leading-snug min-h-[36px] font-medium">
						{typed}
						<motion.span className="inline-block w-[2px] h-[14px] rounded-full ml-0.5 align-middle" style={{ backgroundColor: B }} animate={{ opacity: [1, 0] }} transition={{ duration: 0.53, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
					</div>
				</div>
			</div>

			<div>
				<div className="text-[9px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
					<Icon icon={SparklesIcon} size={11} color={B} /> Trending now
				</div>
				<div className="space-y-1">
					{["Dark history of ancient empires", "How billionaires actually think", "Scary facts about space"].map((s, i) => (
						<motion.div key={s} initial={{ opacity: 0, transform: "translateY(5px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: 0.25, delay: 1.0 + i * 0.08, ease: EASE_OUT }} className="flex items-center gap-2 text-[12px] text-foreground/70 rounded-lg bg-muted/40 px-3 py-2 cursor-default">
							<div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: B }} />{s}
						</motion.div>
					))}
				</div>
			</div>

			<div className="flex flex-wrap gap-1.5">
				{["Horror", "Finance", "History", "Science", "Motivation"].map((n, i) => (
					<motion.span key={n} initial={{ opacity: 0, transform: "scale(0.96)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.2, delay: 1.8 + i * 0.05, ease: EASE_OUT }} className="text-[10px] font-medium px-2.5 py-1 rounded-full cursor-default" style={i === 3 ? { backgroundColor: B_BG, color: B, boxShadow: `inset 0 0 0 1px ${B_BORDER}` } : { backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }}>{n}</motion.span>
				))}
			</div>

			<motion.div initial={{ opacity: 0, transform: "translateY(5px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: 0.25, delay: 2.4, ease: EASE_OUT }}>
				<div className="flex items-center justify-center gap-2 rounded-xl text-white px-4 py-2.5 text-[13px] font-semibold cursor-default active:scale-[0.97] transition-transform duration-150" style={{ backgroundColor: B }}>
					<Icon icon={MailSend01Icon} size={15} color="#fff" /> Generate Video
				</div>
			</motion.div>
		</div>
	);
}

/* ━━━ Step 1 — Script ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const scriptSections = [
	{ label: "HOOK", text: "What lurks beneath the ocean's surface has baffled scientists for decades..." },
	{ label: "SCENE 1", text: "The Bloop — In 1997, NOAA recorded a sound so powerful it was detected by sensors 5,000km apart." },
	{ label: "SCENE 2", text: "The Baltic Sea Anomaly — A 60-meter disc resting on the ocean floor, defying explanation." },
	{ label: "CTA", text: "Follow for more unexplained mysteries. Which one do you think is real?" },
];

function ScriptStep() {
	const [visible, setVisible] = useState(0);
	useEffect(() => {
		const iv = setInterval(() => { setVisible((p) => { if (p >= scriptSections.length) { clearInterval(iv); return p; } return p + 1; }); }, 500);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="space-y-2.5">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1.5"><Icon icon={PencilEdit01Icon} size={15} color={B} /><span className="text-[13px] font-semibold">AI Script Writer</span></div>
				<span className="text-[10px] text-muted-foreground font-mono">487 words · 2:34</span>
			</div>

			<div className="rounded-xl border border-border/60 bg-card p-3 space-y-2.5">
				{scriptSections.slice(0, visible).map((s, i) => (
					<motion.div key={`s-${i}`} initial={{ opacity: 0, transform: "translateY(6px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: 0.25, ease: EASE_OUT }}>
						<div className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: B }}>{s.label}</div>
						<p className="text-[12px] text-foreground/75 leading-relaxed">{s.text}</p>
					</motion.div>
				))}
				{visible < scriptSections.length && (
					<div className="flex items-center gap-1.5">
						<motion.span className="inline-block w-[2px] h-3.5 rounded-full" style={{ backgroundColor: B }} animate={{ opacity: [1, 0.2] }} transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }} />
						<span className="text-[10px] font-medium" style={{ color: `${B}80` }}>Writing...</span>
					</div>
				)}
			</div>

			<div className="flex flex-wrap gap-1.5">
				{["#Mystery", "#Ocean", "#Science", "#Viral"].map((tag, i) => (
					<motion.span key={tag} initial={{ opacity: 0, transform: "scale(0.96)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.2, delay: 2.2 + i * 0.06, ease: EASE_OUT }} className="text-[10px] font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: B_BG, color: B }}>{tag}</motion.span>
				))}
			</div>
		</div>
	);
}

/* ━━━ Step 2 — Voice ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const voices = [
	{ name: "Marcus", style: "Documentary", selected: true },
	{ name: "Sofia", style: "Storyteller", selected: false },
	{ name: "Alex", style: "Energetic", selected: false },
	{ name: "Priya", style: "Calm", selected: false },
];
const waveH = [0.5, 0.8, 0.3, 1, 0.6, 0.9, 0.4, 0.7, 1, 0.5, 0.8, 0.3, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.6, 1, 0.4, 0.9, 0.7, 0.3, 0.6, 0.8, 0.5, 1];

function VoiceStep() {
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	useEffect(() => { const t = setTimeout(() => setPlaying(true), 500); return () => clearTimeout(t); }, []);
	useEffect(() => { if (!playing) return; const iv = setInterval(() => { setProgress((p) => { if (p >= 85) { setPlaying(false); clearInterval(iv); return 85; } return p + 1.2; }); }, 35); return () => clearInterval(iv); }, [playing]);

	return (
		<div className="space-y-2.5">
			<div className="flex items-center gap-1.5"><Icon icon={Mic01Icon} size={15} color={B} /><span className="text-[13px] font-semibold">Voice Selection</span></div>

			<div className="grid grid-cols-2 gap-1.5">
				{voices.map((v, i) => (
					<motion.div key={v.name} initial={{ opacity: 0, transform: "translateY(5px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: 0.22, delay: i * 0.05, ease: EASE_OUT }}
						className="rounded-lg border px-3 py-2 cursor-default" style={v.selected ? { borderColor: B_BORDER, backgroundColor: B_BG } : { borderColor: "var(--color-border)", backgroundColor: "var(--color-card)" }}>
						<div className="flex items-center justify-between">
							<span className="text-[11px] font-semibold" style={{ color: v.selected ? B : "var(--color-foreground)" }}>{v.name}</span>
							{v.selected && <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: B }}><Icon icon={Tick01Icon} size={9} color="#fff" /></div>}
						</div>
						<div className="text-[9px] text-muted-foreground">{v.style}</div>
					</motion.div>
				))}
			</div>

			<div className="rounded-xl border border-border/60 bg-card p-3">
				<div className="flex items-center gap-2.5 mb-2.5">
					<button type="button" className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-default active:scale-[0.95] transition-transform duration-150" style={{ backgroundColor: B_BG }}>
						<Icon icon={playing ? PauseIcon : PlayIcon} size={16} color={B} />
					</button>
					<div className="flex-1">
						<div className="text-[12px] font-semibold text-foreground">Marcus · Documentary</div>
						<div className="text-[10px] text-muted-foreground font-mono">{`0:${String(Math.floor((progress / 85) * 154)).padStart(2, "0")}`} / 2:34</div>
					</div>
					<Icon icon={VolumeHighIcon} size={14} color="var(--color-muted-foreground)" />
				</div>

				<div className="flex items-end justify-center gap-[3px] h-10 mb-2.5">
					{waveH.map((h, i) => {
						const played = i / waveH.length < progress / 100;
						return (
							<motion.div key={`w-${i}`} className="w-[3px] rounded-full" style={{ backgroundColor: played ? B : `${B}20` }}
								animate={playing && played ? { height: [`${h * 28}px`, `${h * 8}px`, `${h * 28}px`] } : { height: `${h * 16}px` }}
								transition={playing && played ? { duration: 0.6 + (i % 3) * 0.15, repeat: Number.POSITIVE_INFINITY, delay: i * 0.025, ease: "easeInOut" } : { duration: 0.25, ease: EASE_OUT }} />
						);
					})}
				</div>

				<div className="h-1 rounded-full bg-muted overflow-hidden">
					<motion.div className="h-full rounded-full" style={{ backgroundColor: B, width: `${progress}%` }} />
				</div>
			</div>
		</div>
	);
}

/* ━━━ Step 3 — Visuals ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const scenes = [
	{ label: "Deep ocean abyss", from: "#1a2e3b", to: "#0d1821" },
	{ label: "The Bloop wave", from: "#1a3b2e", to: "#0d211a" },
	{ label: "Baltic anomaly", from: "#2a2d3b", to: "#14161f" },
];

function VisualStep() {
	const [gen, setGen] = useState(0);
	useEffect(() => {
		const iv = setInterval(() => { setGen((p) => { if (p >= scenes.length) { clearInterval(iv); return p; } return p + 1; }); }, 420);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="space-y-2.5">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1.5"><Icon icon={Image01Icon} size={15} color={B} /><span className="text-[13px] font-semibold">AI Visual Generation</span></div>
				<span className="text-[10px] text-muted-foreground font-mono">{Math.min(gen, scenes.length)}/{scenes.length}</span>
			</div>

			<div className="flex gap-1.5">
				{["Cinematic", "Realistic", "Anime", "3D"].map((s, i) => (
					<span key={s} className="text-[9px] font-medium px-2.5 py-1 rounded-full cursor-default" style={i === 0 ? { backgroundColor: B_BG, color: B, boxShadow: `inset 0 0 0 1px ${B_BORDER}` } : { backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }}>{s}</span>
				))}
			</div>

			<div className="grid grid-cols-3 gap-1.5">
				{scenes.map((scene, i) => {
					const done = i < gen;
					const going = i === gen;
					return (
						<motion.div key={scene.label} initial={{ opacity: 0.1 }} animate={done ? { opacity: 1 } : going ? { opacity: 0.5 } : { opacity: 0.1 }} transition={{ duration: 0.25, ease: EASE_OUT }} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "9/16" }}>
							<div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${scene.from}, ${scene.to})` }} />
							{going && <motion.div className="absolute inset-0" style={{ background: `linear-gradient(90deg, transparent, ${B}12, transparent)` }} animate={{ transform: ["translateX(-100%)", "translateX(100%)"] }} transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />}
							{done && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: EASE_OUT }} className="absolute inset-x-0 bottom-0 px-1.5 pt-4 pb-1" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}><span className="text-[8px] text-white/90 font-medium">{scene.label}</span></motion.div>}
							{done && <motion.div initial={{ opacity: 0, transform: "scale(0.8)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.2, ease: EASE_OUT }} className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: B }}><Icon icon={Tick01Icon} size={8} color="#fff" /></motion.div>}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

/* ━━━ Step 4 — Captions & Music ━━━━━━━━━━━━━━━━━━━━ */
const captionWords = ["What", "lurks", "beneath", "the", "ocean's", "surface"];

function CaptionStep() {
	const [aw, setAw] = useState(0);
	const [musicOk, setMusicOk] = useState(false);
	useEffect(() => {
		const iv = setInterval(() => { setAw((p) => (p + 1) % captionWords.length); }, 400);
		const mt = setTimeout(() => setMusicOk(true), 1200);
		return () => { clearInterval(iv); clearTimeout(mt); };
	}, []);

	return (
		<div className="space-y-2.5">
			<div className="flex items-center gap-1.5"><Icon icon={ClosedCaptionIcon} size={15} color={B} /><span className="text-[13px] font-semibold">Captions & Music</span></div>

			<div className="flex gap-3">
				{/* 9:16 video preview */}
				<div className="relative rounded-xl overflow-hidden w-[180px] shrink-0" style={{ aspectRatio: "9/16" }}>
					<div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #1a2e3b, #0d1821)" }} />
					<div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
					<div className="absolute inset-0 flex items-end justify-center pb-10 px-3">
						<div className="flex flex-wrap justify-center gap-x-1.5 gap-y-0.5">
							{captionWords.map((w, i) => (
								<motion.span key={`c-${i}`} className="text-[14px] font-black uppercase tracking-wide"
									animate={{ color: i <= aw ? "#ffffff" : "rgba(255,255,255,0.18)", transform: i === aw ? "scale(1.12) translateY(-2px)" : "scale(1) translateY(0px)" }}
									transition={{ duration: 0.2, ease: EASE_OUT }}
									style={i <= aw ? { textShadow: `0 0 14px ${B}50, 0 2px 4px rgba(0,0,0,0.5)` } : undefined}>{w}</motion.span>
							))}
						</div>
					</div>
					<div className="absolute bottom-2 inset-x-2">
						<div className="h-[2px] rounded-full bg-white/10"><motion.div className="h-full rounded-full" style={{ backgroundColor: B }} animate={{ width: ["0%", "100%"] }} transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} /></div>
					</div>
				</div>

				{/* Right side controls */}
				<div className="flex-1 flex flex-col justify-between py-1">
					{/* Caption styles */}
					<div>
						<div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Caption Style</div>
						<div className="flex flex-col gap-1">
							{["Bold Pop", "Minimal", "Karaoke", "Outline"].map((s, i) => (
								<span key={s} className="text-[10px] font-medium px-3 py-1.5 rounded-lg cursor-default text-center" style={i === 0 ? { backgroundColor: B_BG, color: B, boxShadow: `inset 0 0 0 1px ${B_BORDER}` } : { backgroundColor: "var(--color-muted)", color: "var(--color-muted-foreground)" }}>{s}</span>
							))}
						</div>
					</div>

					{/* Music track */}
					<motion.div initial={{ opacity: 0, transform: "translateY(5px)" }} animate={musicOk ? { opacity: 1, transform: "translateY(0px)" } : {}} transition={{ duration: 0.25, ease: EASE_OUT }}
						className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-2.5 py-2 mt-2">
						<div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: B_BG }}><Icon icon={MusicNote01Icon} size={14} color={B} /></div>
						<div className="flex-1 min-w-0">
							<div className="text-[10px] font-semibold text-foreground truncate">Ocean Depths</div>
							<div className="text-[8px] text-muted-foreground">Background</div>
						</div>
						<div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: DONE }}><Icon icon={Tick01Icon} size={9} color="#fff" /></div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

/* ━━━ Step 5 — Publish ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const platforms = [
	{ name: "TikTok", handle: "@oceandarkfacts", bc: "#25252d" },
	{ name: "YouTube Shorts", handle: "Ocean Mysteries", bc: "#c23b2e" },
	{ name: "Instagram Reels", handle: "@ocean.mysteries", bc: "#8a3b8f" },
	{ name: "Facebook Reels", handle: "Ocean Mysteries", bc: "#3b5998" },
];

function PublishStep() {
	const [pub, setPub] = useState(0);
	useEffect(() => {
		const iv = setInterval(() => { setPub((p) => { if (p >= platforms.length) { clearInterval(iv); return p; } return p + 1; }); }, 650);
		return () => clearInterval(iv);
	}, []);

	return (
		<div className="space-y-2.5">
			<div className="flex items-center gap-1.5"><Icon icon={Share01Icon} size={15} color={B} /><span className="text-[13px] font-semibold">Publish Everywhere</span></div>

			<div className="space-y-1.5">
				{platforms.map((p, i) => {
					const done = i < pub;
					const act = i === pub;
					return (
						<motion.div key={p.name} initial={{ opacity: 0.15, transform: "translateX(-8px)" }}
							animate={done ? { opacity: 1, transform: "translateX(0px)" } : act ? { opacity: 0.6, transform: "translateX(0px)" } : { opacity: 0.15, transform: "translateX(-8px)" }}
							transition={{ duration: 0.25, ease: EASE_OUT }}
							className="flex items-center gap-2.5 rounded-lg border px-3 py-2.5"
							style={done ? { borderColor: `${B}18`, backgroundColor: B_BG } : { borderColor: "var(--color-border)" }}>
							<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: done ? `${p.bc}15` : "var(--color-muted)" }}>
								<Icon icon={Share01Icon} size={14} color={done ? p.bc : "var(--color-muted-foreground)"} />
							</div>
							<div className="flex-1 min-w-0">
								<div className="text-[12px] font-semibold text-foreground">{p.name}</div>
								<div className="text-[9px] text-muted-foreground">{p.handle}</div>
							</div>
							{done ? (
								<motion.div initial={{ opacity: 0, transform: "scale(0.9)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.2, ease: EASE_OUT }} className="flex items-center gap-0.5 text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{ color: DONE, backgroundColor: DONE_BG }}>
									<Icon icon={CheckmarkCircle02Icon} size={11} color={DONE} />Live
								</motion.div>
							) : act ? (
								<motion.div className="w-3.5 h-3.5 rounded-full border-[2px]" style={{ borderColor: B, borderTopColor: "transparent" }} animate={{ rotate: 360 }} transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
							) : (
								<span className="text-[9px] text-muted-foreground/30">Queued</span>
							)}
						</motion.div>
					);
				})}
			</div>

			<AnimatePresence>
				{pub >= platforms.length && (
					<motion.div initial={{ opacity: 0, transform: "translateY(6px) scale(0.97)" }} animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: EASE_OUT }}
						className="rounded-lg px-3 py-2.5 flex items-center gap-2.5" style={{ backgroundColor: DONE_BG, border: `1px solid ${DONE}18` }}>
						<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${DONE}15` }}><Icon icon={CheckmarkCircle02Icon} size={18} color={DONE} /></div>
						<div>
							<div className="text-[12px] font-semibold" style={{ color: DONE }}>Published everywhere!</div>
							<div className="text-[9px] text-muted-foreground">Live on all 4 platforms</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

/* ━━━ Step tabs config ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const tabs = [
	{ icon: SparklesIcon, label: "Topic" },
	{ icon: PencilEdit01Icon, label: "Script" },
	{ icon: Mic01Icon, label: "Voice" },
	{ icon: Image01Icon, label: "Visuals" },
	{ icon: ClosedCaptionIcon, label: "Captions" },
	{ icon: Share01Icon, label: "Publish" },
];

/* ━━━ Main Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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

	return (
		<div className="w-full max-w-[480px] mx-auto">
			{/* Step indicators */}
			<div className="flex items-center gap-1 mb-3">
				{tabs.map((tab, i) => {
					const isActive = i === active;
					const isDone = i < active;
					return (
						<button
							key={tab.label}
							type="button"
							onClick={() => goTo(i)}
							className="flex-1 group cursor-default"
						>
							<div
								className="h-[3px] rounded-full transition-all duration-300"
								style={{
									backgroundColor: isDone ? DONE : isActive ? B : "var(--color-muted)",
								}}
							/>
							<div className="flex items-center justify-center gap-1 mt-1.5">
								{isDone ? (
									<div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: DONE_BG }}>
										<Icon icon={Tick01Icon} size={8} color={DONE} />
									</div>
								) : (
									<Icon icon={tab.icon} size={13} color={isActive ? B : "var(--color-muted-foreground)"} />
								)}
								<span
									className="text-[9px] hidden sm:inline"
									style={{ color: isActive ? B : isDone ? DONE : "var(--color-muted-foreground)", fontWeight: isActive ? 600 : 400 }}
								>
									{tab.label}
								</span>
							</div>
						</button>
					);
				})}
			</div>

			{/* Content — fixed height, no layout shift */}
			<div className="h-[420px] overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={`step-${active}-${key}`}
						className="h-full"
						initial={{ opacity: 0, filter: "blur(4px)", transform: "translateY(10px)" }}
						animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
						exit={{ opacity: 0, filter: "blur(3px)", transform: "translateY(-8px)" }}
						transition={{ duration: 0.25, ease: EASE_OUT }}
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
		</div>
	);
}
