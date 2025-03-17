import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "QuitGambling",
	description:
		"QuitGambling helps you overcome gambling addiction with powerful tools and support.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex min-h-screen flex-col bg-red-50">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}
