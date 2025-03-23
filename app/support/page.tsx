export default function SupportPage() {
	return (
		<div className="container mx-auto max-w-6xl px-4 md:px-6 pt-32 pb-16">
			<div className="space-y-8">
				<h1 className="text-4xl font-bold tracking-tight">Support</h1>

				<div className="prose prose-lg max-w-none">
					<h2>How Can We Help You?</h2>
					<p>
						We&apos;re here to support you on your recovery journey. Below
						you&apos;ll find information about our support services and how to
						get help.
					</p>

					<h2>24/7 Crisis Support</h2>
					<p>
						If you&apos;re experiencing a gambling crisis, please contact our
						24/7 support line:
					</p>
					<ul>
						<li>Phone: 1-800-RECOVERY</li>
						<li>Text: HELP to 12345</li>
					</ul>

					<h2>Technical Support</h2>
					<p>
						Having issues with the app? Our technical support team is available:
					</p>
					<ul>
						<li>Email: support@quitgambling.app</li>
						<li>Response time: Within 24 hours</li>
					</ul>

					<h2>Frequently Asked Questions</h2>
					<p>
						Visit our{" "}
						<a href="/faq" className="text-primary hover:underline">
							FAQ page
						</a>{" "}
						for answers to common questions about using QuitGambling.
					</p>

					<h2>Community Support</h2>
					<p>Join our community of people in recovery:</p>
					<ul>
						<li>Discord Community</li>
						<li>Weekly Online Support Groups</li>
						<li>Recovery Forums</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
