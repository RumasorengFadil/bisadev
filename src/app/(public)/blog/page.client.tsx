"use client"
import BlogCard from "@/components/BlogCard";
import { Pagination } from "@/components/Pagination";
import { useFindBlogs } from "@/features/dashboard/blog/hooks/use-find-blogs.hook";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { CategoryResponse } from "@/features/dashboard/categories/components/types";
import { useQueryFilters } from "@/hooks/use-query-filter.hook";
import { BlogSearchParams } from "@/types/blog-search-params";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { Search } from "lucide-react";

export default function PageClient({ categories, initialBlogData }: { categories: CategoryResponse[], initialBlogData: { data: BlogResponse[], meta: PaginationMeta } }) {
  const { updateFilter, updateSearch, debouncedParams, localState } = useQueryFilters<BlogSearchParams>({
    defaultValues: {
      query: "",
      category: "",
      status: "published"
    }
  });
  const { data: blogs } = useFindBlogs({ params: debouncedParams, initialData: initialBlogData })

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FFB700]">Insights</span> & Articles
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Expert perspectives on technology, business, and digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
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
                className="w-full bg-primary/5 border font-medium border-white/10 rounded-2xl pl-12 pr-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => updateFilter("category", category.name)}
                  className={`px-4 py-2 rounded-full text-white font-medium transition-colors ${localState.category === category.name
                    ? "bg-primary/40"
                    : "bg-primary hover:bg-primary/40"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs?.data?.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-medium">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs?.data?.map((post, index) => (
                <BlogCard post={post} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      {blogs &&
        <Pagination<BlogResponse> data={blogs.data} meta={blogs.meta} handlePageChange={(page: number) => updateFilter("page", page)} />
      }
    </div>
  );
}
