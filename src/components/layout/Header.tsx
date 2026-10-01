import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Navbar } from '../navigation/Navbar';
import { MobileMenu } from '../navigation/MobileMenu';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { siteConfig } from '../../data/siteConfig';

export const Header: React.FC = () => {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official ZUVO Android TV Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/zuvo-logo.svg"
            alt="ZUVO Android TV"
            className="h-9 sm:h-10 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <Navbar />

        {/* Right: Action CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            to="/products"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 hover:shadow-zuvo-glow transition-all duration-300"
          >
            {siteConfig.cta.primary}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
