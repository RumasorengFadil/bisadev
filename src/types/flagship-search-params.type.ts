import { SearchParams } from "./search-params.type";

export interface FlasghipSearchParams extends SearchParams{
    maxPrice?: number,
    minPrice?: number,
}