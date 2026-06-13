"use client";

import { useQueryFilters } from "@/hooks/use-query-filter.hook";
import {
    createContext,
    ReactNode,
    useContext,
    useMemo,
} from "react";

type QueryFilterContextValue<T extends object> = ReturnType<
    typeof useQueryFilters<T>
>;

const QueryFilterContext = createContext<any>(null);

type ProviderProps<T extends object> = {
    children: ReactNode;
    defaultValues: T;
    debounceDelay?: number;
};

export function QueryFilterProvider<T extends object>({
    children,
    defaultValues,
    debounceDelay,
}: ProviderProps<T>) {
    const filters = useQueryFilters({
        defaultValues,
        debounceDelay,
    });

    const value = useMemo(
        () => filters,
        [
            filters.params,
            filters.localState,
            filters.debouncedParams,
        ]
    );

    return (
        <QueryFilterContext.Provider value={value}>
            {children}
        </QueryFilterContext.Provider>
    );
}

export function useQueryFilterContext<T extends object>() {
    const context =
        useContext<QueryFilterContextValue<T> | null>(
            QueryFilterContext
        );

    if (!context) {
        throw new Error(
            "useQueryFilterContext must be used inside QueryFilterProvider"
        );
    }

    return context;
}