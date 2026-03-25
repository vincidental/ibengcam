import React from "react";

const BRANDS = [
  "Kodak", "Nikon", "Canon", "Leica", "SONY", "FUJIFILM", 
  "LUMIX", "PENTAX", "DJI", "Kodak", "Nikon", "Canon", 
  "Leica", "SONY", "FUJIFILM", "LUMIX", "PENTAX", "DJI"
];

const BRAND_FONTS = {
  "Kodak": "font-extrabold tracking-tight",
  "Nikon": "font-extrabold italic",
  "Canon": "font-extrabold",
  "Leica": "font-bold italic",
  "SONY": "font-extrabold tracking-widest",
  "FUJIFILM": "font-extrabold tracking-wide",
  "LUMIX": "font-bold tracking-widest",
  "PENTAX": "font-extrabold tracking-wider",
  "DJI": "font-bold italic",
};

export default function PartnerLogos() {
  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {BRANDS.map((brand, i) => (
            <span
              key={i}
              className={`inline-block mx-8 lg:mx-12 text-lg lg:text-xl text-foreground/50 ${BRAND_FONTS[brand] || "font-bold"}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}