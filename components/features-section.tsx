import Image from "next/image";

export function FeaturesSection() {
	return (
		<section id="features" className="w-full py-12 md:py-24">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
					<div className="space-y-2">
						<h2 className="text-5xl font-bold mb-4">
							Powerful tools for your{" "}
							<span className="text-primary">recovery</span> journey
						</h2>
						<p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
							Everything you need to break free and stay free from gambling
							addiction.
						</p>
					</div>
				</div>

				<div className="space-y-24">
					{/* Feature 1 - Image Left */}
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="w-full md:w-1/2">
							<div className="aspect-square relative bg-muted rounded-3xl overflow-hidden">
								<Image
									src="/features/tracker.jpg"
									alt="Sobriety Tracker Interface"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 space-y-4">
							<h3 className="text-2xl font-bold">Sobriety Tracker</h3>
							<p className="text-muted-foreground text-lg">
								Track your gambling-free days and celebrate milestones. Our
								intuitive tracker helps you stay motivated and focused on your
								recovery journey.
							</p>
						</div>
					</div>

					{/* Feature 2 - Image Right */}
					<div className="flex flex-col md:flex-row-reverse items-center gap-12">
						<div className="w-full md:w-1/2">
							<div className="aspect-square relative bg-muted rounded-3xl overflow-hidden">
								<Image
									src="/features/analysis.jpg"
									alt="Trigger Analysis Dashboard"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 space-y-4">
							<h3 className="text-2xl font-bold">Trigger Analysis</h3>
							<p className="text-muted-foreground text-lg">
								Identify and understand your gambling triggers with our advanced
								analysis tools. Get insights into patterns and develop better
								coping strategies.
							</p>
						</div>
					</div>

					{/* Feature 3 - Image Left */}
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="w-full md:w-1/2">
							<div className="aspect-square relative bg-muted rounded-3xl overflow-hidden">
								<Image
									src="/features/blocking.jpg"
									alt="Blocking Tools Interface"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 space-y-4">
							<h3 className="text-2xl font-bold">Blocking Tools</h3>
							<p className="text-muted-foreground text-lg">
								Protect yourself with powerful blocking tools that prevent
								access to gambling sites and apps. Stay safe and focused on your
								recovery.
							</p>
						</div>
					</div>

					{/* Feature 4 - Image Right */}
					<div className="flex flex-col md:flex-row-reverse items-center gap-12">
						<div className="w-full md:w-1/2">
							<div className="aspect-square relative bg-muted rounded-3xl overflow-hidden">
								<Image
									src="/features/goals.jpg"
									alt="Goal Setting Dashboard"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 space-y-4">
							<h3 className="text-2xl font-bold">Goal Setting</h3>
							<p className="text-muted-foreground text-lg">
								Set and track personal recovery goals. Our goal-setting features
								help you stay accountable and celebrate your progress along the
								way.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
