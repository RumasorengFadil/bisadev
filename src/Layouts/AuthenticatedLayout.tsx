import { PropsWithChildren, ReactNode } from 'react';
import AuthenticatedLayoutClient from './AuthenticatedLayoutClient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthenticatedLayout({ children }: PropsWithChildren<{ children: ReactNode }>) {
    const refreshToken = (await cookies()).get("refresh_token")?.value;

    if (!refreshToken) redirect("/login");
    
    return <>
        <AuthenticatedLayoutClient >
            {children}
        </AuthenticatedLayoutClient>
    </>
}
