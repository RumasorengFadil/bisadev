import { Filter } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function CatalogContent({ showFilters = false, showContent = true, resetFilter, children }: { showFilters?: boolean, showContent: boolean, children: React.ReactNode, resetFilter?: () => void }) {
    return (
        <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
            {showContent ? (
                <>
                    {children}
                </>
            ) : (
                <div className="text-center py-16">
                    <Filter className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                    <h3 className="text-neutral-900 mb-2">No item found</h3>
                    <p className="text-neutral-600 mb-6">Try adjusting your filters</p>
                    {resetFilter &&
                        <Button
                            onClick={resetFilter}
                        >
                            Clear Filters
                        </Button>
                    }
                </div>
            )}
        </div>
    )
}