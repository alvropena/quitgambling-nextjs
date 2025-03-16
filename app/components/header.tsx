import Link from "next/link";

export function Header() {
	return (
		<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
			<div className="container mx-auto px-4">
				<nav className="flex items-center justify-between h-16">
					<Link href="/" className="font-bold text-xl text-red-600">
						QuitGambling
					</Link>
					<div className="space-x-6">
						<Link
							href="/#features"
							className="text-gray-600 hover:text-red-600"
						>
							Features
						</Link>
						<Link href="/#pricing" className="text-gray-600 hover:text-red-600">
							Pricing
						</Link>
						<Link href="/#faq" className="text-gray-600 hover:text-red-600">
							FAQ
						</Link>
						<Link href="/blog" className="text-gray-600 hover:text-red-600">
							Blog
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}
