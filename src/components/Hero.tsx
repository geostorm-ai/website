import { ArrowRight, CloudLightning, Github, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
			{/* Background gradient effects */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
				<div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-3xl text-center">
					<Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5 text-sm">
						<CloudLightning className="h-3.5 w-3.5" />
						Open Source &middot; MIT Licensed
					</Badge>

					<h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
						Monitor your{" "}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							AI visibility
						</span>
					</h1>

					<p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
						Track how AI models like ChatGPT, Claude, and Gemini perceive, recommend, and rank your
						software. Get alerts when your positioning changes.
					</p>

					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="https://github.com/geostorm-ai/geostorm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button size="lg" className="gap-2 text-base">
								<Github className="h-4 w-4" />
								View on GitHub
								<ArrowRight className="h-4 w-4" />
							</Button>
						</a>
						<a href="#quickstart">
							<Button size="lg" variant="outline" className="gap-2 text-base">
								<Terminal className="h-4 w-4" />
								Get Started
							</Button>
						</a>
					</div>
				</div>

				{/* Terminal-style preview */}
				<div className="mx-auto mt-16 max-w-2xl">
					<div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl shadow-primary/5">
						<div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-3">
							<div className="h-3 w-3 rounded-full bg-red-500/80" />
							<div className="h-3 w-3 rounded-full bg-yellow-500/80" />
							<div className="h-3 w-3 rounded-full bg-green-500/80" />
							<span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
						</div>
						<div className="p-6 font-mono text-sm leading-relaxed">
							<div className="text-muted-foreground">
								<span className="text-accent">$</span> git clone
								git@github.com:geostorm-ai/geostorm.git
							</div>
							<div className="text-muted-foreground">
								<span className="text-accent">$</span> cd geostorm
							</div>
							<div className="text-muted-foreground">
								<span className="text-accent">$</span> docker compose up -d
							</div>
							<div className="mt-3 text-green-400">
								&#10003; GeoStorm running at http://localhost:8080
							</div>
							<div className="text-green-400">&#10003; Sample data loaded (90 days)</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
