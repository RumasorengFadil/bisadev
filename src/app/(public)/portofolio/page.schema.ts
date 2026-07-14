import { absoluteUrl } from "@/utils/absolute-path.util";
import { metadata } from "./page";

export const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": absoluteUrl("/portfolio#portfolio"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/portfolio"),

    "about": {
        "@id": absoluteUrl("/#organization")
    }
}