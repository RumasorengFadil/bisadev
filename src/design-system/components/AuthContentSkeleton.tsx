import { Skeleton } from "@/components/ui/skeleton";

export function AuthContentSkeleton() {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Main Content */}
            <main className="flex-1 space-y-4">
                {/* Content Blocks */}
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full" />
                ))}
            </main>
        </div>
    );
}
