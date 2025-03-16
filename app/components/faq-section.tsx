import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
	return (
		<section id="faq" className="w-full py-12 md:py-24 bg-white/50">
			<div className="container mx-auto max-w-6xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
							Frequently Asked Questions
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-700">
							Find answers to common questions about QuitGambling.
						</p>
					</div>
				</div>
				<div className="mx-auto max-w-3xl py-8">
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1" className="border-b border-gray-200">
							<AccordionTrigger className="text-lg font-medium text-black hover:text-red-600">
								How does QuitGambling help with gambling addiction?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700">
								QuitGambling combines blocking technology, behavioral tracking,
								and community support to help you overcome gambling addiction
								and maintain sobriety. Our app provides tools to identify
								triggers, track your progress, and connect with others on the
								same journey.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2" className="border-b border-gray-200">
							<AccordionTrigger className="text-lg font-medium text-black hover:text-red-600">
								Is my data private?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700">
								Yes, we take privacy seriously. Your data is encrypted and never
								shared with third parties without your explicit consent. We
								understand the sensitive nature of recovery and ensure your
								information remains confidential.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4" className="border-b border-gray-200">
							<AccordionTrigger className="text-lg font-medium text-black hover:text-red-600">
								How do I cancel my subscription?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700">
								You can cancel your subscription at any time through the app
								settings or by contacting our support team. There are no
								cancellation fees, and you&apos;ll continue to have access until
								the end of your billing period.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
}
