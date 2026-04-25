import { Pagination as PaginationProps } from "@/types/pagination.type";
import { ChevronLeft, ChevronRight } from "lucide-react";


export function Pagination<T>({ meta, data, handlePageChange }: PaginationProps<T>) {
    const { currentPage, total, lastPage } = meta;
    return (
        <>  
            {lastPage > 1 && (
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-gray-600">
                        Showing {data.length} items
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-2 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-lg disabled:opacity-50"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: meta.lastPage }, (_, i) => i + 1).map(
                                (page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-1 rounded-lg cursor-pointer ${currentPage === page
                                            ? "bg-primary text-primary-foreground"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            )}
                        </div>

                        <button
                            onClick={() => handlePageChange(Math.min(meta.lastPage, currentPage + 1))}
                            disabled={currentPage === meta.lastPage}
                            className="p-2 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-lg disabled:opacity-50"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
