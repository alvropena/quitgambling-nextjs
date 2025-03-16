import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CTASection() {
	return (
		<section className="w-full py-16 md:py-24 bg-red-600 text-white">
			<div className="container mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
						Ready to Take Control?
					</h2>
					<p className="mx-auto max-w-[600px] text-xl text-white/90">
						Start your journey to a gambling-free life today.
					</p>
					<Button
						size="lg"
						className="mt-6 bg-white text-red-600 hover:bg-white/90 text-lg px-8 py-6 h-auto font-bold shadow-lg transform transition-transform hover:scale-105"
					>
						<Download className="mr-3 h-6 w-6" />
						Download Now
					</Button>
				</div>
			</div>
		</section>
	);
}
