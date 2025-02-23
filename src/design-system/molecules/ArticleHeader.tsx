import { TitleWithCaption } from "../components/TitleWithCaption";

const ArticleHeader = ({ label = "Artikel", title, caption="" }: { label?: string, title:string, caption?:string }) => {
    return (
        <div className="flex flex-col space-y-3">
            <h1 className="px-10 text-secondary font-medium">{label}</h1>
            <TitleWithCaption
                className="px-10"
                title={title}
                caption={caption}
            />
        </div>
    );
};

export default ArticleHeader;
