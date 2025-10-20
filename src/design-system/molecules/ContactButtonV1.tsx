"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // opsional kalau kamu pakai shadcn utils
import { siteConfig } from "@/config/site";

interface ContactButtonProps {
  isScroll?: boolean;
  email?: string; // default WA
  label?: string;
  whatsAppNumber?: string
}

export default function ContactButton({
  isScroll = false,
  email = "",
  whatsAppNumber = "",
  label = "Contact Us",
}: ContactButtonProps) {

  function openEmail(email: string) {
    const gmailLink = ``;
    window.location.href = gmailLink;
  }

  return (
    <a
      // href={`mailto:${email}`}
      href={`${whatsAppNumber ? `https://wa.me/${siteConfig.whatsapp}` : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} `}
      onClick={() => openEmail(email)}
      className={cn(
        "group flex items-center gap-2 cursor-pointer rounded-full shrink-0 p-1 pl-6 text-base tracking-wide transition duration-500",
        isScroll
          ? "text-background bg-foreground hover:bg-foreground/90"
          : "text-foreground bg-background hover:bg-background/90"
      )}
    >
      {label}
      <span className="rounded-full bg-primary p-3 group-hover:bg-primary/90 transition">
        <ArrowRight
          size={16}
          className="group-hover:scale-125 group-hover:-rotate-45 transition text-foreground"
        />
      </span>
    </a>
  );
}
