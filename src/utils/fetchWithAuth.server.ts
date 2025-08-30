// // src/utils/fetchWithSSRAuth.ts
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import refreshAccessToken from "@/utils/refreshAccessToken";
// import axios, { AxiosRequestConfig } from "axios";

// export async function fetchWithAuthServer(
//   input?: string,
//   config?: AxiosRequestConfig
// ) {
//   const cookieStore = cookies();
//   const refreshToken = (await cookieStore).get("refresh_token")?.value;
//   const accessToken = (await cookieStore).get("access_token")?.value;

//   if (!refreshToken) {
//     redirect("/auth/login");
//   }

//   // Buat instance axios supaya lebih mudah diatur
//   const axiosInstance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     ...config,
//   });

//   try {
//     // Coba request pertama
//     const res = await axiosInstance(input || "");
//     return res;
//   } catch (err: any) {
//     // Kalau Unauthorized (401), coba refresh token
//     if (err.response?.status === 401 && refreshToken) {
//       const resRefresh = await refreshAccessToken(false, {
//         headers: {
//           Cookie: `refresh_token=${refreshToken}`,
//         },
//       });

//       if (resRefresh.refreshed) {
//         // Update Authorization header
//         axiosInstance.defaults.headers.Authorization = `Bearer ${resRefresh.newAccessToken}`;

//         // Retry request
//         return await axiosInstance(input || "");
//       }
//     }

//     throw err;
//   }
// }
