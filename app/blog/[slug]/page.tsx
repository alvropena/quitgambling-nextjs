import { getBlogBySlug } from "@/lib/strapi/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface BlogDetailPageProps {
	params: {
		slug: string;
	};
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
	try {
		const blog = await getBlogBySlug(params.slug);

		return (
			<div className="container mx-auto max-w-6xl px-4 md:px-6 py-24">
				<article>
					{blog.featured_image?.data && (
						<div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.data.attributes.url}`}
								alt={blog.title}
								fill
								className="object-cover"
							/>
						</div>
					)}
					<h1 className="text-4xl font-bold tracking-tight mb-4">
						{blog.title}
					</h1>
					<div className="text-gray-600 mb-8">
						{new Date(
							blog.published_date || blog.createdAt,
						).toLocaleDateString()}
					</div>
					{blog.description && (
						<div className="text-xl text-gray-600 mb-8">{blog.description}</div>
					)}
					<div className="prose prose-lg max-w-none">
						<ReactMarkdown>
							{blog.content
								.map((block) =>
									block.children.map((child) => child.text).join("\n"),
								)
								.join("\n\n")}
						</ReactMarkdown>
					</div>
				</article>
			</div>
		);
	} catch (error) {
		notFound();
	}
}
