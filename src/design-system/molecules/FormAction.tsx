import { ButtonHTMLAttributes } from "react";
import Button from "../components/Button";

interface FormActionProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

const FormAction: React.FC<FormActionProps> = ({
    className = "",
    children,
    ...props
}) => {
    return (
        <div>
            <Button {...props} className={className}>{children}</Button>
        </div>
    );
};

export default FormAction;
