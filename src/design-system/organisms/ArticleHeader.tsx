import { TitleWithCaption } from "../molecules/TitleWithCaption";

const ArticleHeader = () => {
    return (
        <div className="flex flex-col space-y-3">
            <h1 className="px-10 text-secondary font-medium">Artikel</h1>
            <TitleWithCaption className="px-10" title="Temukan Wawasan Terbaru Seputar Bisnis & Teknologi" />
        </div>
    );
};

export default ArticleHeader;
