import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'back' | 'filter';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isActive?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isActive = false,
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs rounded-xl font-bold',
    md: 'px-5 py-2.5 text-xs sm:text-sm rounded-2xl font-bold',
    lg: 'px-7 py-3.5 text-sm sm:text-base rounded-full font-black',
  }[size];

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-blue-900 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/20 active:scale-[0.98] transition cursor-pointer border border-blue-800';
      break;
    case 'secondary':
      variantClasses =
        'bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80 shadow-xs hover:border-blue-300 transition cursor-pointer';
      break;
    case 'outline':
      variantClasses =
        'bg-transparent hover:bg-blue-50 text-blue-900 border-2 border-blue-900 transition cursor-pointer';
      break;
    case 'ghost':
      variantClasses =
        'bg-transparent hover:bg-slate-100 text-slate-700 transition cursor-pointer';
      break;
    case 'back':
      variantClasses =
        'inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 hover:bg-white text-slate-700 hover:text-blue-900 border border-slate-200 shadow-xs transition cursor-pointer font-bold text-xs';
      break;
    case 'filter':
      variantClasses = isActive
        ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20 font-bold cursor-pointer'
        : 'bg-white/70 hover:bg-white text-slate-700 border border-white font-bold cursor-pointer hover:border-blue-200';
      break;
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 transition-all select-none ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
