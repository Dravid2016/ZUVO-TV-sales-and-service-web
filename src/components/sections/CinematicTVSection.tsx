import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';
import { TV3D } from '../tv/TV3D';

export const CinematicTVSection: React.FC = () => {
  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/10 via-cyan-400/15 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="3D HARDWARE PRESENTATION"
          title="PHYSICAL DEPTH."
          highlightTitle="BORDERLESS BEAUTY."
          subtitle="Interact with the ZUVO 3D display hardware profile below. Move your cursor to inspect panel thinness, subtle glass reflectivity, and metallic stand architecture."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12"
        >
          <TV3D interactive={true} screenContent="home" />
        </motion.div>
      </Container>
    </section>
  );
};
