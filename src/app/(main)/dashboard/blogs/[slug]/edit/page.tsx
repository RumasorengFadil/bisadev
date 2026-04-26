import { findBlog } from "@/features/dashboard/blog/api.server";
import { PageClient } from "./page.client";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const data: any = await findBlog(slug, 0);

    return (
        <div className="space-y-6">
            <PageClient data={data} />
        </div>)
}