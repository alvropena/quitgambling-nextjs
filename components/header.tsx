import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Menu, Ban } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
	return (
		<header className="fixed top-0 w-full z-50 flex justify-center px-4 py-4">
			<div className="container max-w-5xl bg-background/60 dark:bg-background/40 backdrop-blur-xl border-2 border-white/[0.15] dark:border-white/[0.1] shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full px-6">
				<nav className="flex items-center justify-between h-16">
					<Link href="/" className="font-bold text-xl flex items-center gap-2">
						<Ban className="h-6 w-6" />
						QuitGambling
					</Link>

					{/* Desktop Navigation - Hidden on Mobile */}
					<div className="hidden md:flex space-x-6">
						<Link
							href="/pricing"
							className="text-muted-foreground hover:text-foreground"
						>
							Pricing
						</Link>
						<Link
							href="/#features"
							className="text-muted-foreground hover:text-foreground"
						>
							Features
						</Link>
						<Link
							href="/#faq"
							className="text-muted-foreground hover:text-foreground"
						>
							FAQ
						</Link>
						<Link
							href="/blog"
							className="text-muted-foreground hover:text-foreground"
						>
							Blog
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						<Button className="hidden md:flex">
							<Download className="mr-2 h-4 w-4" />
							Download
						</Button>

						{/* Mobile Menu - Hidden on Desktop */}
						<div className="md:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Menu className="h-6 w-6" />
								</SheetTrigger>
								<SheetContent>
									<SheetHeader>
										<SheetTitle>Menu</SheetTitle>
									</SheetHeader>
									<div className="flex flex-col space-y-4 mt-6">
										<Link
											href="/pricing"
											className="text-lg font-medium text-muted-foreground hover:text-foreground"
										>
											Pricing
										</Link>
										<Link
											href="/#features"
											className="text-lg font-medium text-muted-foreground hover:text-foreground"
										>
											Features
										</Link>
										<Link
											href="/#faq"
											className="text-lg font-medium text-muted-foreground hover:text-foreground"
										>
											FAQ
										</Link>
										<Link
											href="/blog"
											className="text-lg font-medium text-muted-foreground hover:text-foreground"
										>
											Blog
										</Link>
									</div>
									<div className="absolute bottom-6 left-6 right-6">
										<Button className="w-full">
											<Download className="mr-2 h-5 w-5" />
											Download
										</Button>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
