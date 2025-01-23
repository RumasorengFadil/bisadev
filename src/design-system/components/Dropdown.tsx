import { useState } from "react"

export const Dropdown = ({ trigger, children, className="", whenOpen="", whenClose="hidden" }: { trigger: React.ReactNode, children: React.ReactNode, className?:string, whenOpen?:string, whenClose?:string }) => {
    const [open, setOpen] = useState(false);

    return (
        <div onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)} className="flex flex-col space-y-4 group relative sm:block z-50">
            <div className="sm:py-4">
                {trigger}
            </div>
            
            <div className={`flex flex-col space-y-4 w-max rounded transition-all duration-200 ease-in-out sm:space-y-0 sm:shadow-md ${className} ${open?whenOpen:whenClose}`}>
                {children}
            </div>
        </div>
    )
}
