"use client";

import {
    CheckCircle2,
    Clock,
    Loader2,
    Mail,
    RefreshCw,
    XCircle,
} from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useVerifyEmail } from "../hooks/use-verify-email.hook";
import { useRouter } from "nextjs-toploader/app";
import { useQueryClient } from "@tanstack/react-query";


export type VerificationStatus =
    | "pending"
    | "verifying"
    | "verified"
    | "expired"
    | "error";

interface StatusIconProps {
    status: VerificationStatus;
}

function StatusIcon({ status }: StatusIconProps) {
    switch (status) {
        case "verified":
            return (
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 aria-hidden="true" className="size-8 text-primary" />
                </div>
            );
        case "verifying":
            return (
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <Loader2
                        aria-hidden="true"
                        className="size-8 animate-spin text-primary"
                    />
                </div>
            );
        case "expired":
        case "error":
            return (
                <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
                    <XCircle aria-hidden="true" className="size-8 text-destructive" />
                </div>
            );
        default:
            return (
                <div className="flex size-16 items-center justify-center rounded-full bg-muted">
                    <Mail aria-hidden="true" className="size-8 text-muted-foreground" />
                </div>
            );
    }
}

interface StatusHeaderProps {
    status: VerificationStatus;
    email?: string;
    errorMessage?: string;
}

function StatusHeader({ status, email, errorMessage }: StatusHeaderProps) {
    const getStatusContent = (): { title: string; description: string } => {
        switch (status) {
            case "verified":
                return {
                    title: "Email verified",
                    description: "Your email address has been successfully verified.",
                };
            case "verifying":
                return {
                    title: "Verifying email",
                    description: "Please wait while we verify your email address…",
                };
            case "expired":
                return {
                    title: "Verification link expired",
                    description:
                        "The verification link has expired. Please request a new one.",
                };
            case "error":
                return {
                    title: "Verification failed",
                    description:
                        errorMessage ||
                        "Something went wrong. Please try requesting a new verification link.",
                };
            default:
                return {
                    title: "Verify your email",
                    description: email
                        ? `We've sent a verification link to ${email}. Please check your inbox and click the link to verify your email address.`
                        : "We've sent a verification link to your email address. Please check your inbox and click the link to verify your email address.",
                };
        }
    };

    const content = getStatusContent();

    return (
        <>
            <CardTitle>{content.title}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
        </>
    );
}

function PendingStateHelp() {
    return (
        <div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-4">
            <Clock
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground"
            />
            <div className="flex flex-col gap-1">
                <p className="font-medium text-sm">Didn&apos;t receive the email?</p>
                <p className="text-muted-foreground text-xs">
                    Check your spam folder or <Link className="text-blue-500 underline cursor-pointer" href="/resend-verification">resend the verification link.</Link>
                </p>
            </div>
        </div>
    );
}

interface ResendButtonProps {
    cooldown: number;
    isResending: boolean;
    onResend: () => void;
    variant?: "default" | "outline";
    label?: string;
}

function ResendButton({
    cooldown,
    isResending,
    onResend,
    variant = "default",
    label = "Resend verification email",
}: ResendButtonProps) {
    return (
        <Button
            aria-busy={isResending}
            className="min-h-[44px] w-full touch-manipulation sm:min-h-[32px]"
            data-loading={isResending}
            disabled={cooldown > 0 || isResending}
            onClick={onResend}
            type="button"
            variant={variant}
        >
            {isResending ? (
                <>
                    <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                    Sending…
                </>
            ) : cooldown > 0 ? (
                <>
                    <RefreshCw aria-hidden="true" className="size-4" />
                    Resend in {cooldown}s
                </>
            ) : (
                <>
                    <RefreshCw aria-hidden="true" className="size-4" />
                    {label}
                </>
            )}
        </Button>
    );
}

interface PendingStateProps {
    onResend?: () => void;
    cooldown: number;
    isResending: boolean;
}

function PendingState({ onResend, cooldown, isResending }: PendingStateProps) {
    return (
        <div className="flex w-full flex-col gap-4">
            <PendingStateHelp />
            {onResend && (
                <ResendButton
                    cooldown={cooldown}
                    isResending={isResending}
                    onResend={onResend}
                    variant="outline"
                />
            )}
        </div>
    );
}

interface ExpiredErrorStateProps {
    onResend?: () => void;
    cooldown: number;
    isResending: boolean;
}

function ExpiredErrorState({
    onResend,
    cooldown,
    isResending,
}: ExpiredErrorStateProps) {
    if (!onResend) return null;

    return (
        <ResendButton
            cooldown={cooldown}
            isResending={isResending}
            label="Request new verification link"
            onResend={onResend}
        />
    );
}

function VerifiedState() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="font-medium text-primary text-sm">
                    You can now use all features of your account.
                </p>
            </div>
            <Button className="mx-auto" asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
        </div>
    );
}

export interface AuthVerifyEmailProps {
    email?: string;
    onResend?: () => void;
    onVerify?: (token: string) => void;
    className?: string;
    errorMessage?: string;
    resendCooldown?: number;
    token: string,
}

export default function AuthVerifyEmail({
    email,
    className,
    errorMessage,
    token,
}: AuthVerifyEmailProps) {
    const { isSuccess, isLoading } = useVerifyEmail(token);
    const router = useRouter();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (isSuccess) {
            router.push("/");
            queryClient.invalidateQueries({ queryKey: ['me'] });
        }
    }, [isSuccess])

    return (
        <section className="flex items-center justify-center min-h-screen">
            <Card className={cn("w-full max-w-sm shadow-xs", className)}>
                <CardHeader>
                    <StatusHeader
                        email={email}
                        errorMessage={errorMessage}
                        status={isLoading ? "verifying" : "pending"}
                    />
                    <PendingStateHelp />
                </CardHeader>
                {isLoading && <Loader2 className="mt-4 mx-auto animate-spin" size={16} />}
            </Card>
        </section>
    );
}
