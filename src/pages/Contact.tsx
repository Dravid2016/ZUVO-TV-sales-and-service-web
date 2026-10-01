import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <PageContainer>
      <div className="py-16 bg-black">
        <Container>
          <SectionHeading
            badge="GET IN TOUCH"
            title="CONTACT ZUVO"
            highlightTitle="OFFICIAL BRAND"
            subtitle="Have questions about product specifications, dealership inquiries, or service assistance? Send us a message."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-[#09090c] border border-white/10 space-y-6">
                <h3 className="text-xl font-extrabold text-white uppercase">OFFICIAL CONTACT</h3>

                <div className="flex items-start space-x-4 text-xs">
                  <Mail className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-neutral-500 uppercase font-bold block">EMAIL SUPPORT</span>
                    <span className="text-white font-medium text-sm">{siteConfig.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-xs">
                  <Phone className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-neutral-500 uppercase font-bold block">CUSTOMER CARE</span>
                    <span className="text-white font-medium text-sm">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-xs">
                  <MapPin className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-neutral-500 uppercase font-bold block">HEADQUARTERS</span>
                    <span className="text-white font-medium text-sm">{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0a0d] border border-white/10">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
                    <h3 className="text-2xl font-bold text-white uppercase">MESSAGE SENT SUCCESSFULLY</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm">
                      Thank you for contacting ZUVO. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase hover:bg-white/20"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-extrabold text-white uppercase mb-6">SEND AN INQUIRY</h3>

                    <div>
                      <label className="text-xs font-bold text-neutral-400 uppercase block mb-2">FULL NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold text-neutral-400 uppercase block mb-2">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-neutral-400 uppercase block mb-2">PHONE NUMBER</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-neutral-400 uppercase block mb-2">MESSAGE *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message or product inquiry..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-zuvo-gradient text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 shadow-zuvo-glow transition flex items-center justify-center space-x-2"
                    >
                      <span>SUBMIT INQUIRY</span>
                      <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageContainer>
  );
};
export default Contact;
