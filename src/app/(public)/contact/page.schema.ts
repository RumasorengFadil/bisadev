import { absoluteUrl } from "@/utils/absolute-path.util";
import { metadata } from "./page";

export const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    "@id": absoluteUrl("/contact#contact"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/contact"),

    "about": {
        "@id": absoluteUrl("/#organization")
    }
}