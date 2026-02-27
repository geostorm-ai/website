import { CloudLightning, Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const closeMobile = () => setMobileOpen(false);

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
				<a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
					<CloudLightning className="h-6 w-6 text-primary" />
					<span>GeoStorm</span>
				</a>

				<div className="hidden items-center gap-8 md:flex">
					<a
						href="#features"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Features
					</a>
					<a
						href="#how-it-works"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						How It Works
					</a>
					<a
						href="#quickstart"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Quickstart
					</a>
					<a
						href="#faq"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						FAQ
					</a>
					<a
						href="https://github.com/geostorm-ai/geostorm"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="sm" className="gap-2">
							<Github className="h-4 w-4" />
							GitHub
						</Button>
					</a>
				</div>

				<button
					type="button"
					className="md:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle navigation"
				>
					{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{mobileOpen && (
				<div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
					{/* biome-ignore lint/a11y/noStaticElementInteractions: closing mobile nav on link click */}
					<div
						className="flex flex-col gap-4 px-6 py-4"
						onClick={closeMobile}
						onKeyDown={(e) => e.key === "Escape" && closeMobile()}
					>
						<a href="#features" className="text-sm font-medium text-muted-foreground">
							Features
						</a>
						<a href="#how-it-works" className="text-sm font-medium text-muted-foreground">
							How It Works
						</a>
						<a href="#quickstart" className="text-sm font-medium text-muted-foreground">
							Quickstart
						</a>
						<a href="#faq" className="text-sm font-medium text-muted-foreground">
							FAQ
						</a>
						<a
							href="https://github.com/geostorm-ai/geostorm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline" size="sm" className="w-full gap-2">
								<Github className="h-4 w-4" />
								GitHub
							</Button>
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
