import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { findLatestBlogs } from "@/features/dashboard/blog/api.server";
import Link from "next/link";
import { Suspense } from "react";
import { BlogSkeletonCard } from "../blog/components/BlogSkeletonCard";

async function BlogList() {
    const latestBlogs = await findLatestBlogs();

    return latestBlogs.data.map((post, idx) => (
        <BlogCard post={post} key={idx} />
    ))
}
export default function BlogPreviewSection() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
                        <p className="text-gray-400">Stay updated with the latest trends and tips</p>
                    </div>
                    <Button variant="secondary" asChild>
                        <Link href="/blog">
                            View All
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Suspense fallback={<BlogSkeletonCard size={3} />}>
                        <BlogList />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}