import { MouseEventHandler } from "react"

export const DropdownItem = ({ onClick = () => { }, label="item", className="", children }: { onClick?: MouseEventHandler<HTMLDivElement>, label?: string, className?:string, children?: React.ReactNode }) => {
    return (
        <div className={`${className}`} onClick={onClick}>
            {children ? children : label}
        </div>
    )
}