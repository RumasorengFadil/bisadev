import ExploreLayout from "@/Layouts/ExploreLayout";
import { Blog } from "@/typdata/blog";
import PageClient from "./PageClient";


async function getBlog(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/explore/${slug}`, {
        next: { revalidate: 60 }, // ISR, cache selama 60 detik
    });
    return res.json();
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;

    const blog: Blog = (await getBlog(slug)).data.blog;

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
        title: blog.title,
        description: blog.excerpt,
        keyword: blog.tags.map(tag => tag.tag.name),
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            url: `/explore/${slug}`,
            images: [
                {
                    url: blog.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
    };
}
export default async function Detail({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const data = (await getBlog((await params).slug)).data;

    return (
        <ExploreLayout>
            <PageClient
                blog={data.blog}
                prevBlog={data.prevBlog}
                nextBlog={data.nextBlog}
                relatedBlogs={data.relatedBlogs}
            />
        </ExploreLayout>
    )
}
