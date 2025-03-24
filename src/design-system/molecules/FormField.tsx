import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import TextInput from "../components/TextInput";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    isFocused?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
    className = "",
    type = "text",
    placeholder,
    label = "Label",
    error,
    isFocused = false,
    ...props
}) => {
    return (
        <div className={"flex flex-col space-y-2 " + className}>
            <InputLabel value={label} />
            <TextInput
                {...props}
                type={type}
                placeholder={placeholder}
                className="bg-gray-100 w-full"
                isFocused={isFocused}
            />
            {error && <InputError message={error} />}
        </div>
    );
};

export default FormField;
