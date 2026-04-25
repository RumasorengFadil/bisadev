import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

export async function createServerApi(): Promise<AxiosInstance> {
  const cookieStore = await cookies();

  const cookieString = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      Cookie: cookieString,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  api.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response?.status === 404) {
        console.log("error", error.response);
        const { notFound } = require("next/navigation");
        notFound();
      }

      return Promise.reject(error);
    }
  );

  return api;
}
