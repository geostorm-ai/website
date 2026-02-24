import { Badge } from "@/components/ui/badge";

const technologies = [
	{ name: "FastAPI", category: "Backend" },
	{ name: "Python", category: "Backend" },
	{ name: "Astro", category: "Frontend" },
	{ name: "React", category: "Frontend" },
	{ name: "TailwindCSS", category: "Frontend" },
	{ name: "Recharts", category: "Frontend" },
	{ name: "SQLite", category: "Database" },
	{ name: "Docker", category: "Infrastructure" },
	{ name: "APScheduler", category: "Backend" },
	{ name: "OpenRouter", category: "AI" },
];

export function TechStack() {
	return (
		<section className="border-t border-border/50 bg-muted/30 py-20 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto mb-10 max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Built with</h2>
					<p className="text-lg text-muted-foreground">
						A focused stack with no unnecessary complexity. Everything runs in a single container.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-3">
					{technologies.map((tech) => (
						<Badge key={tech.name} variant="secondary" className="px-4 py-2 text-sm font-medium">
							{tech.name}
						</Badge>
					))}
				</div>
			</div>
		</section>
	);
}
