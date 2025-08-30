import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Category } from "@/typdata/category"

interface SelectInputProps {
    value: string
    onChange: (value: string) => void
    options: Category[] | undefined
    placeholder?: string
    className?:string
}

export const SelectInput: React.FC<SelectInputProps> = ({
    value,
    onChange,
    options,
    placeholder = "Select an option...",
    className,
}) => {
    return (
        <div className={className}>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options?.map((option, index) => (
                        <SelectItem key={index} value={option.id}>
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
