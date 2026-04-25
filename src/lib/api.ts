// lib/api.ts
import getCSRFToken from "@/utils/get-csrf-token.util";
import axios from "axios";
import { useTopLoader } from "nextjs-toploader";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const refreshClient = axios.create({
  baseURL: api.defaults.baseURL,
  withCredentials: true,
});

refreshClient.interceptors.request.use((config) => {
  const csrfToken = getCSRFToken();

  if (csrfToken) {
    config.headers["x-csrf-token"] = csrfToken;
  }

  return config;
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  failedQueue = [];
};

api.interceptors.request.use(async (config) => {
  useTopLoader().start();

  const method = config.method?.toUpperCase();

  const useCSRF = config.xcsrf ?? ["POST", "PUT", "PATCH", "DELETE"].includes(method || "");

  if (useCSRF) {
    const csrfToken = getCSRFToken();

    if (csrfToken) {
      config.headers["x-csrf-token"] = csrfToken;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    useTopLoader().done();
    return response;
  },
  async (error) => {
    useTopLoader().done();
    const originalRequest = error.config;

    if (originalRequest?.skipAuthRefresh) return Promise.reject(error);

    const isCsrfError = error.response?.status === 403 && error.response?.data?.error?.message === "Invalid CSRF token";

    if ((error.response?.status === 401 || isCsrfError) && !originalRequest._retry) {
      console.log("REFRESH CALLED", Date.now());

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = "Bearer " + token;
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await api.post(
          "/auth/refresh",
          {},
          {
            skipAuthRefresh: true,
          },
        );
        const newToken = data.accessToken;

        api.defaults.headers.Authorization = `Bearer ${newToken}`;

        processQueue(null, newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);

        throw err;
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
