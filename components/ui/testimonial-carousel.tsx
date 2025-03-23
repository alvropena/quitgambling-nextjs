"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
	id: string;
	quote: string;
	author: string;
	initials: string;
	role: string;
}

interface TestimonialCarouselProps {
	testimonials: Testimonial[];
}

export function TestimonialCarousel({
	testimonials,
}: TestimonialCarouselProps) {
	return (
		<section className="py-24">
			<div className="container mx-auto max-w-5xl px-4 md:px-6">
				<div className="text-center mb-16">
					<div className="inline-block rounded-full bg-muted/50 px-4 py-1.5 mb-4 text-sm font-medium">
						Success Stories
					</div>
					<h2 className="text-4xl font-bold mb-4">
						Join thousands who have already quit
					</h2>
					<p className="text-xl text-muted-foreground">
						Real stories from real people who transformed their lives
					</p>
				</div>

				<Carousel
					opts={{
						align: "center",
						loop: true,
					}}
					className="w-full max-w-4xl mx-auto"
				>
					<CarouselContent>
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.id}>
								<div className="flex flex-col items-center text-center space-y-8 p-6">
									<div className="flex gap-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={`star-${testimonial.id}-${i}`}
												className="h-4 w-4 fill-current"
											/>
										))}
									</div>
									<blockquote className="text-xl md:text-2xl leading-relaxed">
										&ldquo;{testimonial.quote}&rdquo;
									</blockquote>
									<div className="flex flex-col items-center space-y-4">
										<Avatar className="h-16 w-16">
											<AvatarFallback className="text-xl">
												{testimonial.initials}
											</AvatarFallback>
										</Avatar>
										<div className="text-center">
											<div className="font-medium">{testimonial.author}</div>
											<div className="text-sm text-muted-foreground">
												{testimonial.role}
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="flex justify-center gap-4 mt-8">
						<CarouselPrevious variant="ghost" className="relative -left-0" />
						<CarouselNext variant="ghost" className="relative -right-0" />
					</div>
				</Carousel>
			</div>
		</section>
	);
}
