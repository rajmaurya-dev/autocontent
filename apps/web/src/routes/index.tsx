import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
	ArrowRight,
	Check,
	Mail,
	Play,
	Plus,
	Star,
	Video,
	X,
} from "lucide-react";
import { FeaturesSection } from "@/components/features";
import { HeroPipeline } from "@/components/hero-pipeline";
import { Input } from "@/components/ui/input";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

/* ─── Data ─────────────────────────────────────────── */

const pricingPlans = [
	{
		name: "Free",
		price: "$0",
		period: "forever",
		lead: "Get started free.",
		description:
			"Create up to 5 videos per month with watermark. Perfect for trying it out.",
		features: [
			"5 videos / month",
			"720p export",
			"AI script & voiceover",
			"Basic caption styles",
			"1,000+ background tracks",
			"Download videos",
		],
		cta: "Start Free",
		ctaVariant: "outline" as const,
		popular: false,
	},
	{
		name: "Creator",
		price: "$29",
		period: "month",
		lead: "For solo creators.",
		description:
			"Everything you need to run a faceless channel and grow your audience.",
		features: [
			"50 videos / month",
			"1080p export, no watermark",
			"All 50+ AI voices",
			"All visual styles",
			"Auto-publish to TikTok & YouTube",
			"1 automated series",
			"Background music library",
		],
		cta: "Get Started",
		ctaVariant: "default" as const,
		popular: true,
	},
	{
		name: "Pro",
		price: "$59",
		period: "month",
		lead: "For power creators.",
		description:
			"Multi-platform publishing, scheduling, and brand customization.",
		features: [
			"150 videos / month",
			"All platforms (TikTok, YT, IG, FB)",
			"Content calendar & scheduling",
			"Brand kit (logo, colors, fonts)",
			"3 automated series",
			"Long-form videos (up to 30 min)",
			"Priority rendering",
		],
		cta: "Get Started",
		ctaVariant: "default" as const,
		popular: false,
	},
	{
		name: "Business",
		price: "$119",
		period: "month",
		lead: "For teams & agencies.",
		description:
			"Analytics, team collaboration, and API access for scaling content.",
		features: [
			"400 videos / month",
			"Everything in Pro",
			"Analytics & AI insights",
			"Team workspace (3 seats)",
			"API access",
			"10 automated series",
			"Bulk generation",
			"Priority support",
		],
		cta: "Get Started",
		ctaVariant: "default" as const,
		popular: false,
	},
];

const testimonials = [
	{
		name: "Jake Morrison",
		role: "Faceless YouTube Creator, 120K subs",
		content:
			"I went from posting once a week to daily uploads. My channel grew from 8K to 120K subscribers in 4 months using AutoContent.",
		rating: 5,
	},
	{
		name: "Priya Sharma",
		role: "Digital Marketing Agency",
		content:
			"We manage 15 client channels now. The auto-publish and scheduling features save us 30+ hours per week. Absolute game changer.",
		rating: 5,
	},
	{
		name: "Carlos Mendez",
		role: "TikTok Creator, 500K followers",
		content:
			"The AI voices are insanely good — my audience can't tell they're not real. I went viral 3 times in the first month.",
		rating: 5,
	},
];

const stats = [
	{ value: "50,000+", label: "Creators" },
	{ value: "2M+", label: "Videos generated" },
	{ value: "5B+", label: "Total views" },
	{ value: "4.9/5", label: "Avg rating" },
];

