'use client'
import DeleteFormDialog from "@/components/DeleteFormDialog";
import { Pagination } from "@/components/Pagination";
import StatsSkeleton from "@/components/StatsSkeleton";
import TableSkeleton from "@/components/TableSkeleton";
import TooltipWrapper from "@/components/TooltipWarapper";
import { BlogStatus } from "@/features/dashboard/blog/enums/blog-status.enum";
import useDeleteBlog from "@/features/dashboard/blog/hooks/use-delete-blog.hook";
import { useFindBlogStats } from "@/features/dashboard/blog/hooks/use-find-blog-stats.hook";
import { useFindBlogs } from "@/features/dashboard/blog/hooks/use-find-blogs.hook";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { useQueryParam } from "@/hooks/use-query-param";
import { SearchParams } from "@/types/search-params.type";
import { formatDate } from "@/utils/format-date.util";
import { Edit, Eye, FileText, PlusCircle, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function PageClient({ searchParams }: { searchParams: SearchParams }) {
    const [page, setPage] = useState(searchParams.page ?? 1);
    const [query, setQuery] = useState(searchParams.query ?? "");
    const [status, setStatus] = useState(searchParams.status ?? "");
    const { setParam } = useQueryParam();

    const [debounceQuery] = useDebounce(query, 300);
    const [debounceStatus] = useDebounce(status, 300);
    const [debouncePage] = useDebounce(page, 300);

    const { data: blogs, isLoading } = useFindBlogs({ query: debounceQuery, status: debounceStatus, page });
    const { data: stats } = useFindBlogStats();
    const { mutate: deleteBlog } = useDeleteBlog();

    useEffect(() => {
        setParam("query", debounceQuery ?? "")
    }, [debounceQuery])
    useEffect(() => {
        setParam("status", debounceStatus ?? "")
    }, [debounceStatus])
    useEffect(() => {
        setParam("page", debouncePage.toString() ?? "")
    }, [debouncePage])

    const handleDelete = (id: string) => {
        deleteBlog(id)
    };
    return <>
        <div className="p-4">
            <div className="mb-8">
                <h1 className="text-3xl text-gray-900 mb-2">Blogs</h1>
                <p className="text-gray-600">Manage your blogs</p>
            </div>

            {stats ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                            <FileText size={24} />
                        </div>
                        <span className="text-3xl text-gray-900">{stats?.totalBlogPosts}</span>
                    </div>
                    <h3 className="text-lg text-gray-900 mb-1">Total Posts</h3>
                    <p className="text-gray-600 text-sm">All blog posts</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                            <Eye size={24} />
                        </div>
                        <span className="text-3xl text-gray-900">{stats?.publishedCount}</span>
                    </div>
                    <h3 className="text-lg text-gray-900 mb-1">Published</h3>
                    <p className="text-gray-600 text-sm">Live on website</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                            <FileText size={24} />
                        </div>
                        <span className="text-3xl text-gray-900">{stats?.draftedCount}</span>
                    </div>
                    <h3 className="text-lg text-gray-900 mb-1">Drafts</h3>
                    <p className="text-gray-600 text-sm">Work in progress</p>
                </div>
            </div>
                : <StatsSkeleton />}
        </div>
        {!isLoading ? <div className="p-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl text-gray-900 mb-2">Blog Posts</h1>
                    <p className="text-gray-600">Manage your blog content</p>
                </div>
                <Link
                    href="/dashboard/blogs/create"
                    className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-[#1a3e6b] text-white rounded-md hover:bg-[#2a5a8f] transition-colors"
                >
                    <PlusCircle size={20} />
                    New Post
                </Link>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by title, category, or author..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3e6b] focus:border-transparent"
                        />
                    </div>
                    <div className="w-full md:w-48">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3e6b] focus:border-transparent"
                        >
                            <option value={BlogStatus.PUBLISHED}>Published</option>
                            <option value={BlogStatus.DRAFT}>Draft</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {blogs?.data?.length === 0 ? (
                    <div className="p-12 text-center">
                        <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg text-gray-900 mb-2">No blog posts yet</h3>
                        <p className="text-gray-600 mb-6">Get started by creating your first post</p>
                        <Link
                            href="/dashboard/blogs/create"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3e6b] text-white rounded-md hover:bg-[#2a5a8f] transition-colors"
                        >
                            <PlusCircle size={20} />
                            Create Post
                        </Link>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm text-gray-700">Title</th>
                                <th className="px-6 py-3 text-left text-sm text-gray-700">Category</th>
                                <th className="px-6 py-3 text-left text-sm text-gray-700">Author</th>
                                <th className="px-6 py-3 text-left text-sm text-gray-700">Status</th>
                                <th className="px-6 py-3 text-left text-sm text-gray-700">Date</th>
                                <th className="px-6 py-3 text-right text-sm text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {blogs?.data?.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="text-gray-900">{post.title}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{post.category?.name}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">{post.author?.name}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block px-3 py-1 text-sm rounded-full ${post.status === "published"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm">
                                        {formatDate({ value: post.created_at })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            {post.status === "published" && (
                                                <TooltipWrapper title="Preview Blog">
                                                    <Link
                                                        href={`/blog/${post.slug}/detail`}
                                                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                                        title="View"
                                                    >
                                                        <Eye size={18} />
                                                    </Link>
                                                </TooltipWrapper>

                                            )}
                                            <TooltipWrapper title="Edit Blog">
                                                <Link
                                                    href={`/dashboard/blogs/${post.slug}/edit/`}
                                                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                            </TooltipWrapper>


                                            <DeleteFormDialog confirmDelete={handleDelete} deletingItem={{ id: post.slug }} />

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                        {blogs?.data &&
                            <Pagination<BlogResponse> data={blogs?.data} meta={blogs.meta} handlePageChange={(page: number) => { setPage(page) }} />
                        }
                    </table>
                )}
            </div>
        </div> : <TableSkeleton />}

    </>
}