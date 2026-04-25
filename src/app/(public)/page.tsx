import { findBlogs } from "@/features/dashboard/blog/api.server";
import { PageClient } from "./page.client";

export default async function Page() {
    const latestBlogs = await findBlogs({ limit: 3, sort: "created_at:desc" });
    return (
        <PageClient latestBlogs={latestBlogs.data} />
    )
}