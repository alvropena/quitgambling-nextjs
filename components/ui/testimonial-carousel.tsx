"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
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
	days: number;
}

interface TestimonialCarouselProps {
	testimonials: Testimonial[];
}

export function TestimonialCarousel({
	testimonials,
}: TestimonialCarouselProps) {
	return (
		<section className="py-24">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-5xl font-bold mb-4">
						Real <span className="text-primary">recovery</span> stories
					</h2>
					<p className="text-xl text-muted-foreground mb-12">
						Join thousands who have transformed their lives with QUITTR
					</p>
				</div>

				<div className="relative mt-8">
					<Carousel
						opts={{
							align: "center",
							loop: true,
						}}
						className="w-full max-w-[800px] mx-auto"
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={testimonial.id}>
									<Card className="bg-card border shadow-sm">
										<CardContent className="p-8 relative">
											<div className="space-y-6">
												<div className="flex items-center gap-4">
													<div className="relative w-20 h-20 rounded-full bg-muted overflow-hidden">
														<Avatar className="w-full h-full">
															<AvatarFallback className="text-xl">
																{testimonial.initials}
															</AvatarFallback>
														</Avatar>
													</div>
													<div>
														<div className="text-xl font-medium">
															{testimonial.author}
														</div>
														<div className="text-lg text-primary">
															{testimonial.days} days gambling-free
														</div>
													</div>
												</div>
												<blockquote className="text-2xl leading-relaxed">
													&ldquo;{testimonial.quote}&rdquo;
												</blockquote>
												<div className="text-6xl font-bold text-muted/10 absolute bottom-8 right-8">
													{String(index + 1).padStart(2, "0")}
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="hidden md:block">
							<CarouselPrevious
								type="button"
								className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center"
							>
								<ChevronLeft className="h-6 w-6" />
							</CarouselPrevious>
							<CarouselNext
								type="button"
								className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center"
							>
								<ChevronRight className="h-6 w-6" />
							</CarouselNext>
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
