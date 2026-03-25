import React from "react";

const BRANDS = [
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Fujifilm", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fujifilm_logo.svg" },
  { name: "Lumix", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Panasonic_Lumix_logo.svg" },
  { name: "Pentax", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pentax_logo.svg" },
  { name: "DJI", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/DJI_logo.svg" },
  { name: "Kodak", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kodak_Logo_2006.svg" },
  { name: "Nikon", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nikon_Logo.svg" },
  { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Canon_logo.svg" },
];

export default function PartnerLogos() {
  return (
    <section className="py-8 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14">
          {BRANDS.map((brand, i) => (
            <img
              key={i}
              src={brand.logo}
              alt={brand.name}
              className="h-6 lg:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}