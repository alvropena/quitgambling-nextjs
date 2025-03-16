import { getBlogs } from "@/lib/strapi/api";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
	const { data: blogs } = await getBlogs();

	return (
		<div className="container mx-auto px-4 py-8 pt-24">
			<h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogs.map((blog) => (
					<Link
						key={blog.id}
						href={`/blog/${blog.slug.trim()}`}
						className="block group"
					>
						<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
									{blog.title.trim()}
								</h2>
								{blog.description && (
									<p className="text-gray-600 mb-4">{blog.description}</p>
								)}
								<div className="text-sm text-gray-500">
									{new Date(
										blog.published_date || blog.createdAt,
									).toLocaleDateString()}
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
