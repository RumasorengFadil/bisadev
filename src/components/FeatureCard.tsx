import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4" style={{ color: '#1a3e6b' }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: '#1a3e6b' }}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
