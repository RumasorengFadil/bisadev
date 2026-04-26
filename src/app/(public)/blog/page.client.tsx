"use client"
import { Pagination } from "@/components/Pagination";
import { Card } from "@/components/ui/card";
import { useFindBlogs } from "@/features/dashboard/blog/hooks/use-find-blogs.hook";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { CategoryResponse } from "@/features/dashboard/categories/components/types";
import { useQueryParam } from "@/hooks/use-query-param";
import { PaginationMeta } from "@/types/pagination-meta.type";
import { formatDate } from "@/utils/format-date.util";
import { Calendar, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";

export default function PageClient({ blogs, meta, categories }: { blogs: BlogResponse[], meta: PaginationMeta, categories: CategoryResponse[] }) {
  const { setParam, getParam } = useQueryParam();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";
  const categoryParam = searchParams.get("category") ?? ""
  const pageParam = Number(searchParams.get("page")) ?? 1;

  const [query, setQuery] = useState(queryParam ?? "");
  const [debounceQuery] = useDebounce(query, 300);

  const { data } = useFindBlogs({ initialData: { data: blogs, meta }, params: { query: debounceQuery, page: pageParam, category: categoryParam } })

  const handleDebouncePage = useDebouncedCallback((value) => {
    setParam("page", value.toString())
  }, 300)

  const handleDebounceCategory = useDebouncedCallback((value: string) => {
    setParam("category", value)
  }, 300)

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FFB700]">Insights</span> & Articles
            </h1>
            <p className="text-xl text-gray-400">
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
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setParam("query", e.target.value)
                }}
                className="w-full bg-primary/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleDebounceCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-colors ${categoryParam === category.name
                    ? "bg-[#FFB700] text-[#0F172A]"
                    : "bg-primary/40 hover:bg-primary"
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
          {data?.data?.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs?.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}/detail`} className="group">
                  <Card className="bg-background p-8">
                    <div className="aspect-video relative bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/5 rounded-xl mb-4 overflow-hidden">
                      <Image
                        src={post.thumbnail_url ?? "_"}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {formatDate({ value: post.created_at })}
                      </div>
                      <span className="text-[#FFB700] text-xs">{post.category?.name}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-[#FFB700] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{post.excerpt}</p>
                    <p className="text-xs text-gray-500">By {post.author?.name}</p>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      {blogs &&
        <Pagination<BlogResponse> data={blogs} meta={meta} handlePageChange={(page: number) => handleDebouncePage(page)} />
      }
    </div>
  );
}
