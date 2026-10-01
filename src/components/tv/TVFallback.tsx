import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  YouTubeLogo,
  NetflixLogo,
  PrimeVideoLogo,
  DisneyPlusLogo,
  SpotifyLogo,
  PlayStoreLogo,
} from '../ui/OTTLogos';

export interface TVFallbackProps {
  interactive?: boolean;
  screenContent?: 'home' | 'apps' | 'movie';
  className?: string;
}

export const TVFallback: React.FC<TVFallbackProps> = ({
  interactive = true,
  screenContent: _screenContent = 'home',
  className = '',
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotateY((x / rect.width) * 15);
    setRotateX((-y / rect.height) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective-1000 w-full max-w-4xl mx-auto flex flex-col items-center py-6 cursor-pointer ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* 3D TV Main Container */}
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative w-full aspect-[16/9] rounded-2xl bg-neutral-900 border-[8px] border-[#1a1a1a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(0,210,255,0.15)] overflow-hidden group"
      >
        {/* Subtle Metallic Bezel Frame Edge */}
        <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none z-30" />

        {/* Ambient ZUVO Backlight Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />

        {/* TV Screen Display Content */}
        <div className="relative w-full h-full bg-[#040406] overflow-hidden flex flex-col justify-between p-6 md:p-8">
          
          {/* LIVE VISUAL SHOWCASE VIDEO BACKGROUND RUNNING INSIDE THE TV */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          />

          {/* Dark Overlay Gradient for High Contrast UI */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70 z-0 pointer-events-none" />

          {/* Top TV Screen UI Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/zuvo-logo.svg" alt="ZUVO" className="h-6 w-auto drop-shadow-md" />
            </div>
            <div className="flex items-center space-x-4 text-xs font-semibold text-white drop-shadow-md">
              <span className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>4K HDR10+ LIVE</span>
              </span>
              <span>8:45 PM</span>
            </div>
          </div>

          {/* Center TV Screen Hero Banner */}
          <div className="relative z-10 max-w-lg my-auto drop-shadow-lg">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-cyan-200 text-[11px] font-bold tracking-widest uppercase mb-3 inline-block backdrop-blur-md">
              STREAMING IN 4K ULTRA HD
            </span>
            <h4 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-2 drop-shadow-md">
              CINEMATIC QUANTUM VISUALS
            </h4>
            <p className="text-neutral-200 text-xs md:text-sm line-clamp-2 leading-relaxed drop-shadow-md">
              Experience dynamic micro-dimming and 1 billion+ colors on official OTT platforms with ZUVO Android TV.
            </p>
          </div>

          {/* Bottom App Launcher Row — NO BUTTON BOXES (Placed Normally as requested by User) */}
          <div className="relative z-10 flex items-center space-x-8 overflow-x-auto pb-1 pt-2 scrollbar-none border-t border-white/10 backdrop-blur-sm bg-black/30 px-4 rounded-xl">
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              <NetflixLogo className="h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              <PrimeVideoLogo className="h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              <DisneyPlusLogo className="h-7 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              <YouTubeLogo className="h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              <SpotifyLogo className="h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              <PlayStoreLogo className="h-6 w-auto" />
            </div>
          </div>

          {/* Glass Screen Reflection Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
        </div>

        {/* TV Bottom Bezel Logo Lockup */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-1 opacity-80">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-[9px] font-bold tracking-widest text-white">ZUVO</span>
        </div>
      </motion.div>

      {/* Sleek Metallic TV Stand */}
      <div className="relative w-48 h-5 flex flex-col items-center">
        <div className="w-36 h-2 bg-gradient-to-r from-neutral-700 via-neutral-400 to-neutral-700 rounded-b-md shadow-md" />
        <div className="w-56 h-1.5 bg-gradient-to-r from-transparent via-neutral-600 to-transparent mt-1" />
      </div>
    </div>
  );
};
