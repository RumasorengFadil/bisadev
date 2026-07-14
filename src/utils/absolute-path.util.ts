import { APP_CONFIG } from "@/config/app-config";

export function absoluteUrl(path = "") {
    return new URL(path, APP_CONFIG.url).toString();
}