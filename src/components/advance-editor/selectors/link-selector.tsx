import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Check, Trash } from "lucide-react";
import { useEditor } from "novel";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (_e) {
    return false;
  }
}
export function getUrlFromString(str: string) {
  if (isValidUrl(str)) return str;
  try {
    if (str.includes(".") && !str.includes(" ")) {
      return new URL(`https://${str}`).toString();
    }
  } catch (_e) {
    return null;
  }
}
interface LinkSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LinkSelector = ({ open, onOpenChange }: LinkSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { editor } = useEditor();
  const [link, setLink] = useState("");

  // Sinkronkan nilai link dari editor setiap kali popover dibuka atau editor berubah
  useEffect(() => {
    if (open && editor) {
      const currentHref = editor.getAttributes("link").href || "";
      console.log(currentHref);
      setLink(currentHref);
    }
  }, [open, editor]);

  // Autofocus on input by default
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  if (!editor) return null;

  const handleCLick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const url = getUrlFromString(link);
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
      onOpenChange(false);
    }
  };

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost" className="gap-2 rounded-none border-none">
          <p className="text-base">↗</p>
          <p
            className={cn("underline decoration-stone-400 underline-offset-4", {
              "text-blue-500": editor.isActive("link"),
            })}
          >
            Link
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-60 p-0" sideOffset={10}>
        <div className="flex p-1">
          <input
            ref={inputRef}
            value={link} // Menggunakan controlled value dari state
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="Paste a link"
            className="flex-1 bg-background p-1 text-sm outline-none"
          />
          {editor.getAttributes("link").href ? (
            <Button
              size="icon"
              variant="outline"
              type="button"
              className="flex h-8 items-center rounded-sm p-1 text-red-600 transition-all hover:bg-red-100 dark:hover:bg-red-800"
              onClick={() => {
                editor.chain().focus().unsetLink().run();
                setLink("");
                onOpenChange(false);
              }}
            >
              <Trash className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={(e) => handleCLick(e)} size="icon" type="button" className="h-8">
              <Check className="h-4 w-4" />
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};