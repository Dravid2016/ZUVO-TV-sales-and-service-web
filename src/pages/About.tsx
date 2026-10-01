import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/sections/CTASection';

export const About: React.FC = () => {
  return (
    <PageContainer>
      <div className="py-16 bg-black">
        <Container>
          <SectionHeading
            badge="BRAND PHILOSOPHY"
            title="ABOUT"
            highlightTitle="ZUVO TELEVISION"
            subtitle="ZUVO is an emerging smart television brand focused on bringing high-performance display panels, immersive Dolby audio, and official Google Android TV ecosystem to global homes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#09090b] border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white uppercase">OUR VISION</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                To create smart televisions that seamlessly integrate state-of-the-art quantum dot displays, borderless glass craftsmanship, and pure official Android TV software without unnecessary complexity.
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-[#09090b] border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white uppercase">OUR CRAFT</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Every ZUVO TV model undergoes rigorous panel calibration, color accuracy testing, and heat dissipation engineering to maintain peak 4K performance for years of daily enjoyment.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <CTASection />
    </PageContainer>
  );
};
export default About;
