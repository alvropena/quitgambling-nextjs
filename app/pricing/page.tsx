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

const features = [
	"Block gambling sites",
	"Track your progress",
	"Community support",
	"Daily motivation",
	"24/7 chat support",
];

export default function PricingPage() {
	const [isAnnual, setIsAnnual] = useState(true);
	const monthlyPrice = 12.9;
	const annualMonthlyPrice = 9.9;
	const annualPrice = annualMonthlyPrice * 12;
	const savings = (
		((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) *
		100
	).toFixed(0);

	const currentPrice = isAnnual
		? annualMonthlyPrice.toFixed(2)
		: monthlyPrice.toFixed(2);

	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold tracking-tight mb-4">Pricing</h1>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Start your journey to recovery today
					</p>
				</div>

				<div className="max-w-md mx-auto mb-8">
					<div className="flex items-center justify-center gap-4">
						<span
							className={`text-sm ${!isAnnual ? "text-red-600 font-medium" : "text-gray-600"}`}
						>
							Monthly
						</span>
						<Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
						<span
							className={`text-sm ${isAnnual ? "text-red-600 font-medium" : "text-gray-600"}`}
						>
							Annual (Save {savings}%)
						</span>
					</div>
				</div>

				<Card className="border-2 max-w-md mx-auto">
					<CardHeader>
						<CardTitle>Premium Plan</CardTitle>
						<CardDescription>
							Everything you need to quit gambling
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="mb-6">
							<span className="text-4xl font-bold">${currentPrice}</span>
							<span className="text-gray-600 ml-2">/month</span>
						</div>
						<ul className="space-y-3">
							{features.map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<Check className="h-5 w-5 text-red-600" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Get Started</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
