// app/progress-bar.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi mulai progress
  const startProgress = () => {
    setVisible(true);
    setWidth(0);

    timerRef.current = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 90) return prev; // berhenti di 90%, sisanya pas selesai
        return prev + Math.random() * 5; // tambah random biar lebih natural
      });
    }, 200);
  };

  // Fungsi selesai progress
  const completeProgress = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setWidth(100);
    setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 300); // tunggu fade out
  };

  useEffect(() => {
    startProgress();

    // Simulasi delay sebelum selesai
    const finishTimer = setTimeout(() => {
      completeProgress();
    }, 600);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      clearTimeout(finishTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${width}%`,
        background: "linear-gradient(to right, #ff0000, #cc0000)", // merah ala YouTube
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(255,0,0,0.5)",
        transition: "width 0.2s ease-out, opacity 0.3s ease",
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
