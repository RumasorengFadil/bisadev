import { findBlog } from "@/features/dashboard/blog/api.server";
import { PageClient } from "./page.client";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const data: any = await findBlog(id, 0);

    return (
        <div className="space-y-6">
            <PageClient data={data} />
        </div>)
}