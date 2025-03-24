import LoginHeader from "@/design-system/organisms/LoginHeader";
import ResetPasswordForm from "@/design-system/organisms/ResetPasswordForm";
import ApplicationLayout from "@/Layouts/ApplicationLayout";

const ForgotPassword = ({ }) => {

    const header = (
        <>
            <LoginHeader title = "Lupa Password" />
        </>
    )
    const content = (
        <>
          <ResetPasswordForm />  
        </>
    );

    return (
        <ApplicationLayout header={header} content={content} />
    );
};

export default ForgotPassword;
