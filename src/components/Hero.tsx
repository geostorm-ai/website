import { CloudLightning } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

export function Hero() {
	return (
		<div className="relative w-full h-screen overflow-hidden bg-black">
			<AnimatedShaderBackground />

			{/* Hero Content Overlay */}
			<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
				{/* Trust Badge */}
				<div className="mb-8 animate-shader-fade-in-down">
					<div className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 backdrop-blur-md border border-cyan-300/30 rounded-full text-sm">
						<span className="text-cyan-300">
							<CloudLightning className="h-4 w-4" />
						</span>
						<span className="text-cyan-100">
							Open Source &middot; MIT Licensed
						</span>
					</div>
				</div>

				<div className="text-center space-y-6 max-w-5xl mx-auto px-4">
					{/* Main Heading */}
					<div className="space-y-2">
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent animate-shader-fade-in-up shader-delay-200">
							Monitor Your
						</h1>
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-300 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-shader-fade-in-up shader-delay-400">
							AI Visibility
						</h1>
					</div>

					{/* Subtitle */}
					<div className="max-w-3xl mx-auto animate-shader-fade-in-up shader-delay-600">
						<p className="text-lg md:text-xl lg:text-2xl text-cyan-100/90 font-light leading-relaxed">
							Developers discover tools by asking AI. GeoStorm
							monitors how GPT, Claude, Gemini, and Perplexity
							perceive and recommend your software — and alerts
							you when something changes.
						</p>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-shader-fade-in-up shader-delay-800">
						<a
							href="https://github.com/geostorm-ai/geostorm"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
						>
							View on GitHub
						</a>
						<a
							href="#quickstart"
							className="px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-300/30 hover:border-cyan-300/50 text-cyan-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm inline-flex items-center justify-center gap-2"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
