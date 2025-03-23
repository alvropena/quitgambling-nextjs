import { Brain, Target, Users, Zap, Shield, Trophy } from "lucide-react";

export function WhySection() {
	const benefits = [
		{
			title: "Increased Focus",
			icon: Brain,
		},
		{
			title: "Better Relationships",
			icon: Users,
		},
		{
			title: "More Energy",
			icon: Zap,
		},
		{
			title: "Higher Motivation",
			icon: Target,
		},
		{
			title: "Financial Security",
			icon: Shield,
		},
		{
			title: "Greater Confidence",
			icon: Trophy,
		},
	];

	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-5xl font-bold mb-4">
						Experience <span className="text-primary">life changing</span>{" "}
						benefits
					</h2>
					<p className="text-xl text-muted-foreground mb-12">
						Unlock a healthier, more focused, and fulfilling life when you
						choose recovery.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="flex items-center justify-center gap-3 p-4 rounded-full bg-muted/50"
						>
							<div className="p-2">
								<benefit.icon className="w-6 h-6" />
							</div>
							<span className="text-lg font-medium">{benefit.title}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
