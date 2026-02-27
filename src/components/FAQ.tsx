import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "Why would I want this?",
		answer:
			"More developers discover tools by asking AI — \"what's the best library for X?\" If a model stops recommending your project or starts favoring a competitor, you'd never know unless you manually checked. GeoStorm automates that and alerts you when something changes.",
	},
	{
		question: "Why OpenRouter?",
		answer:
			"OpenRouter gives you access to GPT, Claude, Gemini, Llama, and dozens of other models through a single API key. Instead of managing separate keys for OpenAI, Anthropic, and Google, you sign up once and GeoStorm can query all of them. You can also use direct provider keys if you prefer.",
	},
	{
		question: "Is there a hosted version?",
		answer:
			"Not yet. GeoStorm is self-hosted only for now. The Docker container is designed to be easy to run anywhere — your laptop, a VPS, or a cloud VM. A hosted version is on the roadmap.",
	},
	{
		question: "Why SQLite?",
		answer:
			"GeoStorm is a single-user monitoring tool, not a multi-tenant SaaS. SQLite keeps things simple — no database server to run, no connection strings to configure. Your data lives in a single file on a mounted volume. For GeoStorm's query patterns, SQLite is more than fast enough.",
	},
	{
		question: "How much does it cost to run?",
		answer:
			"GeoStorm itself is free. The only cost is the AI API usage through OpenRouter. A typical monitoring run queries 3 models with a few prompts each — roughly $0.01–0.05 per run depending on the models you choose. Running daily, that's about $1–2/month.",
	},
	{
		question: "Couldn't I do this with OpenClaw?",
		answer:
			"You could wire up an OpenClaw agent with a cron job to query AI models daily and store the results somewhere. But then you're building GeoStorm from scratch — prompt engineering for consistent structured responses, parsing and normalizing across models, calculating recommendation share and position rankings, detecting changes over time, generating alerts, and building a UI to make sense of it all. GeoStorm does all of that out of the box. It's also cheaper and more predictable — deterministic code on a fixed schedule, so you know what queries run and what they cost.",
	},
	{
		question: "How do I disable telemetry?",
		answer:
			"Set the NO_TELEMETRY=true environment variable. This completely disables all analytics — no PostHog client is created and no events are sent. See our privacy policy for full details on what is (and isn't) collected.",
	},
];

export function FAQ() {
	return (
		<section id="faq" className="py-20 md:py-32">
			<div className="mx-auto max-w-3xl px-6">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-muted-foreground">
						Common questions about GeoStorm, how it works, and what it costs.
					</p>
				</div>

				<div className="space-y-3">
					{faqs.map((faq) => (
						<details
							key={faq.question}
							className="group rounded-lg border border-border/50 bg-card/50 transition-colors hover:border-primary/20"
						>
							<summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium [&::-webkit-details-marker]:hidden">
								{faq.question}
								<ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
							</summary>
							<div className="px-6 pb-4">
								<p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
