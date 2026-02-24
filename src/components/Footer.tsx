import { CloudLightning, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
	return (
		<footer className="border-t border-border/50">
			<div className="mx-auto max-w-6xl px-6 py-12">
				<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
					<div className="flex items-center gap-2">
						<CloudLightning className="h-5 w-5 text-primary" />
						<span className="font-semibold">GeoStorm</span>
					</div>

					<div className="flex items-center gap-6">
						<a
							href="https://github.com/geostorm-ai/geostorm"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							<Github className="h-5 w-5" />
						</a>
					</div>
				</div>

				<Separator className="my-6" />

				<div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
					<p>MIT License. Built by the GeoStorm community.</p>
					<p>Monitor how AI sees your software.</p>
				</div>
			</div>
		</footer>
	);
}
