import React from "react";

// Using Brandfetch/CDN-hosted colored SVG logos
const BRANDS = [
  {
    name: "Canon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Canon_logo.svg",
    style: { filter: "none" },
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    style: { filter: "none" },
  },
  {
    name: "Nikon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nikon_Logo.svg",
    style: { filter: "none" },
  },
  {
    name: "Fujifilm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fujifilm_logo.svg",
    style: { filter: "none" },
  },
  {
    name: "Leica",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Leica_Camera_logo.svg",
    style: { filter: "none" },
  },
  {
    name: "DJI",
    logo: "https://cdn.worldvectorlogo.com/logos/dji-1.svg",
    style: { filter: "none" },
  },
  {
    name: "Pentax",
    logo: "https://cdn.worldvectorlogo.com/logos/pentax.svg",
    style: { filter: "none" },
  },
  {
    name: "Kodak",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Eastman_Kodak_logo.svg",
    style: { filter: "none" },
  },
];

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
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-7 lg:h-9 w-auto object-contain"
                style={brand.style}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                style={{ display: "none" }}
                className="text-sm font-bold text-foreground/50"
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}