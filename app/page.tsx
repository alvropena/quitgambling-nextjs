import { HeroSection } from "@/components/hero-section";
import { WhySection } from "@/components/why-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { carouselTestimonials } from "@/constants/testimonials";

export default function Home() {
	return (
		<>
			<main className="pt-16">
				<HeroSection />
				<WhySection />
				<TestimonialsSection />
				<FeaturesSection />
				<TestimonialCarousel testimonials={carouselTestimonials} />
				<FAQSection />
				<CTASection />
			</main>
		</>
	);
}
