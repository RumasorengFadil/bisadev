import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    href: string;
    src: string
}

export default function BlogCard({ title, excerpt, date, category, href, src }: BlogCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200">
                <Image src={src} alt={title} fill />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="px-3 py-1 rounded-full bg-gray-100 font-medium" style={{ color: '#1a3e6b' }}>
                        {category}
                    </span>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {date}
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a3e6b' }}>{title}</h3>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <Button variant={"link"} className="flex cursor-pointer items-center gap-2 font-medium hover:opacity-70 transition-opacity" style={{ color: '#1a3e6b' }} asChild>
                    <Link href={href}>
                        Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
