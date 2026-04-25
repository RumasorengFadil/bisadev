import { SearchParams } from "./search-params.type";

export interface BlogSearchParams extends SearchParams{
    sort?: string,
    category?: string,
}