import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainNavLinks } from '../../data/navigation';

export const Navbar: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
      {mainNavLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `transition-colors duration-200 hover:text-white ${
              isActive
                ? 'text-white font-semibold after:block after:h-[2px] after:bg-zuvo-gradient after:w-full after:mt-1 rounded-sm'
                : 'text-neutral-400'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
