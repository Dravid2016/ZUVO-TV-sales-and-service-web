import React from 'react';
import { motion } from 'framer-motion';
import { Mic, AppWindow, Cast, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';
import {
  YouTubeLogo,
  NetflixLogo,
  PrimeVideoLogo,
  DisneyPlusLogo,
  AppleTVLogo,
  SpotifyLogo,
  PlayStoreLogo,
} from '../ui/OTTLogos';

export const AndroidTVSection: React.FC = () => {
  const ottApps = [
    { name: 'Netflix', logo: <NetflixLogo className="h-8 w-auto" /> },
    { name: 'Prime Video', logo: <PrimeVideoLogo className="h-7 w-auto" /> },
    { name: 'Disney+ Hotstar', logo: <DisneyPlusLogo className="h-9 w-auto" /> },
    { name: 'YouTube', logo: <YouTubeLogo className="h-7 w-auto" /> },
    { name: 'Spotify', logo: <SpotifyLogo className="h-7 w-auto" /> },
    { name: 'Apple TV', logo: <AppleTVLogo className="h-7 w-auto" /> },
    { name: 'Google Play', logo: <PlayStoreLogo className="h-7 w-auto" /> },
    { name: 'More Apps', logo: <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">10,000+ APPS</span> },
  ];

  return (
    <section className="py-24 bg-[#050507] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="OFFICIAL ANDROID TV PLATFORM"
          title="ENDLESS ENTERTAINMENT."
          highlightTitle="ONE TAP AWAY."
          subtitle="ZUVO TVs integrate official Google Android TV, unlocking over 10,000 streaming applications, instant Google Assistant voice navigation, and effortless Chromecast casting."
        />

        {/* Centered Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 w-full">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#0a0a0d] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col items-center text-center space-y-3"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Mic size={24} />
            </div>
            <h4 className="text-base font-bold text-white">Google Assistant Voice</h4>
            <p className="text-neutral-400 text-xs leading-relaxed text-center">
              Search movies, launch apps, or ask questions instantly with voice control.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#0a0a0d] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col items-center text-center space-y-3"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <AppWindow size={24} />
            </div>
            <h4 className="text-base font-bold text-white">10,000+ Apps</h4>
            <p className="text-neutral-400 text-xs leading-relaxed text-center">
              Stream Netflix, Prime Video, Disney+ Hotstar, YouTube, Spotify, and more.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-[#0a0a0d] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col items-center text-center space-y-3"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Cast size={24} />
            </div>
            <h4 className="text-base font-bold text-white">Chromecast Built-In</h4>
            <p className="text-neutral-400 text-xs leading-relaxed text-center">
              Cast photos, movies, and Chrome tabs directly from phone or laptop.
            </p>
          </motion.div>
        </div>

        {/* Centered OTT Apps Grid Container */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#000000] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden group text-center flex flex-col items-center">
            <div className="flex items-center justify-center space-x-3 mb-6 pb-4 border-b border-white/10 w-full">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wider">OFFICIAL STREAMING PARTNERS</span>
              <ShieldCheck size={16} className="text-emerald-400 ml-2" />
            </div>

            {/* Normal Pure Black Cards Grid with Centered Original Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {ottApps.map((app) => (
                <motion.div
                  key={app.name}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 210, 255, 0.4)' }}
                  className="h-24 rounded-2xl bg-[#08080a] border border-white/10 p-3 flex flex-col items-center justify-center shadow-md hover:bg-[#0d0e12] transition-all duration-300 cursor-pointer text-center"
                >
                  {app.logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
