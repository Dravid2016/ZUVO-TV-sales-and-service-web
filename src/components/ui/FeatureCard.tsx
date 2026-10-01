import React from 'react';
import { motion } from 'framer-motion';

export interface FeatureCardProps {
  icon: React.ReactNode;
  category?: string;
  title: string;
  description: string;
  gradient?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  category,
  title,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, borderColor: 'rgba(0, 210, 255, 0.4)' }}
      transition={{ duration: 0.3 }}
      className="group relative p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:shadow-zuvo-glow transition-all duration-300 flex flex-col items-center text-center justify-between overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
          {icon}
        </div>
        {category && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400/80 uppercase block mb-2">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-4 w-full border-t border-white/5 flex items-center justify-center text-xs font-semibold text-neutral-500 group-hover:text-cyan-400 transition-colors">
        <span>EXPLORE FEATURE</span>
        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </motion.div>
  );
};
