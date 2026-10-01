import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'cyan' | 'purple' | 'outline' | 'surface';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center justify-center space-x-2 px-5 py-2 rounded-full border border-white/30 bg-gradient-to-r from-[#0052D4] via-[#00D2FF] to-[#7928CA] text-white text-xs font-extrabold tracking-wider uppercase shadow-[0_4px_22px_rgba(0,180,255,0.45)] hover:shadow-[0_4px_28px_rgba(0,180,255,0.65)] hover:scale-[1.03] transition-all duration-300 backdrop-blur-md select-none ${className}`}
    >
      <span>{children}</span>
    </span>
  );
};
