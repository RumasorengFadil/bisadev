"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import {
    Copy,
    MessageCircle,
    Share2
} from "lucide-react";

import { seo } from "@/app/(public)/page.seo";
import { APP_CONFIG } from "@/config/app-config";
import { getShareLinks } from "@/utils/share-links";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";


export default function ShareDropdown() {
    const pathname = usePathname();

    const url = `${APP_CONFIG.url}${pathname}`;
    const title = seo.metadata.title;

    const links = getShareLinks(url, title);

    const copy = async () => {
        await navigator.clipboard.writeText(url);

        toast.success('Link copied! Open Instagram or TikTok and paste it into your Story, Bio, or message.')
    };

    const open = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="font-medium text-base" variant="ghost">
                    <Share2 className="size-5" />
                    <span className="hidden md:inline">Share</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">

                <DropdownMenuItem className="cursor-pointer p-4 text-gray-400 font-medium text-base" onClick={copy}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer p-4 text-gray-400 font-medium text-base" onClick={() => open(links.whatsapp)}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer p-4 text-gray-400 font-medium text-base" onClick={() => open(links.linkedin)}>
                    <FaLinkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}