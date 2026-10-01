import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'wide' | 'narrow';
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', size = 'normal' }) => {
  const maxWidths = {
    narrow: 'max-w-4xl',
    normal: 'max-w-7xl',
    wide: 'max-w-[1440px]',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
};
