import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductShowcase } from '../components/sections/ProductShowcase';
import { CTASection } from '../components/sections/CTASection';

export const Products: React.FC = () => {
  return (
    <PageContainer>
      <div className="pt-8 pb-12 bg-black">
        <Container>
          <SectionHeading
            badge="ZUVO TELEVISION COLLECTION"
            title="OFFICIAL TV MODEL"
            highlightTitle="LINEUP"
            subtitle="Explore our comprehensive smart television lineup. From Quantum Dot 4K QLED matrix to ultra-contrast OLED Master displays."
          />
        </Container>
      </div>

      <ProductShowcase />
      <CTASection />
    </PageContainer>
  );
};
export default Products;
