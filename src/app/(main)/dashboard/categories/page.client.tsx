'use client'
import { CategoriesManagement } from "@/features/dashboard/categories/components/CategoriesManagement";
import { CategoryType } from "@/features/dashboard/categories/enums/category-type.enum";
import useCreateCategory from "@/features/dashboard/categories/hooks/use-create-category.hook";
import { useDeleteCategory } from "@/features/dashboard/categories/hooks/use-delete-category.hook";
import { useFindCategories } from "@/features/dashboard/categories/hooks/use-find-categories.hook";
import useUpdateCategory from "@/features/dashboard/categories/hooks/use-update-category.hook";
import { useQueryClient } from "@tanstack/react-query";

export default function PageClient({ }) {
    const { data: categories } = useFindCategories({type: CategoryType.BLOG});
    const queryClient = useQueryClient();
    const { mutate: createCategory } = useCreateCategory();
    const { mutate: updateCategory } = useUpdateCategory();
    const { mutate: deleteCategory } = useDeleteCategory();

    
    return <>
        {/* Page Header */}
        <CategoriesManagement queryClient={queryClient} categories={categories?.data} onCreateCategory={createCategory} onUpdateCategory={updateCategory} onDeleteCategory={deleteCategory} />
    </>
}