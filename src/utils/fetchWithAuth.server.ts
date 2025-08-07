// lib/fetchWithAuthServer.ts
import { cookies } from "next/headers";

export async function fetchWithAuthServer(input: RequestInfo, init?: RequestInit): Promise<Response> {
  const cookieStore = cookies();
  let accessToken = (await cookieStore).get("access_token")?.value;

  // Siapkan request awal
  let authInit: RequestInit = {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include", // penting agar refresh_token dikirim
    cache: "no-store", // jangan pakai cache untuk request auth
  };

  let res = await fetch(input, authInit);

  // Kalau expired
  if (res.status === 401) {
    // Coba refresh token
    const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {
      method: "POST",
      credentials: "include",
      headers: {
        cookie: cookieStore.toString(), // kirim cookies dari server
      },
      cache: "no-store",
    });

    if (!refreshRes.ok) {
      // Gagal refresh
      return res;
    }

    const data = await refreshRes.json();
    accessToken = data.access_token;

    // Coba ulang request asli dengan token baru
    authInit.headers = {
      ...(authInit.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    };

    res = await fetch(input, authInit);
  }

  return res;
}
