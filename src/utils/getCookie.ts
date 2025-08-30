"use client"

export function getCookie(name: string) {
  const cookies = document.cookie.split(";").map((c) => c.trim());
  const cookie = cookies.find((c) => c.startsWith(name + "="));
  if (!cookie) return null;
  return decodeURIComponent(cookie.split("=")[1]);
}
