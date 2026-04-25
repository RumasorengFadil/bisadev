"use client"
import Link from "next/link";


import Image from "next/image";
import { LoginForm } from "@/features/auth/components/login-form";

export default function PageClient({ redirect }: { redirect?: string }) {
  return (
    <div className="flex h-dvh overflow-hidden">
      <div className="bg-primary hidden lg:block lg:w-1/3">
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <div className="space-y-6">
           <div className="flex items-center justify-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/app/bisadev-white.png" width={240} height={56} alt="bisadev-logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background flex w-full items-center justify-center p-8 lg:w-2/3">
        <div className="w-full max-w-md space-y-10 py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <div className="font-medium tracking-tight">Login</div>
            <div className="text-muted-foreground mx-auto max-w-xl">
              Welcome back. Enter your email and password, let&apos;s hope you remember them this time.
            </div>
          </div>
          <div className="space-y-4">
            <LoginForm redirect={redirect} />
          </div>
        </div>
      </div>
    </div>
  );
}
