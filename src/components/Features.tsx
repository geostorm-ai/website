import { Activity, BarChart3, Bell, Eye, GitCompare, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
	{
		icon: Eye,
		title: "Perception Tracking",
		description:
			"See how AI models describe and position your software relative to competitors across GPT, Claude, Gemini, and more.",
	},
	{
		icon: Bell,
		title: "Smart Alerts",
		description:
			"Get notified when competitors emerge, your recommendation share drops, or models diverge in their perception of your project.",
	},
	{
		icon: BarChart3,
		title: "Recommendation Charts",
		description:
			"Visualize your recommendation share and positioning trends over time with interactive charts powered by Recharts.",
	},
	{
		icon: Activity,
		title: "Signal Panel",
		description:
			"Unified alert feed ranked by severity and recency. See critical signals at a glance and drill into details.",
	},
	{
		icon: GitCompare,
		title: "Model Comparison",
		description:
			"Compare how different AI models perceive your project side by side. Detect divergence and identify blind spots.",
	},
	{
		icon: Shield,
		title: "Self-Hosted & Private",
		description:
			"Runs entirely on your infrastructure with Docker. Your data stays yours. No external dependencies beyond OpenRouter.",
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
						GeoStorm gives you complete visibility into how your software appears across the AI
						landscape.
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
