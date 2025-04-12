import LoginHeader from "@/design-system/organisms/LoginHeader";
import ApplicationLayout from "@/Layouts/ApplicationLayout";

const Dashboard = ({ }) => {

    const header = (
        <>
            <LoginHeader title = "Dashboard" />
        </>
    )

    return (
        <ApplicationLayout header={header}  />
    );
};

export default Dashboard;
