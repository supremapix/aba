import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 transform";
  
  const variants = {
    primary: "bg-aba-blue text-white hover:bg-aba-darkBlue hover:-translate-y-0.5 focus:ring-aba-blue shadow-lg hover:shadow-xl",
    secondary: "bg-aba-orange text-white hover:bg-orange-600 hover:-translate-y-0.5 focus:ring-aba-orange shadow-md hover:shadow-lg",
    success: "bg-aba-green text-white hover:bg-green-700 hover:-translate-y-0.5 focus:ring-aba-green shadow-md hover:shadow-lg",
    outline: "border-2 border-aba-blue text-aba-blue hover:bg-blue-50 focus:ring-aba-blue",
    white: "bg-white text-aba-blue hover:bg-gray-100 hover:-translate-y-0.5 focus:ring-white shadow-md hover:shadow-lg",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;