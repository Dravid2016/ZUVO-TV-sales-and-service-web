import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';
import { ProductCard } from '../products/ProductCard';
import { products } from '../../data/products';

export const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Quantum QLED', 'OLED Master', 'Crystal UHD'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-[#050507] relative border-t border-white/5">
      <Container>
        <SectionHeading
          badge="OFFICIAL TV LINEUP"
          title="EXPLORE THE"
          highlightTitle="ZUVO TV SERIES"
          subtitle="Designed with premium glass profiles, vibrant display panels, and scalable screen sizes tailored for every modern space."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-zuvo-gradient text-white shadow-zuvo-glow scale-105 border border-cyan-400/40'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </Container>
    </section>
  );
};
