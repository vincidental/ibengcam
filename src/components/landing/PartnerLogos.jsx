import React from "react";

// All logos as inline SVG — guaranteed to render correctly with brand colors, no external dependencies

const CanonLogo = () => (
  <svg viewBox="0 0 200 60" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="46" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="52" fill="#CC0000" letterSpacing="-2">Canon</text>
  </svg>
);

const SonyLogo = () => (
  <svg viewBox="0 0 160 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="40" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="46" fill="#000000" letterSpacing="-1">SONY</text>
  </svg>
);

const NikonLogo = () => (
  <svg viewBox="0 0 200 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="50" rx="0" fill="#FFD700"/>
    <text x="10" y="38" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="36" fill="#1A1A1A" letterSpacing="2">NIKON</text>
  </svg>
);

const FujifilmLogo = () => (
  <svg viewBox="0 0 260 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#CC0000" letterSpacing="1">FUJIFILM</text>
  </svg>
);

const DJILogo = () => (
  <svg viewBox="0 0 120 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="50" rx="6" fill="#1A1A1A"/>
    <text x="12" y="37" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="34" fill="#CCCCCC" letterSpacing="3">DJI</text>
  </svg>
);

const OlympusLogo = () => (
  <svg viewBox="0 0 240 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#005BAC" letterSpacing="2">OLYMPUS</text>
  </svg>
);

const PanasonicLogo = () => (
  <svg viewBox="0 0 280 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#003087" letterSpacing="1">Panasonic</text>
  </svg>
);

const SigmaLogo = () => (
  <svg viewBox="0 0 200 50" className="h-7 lg:h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#8B0000" letterSpacing="2">SIGMA</text>
  </svg>
);

const BRANDS = [
  { name: "Canon", Logo: CanonLogo },
  { name: "Sony", Logo: SonyLogo },
  { name: "Nikon", Logo: NikonLogo },
  { name: "Fujifilm", Logo: FujifilmLogo },
  { name: "DJI", Logo: DJILogo },
  { name: "Olympus", Logo: OlympusLogo },
  { name: "Panasonic", Logo: PanasonicLogo },
  { name: "Sigma", Logo: SigmaLogo },
];

const ALL_BRANDS = [...BRANDS, ...BRANDS];

export default function PartnerLogos() {
  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {ALL_BRANDS.map(({ name, Logo }, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 lg:mx-14 flex-shrink-0"
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}