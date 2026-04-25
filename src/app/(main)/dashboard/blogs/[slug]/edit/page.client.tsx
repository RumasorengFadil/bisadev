"use client";

import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import { useDebouncedCallback } from "use-debounce";
import { EditorInstance } from "novel";
import { BlogFormSchema, BlogFormSchemaType } from "@/features/dashboard/blog/schema/blog-form.schema";
import { BlogResponse } from "@/features/dashboard/blog/types/index.type";
import { BlogStatus } from "@/features/dashboard/blog/enums/blog-status.enum";
import useUpdateBlogs from "@/features/dashboard/blog/hooks/use-update-blogs.hook";
import { useFindCategories } from "@/features/dashboard/categories/hooks/use-find-categories.hook";
import { CategoryType } from "@/features/dashboard/categories/enums/category-type.enum";
import TailwindAdvancedEditor from "@/components/advance-editor/advanced-editor";

export function PageClient({ data }: { data: BlogResponse }) {
    const { data: categories } = useFindCategories({type:CategoryType.BLOG});
    const { mutate: updateBlog } = useUpdateBlogs(data.id);

    const form = useForm<BlogFormSchemaType>({
        resolver: zodResolver(BlogFormSchema),
        defaultValues: {
            title: data.title ?? "",
            category_id: data.category_id ?? "",
            thumbnail: null,
            excerpt: data.excerpt ?? "",
            status: data.status ?? BlogStatus.DRAFT,
            content: data.content ?? "",
            content_JSON: data.content_JSON ?? "",
        },
    });

    const onEditorUpdate = useDebouncedCallback((editor: EditorInstance) => {
        form.setValue("content", editor.getHTML(), { shouldDirty: true });
        form.setValue("content_JSON", JSON.stringify(editor.getJSON()), { shouldDirty: true });
    }, 500);

    const onSubmit = (values: BlogFormSchemaType) => {
        updateBlog(values);
    };

    return (
        <div className="p-8">
            <div className="mb-8">
                <Link
                    href="/dashboard/blogs"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1a3e6b] mb-4"
                >
                    <ArrowLeft size={20} />
                    Back to Posts
                </Link>
                <h1 className="text-3xl text-gray-900">Edit Posts</h1>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8 space-y-4">
                        {/* TITLE */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* CATEGORY */}
                        <FormField
                            control={form.control}
                            name="category_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <FormControl className="w-full">
                                                <SelectTrigger>
                                                    <SelectValue defaultValue={field.value} placeholder="Choose category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories?.data?.map((category) => {
                                                    return <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                                                })}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* THUMBNAIL */}
                        <FormField
                            control={form.control}
                            name="thumbnail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Thumbnail URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                field.onChange(file);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* EXCERPT */}
                        <FormField
                            control={form.control}
                            name="excerpt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Excerpt</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* STATUS */}
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="draft">Draft</SelectItem>
                                            <SelectItem value="published">Published</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        {/* EDITOR */}
                        <FormField
                            control={form.control}
                            name="content_JSON"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                        <TailwindAdvancedEditor
                                            onEditorUpdate={onEditorUpdate}
                                            data={{ content: "", contentJSON: field.value ?? "" }}

                                        />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="inline- cursor-pointer items-center gap-2 px-6 py-3 bg-[#1a3e6b] text-white rounded-md hover:bg-[#2a5a8f] transition-colors"
                        >
                            <Save size={20} />
                            Update Post
                        </button>
                        <Link
                            href="/dashboard/blogs"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </Form>
        </div>
    );
}