// components/skeleton/SkeletonCard.tsx
export function SkeletonCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow animate-pulse">
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="mt-4 h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
