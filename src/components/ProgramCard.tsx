import { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

interface ProgramCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    href: string;
}

export default function ProgramCard({ icon, title, description, features, href }: ProgramCardProps) {
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6" style={{ color: '#333940' }}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#333940' }}>{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#333940' }} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button
                className="w-full py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#333940', color: 'white' }}
                asChild
            >
                <Link href={href}>
                    Learn More
                </Link>
            </Button>
        </div>
    );
}
