export default function PrivacyPage() {
	return (
		<div className="container mx-auto max-w-6xl px-4 md:px-6 pt-32 pb-16">
			<div className="space-y-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight mb-2">
						Privacy Policy
					</h1>
					<p className="text-muted-foreground">Last updated: March 23, 2025</p>
				</div>

				<div className="prose prose-lg max-w-none prose-p:text-muted-foreground prose-headings:text-foreground">
					<h2>1. Information We Collect</h2>
					<p>
						We collect information that you provide directly to us when using
						the QuitGambling app. This may include personal information such as
						your name, email address, and usage data to help track your recovery
						progress.
					</p>

					<h2>2. How We Use Your Information</h2>
					<p>
						We use the information we collect to provide and improve our
						services, personalize your experience, and send you important
						updates about your recovery journey.
					</p>

					<h2>3. Data Security</h2>
					<p>
						We implement appropriate security measures to protect your personal
						information. Your data is encrypted and stored securely on our
						servers.
					</p>

					<h2>4. Information Sharing</h2>
					<p>
						We do not sell or share your personal information with third parties
						except as described in this policy. We may share anonymous,
						aggregated data for research purposes.
					</p>

					<h2>5. Your Rights</h2>
					<p>
						You have the right to access, correct, or delete your personal
						information. Contact us if you would like to exercise any of these
						rights.
					</p>
				</div>
			</div>
		</div>
	);
}
