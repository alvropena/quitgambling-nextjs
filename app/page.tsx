import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
	return (
		<>
			<main className="pt-16">
				<HeroSection />
				<FeaturesSection />
				<FAQSection />
				<CTASection />
			</main>
		</>
	);
}
