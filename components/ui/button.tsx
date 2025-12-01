import { ButtonHTMLAttributes, cloneElement, isValidElement } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30',
  secondary: 'border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white',
  ghost: 'text-slate-200 hover:bg-slate-900/50',
};

export function Button({ variant = 'primary', size = 'md', className = '', asChild, children, ...props }: ButtonProps) {
  const classes = `rounded-xl font-semibold inline-flex items-center gap-2 transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: `${classes} ${children.props.className || ''}`,
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
