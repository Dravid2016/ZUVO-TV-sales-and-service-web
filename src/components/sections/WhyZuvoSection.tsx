import React from 'react';
import { Award, Wrench, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';

export const WhyZuvoSection: React.FC = () => {
  const pillars = [
    {
      icon: <Sparkles className="text-cyan-400" size={28} />,
      title: 'Precision Display Engineering',
      desc: 'Tested for color accuracy, brightness uniformity, and long-term backlight durability.',
    },
    {
      icon: <Award className="text-cyan-400" size={28} />,
      title: 'Premium Unibody Aesthetics',
      desc: 'Ultra-thin borders and brushed metallic accents designed to complement modern luxury interiors.',
    },
    {
      icon: <Wrench className="text-cyan-400" size={28} />,
      title: 'Dedicated Customer Support',
      desc: 'Comprehensive warranty coverage, user guide assistance, and responsive technical help.',
    },
  ];

  return (
    <section className="py-24 bg-[#08080a] relative border-t border-white/5">
      <Container>
        <SectionHeading
          badge="WHY CHOOSE ZUVO"
          title="BUILT WITH"
          highlightTitle="UNCOMPROMISING QUALITY"
          subtitle="Discover what sets ZUVO apart as an emerging leader in smart television innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[#0f1014] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">{item.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
