import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { HeroSection } from '../components/sections/HeroSection';
import { IntroSection } from '../components/sections/IntroSection';
import { AndroidTVSection } from '../components/sections/AndroidTVSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ProductShowcase } from '../components/sections/ProductShowcase';
import { WhyZuvoSection } from '../components/sections/WhyZuvoSection';
import { CTASection } from '../components/sections/CTASection';

export const Home: React.FC = () => {
  return (
    <PageContainer noPadding>
      <HeroSection />
      <IntroSection />
      <AndroidTVSection />
      <FeaturesSection />
      <ProductShowcase />
      <WhyZuvoSection />
      <CTASection />
    </PageContainer>
  );
};
export default Home;
