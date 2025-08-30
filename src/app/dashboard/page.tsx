import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import PageClient from "./PageClient"

export default async function Dashboard() {
    return (
        <AuthenticatedLayout>
           <PageClient />
        </AuthenticatedLayout>
    )
}



