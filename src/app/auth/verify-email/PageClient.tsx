"use client"

import Head from "next/head"
import AuthorRegisterNotice from "@/design-system/organisms/AuthorRegisterNotice"
import { useLogout } from "@/hooks/use-logout"

export default function PageClient({ }) {
      const handleLogout = useLogout();

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Content */}
        <AuthorRegisterNotice onLogout={handleLogout} />
    </>
}



