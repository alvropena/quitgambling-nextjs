import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
	return (
		<section id="faq" className="w-full py-12 md:py-24">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-5xl font-bold mb-4">
							Frequently Asked <span className="text-primary">Questions</span>
						</h2>
						<p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
							Find answers to common questions about QuitGambling
						</p>
					</div>
				</div>
				<div className="mx-auto max-w-2xl py-8">
					<div className="w-full border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1" className="px-4 border-b">
								<AccordionTrigger className="text-lg font-medium hover:text-primary py-4">
									How does QuitGambling help with gambling addiction?
								</AccordionTrigger>
								<AccordionContent className="pb-4 text-muted-foreground">
									QuitGambling combines blocking technology, behavioral
									tracking, and community support to help you overcome gambling
									addiction and maintain sobriety. Our app provides tools to
									identify triggers, track your progress, and connect with
									others on the same journey.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2" className="px-4 border-b">
								<AccordionTrigger className="text-lg font-medium hover:text-primary py-4">
									Is my data private?
								</AccordionTrigger>
								<AccordionContent className="pb-4 text-muted-foreground">
									Yes, we take privacy seriously. Your data is encrypted and
									never shared with third parties without your explicit consent.
									We understand the sensitive nature of recovery and ensure your
									information remains confidential.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4" className="px-4 border-b">
								<AccordionTrigger className="text-lg font-medium hover:text-primary py-4">
									How do I cancel my subscription?
								</AccordionTrigger>
								<AccordionContent className="pb-4 text-muted-foreground">
									You can cancel your subscription at any time through the app
									settings or by contacting our support team. There are no
									cancellation fees, and you&apos;ll continue to have access
									until the end of your billing period.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-5" className="px-4 border-b">
								<AccordionTrigger className="text-lg font-medium hover:text-primary py-4">
									What payment methods do you accept?
								</AccordionTrigger>
								<AccordionContent className="pb-4 text-muted-foreground">
									We accept all major credit cards, Apple Pay, and Google Pay.
									For privacy, the charge will appear on your statement under a
									discreet name. We also offer the option to pay annually for a
									discounted rate.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem
								value="item-6"
								className="px-4 border-b last:border-0"
							>
								<AccordionTrigger className="text-lg font-medium hover:text-primary py-4">
									Is the app available on both iPhone and Android?
								</AccordionTrigger>
								<AccordionContent className="pb-4 text-muted-foreground">
									Yes, QuitGambling is available for both iOS and Android
									devices. You can download it from the App Store or Google Play
									Store. The app syncs across all your devices, so you can
									access your progress anywhere.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
