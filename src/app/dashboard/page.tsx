"use client"
import LoginHeader from "@/design-system/organisms/LoginHeader";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import userAuth from "@/hooks/useAuth";
import api from "@/utils/api";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { user } = userAuth({ protect: true });
    const router = useRouter();

    const logout = () => {
        api.get("/sanctum/csrf-cookie")
            .then(() => {
                api.post("/api/logout")
                    .then((res) => {
                        router.push('dashboard');
                    }).catch((err) => {
                        console.error("Gagal logout:", err);

                    })
            }).then((err)=> {
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
