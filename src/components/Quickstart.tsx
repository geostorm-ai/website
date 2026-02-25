import { Check, Copy } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button
			type="button"
			onClick={copy}
			className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
			aria-label="Copy to clipboard"
		>
			{copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
			{copied ? "Copied" : "Copy"}
		</button>
	);
}

const runCommand =
	"docker run -d -p 8080:8080 -v geostorm-data:/app/data --name geostorm ghcr.io/geostorm-ai/geostorm";

export function Quickstart() {
	return (
		<section id="quickstart" className="py-20 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-3xl">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Quickstart</h2>
						<p className="text-lg text-muted-foreground">
							Get GeoStorm running locally in under a minute. All you need is Docker.
						</p>
					</div>

					<div className="space-y-6">
						{/* Step 1 */}
						<div>
							<div className="mb-2 flex items-center gap-3">
								<span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
									1
								</span>
								<h3 className="font-semibold">Run GeoStorm</h3>
							</div>
							<div className="overflow-hidden rounded-lg border border-border/50 bg-card">
								<div className="flex items-center justify-between border-b border-border/50 bg-muted/50 px-4 py-2">
									<span className="font-mono text-xs text-muted-foreground">bash</span>
									<CopyButton text={runCommand} />
								</div>
								<pre className="overflow-x-auto p-4 font-mono text-sm">
									<code>{runCommand}</code>
								</pre>
							</div>
						</div>

						{/* Step 2 */}
						<div>
							<div className="mb-2 flex items-center gap-3">
								<span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
									2
								</span>
								<h3 className="font-semibold">Open the dashboard</h3>
							</div>
							<p className="ml-10 text-muted-foreground">
								Visit{" "}
								<code className="rounded bg-muted px-1.5 py-0.5 text-sm font-medium text-foreground">
									http://localhost:8080
								</code>{" "}
								— a demo project with 90 days of synthetic monitoring data is ready to explore
								immediately.
							</p>
						</div>

						{/* Step 3 */}
						<div>
							<div className="mb-2 flex items-center gap-3">
								<span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
									3
								</span>
								<h3 className="font-semibold">Start monitoring</h3>
							</div>
							<p className="ml-10 text-muted-foreground">
								Add your{" "}
								<a
									href="https://openrouter.ai/"
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/80"
								>
									OpenRouter
								</a>{" "}
								API key, create a project, and start tracking what LLMs are saying about your
								software. Monitoring runs automatically on a schedule.
							</p>
						</div>
					</div>

					{/* Requirements */}
					<div className="mt-10 rounded-lg border border-border/50 bg-muted/30 p-6">
						<h4 className="mb-3 font-semibold">Requirements</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-500" />
								Docker
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-500" />
								OpenRouter API key (for monitoring)
							</li>
							<li className="flex items-center gap-2">
								<Check className="h-4 w-4 text-green-500" />
								No other external dependencies
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
