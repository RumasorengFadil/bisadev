import DOMPurify from "dompurify";

export default function BlogContent({ content }: { content:string | undefined }) {
    console.log(content);
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content ?? ""),
            }}
        />
    );
}