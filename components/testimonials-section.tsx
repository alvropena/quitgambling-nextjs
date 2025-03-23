import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { gridTestimonials } from "@/constants/testimonials";

export function TestimonialsSection() {
	return (
		<section className="py-24">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<div className="inline-block rounded-full bg-muted/50 px-4 py-1.5 mb-4 text-sm font-medium">
						Client testimonials
					</div>
					<h2 className="text-4xl lg:text-5xl font-bold mb-4">
						Thousands of people vouch for our gambling recovery app,{" "}
						<span className="text-muted-foreground">
							and there&apos;s a good reason.
						</span>
					</h2>
					<p className="text-xl text-muted-foreground">
						People&apos;s lives have been changed forever with the use of our
						app, leading to unspeakable amounts of gratitude.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{gridTestimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="flex flex-col items-center text-center space-y-6 p-6"
						>
							<blockquote className="text-xl leading-relaxed">
								&ldquo;{testimonial.quote}&rdquo;
							</blockquote>
							<div className="flex items-center gap-4">
								<Avatar>
									<AvatarFallback>{testimonial.initials}</AvatarFallback>
								</Avatar>
								<div className="text-left">
									<div className="font-semibold">{testimonial.author}</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.days} days gambling-free
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
