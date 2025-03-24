import { getBlogs } from "@/lib/strapi/api";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default async function BlogPage() {
	const { data: blogs } = await getBlogs();

	return (
		<div className="container mx-auto max-w-6xl px-4 md:px-6 pt-32 pb-16 min-h-screen">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
				<p className="text-muted-foreground">
					Insights and resources for your recovery journey
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogs.map((blog) => (
					<Link
						key={blog.id}
						href={`/blog/${blog.slug.trim()}`}
						className="block group"
					>
						<Card className="overflow-hidden">
							{blog.featured_image?.data && (
								<div className="relative h-48 w-full">
									<Image
										src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.data.attributes.url}`}
										alt={blog.title}
										fill
										className="object-cover"
									/>
								</div>
							)}
							<CardContent className="p-4">
								<h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
									{blog.title.trim()}
								</h2>
								{blog.description && (
									<p className="text-muted-foreground mb-4">
										{blog.description}
									</p>
								)}
								<div className="text-sm text-muted-foreground">
									{new Date(
										blog.published_date || blog.createdAt,
									).toLocaleDateString()}
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
