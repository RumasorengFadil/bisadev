import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FormEventHandler } from "react";
import type { RegisterForm as RegisterTypeForm } from "@/typdata/registerForm";
import ButtonWithLoading from "../molecules/ButtonWithLoading";
import Link from "next/link";

export const RegisterForm = ({
    form, loading = false, onSubmit, setData,
}: {
    form: RegisterTypeForm | null,
    loading: boolean
    onSubmit: FormEventHandler,
    setData: <K extends keyof RegisterTypeForm> (key: K, value: RegisterTypeForm[K]) => void
}) => {

    return (
        <div className={cn("flex flex-col gap-6")}>
                <CardContent className="grid p-0">
                    <form onSubmit={onSubmit} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome back</h1>
                                <p className="text-muted-foreground text-balance">
                                    Register to your bbyts Author account
                                </p>
                            </div>
                            <div className="grid gap-3">
                                <Label className="text-left" htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="exp: Chico Jericho"
                                    required
                                    value={form?.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label className="text-left" htmlFor="linkedin">Linkedin</Label>
                                <Input
                                    id="linkedin"
                                    type="text"
                                    placeholder="exp: https://www.linkedin.com/in/fadil-hijayat-rumasoreng-4944671b9/"
                                    required
                                    value={form?.linkedin}
                                    onChange={(e) => setData("linkedin", e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label className="text-left" htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={form?.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={form?.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="passwordConfirmation">Confirm Your Password</Label>
                                </div>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    required
                                    value={form?.confirmPassword}
                                    onChange={(e) => setData("confirmPassword", e.target.value)}
                                />
                            </div>
                            <ButtonWithLoading
                                type="submit"
                                isLoading={loading}
                                className="w-full"
                                disabled={loading}
                            >
                                Register
                            </ButtonWithLoading>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" type="button" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="sr-only">Login with Google</span>
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Have an account?{" "}
                                <Link href="/auth/login" className="underline underline-offset-4">
                                    login
                                </Link>
                            </div>
                        </div>
                    </form>
                    {/* <div className="bg-muted relative hidden md:block">
                        <img
                            src="/images/common/unsplash-1.jpg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div> */}
                </CardContent>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
                and <Link href="#">Privacy Policy</Link>.
            </div>
        </div>
    );
};
