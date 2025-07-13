"use client"
import LoginHeader from "@/design-system/organisms/LoginHeader";
import useAuth from "@/hooks/useAuth";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import api from "@/utils/api";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { user } = useAuth({ protect: true });
    const router = useRouter();

    const logout = () => {
        api.get("/sanctum/csrf-cookie")
            .then(() => {
                api.post("/api/logout")
                    .then(() => {
                        router.push('dashboard');
                    }).catch((err) => {
                        console.error("Gagal logout:", err);

                    })
            }).then(()=> {
                console.log("gagal")
            })
    }
    const header = (
        <>
            <LoginHeader title="Dashboard" />
        </>
    );

    const content = (<>
        <div>
            <h2>Halo, {user?.name}</h2>
            <button onClick={logout}>logout</button>
        </div>
    </>)
    return (
        <ApplicationLayout header={header} content={content} />
    );
};

export default Dashboard;
