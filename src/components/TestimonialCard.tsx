import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-current" style={{ color: '#1a3e6b' }} />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{content}"</p>
      <div>
        <div className="font-bold" style={{ color: '#1a3e6b' }}>{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}
