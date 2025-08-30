"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function ProgressProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // start progress
    NProgress.start();

    // selesai setelah delay (biar keliatan bar-nya)
    const timer = setTimeout(() => {
      NProgress.done();
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
