import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-2xl border-b border-white/10 z-40 md:hidden py-8 px-6 flex flex-col space-y-6"
        >
          <div className="flex flex-col space-y-4 text-base font-semibold">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `py-2 border-b border-white/5 transition-colors ${
                    isActive ? 'text-cyan-400 font-bold pl-2 border-l-2 border-cyan-400' : 'text-neutral-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 flex flex-col space-y-3">
            <NavLink
              to="/products"
              onClick={onClose}
              className="w-full py-3.5 text-center rounded-full bg-zuvo-gradient text-white text-xs font-bold tracking-widest uppercase shadow-zuvo-glow"
            >
              {siteConfig.cta.primary}
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
