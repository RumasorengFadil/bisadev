"use client";

import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
  ImageResizer,
  JSONContent,
  handleCommandNavigation,
  handleImageDrop,
  handleImagePaste,
} from "novel";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { defaultExtensions } from "./extensions";
import { ColorSelector } from "./selectors/color-selector";
import { LinkSelector } from "./selectors/link-selector";
import { MathSelector } from "./selectors/math-selector";
import { NodeSelector } from "./selectors/node-selector";
import { Separator } from "./ui/separator";

import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import { uploadFn } from "./image-upload";
import { TextButtons } from "./selectors/text-buttons";
import { slashCommand, suggestionItems } from "./slash-command";
import { BlogForm, LessonResponse } from "../../../types";
import { createPortal } from "react-dom";
import { useFormContext } from "react-hook-form";

const extensions = [...defaultExtensions, slashCommand];

const defaultEditorContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "",
        },
      ],
    },
  ],
};

const TailwindAdvancedEditor = ({
  onEditorUpdate,
  data,
  options = {
    height: 2000,
    margin: 20,
    textSize: "",
    contentHeight: 500,
  }
}: {
  data: { contentJSON: string, content: string },
  options?: {
    height?: number,
    contentHeight?: number,
    margin?: number,
    textSize?: "" | "base" | "sm" | "lg",
  }
  onEditorUpdate: (editor: any) => void
  onSave?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onPreview?: (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => void,
  onDelete?: (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => void,
}) => {

  const { setValue } = useFormContext();

  const [charsCount, setCharsCount] = useState();

  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async (editor: EditorInstance) => {
    // setValue("content", editor.getHTML(), { shouldDirty: true });
    // setValue("content_json", JSON.stringify(editor.getJSON()), { shouldDirty: true });

    setCharsCount(editor.storage.characterCount.words());
  }, 500);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative w-full min-h-[${options.height}px] max-w-screen-lg mx-auto border-muted bg-background  sm:mb-[calc(${options.margin}vh)] sm:rounded-lg sm:border sm:shadow-lg`}>
      <div className="flex absolute right-5 top-5 z-10 mb-5 gap-2">
        {/* <div className="rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">{unsaved ? "Unsaved" : "Saved"}</div> */}
        <div className={charsCount ? "rounded-lg  bg-accent px-2 py-1 text-sm text-muted-foreground" : "hidden"}>
          {charsCount} Words
        </div>
      </div>

      <EditorRoot>
        <EditorContent
          initialContent={data.contentJSON ? JSON.parse(data.contentJSON) as JSONContent : defaultEditorContent}
          immediatelyRender={false}
          extensions={extensions}
          className="relative"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) => handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class:
                `prose prose-lg text-${options.textSize} min-h-[${options.contentHeight}px] dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
            },
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor);
            onEditorUpdate(editor);
          }}
          slotAfter={<ImageResizer />}
        >

          {mounted &&
            createPortal(
              <EditorCommand onWheel={(e) => {
                e.stopPropagation();
              }} className="z-50 pointer-events-auto h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
                <EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
                <EditorCommandList>
                  {suggestionItems.map((item) => (
                    <EditorCommandItem
                      value={item.title}
                      onCommand={(val) => item.command?.(val)}
                      className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                      key={item.title}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </EditorCommandItem>
                  ))}
                </EditorCommandList>
              </EditorCommand>,
              document.body
            )}


          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical" />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation="vertical" />

            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation="vertical" />
            <MathSelector />
            <Separator orientation="vertical" />
            <TextButtons />
            <Separator orientation="vertical" />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default TailwindAdvancedEditor;
