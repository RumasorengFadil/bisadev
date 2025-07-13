"use client";

import User from "@/typdata/User";
import api from "@/utils/api";
import { useEffect, useState } from "react";

export default function DashboardClient() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api.get("/api/me")
      .then((res) => {
        setUser(res.data.auth_user);
      })
      .catch((err) => {
        console.error("Gagal ambil user:", err);
      });
  }, []);   


  return (
    <div>
      <h2>Halo, {user?.name}</h2>
    </div>
  );
}