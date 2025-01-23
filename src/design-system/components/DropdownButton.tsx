import React from "react"
import { BiChevronDown } from "react-icons/bi"

export const DropdownButton = ({ label = "item", withIcon = true }: { label: string, withIcon?: boolean }) => {
    return (
        <div className="flex items-center space-x-1 cursor-pointer">
            <p>{label}</p>

            {withIcon &&
                <BiChevronDown className="transition-all group-hover:rotate-180" size={24} />
            }
        </div>
    )
}

