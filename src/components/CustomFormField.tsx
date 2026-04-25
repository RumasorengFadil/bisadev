import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toTitleCase } from "@/utils/utils";


type Props<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> = {
    form: UseFormReturn<TFieldValues>;
    type: HTMLInputTypeAttribute | undefined;
    name: TName;
    autocomplete?: HTMLInputAutoCompleteAttribute | undefined;
    label: string,
};

export default function CustomFormField<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
>({ form, name, type, autocomplete, label }: Props<TFieldValues, TName>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {toTitleCase(label)} <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                        <ResolveFormInput field={field} autocomplete={autocomplete} name={name} type={type} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

function ResolveFormInput<TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>>({ type, field, name, autocomplete }: {
        type: HTMLInputTypeAttribute | undefined, field: any, name: TName;
        autocomplete: HTMLInputAutoCompleteAttribute | undefined;
    }) {
    if (type === "password") {
        return <InputPassword field={field} />
    } else {
        <Input
            id={name}
            type={type}
            placeholder="••••••••"
            autoComplete={autocomplete}
            {...field}
        />
    }
}


function InputPassword({ field }: { field: any }) {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <Input
                id="password"
                type={show ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                {...field}
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
            >
                {show ? <EyeOff className="text-gray-600" size={18} /> : <Eye className="text-gray-600" size={18} />}
            </button>
        </div>
    )
}