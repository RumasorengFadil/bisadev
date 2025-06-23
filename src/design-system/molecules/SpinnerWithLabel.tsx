import React from "react";
import Spinner from "../components/Spinner";

// Tipe ukuran harus konsisten dengan Spinner
type SpinnerSize = "small" | "medium" | "large";

interface SpinnerWithLabelProps {
  size?: SpinnerSize;
  label?: string;
}

const SpinnerWithLabel: React.FC<SpinnerWithLabelProps> = ({
  size = "small",
  label = "Mohon Ditunggu...",
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Spinner size={size} />
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default SpinnerWithLabel;
