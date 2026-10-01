import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { TV3D } from '../tv/TV3D';
import Beams from '../Beams/Beams';
import { siteConfig } from '../../data/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="landing-page relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-28 sm:pt-32 pb-24">
      {/* React Bits Beams Background Layer */}
      <div className="landing-background absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Background Overlay / Vignette Gradient */}
      <div className="landing-overlay absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="landing-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Official ZUVO Android TV Logo Lockup Prominently Placed at the Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/zuvo-logo.svg"
            alt="ZUVO Android TV"
            className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-[0_10px_35px_rgba(0,210,255,0.25)] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.1]">
            SMART ENTERTAINMENT.<br />
            <span className="text-zuvo-gradient">REIMAGINED.</span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover precision Quantum color, immersive Dolby Atmos sound, and seamless Google Android TV intelligence engineered in a modern borderless unibody design.
          </p>
        </motion.div>

        {/* Action Buttons - Curved Rounded Full */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 hover:shadow-zuvo-glow transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>{siteConfig.cta.primary}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/technology"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-bold text-xs tracking-widest uppercase border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Play size={14} fill="currentColor" />
            <span>{siteConfig.cta.secondary}</span>
          </Link>
        </motion.div>

        {/* 3D TV Interactive Display Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-5xl mx-auto"
        >
          <TV3D interactive={true} screenContent="home" />
        </motion.div>

        {/* Key Highlight Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10 text-center w-full">
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-white">1 Billion+</div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Quantum Colors</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400">10,000+</div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Android TV Apps</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-white">4K UHD</div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Dolby Vision HDR</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-purple-400">Dolby Atmos</div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Immersive Sound</div>
          </div>
        </div>
      </div>
    </section>
  );
};