const faqs = [
	{
		question: "What is AutoContent?",
		answer:
			"AutoContent is an AI-powered platform that creates complete faceless videos from just a topic. It handles everything — script writing, voiceover, visual generation, captions, background music, and even publishing to your social media accounts. No camera, no editing skills, no design experience needed.",
	},
	{
		question: "Do I need to appear on camera?",
		answer:
			"Not at all. AutoContent is specifically designed for faceless content. The AI generates all visuals, narration, and text — you never need to show your face or record anything yourself.",
	},
	{
		question: "Which platforms can I publish to?",
		answer:
			"AutoContent supports direct publishing to TikTok, YouTube (Shorts and long-form), Instagram Reels, and Facebook Reels. You can also download your videos to post anywhere else.",
	},
	{
		question: "How realistic are the AI voices?",
		answer:
			"Very. We use ElevenLabs and OpenAI's latest voice models, offering 50+ voices across 20+ languages. Most viewers cannot tell the difference from a real human narrator.",
	},
	{
		question: "Can I create long-form content?",
		answer:
			"Yes. On Pro plans and above, you can create long-form videos up to 30 minutes — perfect for documentaries, deep dives, and educational content on YouTube.",
	},
	{
		question: "Is there a free plan?",
		answer:
			"Yes! The free plan includes 5 videos per month at 720p with a small watermark. No credit card required to get started.",
	},
	{
		question: "What makes AutoContent different from competitors?",
		answer:
			"We're the only platform with a native mobile app, free tier, multi-platform publishing (4+ platforms vs competitors' 2), built-in analytics, team collaboration features, and API access. Plus our pricing gives you more videos per dollar than anyone else.",
	},
	{
		question: "Can I cancel anytime?",
		answer:
			"Absolutely. All plans are month-to-month with no contracts. Cancel anytime from your dashboard — no questions asked. Annual plans include 2 months free.",
	},
];

/* ─── Page ─────────────────────────────────────────── */

