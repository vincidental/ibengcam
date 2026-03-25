import React from "react";

const BRANDS = [
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "Canon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Canon_logo.svg",
  },
  {
    name: "Nikon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nikon_Logo.svg",
  },
  {
    name: "Fujifilm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fujifilm_logo.svg",
  },
  {
    name: "DJI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/DJI_Logo_White.svg",
  },
  {
    name: "Lumix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Panasonic_Lumix_logo.svg",
  },
  {
    name: "Olympus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Olympus_Corporation_logo.svg",
  },
  {
    name: "Leica",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Leica_Camera_logo.svg",
  },
];

// Duplicate for seamless marquee
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
                style={{ filter: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}