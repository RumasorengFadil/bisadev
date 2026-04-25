import { Pagination } from "./pagination.type";

export interface PaginationFilter<T> extends Pagination<T> {
  filters: {
    minPrice: number;
    maxPrice: number;
  };
}