function HomePage() {
	return (
		<div className="flex flex-col min-h-screen bg-background text-foreground">
			{/* Hero */}
			<section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute top-0 left-1/3 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-3xl" />
				</div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
						{/* Left: Copy */}
						<div className="text-center lg:text-left">
							<Badge
								variant="secondary"
								className="mb-6 px-4 py-1.5 text-sm font-medium"
							>
								<Video className="mr-1.5 h-3.5 w-3.5" />
								AI-Powered Faceless Video Creation
							</Badge>

							<h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5">
								Create viral faceless
								<br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
									videos on autopilot
								</span>
							</h1>

							<p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
								Turn any topic into a publish-ready video with AI-generated
								scripts, voiceovers, visuals, and captions. Post daily to
								TikTok, YouTube, Instagram & more — without lifting a finger.
							</p>

							<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
								<Button
									size="lg"
									className="h-12 px-8 text-base rounded-xl"
									asChild
								>
									<Link to="/auth">
										Start Creating Free
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="h-12 px-8 text-base rounded-xl"
								>
									<Play className="mr-2 h-4 w-4" />
									Watch Demo
								</Button>
							</div>

							{/* Social proof strip */}
							<div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
								<div className="flex -space-x-2">
									{[...Array(5)].map((_, i) => (
										<div
											key={`avatar-${i}`}
											className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
										>
											{String.fromCharCode(65 + i)}
										</div>
									))}
								</div>
								<div className="flex items-center gap-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={`star-${i}`}
											className="h-4 w-4 fill-yellow-400 text-yellow-400"
										/>
									))}
									<span className="ml-1.5 font-medium text-foreground">
										4.9/5
									</span>
									<span>from 2,000+ creators</span>
								</div>
							</div>
						</div>

						{/* Right: Animated Pipeline */}
						<div className="lg:block">
							<HeroPipeline />
						</div>
					</div>
				</div>
			</section>

			{/* Stats bar */}
			<section className="border-y bg-muted/30">
				<div className="container mx-auto px-4 max-w-5xl">
					<div className="grid grid-cols-2 md:grid-cols-4 divide-x">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="py-8 md:py-10 text-center px-4"
							>
								<div className="text-2xl md:text-3xl font-bold text-foreground">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground mt-1">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<FeaturesSection />

			{/* Testimonials */}
			<section className="py-20 lg:py-28">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-14">
						<Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
							Testimonials
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							Loved by 50,000+ creators
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							See how creators are growing their channels with AutoContent.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((t) => (
							<div
								key={t.name}
								className="rounded-2xl bg-white dark:bg-card p-6 space-y-4"
							>
								<div className="flex items-center gap-1">
									{[...Array(t.rating)].map((_, i) => (
										<Star
											key={`${t.name}-star-${i}`}
											className="h-4 w-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-sm leading-relaxed text-foreground">
									"{t.content}"
								</p>
								<div className="pt-2">
									<div className="text-sm font-semibold">{t.name}</div>
									<div className="text-xs text-muted-foreground">{t.role}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="py-20 lg:py-28 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<div className="text-center mb-14">
						<Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
							Pricing
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							Simple, transparent pricing
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Start free. Upgrade as you grow. Cancel anytime.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
						{pricingPlans.map((plan) => (
							<div
								key={plan.name}
								className="rounded-2xl bg-white dark:bg-card p-6 flex flex-col"
							>
								{/* Name badge + popular tag */}
								<div className="flex items-center gap-3 mb-6">
									<Badge
										variant="outline"
										className="text-sm font-medium px-3 py-1"
									>
										{plan.name}
									</Badge>
									{plan.popular && (
										<span className="text-sm font-medium text-primary">
											Most popular
										</span>
									)}
								</div>

								{/* Price */}
								<div className="mb-4">
									<span className="text-5xl font-bold tracking-tight">
										{plan.price}
									</span>
									<span className="text-sm text-muted-foreground ml-2">
										/{plan.period}
									</span>
								</div>

								{/* Description */}
								<p className="text-sm text-muted-foreground mb-6">
									<span className="font-semibold text-foreground">
										{plan.lead}
									</span>{" "}
									{plan.description}
								</p>

								{/* CTA */}
								<Button
									variant={plan.ctaVariant}
									className="w-full h-12 rounded-full text-base font-semibold mb-8"
									asChild
								>
									<Link to="/auth">{plan.cta}</Link>
								</Button>

								{/* Features */}
								<ul className="space-y-3 flex-1">
									{plan.features.map((f) => (
										<li
											key={f}
											className="flex items-start gap-2.5 text-sm"
										>
											<Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
											<span>{f}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="py-20 lg:py-28">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
					<div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
						<div className="md:sticky md:top-24">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
								Frequently
								<br />
								asked
								<br />
								questions
							</h2>
						</div>
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq, i) => (
								<AccordionItem
									key={faq.question}
									value={`faq-${i}`}
									className="border-b-0 rounded-xl px-4 transition-colors data-[state=open]:bg-primary/5 data-[state=open]:border-dashed data-[state=open]:border data-[state=open]:border-primary/20"
								>
									<AccordionTrigger
										className="text-base font-semibold hover:no-underline gap-3 [&[data-state=open]>svg]:rotate-0"
										icon={
											<>
												<Plus className="size-4 shrink-0 text-primary [[data-state=open]>&]:hidden" />
												<X className="size-4 shrink-0 text-primary [[data-state=closed]>&]:hidden" />
											</>
										}
									>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			{/* CTA / Newsletter */}
			<section className="py-20 lg:py-28">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
					<div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-16 sm:py-20 text-center">
						{/* Background glow */}
						<div className="pointer-events-none absolute inset-0">
							<div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-white/10 blur-3xl" />
							<div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
						</div>

						<div className="relative z-10">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground mb-4">
								Ready to go viral?
							</h2>
							<p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
								Join 50,000+ creators making faceless videos with AI. Start
								free — no credit card required.
							</p>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
								<Button
									size="lg"
									className="h-12 px-8 text-base rounded-full bg-white text-primary hover:bg-white/90 font-semibold"
									asChild
								>
									<Link to="/auth">
										Start Creating Free
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>

							<div className="max-w-md mx-auto">
								<p className="text-sm text-primary-foreground/60 mb-3">
									Or subscribe for tips on growing faceless channels
								</p>
								<div className="rounded-full bg-white/10 backdrop-blur-sm p-1.5 flex flex-col sm:flex-row gap-1.5">
									<div className="relative flex-1">
										<Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/40" />
										<Input
											type="email"
											placeholder="Enter your email"
											className="h-10 pl-10 border-0 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 text-sm rounded-full"
										/>
									</div>
									<Button
										size="sm"
										className="h-10 rounded-full px-6 bg-white text-primary hover:bg-white/90 font-medium shrink-0"
									>
										Subscribe
									</Button>
								</div>
								<p className="text-xs text-primary-foreground/40 mt-3">
									No spam. Unsubscribe at any time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
