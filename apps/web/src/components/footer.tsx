import { Github, Linkedin, Twitter, Video, Youtube } from "lucide-react";
import type { FooterSection, SocialLink } from "@/types";
import { Separator } from "./ui/separator";

const footerSections: FooterSection[] = [
	{
		title: "Product",
		links: [
			{ title: "Features", href: "#features" },
			{ title: "How It Works", href: "#how-it-works" },
			{ title: "Pricing", href: "#pricing" },
			{ title: "API", href: "#api" },
			{ title: "Changelog", href: "#changelog" },
		],
	},
	{
		title: "Resources",
		links: [
			{ title: "Blog", href: "#blog" },
			{ title: "Tutorials", href: "#tutorials" },
			{ title: "Help Center", href: "#help-center" },
			{ title: "Community", href: "#community" },
		],
	},
	{
		title: "Company",
		links: [
			{ title: "About Us", href: "#about" },
			{ title: "Careers", href: "#careers" },
			{ title: "Affiliates", href: "#affiliates" },
			{ title: "Contact", href: "/contact-us" },
		],
	},
	{
		title: "Legal",
		links: [
			{ title: "Privacy Policy", href: "/privacy-policy" },
			{ title: "Terms of Service", href: "/terms-and-conditions" },
			{ title: "Cookie Policy", href: "#cookies" },
		],
	},
];

const socialLinks: SocialLink[] = [
	{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
	{ icon: Youtube, href: "https://youtube.com", label: "YouTube" },
	{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
	{ icon: Github, href: "https://github.com", label: "GitHub" },
];

const Footer = () => {
	return (
		<footer className="bg-muted/30 border-t">
			<div className="container mx-auto px-4 py-12 max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
					{/* Brand & Outline */}
					<div className="lg:col-span-2 space-y-4">
						<a href="/" className="inline-flex items-center space-x-2">
							<div className="bg-primary p-2 rounded-lg">
								<Video className="h-5 w-5 text-primary-foreground" />
							</div>
							<span className="font-bold text-xl tracking-tight">
								AutoContent
							</span>
						</a>
						<p className="text-sm text-muted-foreground max-w-xs pt-4 leading-relaxed">
							Create viral faceless videos on autopilot with AI. Script,
							voiceover, visuals, captions, and publishing — all in one
							platform.
						</p>
					</div>

					{/* Links Sections */}
					{footerSections.map((section) => (
						<div key={section.title} className="space-y-4">
							<h4 className="font-semibold text-sm tracking-wider text-foreground uppercase">
								{section.title}
							</h4>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.title}>
										<a
											href={link.href}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<Separator className="my-10" />

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm text-muted-foreground text-center md:text-left">
						&copy; {new Date().getFullYear()} AutoContent. All rights reserved.
					</div>

					<div className="flex items-center space-x-6">
						{/* Social Links */}
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noreferrer"
									aria-label={social.label}
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									<social.icon className="h-5 w-5" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
