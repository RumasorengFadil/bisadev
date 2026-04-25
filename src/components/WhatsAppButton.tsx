import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  number: string;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export default function WhatsAppButton({ number, variant = 'primary', fullWidth = false }: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  const baseClasses = "px-8 py-4 rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center justify-center gap-2";
  const widthClass = fullWidth ? "w-full" : "";

  const variantClasses = variant === 'primary'
    ? "text-white"
    : "border-2 border-gray-900";

  const variantStyles = variant === 'primary'
    ? { backgroundColor: '#1a3e6b' }
    : { color: '#1a3e6b' };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${widthClass} ${variantClasses}`}
      style={variantStyles}
    >
      <MessageCircle className="w-5 h-5" />
      Join via WhatsApp
    </button>
  );
}
