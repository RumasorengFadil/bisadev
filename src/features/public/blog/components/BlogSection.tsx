"use client"
import BlogCard from "@/components/BlogCard";
import { useQueryFilterContext } from "@/context/providers/query-filter-provider";
import { useFindBlogs } from "@/features/dashboard/blog/hooks/use-find-blogs.hook";
import { BlogSearchParams } from "@/types/blog-search-params";
import { isArrayEmpty } from "@/utils/isEmptyArray";
import { BlogSkeletonCard } from "./BlogSkeletonCard";

export default function BlogSection() {
    const { debouncedParams } = useQueryFilterContext<BlogSearchParams>();

    const { data: blogs, isLoading } = useFindBlogs({ params: debouncedParams });


    return (
        <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {!isLoading ?
                        blogs?.data?.map((post) => (
                            <BlogCard post={post} key={post.id} />
                        ))
                        :
                        <BlogSkeletonCard size={6} />
                    }
                </div>

                {!isLoading && isArrayEmpty(blogs?.data ?? []) &&
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                    </div>
                }
            </div>
        </section>
    )
}

