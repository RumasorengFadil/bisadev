import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Variants } from "@/features/dashboard/product-digital/enum/variants.enum";
import { LucideProps, Plus } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";


export default function FormDialog(
    {
        isDialogOpen,
        setIsDialogOpen,
        trigger = { show: true, title: 'Enter button title', icon: Plus, variants: Variants.BUTTON },
        tooltip,
        header = {
            title: "Enter your header title",
            desc: "Enter your header description"
        },
        children
    }: {
        isDialogOpen?: boolean, setIsDialogOpen?: (open: boolean) => void, trigger?: {
            show?: boolean,
            icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
            title?: string,
            variants?: Variants,
        },
        header?: {
            title: string,
            desc: string,
        },
        tooltip?: {
            title?: string,
            show?: boolean,
        },
        children: React.ReactNode,
    }) {

    const finalTrigger = {
        show: true,
        title: 'Enter button title',
        icon: Plus,
        variants: Variants.BUTTON,
        ...trigger
    }
    const finalTriggerd = {
        show: true,
        title: 'Enter button title',
        icon: Plus,
        variants: Variants.BUTTON,
        ...trigger
    }

    const finalTooltip = {
        title: "Enter tooltip title",
        show: true,
        ...tooltip,
    }


    const TriggerButton = (
        <DialogTrigger asChild>
            {finalTrigger.variants === Variants.BUTTON ?

                <Button className="cursor-pointer">
                    {finalTrigger.icon &&

                        <finalTrigger.icon className="h-4 w-4" />
                    }
                    {finalTrigger.title}
                </Button>
                :
                <Button className="cursor-pointer" variant="ghost"><finalTrigger.icon className="h-4 w-4 cursor-pointer" /></Button>}
        </DialogTrigger>
    )

    return <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {finalTrigger.show &&
            finalTooltip.show ?
            <Tooltip>
                <TooltipTrigger asChild>
                    {TriggerButton}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{finalTooltip.title}</p>
                </TooltipContent>
            </Tooltip> : TriggerButton
        }
        <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>{header.title}</DialogTitle>
                <DialogDescription>
                    {header.desc}
                </DialogDescription>
            </DialogHeader>

            {children}
        </DialogContent>
    </Dialog>
}