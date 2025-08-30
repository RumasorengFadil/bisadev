// "use client";

// import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { useAuthStore } from "@/store/useAuthStore";
// import refreshAccessToken from "@/utils/refreshAccessToken";

// export async function fetchWithAuthClient<T = any>(
//   input: string,
//   config?: AxiosRequestConfig
// ): Promise<AxiosResponse<T>> {
//   const { accessToken, setAccessToken } = useAuthStore.getState();

//   let authConfig: AxiosRequestConfig = {
//     ...config,
//     headers: {
//       ...(config?.headers || {}),
//       Authorization: `Bearer ${accessToken}`,
//     },
//     withCredentials: true,
//   };

//   try {
//     return await axios(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, authConfig);
//   } catch (err: any) {
//     // Jika token expired
//     if (err.response?.status === 401 || !accessToken) {
//       const data = await refreshAccessToken();
//       if (data.refreshed) {
//         setAccessToken(data.newAccessToken);

//         authConfig.headers = {
//           ...(authConfig.headers || {}),
//           Authorization: `Bearer ${data.newAccessToken}`,
//         };

//         return await axios(`${process.env.NEXT_PUBLIC_API_URL}/${input}`, authConfig);
//       } else {
//         console.error("Unauthorized");
//         throw err;
//       }
//     }
//     throw err;
//   }
// }