import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton() {
  return (
    <div className="space-y-6">
      {/* Table */}
      <div className="rounded-lg border bg-white p-4 space-y-4">
        {/* Search & filter */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-7 gap-4 py-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="grid grid-cols-7 gap-4 items-center">
      {/* Course */}
      <div className="flex items-center gap-3 col-span-2">
        <Skeleton className="h-10 w-10 rounded-md" />
        <Skeleton className="h-4 w-40" />
      </div>

      {/* Instructor */}
      <Skeleton className="h-4 w-24" />

      {/* Level */}
      <Skeleton className="h-6 w-20 rounded-full" />

      {/* Price */}
      <Skeleton className="h-4 w-20" />

      {/* Duration */}
      <Skeleton className="h-4 w-16" />

      {/* Actions */}
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </div>
  );
}
