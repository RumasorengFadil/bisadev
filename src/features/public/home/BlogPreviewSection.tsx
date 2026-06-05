import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { formatDate } from "@/utils/format-date.util";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogPreviewSection({ latestBlogs }: { latestBlogs: BlogResponse[] }) {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up">
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
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestBlogs.map((post, idx) => (
                        <Reveal key={post.id} direction="up" delay={idx * 0.1}>
                            <Link href={`/blog/${post.slug}/detail`} className="group">
                                <Card className="p-8 bg-background">
                                    <div className="aspect-video bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/5 rounded-xl mb-4 overflow-hidden">
                                        <img src={post.thumbnail_url ?? "_"} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400 mb-2">
                                        <Calendar size={14} className="mr-2" />
                                        {formatDate({ value: post.created_at })}
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-[#FFB700] transition-colors">{post.title}</h3>
                                    <p className="text-sm text-gray-400">{post.excerpt}</p>
                                </Card>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}