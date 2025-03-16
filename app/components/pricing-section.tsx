import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function PricingSection() {
	return (
		<section id="pricing" className="w-full py-12 md:py-24">
			<div className="container mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
							Simple Pricing
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-700">
							Choose the plan that works for you.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-none sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
					<div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
						<div>
							<h3 className="text-xl font-bold text-black">Monthly</h3>
							<div className="mt-4 text-3xl font-bold text-black">$9.99</div>
							<p className="mt-1 text-sm text-gray-700">Billed monthly</p>
							<ul className="mt-4 space-y-2 text-sm">
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									Full access to all features
								</li>
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									24/7 support
								</li>
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									Community access
								</li>
							</ul>
						</div>
						<Button
							className="mt-6 bg-white border-red-600 text-red-600 hover:bg-red-50"
							variant="outline"
						>
							Subscribe Monthly
						</Button>
					</div>
					<div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-md">
						<div>
							<h3 className="text-xl font-bold text-black">Annual</h3>
							<div className="mt-4 text-3xl font-bold text-black">$89.99</div>
							<p className="mt-1 text-sm text-gray-700">
								$7.50/month, billed annually
							</p>
							<ul className="mt-4 space-y-2 text-sm">
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									Full access to all features
								</li>
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									24/7 priority support
								</li>
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									Community access
								</li>
								<li className="flex items-center text-gray-700">
									<ChevronRight className="mr-2 h-4 w-4 text-red-600" />
									Save 25% compared to monthly
								</li>
							</ul>
						</div>
						<Button className="mt-6 bg-red-600 hover:bg-red-700 text-white">
							Subscribe Annually
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
