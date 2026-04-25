import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Plus } from "lucide-react";
import { CategoryFormSchema, CategoryFormSchemaType } from "../schema/category.schema";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MutateOptions, QueryClient, UseMutateFunction } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CategoryType } from "../enums/category-type.enum";
import { CategoryResponse } from "./types";

export function CategoryFormEditDialog({
    category,
    onUpdateCategory,
    queryClient
}: {
    category: CategoryResponse
    queryClient: QueryClient
    onUpdateCategory: UseMutateFunction<any, any, {
        categoryId: string;
        data: Partial<CategoryFormSchemaType>;
    }, unknown>
}) {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    const form = useForm<CategoryFormSchemaType>({
        resolver: zodResolver(CategoryFormSchema),
        defaultValues: {
            name: category.name,
            description: category.description,
            type: category.type,
        }
    });


    const handleUpdateCategory = (categoryId: string, data: Partial<CategoryFormSchemaType>) => {
        onUpdateCategory({ categoryId, data }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['categories'] });
            }
        });
    }

    return (
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>
                        Add a new category to organize your courses.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(data => handleUpdateCategory(category.id, data))} className="grid gap-4 py-4">
                        <FormField control={form.control} name="name" render={({ field }) =>
                            <FormItem>
                                <FormLabel htmlFor="name">Category Name</FormLabel>
                                <Input {...field} id="name" placeholder="Web Development" />
                            </FormItem>
                        }>
                        </FormField>
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Type</FormLabel>
                                    <FormControl>
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <FormControl className="w-full">
                                                <SelectTrigger>
                                                    <SelectValue defaultValue={field.value} placeholder="Choose category type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={CategoryType.BLOG}>Blog</SelectItem>
                                                <SelectItem value={CategoryType.PRODUCT}>Product</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="description" render={({ field }) =>
                            <FormItem>
                                <FormLabel htmlFor="description">Description</FormLabel>
                                <Textarea
                                    {...field}
                                    id="description"
                                    placeholder="Learn modern web development..."
                                    rows={4}
                                />
                            </FormItem>
                        }>
                        </FormField>
                        <div className="flex justify-end gap-2 mt-4">
                            <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                            <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>Update Category</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}