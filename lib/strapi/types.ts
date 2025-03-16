export interface StrapiResponse<T> {
    data: T[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface StrapiSingleResponse<T> {
    data: T;
}

interface RichTextContent {
    type: string;
    children: { type: string; text: string }[];
}

export interface Blog {
    id: number;
    documentId: string;
    title: string;
    content: RichTextContent[];
    slug: string;
    description: string | null;
    published: boolean;
    published_date: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featured_image: {
        data: {
            id: number;
            attributes: {
                url: string;
                formats: {
                    thumbnail: { url: string };
                    small: { url: string };
                    medium: { url: string };
                    large: { url: string };
                };
            };
        } | null;
    } | null;
} 