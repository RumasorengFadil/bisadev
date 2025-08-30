/**
 * Verifikasi refresh token ke Laravel backend
 */
export async function verifyRefreshToken(refreshToken: string): Promise<boolean> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify-refresh`, {
      method: "POST",
      headers: {
        cookie: `refresh_token=${refreshToken}`,
      },
      credentials: "include",
    });

    if (!res.ok) return false;

    const data = await res.json();
    return data.valid === true;
  } catch (err) {
    console.error("Error verifying refresh token", err);
    return false;
  }
}
