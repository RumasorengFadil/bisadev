"use server";

// export async function fetchWithAuth(input: RequestInfo, init?: RequestInit) {
//     if (typeof window === "undefined") {
//         // Server-side (SSR)
//         const { fetchWithAuthServer } = await import("./fetchWithAuth.server");
//         return await fetchWithAuthServer(input, init);
//     } else {
//         // Client-side (CSR)
//     const { fetchWithAuthClient } = await import("./fetchWithAuth.client");
//     return await fetchWithAuthClient(input, init);
//   }
// }
