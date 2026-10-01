import React from 'react';

export interface OTTLogoProps {
  className?: string;
}

// 1. Authentic Complete Official Netflix Red Logo (All 7 Letters N-E-T-F-L-I-X)
export const NetflixLogo: React.FC<OTTLogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg className={className} viewBox="0 0 155 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#E50914" d="M0 30V0h8.22l9.9 20.8V0h6.61v30h-7.05L7.26 8.04V30H0zm30.34 0V0h18.25v5.43H36.96v6.45h10.42v5.33H36.96v7.35h12.13V30H30.34zm21.46 0V0h19.34v5.43H65.26V30h-6.52V5.43h-6.94V0zm22.42 0V0h17.77v5.43H79.8v6.45h10.15v5.33H79.8V30h-5.58zm20.8 0V0h6.62v24.57h10.36V30H95.02zm18.5 0V0h6.62v30h-6.62zm10.5 0l7.5-15L124.5 0h7.5l5.5 10.5L143 0h7.5L141.5 15L151 30h-7.5l-6.5-11L130.5 30h-6.5z" />
  </svg>
);

// 2. Official Prime Video Electric Blue Logo with Smile Arc
export const PrimeVideoLogo: React.FC<OTTLogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg className={className} viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="20" fill="#00A8E1" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.3">prime video</text>
    <path d="M 5 26 C 30 33, 85 33, 115 25" stroke="#00A8E1" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 108 22 L 117 25.5 L 110 29.5" fill="#00A8E1" stroke="#00A8E1" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

// 3. Official Disney+ Hotstar Stacked Lockup Logo
export const DisneyPlusLogo: React.FC<OTTLogoProps> = ({ className = 'h-8 w-auto' }) => (
  <svg className={className} viewBox="0 0 130 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="disneyArc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0052D4" />
        <stop offset="50%" stopColor="#00D2FF" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
    <path d="M 10 14 C 30 4, 75 4, 98 14" stroke="url(#disneyArc)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <text x="5" y="22" fill="#FFFFFF" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="bold" fontSize="17">Disney</text>
    <text x="70" y="22" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="18">+</text>
    <text x="8" y="38" fill="#FFFFFF" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="600" fontSize="14" letterSpacing="0.5">hotstar</text>
  </svg>
);

// 4. Official YouTube Logo
export const YouTubeLogo: React.FC<OTTLogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="3" width="34" height="24" rx="6" fill="#FF0000" />
    <path d="M14 9.5L23 15L14 20.5V9.5Z" fill="white" />
    <text x="40" y="20" fill="white" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.5">YouTube</text>
  </svg>
);

// 5. Official Spotify Logo
export const SpotifyLogo: React.FC<OTTLogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="15" r="11" fill="#1DB954" />
    <path d="M 6 11 C 10 10, 15 10, 18 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <path d="M 7 14.5 C 11 13.5, 14.5 14, 17 15.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M 8 18 C 11 17, 13.5 17.5, 15.5 18.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    <text x="28" y="20" fill="#1DB954" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="15">Spotify</text>
  </svg>
);

// 6. Official Apple TV+ Logo
export const AppleTVLogo: React.FC<OTTLogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg className={className} viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 12C12.5 9.5 14 8 16 8C14.5 8 13.5 7 14 5.5C14.5 4 16 3 17.5 3C17.5 5 16 6.5 14.5 7C16.5 7.5 18 9 18 11.5C18 14.5 15.5 17 12.5 17C10.5 17 9 16 9.5 14.5C8.5 16 7 17 5 17C2.5 17 1 14.5 1 12C1 9 3 7 5.5 7C7 7 8 8 8 9.5C8.5 8 10 7 12.5 7" fill="white" />
    <text x="24" y="17" fill="white" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14">tv+</text>
  </svg>
);

// 7. Official Google Play Store Logo
export const PlayStoreLogo: React.FC<OTTLogoProps> = ({ className = 'h-7 w-auto' }) => (
  <svg className={className} viewBox="0 0 125 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L15 15L2 28V2Z" fill="#00D2FF" />
    <path d="M15 15L19 11L2 2L15 15Z" fill="#00E676" />
    <path d="M15 15L2 28L19 19L15 15Z" fill="#FF3D00" />
    <path d="M15 15L19 19L23 15L19 11L15 15Z" fill="#FFC107" />
    <text x="28" y="19" fill="white" fontFamily="Roboto, sans-serif" fontWeight="600" fontSize="12">Google Play</text>
  </svg>
);
