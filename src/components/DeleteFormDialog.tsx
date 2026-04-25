import { Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import DeleteProductFormDialog from "@/features/dashboard/product-digital/components/DeleteProductFormDialog";

type DeleteItem = {
    id: string
}

export default function DeleteFormDialog({ deletingItem, confirmDelete, header = { title: "Delete Item", description: "Are you sure you want to delete this item? This action cannot be undone and will affect all associated data." } }: {
    deletingItem: DeleteItem, confirmDelete: (id: string) => void, header?: {
        title?: string,
        description?: string,
    }
}) {
    const finalHeader = {
        title: "Delete Item",
        description: "Are you sure you want to delete this item? This action cannot be undone and will affect all associated data.",
        ...header
    }   
    return (
        <AlertDialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <AlertDialogTrigger asChild>
                        <Button className="cursor-pointer" variant="ghost">
                            <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                    </AlertDialogTrigger>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Delete product</p>
                </TooltipContent>
            </Tooltip>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{finalHeader.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {finalHeader.description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => confirmDelete(deletingItem.id)} className="bg-red-600 cursor-pointer hover:bg-red-700">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}