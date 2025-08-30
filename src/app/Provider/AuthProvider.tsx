// components/AuthProvider.tsx
"use client";

import { Auth } from "@/typdata/auth";
import { createContext, useContext, useState, ReactNode } from "react";


const AuthContext = createContext<{
  auth: Auth | null;
  setAuth: (Auth: Auth) => void;
}>({
  auth: null,
  setAuth: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children, initialAuth }: { children: ReactNode; initialAuth: Auth }) {
  const [auth, setAuth] = useState<Auth>(initialAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
