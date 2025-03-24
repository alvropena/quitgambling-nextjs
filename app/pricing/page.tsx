"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

export default function PricingPage() {
	const [isYearly, setIsYearly] = useState(true);

	const price = isYearly ? 99 : 9;
	const period = isYearly ? "/year" : "/month";
	const savings = "Save 20%";

	return (
		<div className="container mx-auto max-w-6xl px-4 md:px-6 pt-32 pb-16">
			<div className="flex flex-col items-center justify-center">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold mb-2">Pricing</h1>
					<p className="text-muted-foreground">
						Choose the plan that works best for you
					</p>
				</div>
				<div className="flex items-center gap-4 mb-8">
					<span className="text-sm font-medium">Monthly</span>
					<Switch checked={isYearly} onCheckedChange={setIsYearly} />
					<div className="flex items-center gap-2">
						<span className="text-sm font-medium">Yearly</span>
						<span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 px-2 py-0.5 rounded-full">
							{savings}
						</span>
					</div>
				</div>

				<Card className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>Pro Plan</CardTitle>
						<CardDescription>
							Everything you need for your recovery journey
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-baseline justify-center">
							<span className="text-3xl font-bold">${price}</span>
							<span className="ml-1 text-sm text-muted-foreground">
								{period}
							</span>
						</div>
						<ul className="mt-6 space-y-3">
							<li className="flex items-center">
								<Check className="w-4 h-4 mr-2" />
								Advanced Sobriety Tracker
							</li>
							<li className="flex items-center">
								<Check className="w-4 h-4 mr-2" />
								Trigger Analysis Dashboard
							</li>
							<li className="flex items-center">
								<Check className="w-4 h-4 mr-2" />
								Premium Blocking Tools
							</li>
							<li className="flex items-center">
								<Check className="w-4 h-4 mr-2" />
								Goal Setting & Progress Tracking
							</li>
							<li className="flex items-center">
								<Check className="w-4 h-4 mr-2" />
								Priority Support
							</li>
						</ul>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Start Your Journey</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
