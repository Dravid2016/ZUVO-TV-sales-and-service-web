import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-5 py-2 text-xs font-semibold tracking-wider',
    md: 'px-7 py-3.5 text-xs font-bold tracking-widest uppercase',
    lg: 'px-9 py-4.5 text-sm font-bold tracking-widest uppercase',
  };

  const variantClasses = {
    primary: 'bg-white text-black hover:bg-neutral-200 border border-white shadow-lg hover:shadow-zuvo-glow',
    secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/20 backdrop-blur-md',
    ghost: 'bg-transparent text-neutral-400 hover:text-white border border-transparent',
    gradient: 'bg-zuvo-gradient text-white hover:opacity-95 shadow-zuvo-glow border border-cyan-400/30',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center space-x-2 rounded-full transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
};
