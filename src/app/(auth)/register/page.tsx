import Link from "next/link";

import { RegisterForm } from "@/features/auth/components/register-form";
import Image from "next/image";


export default function RegisterV1() {
  return (
    <div className="flex h-dvh overflow-hidden">
      <div className="bg-background flex w-full items-center justify-center p-8 lg:w-2/3">
        <div className="w-full max-w-md space-y-10 py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <div className="font-medium tracking-tight">Register</div>
            <div className="text-muted-foreground mx-auto max-w-xl">
              Fill in your details below. We promise not to quiz you about your first pet&apos;s name (this time).
            </div>
          </div>
          <div className="space-y-4">
            <RegisterForm />
    
            <p className="text-muted-foreground text-center text-xs">
              Already have an account?{" "}
              <Link prefetch={false} href="/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

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
    </div>
  );
}
