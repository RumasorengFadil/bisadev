"use client"
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { formatDate } from "@/utils/format-date.util";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import Link from "next/link";

export default function PageClient({ post, relatedPosts }: { post: BlogResponse, relatedPosts: BlogResponse[] }) {

  return (
    <div>
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-[#FFB700] hover:text-[#e6a500] mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center text-sm text-[#FFB700] bg-[#FFB700]/10 px-3 py-1 rounded-full mb-4">
              <Tag size={14} className="mr-2" />
              {post.category?.name}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author?.name}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {formatDate({ value: post.created_at, includeTime: true })}
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-[#FFB700]/20 to-transparent rounded-2xl overflow-hidden mb-12">
            <img src={post.thumbnail_url ?? "_"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <BlogCard post={relatedPost} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Button>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
