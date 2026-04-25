import { SearchParams } from "./search-params.type";

export interface ProductSearchParams extends SearchParams {
  sort?: string;
}