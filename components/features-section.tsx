import Image from "next/image";
import { BarChart, Clock } from "lucide-react";

export function FeaturesSection() {
	return (
		<section id="features" className="w-full py-12 md:py-24 bg-white/50">
			<div className="container mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
							Key Features
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-700">
							Simple tools to help you break free from gambling addiction.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
					<div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
						<Clock className="h-12 w-12 text-red-600" />
						<h3 className="text-xl font-bold text-black">Sobriety Tracker</h3>
						<p className="text-sm text-gray-700 text-center">
							Track your gambling-free days and celebrate milestones.
						</p>
					</div>
					<div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
						<BarChart className="h-12 w-12 text-red-600" />
						<h3 className="text-xl font-bold text-black">Trigger Analysis</h3>
						<p className="text-sm text-gray-700 text-center">
							Identify and understand your gambling triggers.
						</p>
					</div>
					<div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
						<Image
							src="/logo.svg"
							alt="QuitGambling Logo"
							width={48}
							height={48}
							className="h-12 w-12"
						/>
						<h3 className="text-xl font-bold text-black">Blocking Tools</h3>
						<p className="text-sm text-gray-700 text-center">
							Block gambling sites and apps to prevent relapse.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
