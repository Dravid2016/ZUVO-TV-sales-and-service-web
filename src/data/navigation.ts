export interface NavLink {
  label: string;
  path: string;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Technology', path: '/technology' },
  { label: 'About', path: '/about' },
  { label: 'Support', path: '/support' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  products: [
    { label: 'Quantum 4K Series', path: '/products/zuvo-quantum-4k' },
    { label: 'OLED Master Series', path: '/products/zuvo-oled-master' },
    { label: 'Crystal Vision Series', path: '/products/zuvo-crystal-vision' },
    { label: 'All TV Models', path: '/products' },
  ],
  technology: [
    { label: 'Quantum Dot Display', path: '/technology#display' },
    { label: 'Dolby Atmos Audio', path: '/technology#audio' },
    { label: 'Android TV Platform', path: '/technology#smart-tv' },
    { label: 'AI Picture Engine', path: '/technology#processor' },
  ],
  support: [
    { label: 'Product Support', path: '/support' },
    { label: 'User Manuals', path: '/support#manuals' },
    { label: 'Warranty Info', path: '/support#warranty' },
    { label: 'Contact Us', path: '/contact' },
  ],
  company: [
    { label: 'About ZUVO', path: '/about' },
    { label: 'Brand Philosophy', path: '/about#philosophy' },
    { label: 'News & Press', path: '/about#news' },
  ],
};
