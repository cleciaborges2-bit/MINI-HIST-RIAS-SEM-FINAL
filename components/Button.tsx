
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
        ${fullWidth ? 'w-full' : 'px-8 md:px-12'}
        py-5 bg-emerald-500 hover:bg-emerald-600 
        text-white font-extrabold text-lg md:text-xl 
        rounded-xl transition-all duration-300 transform hover:scale-105 
        shadow-xl hover:shadow-2xl active:scale-95
        uppercase tracking-wider
        ${className}
      `}
    >
      {text}
    </button>
  );
};
