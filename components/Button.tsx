
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className = "", fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${fullWidth ? 'w-full' : 'px-10 md:px-14'}
        py-5 bg-emerald-500 hover:bg-emerald-600 
        text-white font-black text-lg md:text-xl 
        rounded-2xl transition-all duration-300 transform hover:scale-[1.02] 
        shadow-xl hover:shadow-emerald-500/25 active:scale-95
        uppercase tracking-tight
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {text}
    </button>
  );
};
