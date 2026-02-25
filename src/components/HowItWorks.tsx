import { BarChart3, Bell, Cog, Container } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
	{
		icon: Container,
		step: "01",
		title: "Deploy with Docker",
		description:
			"Single command deployment. Run one docker command and you're live. No git clone, no build step, no complex infrastructure needed.",
	},
	{
		icon: Cog,
		step: "02",
		title: "Configure Monitoring",
		description:
			"Add your OpenRouter API key, create a project, and define the queries and competitors you want to track across AI models.",
	},
	{
		icon: BarChart3,
		step: "03",
		title: "Track Perception",
		description:
			"GeoStorm automatically polls AI models on a schedule, collecting recommendation data and tracking your position over time.",
	},
	{
		icon: Bell,
		step: "04",
		title: "Get Alerted",
		description:
			"Receive alerts via Slack, email, or webhooks when significant changes occur — competitor emergence, share drops, or model divergence.",
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="border-y border-border/50 bg-muted/30 py-20 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto mb-16 max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
						Up and running in minutes
					</h2>
					<p className="text-lg text-muted-foreground">
						GeoStorm is designed to be simple. No external services, no complex setup — just Docker.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step) => (
						<div key={step.step} className="relative text-center">
							<Badge
								variant="outline"
								className="mb-4 font-mono text-xs text-primary border-primary/30"
							>
								Step {step.step}
							</Badge>
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
								<step.icon className="h-6 w-6" />
							</div>
							<h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
