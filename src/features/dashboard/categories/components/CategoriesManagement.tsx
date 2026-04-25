import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Edit, Trash2, Folder, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { CategoryFormSchema, CategoryFormSchemaType } from "../schema/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MutateOptions, QueryClient, UseMutateFunction } from "@tanstack/react-query";
import { CategoryFormEditDialog } from "./CategoryFormEditDialog";
import { CategoryType } from "../enums/category-type.enum";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardSkeleton from "@/components/dashboard-skeleton.component";
import { CategoryResponse } from "./types";

export function CategoriesManagement({
  categories,
  queryClient,
  onCreateCategory,
  onUpdateCategory,
  onDeleteCategory
}: {
  categories?: CategoryResponse[]
  queryClient: QueryClient
  onCreateCategory: (data: CategoryFormSchemaType, options?: MutateOptions<any, any, CategoryFormSchemaType, unknown> | undefined) => void
  onUpdateCategory: UseMutateFunction<any, any, {
    categoryId: string;
    data: Partial<CategoryFormSchemaType>;
  }, unknown>
  onDeleteCategory: (UseMutateFunction<any, any, string, unknown>)
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);


  const form = useForm<CategoryFormSchemaType>({
    resolver: zodResolver(CategoryFormSchema),
    defaultValues: {
      name: "",
      description: "",
      type: CategoryType.BLOG,
    }
  });


  const handleCreateCategory = (data: CategoryFormSchemaType) => {
    onCreateCategory(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        setIsAddDialogOpen(false);
        form.reset();
      }
    });
  }
  const handleDeleteCategory = (categoryId: string) => {
    if (confirm("Are you sure to delete this category ?")) {
      onDeleteCategory(categoryId, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['categories'] });
          form.reset();
        }
      });
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2>Categories Management</h2>
          <p className="text-muted-foreground">Organize courses into categories</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
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
              <form onSubmit={form.handleSubmit(data => handleCreateCategory(data))} className="grid gap-4 py-4">
                <FormField control={form.control} name="name" render={({ field }) =>
                  <FormItem>
                    <FormLabel htmlFor="name">Category Name <span className="text-red-500">*</span></FormLabel>
                    <Input {...field} id="name" placeholder="Web Development" />
                    <FormMessage />
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
                              <SelectValue placeholder="Choose category type" />
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
                  <Button className="cursor-pointer" variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                  <Button className="cursor-pointer" type="submit">Create Category</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {categories ? <>

        {/* Stats Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Total Categories</CardTitle>
            <Folder className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories?.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Active categories</p>
          </CardContent>
        </Card>

        {/* Categories Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Categories</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Category Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories?.length === 0 ? <TableCell colSpan={6} className="text-center  py-8 text-muted-foreground">
                  No Category found
                </TableCell> : <>
                  {categories?.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">#{category.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-md text-sm text-muted-foreground">
                          {category.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-md text-sm text-muted-foreground">
                          {category.type}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {new Date(category.created_at).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {new Date(category.updated_at).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">

                          <CategoryFormEditDialog category={category} queryClient={queryClient} onUpdateCategory={onUpdateCategory} />

                          <Button onClick={() => handleDeleteCategory(category.id)} variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </>}


              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </> : <DashboardSkeleton />}

    </div>
  );
}