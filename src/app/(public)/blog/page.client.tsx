"use client"
import { Card } from "@/components/ui/card";
import { Calendar, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function PageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "E-commerce", "Technology", "Business"];

  const blogPosts = [
    {
      id: "1",
      title: "The Future of E-Commerce in 2026",
      excerpt: "Discover the latest trends shaping online retail, from AI-powered personalization to social commerce integration.",
      date: "March 28, 2026",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800",
      author: "Sarah Martinez",
    },
    {
      id: "2",
      title: "Why Your Business Needs a Custom Website",
      excerpt: "Learn how a tailored web presence can transform your brand identity and increase conversion rates significantly.",
      date: "March 15, 2026",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      author: "John Anderson",
    },
    {
      id: "3",
      title: "Modern POS Systems: A Complete Guide",
      excerpt: "Everything you need to know about choosing and implementing the right Point of Sale system for your retail business.",
      date: "March 8, 2026",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800",
      author: "Michael Chen",
    },
    {
      id: "4",
      title: "10 Web Design Trends to Watch in 2026",
      excerpt: "From immersive 3D experiences to minimalist interfaces, explore the design trends defining modern websites.",
      date: "February 28, 2026",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
      author: "Emily Roberts",
    },
    {
      id: "5",
      title: "How to Scale Your Online Marketplace",
      excerpt: "Proven strategies for growing your multi-vendor platform and managing increasing traffic and transactions.",
      date: "February 20, 2026",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      author: "Sarah Martinez",
    },
    {
      id: "6",
      title: "Digital Transformation for Small Businesses",
      excerpt: "A step-by-step guide to modernizing your business operations with technology on any budget.",
      date: "February 12, 2026",
      category: "Business",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      author: "John Anderson",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111827] border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB700]/50"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-[#FFB700] text-[#0F172A]"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}/detail`} className="group">
                  <Card className="bg-background p-8">
                    <div className="aspect-video relative bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/5 rounded-xl mb-4 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {post.date}
                      </div>
                      <span className="text-[#FFB700] text-xs">{post.category}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-[#FFB700] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{post.excerpt}</p>
                    <p className="text-xs text-gray-500">By {post.author}</p>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
