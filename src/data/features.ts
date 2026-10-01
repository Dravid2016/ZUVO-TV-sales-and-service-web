export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  gradient: string;
}

export const featuresList: FeatureItem[] = [
  {
    id: 'display',
    iconName: 'Tv',
    title: 'Quantum Color Precision',
    category: 'DISPLAY',
    shortDesc: 'Over 1 Billion vibrant quantum colors engineered with crystal clarity.',
    longDesc: 'Advanced quantum dot matrix technology delivers expanded color gamut coverage, lifelike saturation, and hyper-realistic visual fidelity.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'android-tv',
    iconName: 'Cpu',
    title: 'Official Android TV',
    category: 'SMART OS',
    shortDesc: '10,000+ Apps, Google Assistant voice control, and Chromecast built-in.',
    longDesc: 'Enjoy seamless access to Netflix, YouTube, Prime Video, Disney+, and thousands of Android TV applications with effortless voice control.',
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    id: 'audio',
    iconName: 'Volume2',
    title: 'Dolby Atmos Audio',
    category: 'SOUND',
    shortDesc: 'Immersive multi-dimensional acoustic projection for true cinema audio.',
    longDesc: 'Integrated high-fidelity speaker drivers produce deep bass, crisp dialogue, and 3D spatial surround sound that fills the entire room.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'processor',
    iconName: 'Zap',
    title: 'AI Vision Processor',
    category: 'ENGINE',
    shortDesc: 'Real-time scene analysis, noise reduction, and dynamic 4K upscaling.',
    longDesc: 'Our proprietary Quad-Core AI Vision Engine analyzes frame-by-frame color, contrast, and sharpens low-resolution content up to crisp 4K visual quality.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'design',
    iconName: 'Layers',
    title: 'Bezel-less Craftsmanship',
    category: 'DESIGN',
    shortDesc: 'Ultra-thin metallic frame designed to blend seamlessly into modern spaces.',
    longDesc: 'Crafted with premium brushed metallic edges, zero-gap borderless display bezel, and hidden cable architecture for clean cinematic elegance.',
    gradient: 'from-slate-400 to-neutral-200',
  },
  {
    id: 'connectivity',
    iconName: 'Wifi',
    title: 'Next-Gen Connectivity',
    category: 'CONNECTIVITY',
    shortDesc: 'Dual-Band Wi-Fi, Bluetooth 5.1, HDMI 2.1 eARC & USB connectivity.',
    longDesc: 'Connect soundbars, gaming consoles, set-top boxes, and wireless headphones effortlessly with high-speed low-latency ports.',
    gradient: 'from-cyan-400 to-purple-500',
  },
];
