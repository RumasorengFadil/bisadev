import React, { ButtonHTMLAttributes, Ref } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  contentRef?: Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  disabled,
  children,
  contentRef,
  ...props
}) => {
  return (
    <button
      {...props}
      ref={contentRef}
      className={
        `inline-flex items-center rounded-md px-4 py-2 bg-gray-100  border border-transparent font-semibold text-xs text-black  tracking-widest hover:bg-gray-700 dark:hover:bg-white dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
          disabled ? "opacity-25" : ""
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
