"use client"
import StatsSkeleton from "@/components/StatsSkeleton";
import { Card } from "@/components/ui/card";
import { useFindBlogStats } from "@/features/dashboard/blog/hooks/use-find-blog-stats.hook";
import { FileText, Eye, PlusCircle } from "lucide-react";
import Link from "next/link";

export function PageClient() {
  const { data: stats } = useFindBlogStats();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl">Dashboard</h1>
        <p className="">Welcome to the Impacthink admin panel</p>
      </div>

      <div className="p-4">
        <div className="mb-8">
          <h1 className="text-3xl">Blogs</h1>
          <p className="">Manage your blogs</p>
        </div>

        {stats ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-lg shadow-md p-6 gap-0">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <FileText size={24} />
              </div>
              <span className="text-3xl">{stats?.totalBlogPosts}</span>
            </div>
            <h3 className="text-lg mb-1">Total Posts</h3>
            <p className=" text-sm">All blog posts</p>
          </Card>

          <Card className="rounded-lg shadow-md p-6 gap-0">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <Eye size={24} />
              </div>
              <span className="text-3xl">{stats?.publishedCount}</span>
            </div>
            <h3 className="text-lg mb-1">Published</h3>
            <p className=" text-sm">Live on website</p>
          </Card>

          <Card className="rounded-lg shadow-md p-6 gap-0">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                <FileText size={24} />
              </div>
              <span className="text-3xl">{stats?.draftedCount}</span>
            </div>
            <h3 className="text-lg mb-1">Drafts</h3>
            <p className=" text-sm">Work in progress</p>
          </Card>
        </div>
          : <StatsSkeleton />}
      </div>

      <div className="rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/dashboard/blogs/create"
            className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#1a3e6b] hover:bg-gray-50 transition-colors"
          >
            <PlusCircle size={24} className="text-[#1a3e6b]" />
            <div>
              <h3 className="text-lg">Create New Post</h3>
              <p className=" text-sm">Write a new blog article</p>
            </div>
          </Link>

          <Link
            href="/dashboard/blogs"
            className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#1a3e6b] hover:bg-gray-50 transition-colors"
          >
            <FileText size={24} className="text-[#1a3e6b]" />
            <div>
              <h3 className="text-lg">Manage Posts</h3>
              <p className=" text-sm">View and edit existing posts</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
