import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

export function getShareLinks(url: string, title?: string | TemplateString | null) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title as string);

    return {
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,

        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,

        instagram: null,

        tiktok: null,
    };
}