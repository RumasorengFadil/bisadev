import GuestLayout from "@/Layouts/GuestLayout";
import PageClient from "./PageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daftar | bbyts",
    description: "Buat akun baru di bbyts untuk mengelola blog, membaca artikel, dan menikmati semua fitur premium kami.",
    keywords: ["Daftar", "Register", "bbyts", "Buat Akun", "Blog", "Artikel", "Dashboard"],
    openGraph: {
        title: "Daftar | bbyts",
        description: "Buat akun baru di bbyts dan nikmati kemudahan mengelola blog serta membaca artikel menarik.",
        url: "https://bbyts.com/auth/register",
        siteName: "bbyts",
        images: [
            {
                url: "https://bbyts.com/public/app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Daftar bbyts",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
};

const Register = async () => {
    return (
        <GuestLayout>
            <PageClient />
        </GuestLayout>
    );
};
export default Register;
