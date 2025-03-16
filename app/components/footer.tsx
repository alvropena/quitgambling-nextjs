import Link from "next/link";

// Custom social media icon components
const TikTokIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		aria-label="TikTok"
	>
		<title>TikTok</title>
		<path
			d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-3.168h-3.766v13.206c0 1.55-1.257 2.807-2.807 2.807a2.807 2.807 0 0 1-2.807-2.807 2.807 2.807 0 0 1 2.807-2.807c.155 0 .309.013.458.037V7.821a6.532 6.532 0 0 0-.458-.016 6.553 6.553 0 0 0-6.553 6.553A6.553 6.553 0 0 0 7.797 20.91a6.553 6.553 0 0 0 6.553-6.553V9.98a8.741 8.741 0 0 0 4.97 1.54V7.754a5.127 5.127 0 0 1-4.97-2.192h4.97Z"
			fill="currentColor"
		/>
	</svg>
);

const GitHubIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		aria-label="GitHub"
	>
		<title>GitHub</title>
		<path
			d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
			fill="currentColor"
		/>
	</svg>
);

const InstagramIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="h-5 w-5"
		aria-label="Instagram"
	>
		<title>Instagram</title>
		<path
			d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
			fill="currentColor"
		/>
	</svg>
);

export function Footer() {
	return (
		<footer className="border-t py-6 bg-white">
			<div className="container mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
					<div className="flex flex-col items-center md:items-start gap-2">
						<p className="text-sm text-gray-700 text-center md:text-left">
							© {new Date().getFullYear()} Latino Excellence LLC.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-6 items-center">
						<Link
							href="/support"
							className="text-sm text-gray-700 hover:text-red-600"
						>
							Support
						</Link>
						<Link
							href="/privacy"
							className="text-sm text-gray-700 hover:text-red-600"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="text-sm text-gray-700 hover:text-red-600"
						>
							Terms
						</Link>
						<Link
							href="/blog"
							className="text-sm text-gray-700 hover:text-red-600"
						>
							Blog
						</Link>
					</div>

					<div className="flex gap-8 items-center justify-center">
						<Link
							href="https://github.com/alvropena/quitgambling"
							className="text-gray-700 hover:text-red-600 p-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon />
						</Link>
						<Link
							href="https://instagram.com/quitgambling.app"
							className="text-gray-700 hover:text-red-600 p-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<InstagramIcon />
						</Link>
						<Link
							href="https://tiktok.com/@quitgambling.app"
							className="text-gray-700 hover:text-red-600 p-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TikTokIcon />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
