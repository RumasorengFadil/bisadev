"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { useEffect, useState } from "react"
import axiosClient from "@/utils/axiosClient"
import { useImagePreview } from "@/hooks/useImagePreview"
import { Account } from "@/design-system/organisms/Account"
import { Profile } from "@/typdata/profile"
import { Password } from "@/typdata/password"
import { useAuthStore } from "@/store/useAuthStore"
import { objectToFormData } from "@/utils/objectToFormData"


export default function PageClient({ }) {
    const { auth } = useAuthStore();
    const [profileForm, setProfileForm] = useState<Profile | Record<string, unknown>>({});
    const [passwordForm, setPasswordForm] = useState<Password | Record<string, unknown>>({});

    console.log(auth);
    useEffect(() => {
        setProfileForm({
            name: auth?.user?.name || "",
            email: auth?.user?.email || "",
            image: null,
            imageUrl: auth?.user?.image_url || "",
        });
    }, [auth]);

    const { handleFileChange, imagePreview } = useImagePreview();

    return <>
        {/* Header */}
        <Head>Settings</Head>

        <SiteHeader title="Settings" />

        {/* Content */}
        <Account
            avatarPreview={imagePreview}
            profileForm={profileForm}
            passwordForm={passwordForm}
            handleProfileChange={(key: string, value: string) => {
                setProfileForm({ ...profileForm, [key]: value });
            }}
            handlePasswordChange={(key: string, value: string) => {
                setPasswordForm({ ...passwordForm, [key]: value });
            }}
            handleFileChange={(e, key) => {
                handleFileChange(e, (file) => {
                    setProfileForm({ ...profileForm, [key]: file });
                })
            }}
            onUpdateProfile={(profileForm) => {
                const formData = objectToFormData(profileForm);

                formData.append("_method", "PUT");

                axiosClient.post("api/account/update-profile", formData, { headers: { "Content-Type": "multipart/form-data" } });
            }}
            onUpdatePassword={(passwordForm) => {
                axiosClient.put("api/account/update-password", passwordForm).then(() => {
                    setPasswordForm({});
                });
            }}
        />

    </>
}



