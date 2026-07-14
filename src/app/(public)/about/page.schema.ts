import { absoluteUrl } from "@/utils/absolute-path.util";
import { metadata } from "./page";

export const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",

    "@id": absoluteUrl("/about#about"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/about"),

    "about": {
        "@id": absoluteUrl("/#organization")
    }
}