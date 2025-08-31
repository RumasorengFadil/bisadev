import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageClient from "./PageClient";

export default async function User() {
    return (
        <AuthenticatedLayout>
            <PageClient />
        </AuthenticatedLayout>
    )
}

