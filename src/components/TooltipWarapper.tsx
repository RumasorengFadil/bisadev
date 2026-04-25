import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function TooltipWrapper({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>

            <TooltipContent>
                <p>{title}</p>
            </TooltipContent>
        </Tooltip>
    )
}