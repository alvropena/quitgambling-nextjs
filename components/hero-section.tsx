import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div className="container mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl">
							Break free from gambling addiction
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
							QuitGambling helps you overcome gambling addiction with powerful
							tools and support.
						</p>
					</div>
					<div className="space-x-4">
						<Button className="bg-red-600 hover:bg-red-700 text-white">
							<Download className="mr-2 h-4 w-4" />
							Download App
						</Button>
						<Button
							variant="outline"
							className="border-red-600 text-red-600 hover:bg-red-50"
						>
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
