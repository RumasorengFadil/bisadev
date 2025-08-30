"use client"
import axios, { AxiosRequestConfig } from "axios";

export default async function refreshAccessToken(
  rotate = true,
  config?: AxiosRequestConfig
) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/${
        rotate ? "refresh" : "refresh-no-rotate"
      }`,
      {},
      {
        withCredentials: true,
        headers: {
          ...(config?.headers || {}),
          "Content-Type": "application/json",
        },
        ...config,
      }
    );

    return {
      refreshed: true,
      newAccessToken: res.data.access_token,
    };
  } catch {
    return { refreshed: false };
  }
}
