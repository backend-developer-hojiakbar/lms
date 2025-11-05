import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  children, 
  className,
  ...props 
}) => {
  const baseStyles = 'font-heading font-semibold rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 transform active:scale-95 shadow-lg hover:shadow-xl';

  const variantStyles = {
    primary: 'bg-gradient-to-br from-primary-green to-dark-green text-white hover:shadow-glow-primary focus:ring-primary-green/30',
    secondary: 'bg-gradient-to-br from-accent-gold to-yellow-600 text-white hover:shadow-glow-secondary focus:ring-accent-gold/30',
    outline: 'bg-white/50 border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white focus:ring-primary-green/30',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = 'disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;