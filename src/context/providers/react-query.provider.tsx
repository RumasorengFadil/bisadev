"use client";

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/extract-error-message";
export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,

            retry: (failureCount, error: any) => {
              if (error?.response?.status >= 400 && error?.response?.status < 500) {
                return false;
              }
              return failureCount < 2;
            },
          },
        },
        queryCache: new QueryCache({
          onError: (error: any) => {
            const errorMes = extractErrorMessage(error);
            if (errorMes === "No refresh token") return;
            if (errorMes === "Invalid CSRF token") return;
            toast.error(errorMes);
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => {
            const errorMes = extractErrorMessage(error);
            if (errorMes === "No refresh token") return;
            if (errorMes === "Invalid CSRF token") return;
            toast.error(errorMes);
          },
        }),
      })
  );


  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
