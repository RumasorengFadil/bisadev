"use client"
import React, { forwardRef, useEffect, useRef, ReactNode, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    className?: string;
    isFocused?: boolean;
    children?: ReactNode;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ type = "text", className = "", isFocused = false, children = "", ...props }, ref) => {
        const input = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (isFocused && input.current) {
                input.current.focus();
            }
        }, [isFocused]);

        // Menangani ref yang diberikan (baik RefObject atau callback)
        const combinedRef = (ref as React.RefObject<HTMLInputElement>) || input;

        return (
            <div className="relative">
                <input
                    {...props}
                    type={type}
                    className={
                        "border py-1 px-2 outline-none border-gray-300 focus:border-tertiary focus:border-2 focus:ring-tertiborder-tertiary rounded-md shadow-sm  " +
                        className
                    }
                    ref={combinedRef}
                />
                {children}
            </div>
        );
    }
);

// Menambahkan display name untuk mempermudah debugging
TextInput.displayName = "TextInput";

export default TextInput;
