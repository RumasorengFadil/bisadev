import Script from "next/script";

type JsonLdProps = {
    data: Record<string, any>;
};

export function JsonLd({ data }: JsonLdProps) {
    return (
        <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}