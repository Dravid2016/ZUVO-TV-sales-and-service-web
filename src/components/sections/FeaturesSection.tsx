import React from 'react';
import { Tv, Cpu, Volume2, Zap, Layers, Wifi } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { FeatureCard } from '../ui/FeatureCard';
import { Container } from '../ui/Container';
import { featuresList } from '../../data/features';

export const FeaturesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Tv': return <Tv size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Volume2': return <Volume2 size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Wifi': return <Wifi size={24} />;
      default: return <Tv size={24} />;
    }
  };

  return (
    <section className="py-24 bg-black relative">
      <Container>
        <SectionHeading
          badge="HARDWARE & SOFTWARE MASTERY"
          title="NEXT-GENERATION"
          highlightTitle="TELEVISION TECHNOLOGY"
          subtitle="Built with state-of-the-art display matrices, AI image processing, and immersive acoustic audio engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat) => (
            <FeatureCard
              key={feat.id}
              icon={getIcon(feat.iconName)}
              category={feat.category}
              title={feat.title}
              description={feat.shortDesc}
              gradient={feat.gradient}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
