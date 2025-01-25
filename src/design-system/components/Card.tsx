import React, { FC, HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  cursor?: "pointer" | "default" | "move" | "text" | "wait" | "not-allowed"; // Opsi kursor yang umum
}

const Card: FC<CardProps> = ({ 
  className = "", 
  children, 
  cursor = "pointer", 
  ...props 
}) => {
  return (
    <div
      {...props}
      className={`flex flex-col cursor-${cursor} p-4 shadow-md space-y-2 rounded ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
