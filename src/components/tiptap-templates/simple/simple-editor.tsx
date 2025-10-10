"use client"
import * as React from "react"
import { EditorContent, EditorContext, useEditor } from "@tiptap/react"

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit"
import { Image } from "@tiptap/extension-image"
import { TaskItem, TaskList } from "@tiptap/extension-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Placeholder, Selection } from "@tiptap/extensions"

// --- UI Primitives ---
import { Spacer } from "@/components/tiptap-ui-primitive/spacer"
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar"

// --- Tiptap Node ---
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension"
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension"
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss"
import "@/components/tiptap-node/code-block-node/code-block-node.scss"
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss"
import "@/components/tiptap-node/list-node/list-node.scss"
import "@/components/tiptap-node/image-node/image-node.scss"
import "@/components/tiptap-node/heading-node/heading-node.scss"
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss"

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu"
import { ImageUploadButton } from "@/components/tiptap-ui/image-upload-button"
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu"
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button"
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button"
import {
  ColorHighlightPopover,
  ColorHighlightPopoverContent,
  ColorHighlightPopoverButton,
} from "@/components/tiptap-ui/color-highlight-popover"
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "@/components/tiptap-ui/link-popover"
import { MarkButton } from "@/components/tiptap-ui/mark-button"
import { TextAlignButton } from "@/components/tiptap-ui/text-align-button"
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button"

// --- Icons ---
import { ArrowLeftIcon } from "@/components/tiptap-icons/arrow-left-icon"
import { HighlighterIcon } from "@/components/tiptap-icons/highlighter-icon"
import { LinkIcon } from "@/components/tiptap-icons/link-icon"

// --- Hooks ---
import { useIsMobile } from "@/hooks/use-mobile"
import { useWindowSize } from "@/hooks/use-window-size"
import { useCursorVisibility } from "@/hooks/use-cursor-visibility"

// --- components ---

// --- Lib ---

// --- Styles ---
import "@/components/tiptap-templates/simple/simple-editor.scss"

import { Button } from "@/components/ui/button"
import { MAX_FILE_SIZE } from "@/lib/tiptap-utils"

import { Eye, FileUp, Trash2 } from "lucide-react"
import { CoverImageUpload } from "@/design-system/organisms/BlogThumbnailInput"
import { TagInputInline } from "@/design-system/organisms/TagInputInline"
import { SelectInput } from "@/design-system/organisms/SelectInput"
import { StatusDropdown } from "@/design-system/organisms/StatusDropdown"
import { Blog } from "@/typdata/blog"
import { Category } from "@/typdata/category"
import { useForm } from "@/hooks/useForm"
import { handleImageUpload } from "@/utils/handleImageUpload"
import { AxiosResponse } from "axios"
import { useRouter } from 'nextjs-toploader/app';

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  setData,
  isMobile,
  onPublish,
  onPreview,
  onDelete,
  data
}: {
  onHighlighterClick: () => void
  onLinkClick: () => void
  setData: (status: string) => void
  isMobile: boolean
  onPublish: (e: React.MouseEvent<HTMLButtonElement>) => void
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void
  onPreview: (e: React.MouseEvent<HTMLButtonElement>) => void
  status: string,
  data: { status: string }
}) => {

  return (
    <>
      <Spacer />

      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu
          types={["bulletList", "orderedList", "taskList"]}
          portal={isMobile}
        />
        <BlockquoteButton />
        <CodeBlockButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
      </ToolbarGroup>

      <Spacer />

      {isMobile && <ToolbarSeparator />}

      <Spacer />

      <ToolbarGroup>
        <div className="flex flex-row  items-center gap-2 justify-end">
          <StatusDropdown value={data.status} onChange={(status) => {
            setData(status);
          }} />
          <Button
            variant="secondary"
            size="sm"
            className="h-8 px-3 text-sm"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onPublish?.(e)}
          >
            <FileUp className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-sm"
            onClick={onPreview}
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="h-8 px-3 text-sm"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </ToolbarGroup>

      {/* {isMobile && <ToolbarSeparator />}
      <ToolbarGroup>
        <ThemeToggle />
      </ToolbarGroup> */}
    </>
  )
}

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link"
  onBack: () => void
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
)

