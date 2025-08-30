"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { Auth } from "@/typdata/auth";
import { useEffect } from "react";

export default function HydrateAuth({ auth }: { auth: Auth }) {
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    setAuth(auth);
  }, [auth, setAuth]);

  return null; // tidak perlu render apa-apa
}
