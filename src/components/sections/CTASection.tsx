import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Scanner } from '../ui/Scanner/Scanner';
import { siteConfig } from '../../data/siteConfig';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <Container size="wide">
        <div className="relative w-full rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#090e1a] via-[#05060b] to-[#12071a] border border-white/15 p-10 sm:p-16 lg:p-20 text-left overflow-hidden shadow-2xl">
          {/* React Bits Scanner Background Layer (contained inside card) */}
          <div className="absolute inset-0 w-full h-full z-0 opacity-75 overflow-hidden">
            <Scanner
              color1="#5227FF"
              color2="#FF9FFC"
              color3="#FFFFFF"
              speed={0.5}
              sweepSpeed={0.25}
              sweepWidth={1.6}
              sweepFalloff={6}
              scale={1.5}
              frequency={2}
              ripple={0.22}
              bandDensity={11}
              lineSharpness={5.5}
              glow={0.22}
              scanDirection="vertical"
              colorSpread={0.7}
              brightness={1.0}
              contrast={1.15}
              softness={1.4}
              vignette={0.45}
              scanline={true}
              grain={true}
              grainIntensity={0.05}
              opacity={1.0}
              mouseInteraction={true}
              mouseRadius={0.5}
              mouseStrength={0.5}
            />
          </div>

          {/* Card Dark Gradient Overlay to guarantee text readability */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#090e1a]/80 via-[#05060b]/40 to-transparent" />

          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-400/20 to-purple-600/15 rounded-full blur-[140px] pointer-events-none z-[1]" />

          <div className="relative z-10 max-w-3xl flex flex-col items-start text-left">
            {/* Top Curved Pill Badge - Left Aligned */}
            <div className="mb-6">
              <Badge>TRANSFORM YOUR LIVING SPACE</Badge>
            </div>

            {/* Headline - Left Aligned */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.15] mb-6 text-left">
              READY TO EXPERIENCE <br />
              <span className="text-zuvo-gradient">ZUVO SMART TV?</span>
            </h2>

            {/* Subtitle - Left Aligned */}
            <p className="text-neutral-300 text-base sm:text-xl mb-10 leading-relaxed text-left max-w-2xl">
              Explore our full lineup of 4K QLED, OLED Master, and Crystal UHD Android TVs.
            </p>

            {/* Buttons Row - Left Aligned */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              <Link
                to="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-neutral-200 hover:shadow-zuvo-glow transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>{siteConfig.cta.primary}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-bold text-xs tracking-widest uppercase border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
              >
                <span>{siteConfig.cta.support}</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
