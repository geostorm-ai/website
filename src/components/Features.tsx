import { Activity, BarChart3, Bell, Bot, Eye, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
	{
		icon: Eye,
		title: "Perception Tracking",
		description:
			"Monitor how AI models describe and position your software relative to competitors. Track your recommendation share across GPT, Claude, Gemini, Perplexity, and more.",
	},
	{
		icon: Bell,
		title: "Smart Alerts",
		description:
			"Get notified when a new competitor appears, your software disappears from recommendations, your share drops, your ranking degrades, or models diverge in their perception.",
	},
	{
		icon: BarChart3,
		title: "Perception Charts",
		description:
			"Track your recommendation share and positioning across models over time with interactive charts. See trends at a glance and spot changes early.",
	},
	{
		icon: Activity,
		title: "Signal Panel",
		description:
			"A unified feed of alerts, ranked by severity and recency. See critical signals at a glance with full context on what changed and why it matters.",
	},
	{
		icon: Bot,
		title: "MCP Integration",
		description:
			'Connect Claude Code to query your perception data conversationally. Ask things like "Show me perception scores" or "Are there any alerts I should know about?"',
	},
	{
		icon: Shield,
		title: "Self-Hosted & Private",
		description:
			"One container, one port, one volume mount. Runs entirely on your infrastructure with Docker. Your data stays yours — no external dependencies beyond OpenRouter.",
	},
];

export function Features() {
	return (
		<section id="features" className="py-20 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto mb-16 max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
						Everything you need to monitor AI perception
					</h2>
					<p className="text-lg text-muted-foreground">
						One container, one command. GeoStorm gives you complete visibility into how AI systems
						perceive and recommend your software.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<Card
							key={feature.title}
							className="group border-border/50 bg-card/50 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
						>
							<CardHeader>
								<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
									<feature.icon className="h-5 w-5" />
								</div>
								<CardTitle className="text-lg">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-sm leading-relaxed">
									{feature.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
