import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function BlogSkeletonCard({ size }: { size: number }) {
    return (
        Array.from({ length: size }).map((_, idx) =>
            <Card key={idx} className="bg-background p-8 h-full">
                <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-4 overflow-hidden">
                    <Skeleton
                        className="w-full h-full"
                    />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center font-medium">
                        <Skeleton className="mr-2 w-4 h-4" />
                        <Skeleton className="h-2 w-16" />
                    </div>
                    <Skeleton className="h-2 w-32" />
                </div>
                <Skeleton className="mb-3 h-4 w-32" />
                <Skeleton className="mb-4 h-2 w-64" />
                <Skeleton className="h-2 w-24" />
            </Card>
        )
    )
}
