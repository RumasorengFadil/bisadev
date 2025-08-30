import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton() {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r flex flex-col justify-between p-4">
                <div className="space-y-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-5 w-24" />
                    </div>

                    {/* Create New Blog Button */}
                    <Skeleton className="h-10 w-full rounded-md" />

                    {/* Menu Items */}
                    <div className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <Skeleton className="h-5 w-5 rounded" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="space-y-1">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-20" />
                    </div>
                </div>
            </aside>
        </div>
    );
}
