import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageClient from "./PageClient";

export default async function Blog() {
    return (
        <AuthenticatedLayout>
            <PageClient />
        </AuthenticatedLayout>
    )
}

