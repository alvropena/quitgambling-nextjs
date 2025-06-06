import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
	return (
		<section className="bg-background">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="grid md:grid-cols-2 gap-12 py-24">
					<div className="flex flex-col justify-center space-y-6 text-center md:text-left">
						<h1 className="text-5xl md:text-6xl font-bold leading-tight">
							Break Free from Gambling Addiction
						</h1>

						<h2 className="text-2xl md:text-3xl font-medium">
							The #1 App To Quit Gambling Forever
						</h2>

						<p className="text-muted-foreground">
							Endorsed by addiction recovery experts and backed by research
						</p>

						<div className="pt-4 flex justify-center md:justify-start">
							<Button size="lg">
								<Download className="mr-2 h-5 w-5" />
								Download Now
							</Button>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<div className="bg-muted rounded-3xl w-full max-w-xs md:max-w-sm h-[500px]">
							{/* Phone mockup or app screenshot would go here */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
