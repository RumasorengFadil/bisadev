import React, { ReactNode, FC } from "react";

interface IconFigureProps {
  icon?: FC<{ size: number }>; // Icon adalah komponen React dengan properti `size`
  className?: string;
  children?: ReactNode;
  size?: "sm" | "base" | "md"; // Ukuran yang didukung
  position?: "left" | "center" | "right"; // Posisi teks
  caption?: string;
}

export const IconFigure: FC<IconFigureProps> = ({
  icon: Icon,
  className = "",
  children,
  size = "base",
  position = "center",
  caption,
}) => {
  const sizeHelper = {
    sm: {
      iconSize: 20,
      captionSize: "xs",
    },
    base: {
      iconSize: 24,
      captionSize: "xs",
    },
    md: {
      iconSize: 28,
      captionSize: "sm",
    },
  }[size];

  return (
    <figure
      className={`flex flex-col space-y-2 ${className} items-${position}`}
    >
      {/* Icon */}
      {Icon && <Icon size={sizeHelper.iconSize} />}

      {/* Figcaption */}
      {children ? (
        children
      ) : (
        <div className={`text-${sizeHelper.captionSize}`}>{caption}</div>
      )}
    </figure>
  );
};
