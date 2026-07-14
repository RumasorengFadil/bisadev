import { absoluteUrl } from "@/utils/absolute-path.util";
import { metadata } from "./page";

export const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",

    "@id": absoluteUrl("/blog#blog"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/blog"),

    "publisher": {
        "@id": absoluteUrl("/#organization")
    }
}