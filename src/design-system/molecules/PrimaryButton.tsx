import React, { ButtonHTMLAttributes, Ref } from "react";
import Button from "@/design-system/components/Button";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  contentRef?: Ref<HTMLButtonElement>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className = "",
  disabled,
  children,
  contentRef,
  ...props
}) => {
  return (
    <Button contentRef={contentRef} {...props} disabled={disabled} className={"bg-yellowpale border " + className}>{children}</Button>
  );
};

export default PrimaryButton;
