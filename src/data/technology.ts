export interface TechPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; detail: string }[];
}

export const techPillars: TechPillar[] = [
  {
    id: 'display',
    title: 'Quantum Pixel & Micro-Dimming Panel',
    subtitle: 'PRECISION COLOR MATRIX',
    description: 'Every ZUVO display utilizes nano-engineered quantum dot crystals illuminated by direct micro-zone dimming array for hyper-vivid color saturation and pitch deep contrast.',
    specs: [
      { label: 'Color Gamut', detail: '95%+ DCI-P3 Wide Color Spectrum' },
      { label: 'Peak Brightness', detail: 'Up to 1000 nits Dynamic HDR' },
      { label: 'Contrast Ratio', detail: 'Ultra-High Micro Dimming Ratio' },
      { label: 'Panel Lifespan', detail: '50,000+ Hours Rated Reliability' },
    ],
  },
  {
    id: 'smart-tv',
    title: 'Official Android TV Engine',
    subtitle: 'SMART ECOSYSTEM',
    description: 'Powered by official Google Android TV platform. Search content using Google Assistant voice remote, cast photos/videos from smartphones via Chromecast Built-in, and access 10,000+ streaming apps.',
    specs: [
      { label: 'OS Platform', detail: 'Official Android TV 11' },
      { label: 'Voice Control', detail: 'Google Assistant Built-in' },
      { label: 'Screen Mirroring', detail: 'Chromecast Built-in' },
      { label: 'App Store', detail: 'Google Play Store Official' },
    ],
  },
  {
    id: 'audio',
    title: 'Spatial Surround & Dolby Atmos',
    subtitle: 'CINEMATIC ACOUSTICS',
    description: 'Dual acoustic transducers with dedicated sound chambers deliver multi-dimensional spatial sound that flows around you with crisp speech clarity.',
    specs: [
      { label: 'Sound Decoder', detail: 'Dolby Atmos & DTS Virtual:X' },
      { label: 'Speaker Power', detail: '30W - 50W High-Output System' },
      { label: 'Sound Modes', detail: 'Cinema, Music, News, Sports, Game' },
      { label: 'Audio Port', detail: 'HDMI eARC & Optical Output' },
    ],
  },
];
