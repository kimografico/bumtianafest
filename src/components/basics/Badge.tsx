import React from 'react';

export type BadgeVariant = 'category' | 'time' | 'location' | 'highlight' | 'status' | 'age';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'category',
  children,
  icon,
  className = '',
}) => {
  let variantClasses = '';

  switch (variant) {
    case 'category':
      variantClasses = 'bg-blue-50 text-blue-700 border border-blue-100 font-bold';
      break;
    case 'time':
      variantClasses = 'font-mono bg-blue-50 text-blue-900 border border-blue-100 font-bold';
      break;
    case 'location':
      variantClasses = 'bg-slate-50 text-slate-600 border border-slate-200 font-medium';
      break;
    case 'highlight':
      variantClasses = 'bg-blue-700 text-white font-black uppercase tracking-wider shadow-md';
      break;
    case 'status':
      variantClasses = 'bg-teal-50 text-teal-800 border border-teal-100 font-bold';
      break;
    case 'age':
      variantClasses = 'bg-amber-50 text-amber-800 border border-amber-200/80 font-bold';
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs shadow-2xs select-none ${variantClasses} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
