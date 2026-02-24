import { ArrowRight, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
	return (
		<section className="py-20 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-12 text-center md:p-20">
					{/* Background decoration */}
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
						<div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/5 blur-[80px]" />
					</div>

					<div className="relative">
						<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
							Start monitoring your AI visibility
						</h2>
						<p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
							GeoStorm is free, open source, and self-hosted. Deploy in under a minute with Docker.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<a
								href="https://github.com/geostorm-ai/geostorm"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" className="gap-2 text-base">
									<Github className="h-4 w-4" />
									Get Started
									<ArrowRight className="h-4 w-4" />
								</Button>
							</a>
							<a
								href="https://github.com/geostorm-ai/geostorm"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" variant="outline" className="gap-2 text-base">
									<Star className="h-4 w-4" />
									Star on GitHub
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
