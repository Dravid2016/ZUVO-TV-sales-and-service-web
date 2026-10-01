import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="THE ZUVO PHILOSOPHY"
          title="ENGINEERED FOR"
          highlightTitle="VISUAL PERFECTION"
          subtitle="ZUVO was founded on a singular conviction: television hardware and smart software must harmonize into a singular cinematic experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 relative overflow-hidden group"
          >
            <div className="text-cyan-400 font-mono text-xs mb-4">01 / ACOUSTICS</div>
            <h3 className="text-xl font-bold text-white mb-3">Cinematic Audio Projection</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every whisper and dynamic score comes alive through multi-channel sound decoders tuned for spatial depth and clear vocal resonance.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 relative overflow-hidden group"
          >
            <div className="text-cyan-400 font-mono text-xs mb-4">02 / DISPLAY</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Pixel Density</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Micro-dimming LED arrays deliver true black saturation and hyper-realistic highlights without washed-out light bleed.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 relative overflow-hidden group"
          >
            <div className="text-cyan-400 font-mono text-xs mb-4">03 / ECOSYSTEM</div>
            <h3 className="text-xl font-bold text-white mb-3">Pure Android TV</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              No bloated skins or restrictive menus. Experience the full speed, official updates, and app library of Google Android TV.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
