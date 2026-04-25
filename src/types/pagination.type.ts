import { PaginationMeta } from "./pagination-meta.type";

export interface Pagination<T> {
    meta: PaginationMeta;
    data: T[];
    handlePageChange: (page: number) => void;
}
