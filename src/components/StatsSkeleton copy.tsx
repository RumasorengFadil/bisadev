import { Skeleton } from "@/components/ui/skeleton";
import { HTMLAttributes } from "react";

export default function StatsSkeleton({ className, cardSize = "sm" }: { className?: string, cardSize?: 'sm' | 'md' | 'lg' }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard cardSize={cardSize} key={i} />
        ))}
      </div>
    </div>
  );
}

const getCardSizeStyle = (cardSize: 'sm' | 'md' | 'lg') => {
  if (cardSize === 'sm') return 'p-4';
  if (cardSize === 'md') return 'p-12';
  if (cardSize === 'lg') return 'p-20';
}
function SkeletonCard({ cardSize }: { cardSize: 'sm' | 'md' | 'lg' }) {
  return (
    <div className={`rounded-lg border bg-white ${getCardSizeStyle(cardSize)} space-y-3`}>
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-16" />
    </div>
  );
}