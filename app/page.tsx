import { HeroSection } from "@/app/components/hero-section";
import { FeaturesSection } from "@/app/components/features-section";
import { PricingSection } from "@/app/components/pricing-section";
import { FAQSection } from "@/app/components/faq-section";
import { CTASection } from "@/app/components/cta-section";

export default function Home() {
	return (
		<>
			<main className="pt-16">
				<HeroSection />
				<FeaturesSection />
				<PricingSection />
				<FAQSection />
				<CTASection />
			</main>
		</>
	);
}
