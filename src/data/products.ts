export interface ProductSpec {
  name: string;
  value: string;
}

export interface TVProduct {
  id: string;
  name: string;
  tagline: string;
  category: 'Quantum QLED' | 'OLED Master' | 'Crystal UHD' | 'Smart HD';
  series: string;
  sizes: string[];
  resolution: string;
  displayTech: string;
  audioTech: string;
  smartOS: string;
  hdrSupport: string[];
  refreshRate: string;
  description: string;
  highlights: string[];
  specifications: ProductSpec[];
  isFeatured?: boolean;
  badge?: string;
}

export const products: TVProduct[] = [
  {
    id: 'zuvo-quantum-4k',
    name: 'ZUVO Quantum 4K Series',
    tagline: 'Pure Quantum Color. Ultra Precision 4K.',
    category: 'Quantum QLED',
    series: 'Quantum Series',
    sizes: ['43"', '50"', '55"', '65"'],
    resolution: '3840 x 2160 (4K Ultra HD)',
    displayTech: 'Quantum Dot LED with Micro Dimming',
    audioTech: '30W Dolby Atmos Sound System',
    smartOS: 'Official Android TV 11',
    hdrSupport: ['Dolby Vision', 'HDR10+', 'HLG'],
    refreshRate: '120Hz MEMC Dynamic Motion',
    description: 'The ZUVO Quantum 4K Series combines over one billion vibrant quantum dot colors with precise micro-zone dimming and official Android TV integration for an unmatched cinematic home entertainment experience.',
    highlights: [
      '1 Billion+ Quantum Dot Color Palette',
      'Official Android TV with Google Assistant & Chromecast Built-in',
      'Dolby Vision & Dolby Atmos Cinema Certification',
      'Ultra-Bezel-less Metallic Unibody Craftsmanship',
      'Dual-Band Wi-Fi 5 & HDMI 2.1 eARC Connectivity',
    ],
    specifications: [
      { name: 'Display Panel', value: 'Quantum Dot QLED Matrix' },
      { name: 'Resolution', value: '3840 x 2160 Pixels (4K UHD)' },
      { name: 'High Dynamic Range', value: 'Dolby Vision, HDR10+, HLG' },
      { name: 'Audio Output', value: '30W Stereo Speakers with Dolby Atmos' },
      { name: 'Processor', value: 'ZUVO Quad-Core AI Vision Processor' },
      { name: 'Operating System', value: 'Android TV 11 with Play Store' },
      { name: 'Connectivity', value: '3x HDMI 2.1, 2x USB, Wi-Fi 5, Bluetooth 5.1' },
      { name: 'Warranty', value: 'Official Brand Warranty Coverage' },
    ],
    isFeatured: true,
    badge: 'FLAGSHIP QLED',
  },
  {
    id: 'zuvo-oled-master',
    name: 'ZUVO OLED Master Series',
    tagline: 'Infinite Contrast. Self-Lit Precision.',
    category: 'OLED Master',
    series: 'Master Series',
    sizes: ['55"', '65"', '75"'],
    resolution: '3840 x 2160 (4K Ultra HD)',
    displayTech: 'Self-Emissive OLED Panel',
    audioTech: '50W Acoustic Screen Sound + Subwoofer',
    smartOS: 'Official Android TV 11',
    hdrSupport: ['Dolby Vision IQ', 'HDR10+', 'Filmmaker Mode'],
    refreshRate: '120Hz Native VRR',
    description: 'Engineered for true film purists, the ZUVO OLED Master Series features self-lit OLED pixels delivering absolute zero blacks, infinite contrast ratio, and acoustic screen audio projection.',
    highlights: [
      'Self-lit OLED Pixels with Infinite Contrast Ratio',
      'Acoustic Screen Surface Audio System',
      '120Hz Native VRR for Next-Gen Cinematic Precision',
      'Official Android TV Ecosystem',
      'Zero-Bezel Architectural Glass Profile',
    ],
    specifications: [
      { name: 'Display Panel', value: 'Self-lit OLED Matrix' },
      { name: 'Resolution', value: '3840 x 2160 Pixels (4K UHD)' },
      { name: 'Contrast Ratio', value: 'Infinite : 1 (Perfect Black)' },
      { name: 'Audio Output', value: '50W Acoustic Surface + Subwoofer' },
      { name: 'Processor', value: 'ZUVO Neural AI Vision Processor' },
      { name: 'Operating System', value: 'Android TV 11' },
      { name: 'Gaming Features', value: '120Hz VRR, ALLM, HDMI 2.1 48Gbps' },
      { name: 'Warranty', value: 'Official Brand Warranty Coverage' },
    ],
    isFeatured: true,
    badge: 'ULTIMATE OLED',
  },
  {
    id: 'zuvo-crystal-vision',
    name: 'ZUVO Crystal Vision Series',
    tagline: 'Vibrant UHD Picture. Modern Minimal Design.',
    category: 'Crystal UHD',
    series: 'Crystal Series',
    sizes: ['32"', '43"', '50"', '55"'],
    resolution: '4K UHD / Full HD',
    displayTech: 'Crystal LED Matrix with Wide Color Gamut',
    audioTech: '20W Surround Audio System',
    smartOS: 'Official Android TV 11',
    hdrSupport: ['HDR10', 'HLG'],
    refreshRate: '60Hz Motion Clarity',
    description: 'Delivering vivid crystal clarity, sleek modern frame design, and full access to Google Play Store applications, the Crystal Vision Series brings premium smart entertainment into every room.',
    highlights: [
      'Vivid Crystal LED Picture Clarity',
      'Slim Bezel Design with Metallic Finish',
      'Google Assistant Voice Remote Control',
      'Fast Dual-Band Wi-Fi Streaming',
      'Energy Efficient Smart Display Engine',
    ],
    specifications: [
      { name: 'Display Panel', value: 'Crystal Direct LED' },
      { name: 'Resolution', value: '4K Ultra HD / Full HD Options' },
      { name: 'HDR Support', value: 'HDR10, HLG' },
      { name: 'Audio Output', value: '20W Surround Sound' },
      { name: 'Processor', value: 'ZUVO High-Speed Quad-Core' },
      { name: 'Operating System', value: 'Android TV 11' },
      { name: 'Connectivity', value: '2x HDMI, 2x USB, Wi-Fi, Bluetooth' },
      { name: 'Warranty', value: 'Official Brand Warranty Coverage' },
    ],
    isFeatured: true,
    badge: 'POPULAR CHOICE',
  },
];
