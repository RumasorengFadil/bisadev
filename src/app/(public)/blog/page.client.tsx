"use client"
import BlogFilterProvider from "@/features/public/blog/components/BlogFilterProvider";
import { Suspense } from "react";

export default function PageClient() {
  return (
    <div>
      <Suspense fallback={null}>
        <BlogFilterProvider />
      </Suspense>
    </div>

  );
}
