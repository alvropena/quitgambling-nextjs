import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CTASection() {
	return (
		<section className="w-full py-16 md:py-24">
			<div className="container mx-auto max-w-5xl px-4 md:px-6">
				<div className="bg-secondary rounded-[2rem] overflow-hidden">
					<div className="flex flex-col items-center justify-center space-y-4 text-center py-16 md:py-24 px-4">
						<h2 className="text-4xl md:text-5xl font-bold">
							Ready to finally quit?
						</h2>
						<p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
							Start your journey with our gambling recovery app and become the
							best version of yourself. The benefits feel great, trust us - The
							QuitGambling Team
						</p>
						<Button>
							<Download className="mr-2 h-5 w-5" />
							Download
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
