import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';
import { BlogResponse } from '@/features/dashboard/blog/types/index.type';
import { formatDate } from '@/utils/format-date.util';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    href: string;
    src: string
}

export default function BlogCard({ post }: {post:BlogResponse}) {
    return (
        <Link key={post.id} href={`/blog/${post.slug}/detail`} className="group">
            <Card className="bg-background p-8 h-full">
                <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-4 overflow-hidden">
                    <Image
                        src={post.thumbnail_url ?? "_"}
                        alt={post.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                    />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center font-medium">
                        <Calendar size={14} className="mr-2" />
                        {formatDate({ value: post.created_at })}
                    </div>
                    <span className="text-primary text-xs font-medium">{post.category?.name}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 font-medium">{post.excerpt}</p>
                <p className="text-xs text-gray-500 font-medium">By {post.author?.name}</p>
            </Card>
        </Link>
    );
}
