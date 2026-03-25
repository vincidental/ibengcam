import React from "react";

// Reliable CDN sources for colored brand logos
const BRANDS = [
  {
    name: "Canon",
    logo: "https://www.logo.wine/a/logo/Canon_(company)/Canon_(company)-Logo.wine.svg",
  },
  {
    name: "Sony",
    logo: "https://www.logo.wine/a/logo/Sony/Sony-Logo.wine.svg",
  },
  {
    name: "Nikon",
    logo: "https://www.logo.wine/a/logo/Nikon/Nikon-Logo.wine.svg",
  },
  {
    name: "Fujifilm",
    logo: "https://www.logo.wine/a/logo/Fujifilm/Fujifilm-Logo.wine.svg",
  },
  {
    name: "DJI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/DJI_Logo.svg",
  },
  {
    name: "Olympus",
    logo: "https://www.logo.wine/a/logo/Olympus_Corporation/Olympus_Corporation-Logo.wine.svg",
  },
  {
    name: "Panasonic",
    logo: "https://www.logo.wine/a/logo/Panasonic/Panasonic-Logo.wine.svg",
  },
  {
    name: "Sigma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sigma_logo.svg/2560px-Sigma_logo.svg.png",
  },
];

// Render brand name as styled text fallback (always visible, no broken images)
const ALL_BRANDS = [...BRANDS, ...BRANDS];

export default function PartnerLogos() {
  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {ALL_BRANDS.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 lg:mx-14 flex-shrink-0"
            >
              <span className="text-base lg:text-lg font-black tracking-tight text-foreground/40 uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}