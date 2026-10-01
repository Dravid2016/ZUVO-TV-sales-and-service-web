import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { HelpCircle, FileText, Shield, PhoneCall } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const Support: React.FC = () => {
  const faqs = [
    {
      q: 'Does ZUVO TV run official Android TV OS?',
      a: 'Yes. Every ZUVO Smart TV is powered by official Google Android TV with Google Play Store, Google Assistant voice remote, and Chromecast built-in.',
    },
    {
      q: 'How do I check warranty coverage for my ZUVO TV?',
      a: 'All ZUVO TVs come with official brand warranty coverage. Keep your purchase invoice or reach out to customer support with your TV serial number.',
    },
    {
      q: 'Can I connect Bluetooth headphones or external soundbars?',
      a: 'Yes. ZUVO TVs feature Bluetooth 5.1 wireless connectivity as well as HDMI 2.1 eARC and Optical Audio outputs.',
    },
    {
      q: 'How do I update the software on my ZUVO TV?',
      a: 'System software updates are delivered automatically via Over-The-Air (OTA) when your TV is connected to Wi-Fi.',
    },
  ];

  return (
    <PageContainer>
      <div className="py-16 bg-black">
        <Container>
          <SectionHeading
            badge="CUSTOMER SUPPORT & HELP CENTER"
            title="PRODUCT SUPPORT &"
            highlightTitle="RESOURCES"
            subtitle="Find user manuals, warranty registration architecture, FAQs, and contact technical support."
          />

          {/* Support Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 text-center">
              <HelpCircle size={32} className="mx-auto text-cyan-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">FAQs</h4>
              <p className="text-neutral-400 text-xs">Common setup & usage answers.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 text-center">
              <FileText size={32} className="mx-auto text-cyan-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">User Manuals</h4>
              <p className="text-neutral-400 text-xs">Download guides & setup PDFs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 text-center">
              <Shield size={32} className="mx-auto text-cyan-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Warranty</h4>
              <p className="text-neutral-400 text-xs">Brand coverage information.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 text-center">
              <PhoneCall size={32} className="mx-auto text-cyan-400 mb-4" />
              <h4 className="text-base font-bold text-white mb-2">Service Line</h4>
              <p className="text-neutral-400 text-xs">Contact technical specialists.</p>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-white uppercase mb-6 text-center">FREQUENTLY ASKED QUESTIONS</h3>
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0a0a0d] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTASection />
    </PageContainer>
  );
};
export default Support;
