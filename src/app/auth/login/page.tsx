import LoginForm from "@/design-system/organisms/LoginForm";
import LoginHeader from "@/design-system/organisms/LoginHeader";
import ApplicationLayout from "@/Layouts/ApplicationLayout";

interface BlogPostProps {
    params: {
        slug: string;
    };
}

const BlogPost: React.FC<BlogPostProps> = () => {
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
