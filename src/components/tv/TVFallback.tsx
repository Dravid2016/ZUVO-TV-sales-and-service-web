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
  const [activeVisualMode, setActiveVisualMode] = useState<'video' | 'beach' | 'ocean' | 'mountain'>('video');

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
      className={`relative perspective-1000 w-full max-w-4xl mx-auto flex flex-col items-center py-2 sm:py-6 cursor-pointer ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* 3D TV Main Container */}
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl bg-neutral-900 border-[4px] sm:border-[8px] border-[#1a1a1a] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9),0_0_40px_rgba(0,210,255,0.15)] overflow-hidden group"
      >
        {/* Subtle Metallic Bezel Frame Edge */}
        <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none z-30" />

        {/* Ambient ZUVO Backlight Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />

        {/* TV Screen Display Content */}
        <div className="relative w-full h-full bg-[#040406] overflow-hidden flex flex-col justify-between p-3 sm:p-6 md:p-8">
          
          {/* CINEMATIC 4K VIDEO & NATURE VISUAL BACKGROUND ON TV DISPLAY */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
            {activeVisualMode === 'video' && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center brightness-110 contrast-110 saturate-125 pointer-events-none transition-opacity duration-700 opacity-100"
                poster="/assets/nature-1.jpg"
              >
                <source src="/assets/nature-flower.mp4" type="video/mp4" />
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video>
            )}

            {activeVisualMode === 'beach' && (
              <img
                src="/assets/nature-1.jpg"
                alt="Tropical Nature Beach"
                className="w-full h-full object-cover object-center brightness-110 contrast-110 saturate-125 transition-all duration-700"
              />
            )}

            {activeVisualMode === 'ocean' && (
              <img
                src="/assets/nature-2.jpg"
                alt="Deep Aquatic Ocean Reef"
                className="w-full h-full object-cover object-center brightness-110 contrast-110 saturate-125 transition-all duration-700"
              />
            )}

            {activeVisualMode === 'mountain' && (
              <img
                src="/assets/nature-3.jpg"
                alt="Mountain Sunset Skyline"
                className="w-full h-full object-cover object-center brightness-110 contrast-110 saturate-125 transition-all duration-700"
              />
            )}
          </div>

          {/* Top TV Screen UI Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="/zuvo-logo.svg" alt="ZUVO" className="h-3.5 sm:h-5 md:h-6 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" />
            </div>
            
            {/* Nature Visual Channel Switcher Bar */}
            <div className="flex items-center space-x-2 sm:space-x-3 text-xs font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <div className="flex items-center space-x-0.5 sm:space-x-1 bg-black/80 backdrop-blur-md p-0.5 sm:p-1 rounded-full border border-white/20 shadow-lg">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveVisualMode('video'); }}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[11px] font-bold transition-all ${
                    activeVisualMode === 'video'
                      ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,210,255,0.8)] scale-105'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Nature Video
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveVisualMode('beach'); }}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[11px] font-bold transition-all ${
                    activeVisualMode === 'beach'
                      ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,210,255,0.8)] scale-105'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Beach
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveVisualMode('mountain'); }}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[11px] font-bold transition-all ${
                    activeVisualMode === 'mountain'
                      ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,210,255,0.8)] scale-105'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Sunset
                </button>
              </div>

              <span className="hidden sm:flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>4K HDR10+ LIVE</span>
              </span>
            </div>
          </div>

          {/* Minimalist Bottom-Left Video Badge */}
          <div className="relative z-10 max-w-sm mt-auto mb-1.5 sm:mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            <span className="px-2 sm:px-3 py-0.5 rounded-full bg-black/60 border border-cyan-400/50 text-cyan-300 text-[8px] sm:text-[10px] font-extrabold tracking-widest uppercase inline-block backdrop-blur-md">
              4K QUANTUM DISPLAY
            </span>
          </div>

          {/* Bottom App Launcher Row */}
          <div className="relative z-10 flex items-center space-x-3 sm:space-x-6 md:space-x-8 overflow-x-auto pb-1 pt-1.5 sm:pt-2 scrollbar-none border-t border-white/10 backdrop-blur-sm bg-black/30 px-2 sm:px-4 rounded-lg sm:rounded-xl">
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all shrink-0">
              <NetflixLogo className="h-3.5 sm:h-5 md:h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all shrink-0">
              <PrimeVideoLogo className="h-3.5 sm:h-5 md:h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all shrink-0">
              <DisneyPlusLogo className="h-4 sm:h-6 md:h-7 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all shrink-0">
              <YouTubeLogo className="h-3.5 sm:h-5 md:h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all shrink-0">
              <SpotifyLogo className="h-3.5 sm:h-5 md:h-6 w-auto" />
            </div>
            <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all shrink-0">
              <PlayStoreLogo className="h-3.5 sm:h-5 md:h-6 w-auto" />
            </div>
          </div>

          {/* Glass Screen Reflection Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
        </div>

        {/* TV Bottom Bezel Logo Lockup */}
        <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-1 opacity-80">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cyan-400" />
          <span className="text-[7px] sm:text-[9px] font-bold tracking-widest text-white">ZUVO</span>
        </div>
      </motion.div>

      {/* Sleek Metallic TV Stand */}
      <div className="relative w-32 sm:w-48 h-3 sm:h-5 flex flex-col items-center">
        <div className="w-24 sm:w-36 h-1.5 sm:h-2 bg-gradient-to-r from-neutral-700 via-neutral-400 to-neutral-700 rounded-b-md shadow-md" />
        <div className="w-40 sm:w-56 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-neutral-600 to-transparent mt-0.5 sm:mt-1" />
      </div>
    </div>
  );
};
