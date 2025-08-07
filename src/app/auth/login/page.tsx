// import LoginForm from "@/design-system/organisms/LoginForm";
import LoginForm from "@/design-system/organisms/LoginForm";
import LoginHeader from "@/design-system/organisms/LoginHeader";
import ApplicationLayout from "@/Layouts/ApplicationLayout";


const Login = async () => {
    const header = (
        <>
            <LoginHeader title="Login" />
        </>
    )
    const content = (
        <>  
        <LoginForm />
        </>
    );

    return (
        <ApplicationLayout header={header} content={content} />
    );
};

export default Login;
