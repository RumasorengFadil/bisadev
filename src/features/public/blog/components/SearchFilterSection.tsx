"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryFilterContext } from "@/context/providers/query-filter-provider";
import { CategoryType } from "@/features/dashboard/categories/enums/category-type.enum";
import { useFindCategories } from "@/features/dashboard/categories/hooks/use-find-categories.hook";
import { BlogSearchParams } from "@/types/blog-search-params";
import { Search } from "lucide-react";

export default function SearchFilterSection() {

    const { updateFilter, updateSearch, localState } = useQueryFilterContext<BlogSearchParams>();

    const { data: categories, isLoading } = useFindCategories({ type: CategoryType.BLOG, limit: 5 })

    return (
        <section className="pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={localState.query}
                            onChange={(e) => updateSearch("query", e.target.value)}
                            className="w-full bg-primary/5 border font-medium border-white/10 rounded-2xl pl-10 pr-4 py-3 placeholder-gray-400 focus:outline-none focus:border-primary/50"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 shrink-0">
                        {!isLoading ? categories?.data?.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => updateFilter("category", category.name)}
                                className={`px-4 py-2 rounded-full transition-colors font-medium ${localState.category === category.name
                                    ? "bg-primary text-white"
                                    : "bg-primary/20 hover:bg-primary"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))
                            :
                            <div className="flex gap-2 items-center">
                                <Skeleton className="w-32 h-8 rounded-full" />
                                <Skeleton className="w-32 h-8 rounded-full" />
                                <Skeleton className="w-32 h-8 rounded-full" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}