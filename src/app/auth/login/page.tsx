import FormAction from "@/design-system/molecules/FormAction";
import FormField from "@/design-system/molecules/FormField";
import LoginForm from "@/design-system/organisms/LoginForm";
import LoginHeader from "@/design-system/organisms/LoginHeader";
import ApplicationLayout from "@/Layouts/ApplicationLayout";

interface BlogPostProps {
    params: {
        slug: string;
    };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
    const { slug } = params;

    const header = (
        <>
            <LoginHeader title="Password" />
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

export default BlogPost;
