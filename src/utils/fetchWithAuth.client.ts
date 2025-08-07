"use client";

import { useAuthStore } from "@/store/useAuthStore";

export async function fetchWithAuthClient(input: RequestInfo, init?: RequestInit) {
  const { accessToken, setAccessToken } = useAuthStore.getState();

  let authInit: RequestInit = {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  };

  let res = await fetch(input, authInit);

  // Coba refresh jika expired
  if (res.status === 401) {
    const refreshed = await tryRefreshAccessToken(setAccessToken);
    if (refreshed) {
      const newAccessToken = useAuthStore.getState().accessToken;
      authInit.headers = {
        ...(authInit.headers || {}),
        Authorization: `Bearer ${newAccessToken}`,
      };
      res = await fetch(input, authInit);
    } else {
      throw new Error("Unauthorized");
    }
  }

  return res;
}

async function tryRefreshAccessToken(setAccessToken: (token: string) => void) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) return false;

  const data = await res.json();
  setAccessToken(data.access_token);
  return true;
}