export function SimpleEditor({ blog, categories, apiEndpoint }: { blog?: Blog, categories: Category[] | undefined, apiEndpoint: string }) {

  const { submit, setData, data } = useForm<{
    title: string
    tags: string[]
    status: string
    content: string
    thumbnail: File | null | string
    thumbnailUrl: null | string
    categoryId: string
  }>({
    title: blog?.title || "",
    tags: blog?.tags.map((tag) => tag.tag.name) || [],
    status: blog?.status || "draft",
    content: blog?.content || "",
    thumbnail: "",
    thumbnailUrl: blog?.image_url ? `${process.env.NEXT_PUBLIC_API_URL}${blog?.image_url}` : "",
    categoryId: blog?.category_id || "",
  })
  const isMobile = useIsMobile()
  const windowSize = useWindowSize()
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main")
  const toolbarRef = React.useRef<HTMLDivElement>(null)
  const router = useRouter();

  const editor = useEditor({
    onUpdate: () => {
      const html: string = editor?.getHTML() ?? "";
      setData("content", html);
    },
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      Placeholder.configure({
        placeholder: "Please write here."
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
    content: data.content,
  })

  const bodyRect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  })

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main")
    }
  }, [isMobile, mobileView])

  const publish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submit("post", apiEndpoint, {
      onSuccess: (res: AxiosResponse) => {
        router.replace(`/blog/edit/${res.data.data.id}`);
      }
    }, { headers: { "Content-Type": "multipart/form-data" } });
  }
  const preview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    router.push(`/blog/preview/${blog?.id}`);
  }
  const destroy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (confirm("Are you sure you want to delete selected blogs?")) {
      submit("delete", `/api/blog/destroy/${blog?.id}`, {
        onSuccess: () => {
          router.replace(`/blog`);
        }
      });
    }
  }
  return (
    <div className="simple-editor-wrapper w-[100vw] sm:w-[90vw] md:w-[70vw]">
      <EditorContext.Provider value={{ editor }}>
        <Toolbar
          ref={toolbarRef}
          style={
            isMobile
              ? {
                bottom: `calc(100% - ${windowSize.height - bodyRect.y}px)`,
              }
              : {}
          }
        >
          {mobileView === "main" ? (
            <MainToolbarContent
              onHighlighterClick={() => setMobileView("highlighter")}
              onLinkClick={() => setMobileView("link")}
              isMobile={isMobile}
              status={data.status}
              setData={(status) => {
                setData("status", status);
              }}
              onPublish={(e: React.MouseEvent<HTMLButtonElement>) => publish(e)}
              onPreview={(e: React.MouseEvent<HTMLButtonElement>) => preview(e)}
              onDelete={(e: React.MouseEvent<HTMLButtonElement>) => destroy(e)}
              data={data}
            />
          ) : (
            <MobileToolbarContent
              type={mobileView === "highlighter" ? "highlighter" : "link"}
              onBack={() => setMobileView("main")}
            />
          )}
        </Toolbar>

        <form className="content-wrapper py-20 grid gap-y-3 md:gap-y-6">
          <div className="simple-editor-content">
            <CoverImageUpload
              initialValue={String(data.thumbnailUrl)}
              onChange={(file) => {
                setData("thumbnail", file)
              }}
              className="w-full"
            />
          </div>

          <div className="simple-editor-content">
            <input
              autoFocus
              type="text"
              placeholder="Title"
              value={data.title}
              onChange={(e) => setData("title", e.target.value)}
              className="w-full py-2 border-none placeholder:text-muted-foreground font-bold text-2xl bg-transparent shadow-none focus:outline-none focus:ring-0"
            />
          </div>

          <div className="simple-editor-content">
            <TagInputInline
              className="w-full"
              tags={data.tags}
              placeholder="+ Add Tag"
              setTags={(tags) => {
                setData("tags", tags)
              }}
            />
          </div>

          <div className="simple-editor-content">
            <SelectInput
              className="w-full"
              options={categories}
              placeholder="Choose Category"
              value={data.categoryId}
              onChange={(categoryId) => {
                setData("categoryId", categoryId)
              }}
            />
          </div>

          <div className="simple-editor-content">
            <EditorContent editor={editor} role="presentation" />
          </div>
        </form>

      </EditorContext.Provider>
    </div>
  )
}

//  <div className="simple-editor-wrapper w-[100vw] sm:w-[90vw] md:w-[70vw]"></div>