import React from 'react';
import { TVFallback } from './TVFallback';

export interface TV3DProps {
  interactive?: boolean;
  screenContent?: 'home' | 'apps' | 'movie';
  className?: string;
}

export const TV3D: React.FC<TV3DProps> = ({ interactive = true, screenContent = 'home', className = '' }) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <TVFallback interactive={interactive} screenContent={screenContent} />
    </div>
  );
};
