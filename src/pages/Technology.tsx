import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { techPillars } from '../data/technology';
import { CTASection } from '../components/sections/CTASection';

export const Technology: React.FC = () => {
  return (
    <PageContainer>
      <div className="py-16 bg-black">
        <Container>
          <SectionHeading
            badge="ZUVO INNOVATION & HARDWARE"
            title="PRECISION"
            highlightTitle="TECHNOLOGY ENGINE"
            subtitle="Explore the display, audio, processing, and smart TV technology architecture engineered into every ZUVO Smart TV."
          />

          <div className="space-y-16">
            {techPillars.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#0a0a0d] border border-white/10 relative overflow-hidden"
              >
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase block mb-2">
                  {pillar.subtitle}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
                  {pillar.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-8">
                  {pillar.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                  {pillar.specs.map((sp, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                        {sp.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">{sp.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTASection />
    </PageContainer>
  );
};
export default Technology;
