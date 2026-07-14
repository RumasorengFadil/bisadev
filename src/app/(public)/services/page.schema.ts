import { absoluteUrl } from "@/utils/absolute-path.util";
import { metadata } from "./page";

export const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": absoluteUrl("/service#services"),

    "name": metadata.title,

    "description": metadata.description,

    "url": absoluteUrl("/services"),

    "provider": {
        "@id": absoluteUrl("/#organization")
    }
}