import type { Blog, StrapiResponse, StrapiSingleResponse } from './types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('localhost', '127.0.0.1') || 'http://127.0.0.1:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Debug logging
console.log('Environment check:', {
    STRAPI_URL,
    tokenAvailable: !!STRAPI_API_TOKEN,
    tokenLength: STRAPI_API_TOKEN?.length
});

if (!STRAPI_API_TOKEN) {
    console.error('STRAPI_API_TOKEN is not set in environment variables');
}

const fetchConfig: RequestInit = {
    headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
    },
    cache: 'no-store' as RequestCache
};

export async function getBlogs(page = 1, pageSize = 10) {
    const url = `${STRAPI_URL}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    try {
        console.log('Making request to:', url);
        console.log('With headers:', JSON.stringify(fetchConfig.headers, null, 2));

        const response = await fetch(url, fetchConfig);
        const responseText = await response.text();

        if (!response.ok) {
            console.error('API Error Details:', {
                status: response.status,
                statusText: response.statusText,
                responseBody: responseText,
                requestHeaders: fetchConfig.headers,
                responseHeaders: Object.fromEntries(response.headers.entries())
            });
            throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
        }

        const data: StrapiResponse<Blog> = JSON.parse(responseText);
        console.log('Successfully fetched blogs:', data);
        return data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}

export async function getBlogBySlug(slug: string) {
    const url = `${STRAPI_URL}/api/blogs?populate=*&filters[slug][$eq]=${slug}`;

    try {
        const response = await fetch(url, fetchConfig);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Failed to fetch blog:', {
                status: response.status,
                statusText: response.statusText,
                errorText,
                headers: Object.fromEntries(response.headers.entries())
            });
            throw new Error(`Failed to fetch blog: ${response.status} ${response.statusText}`);
        }

        const data: StrapiResponse<Blog> = await response.json();
        if (data.data.length === 0) {
            throw new Error('Blog not found');
        }

        return data.data[0];
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw error;
    }
} 