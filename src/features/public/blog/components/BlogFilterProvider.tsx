"use client"
import { QueryFilterProvider } from "@/context/providers/query-filter-provider";
import { BlogStatus } from "@/features/dashboard/blog/enums/blog-status.enum";
import BlogSection from "@/features/public/blog/components/BlogSection";
import SearchFilterSection from "@/features/public/blog/components/SearchFilterSection";
import { BlogSearchParams } from "@/types/blog-search-params";
import { useSearchParams } from "next/navigation";

export default function BlogFilterProvider() {
    const params = useSearchParams();
    const query = params.get("query");
    const category = params.get("category");

    return (
        <QueryFilterProvider<BlogSearchParams>
            defaultValues={{
                query: query ?? "",
                category: category ?? "",
                status: BlogStatus.PUBLISHED
            }}
        >
            <div className="space-y-6">
                <div>
                    {/* Search & Filter */}
                    <SearchFilterSection />

                    {/* Blog Section */}
                    <BlogSection />
                </div>
            </div>
        </QueryFilterProvider>

    );
}
