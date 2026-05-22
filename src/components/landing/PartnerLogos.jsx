import React from "react";

const BRANDS = [
  { name: "Canon", alt: "Service kamera dan lensa Canon Tangerang - Ibengcam", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/1280px-Canon_wordmark.svg.png" },
  { name: "Sony", alt: "Service kamera dan lensa Sony Tangerang - Ibengcam", src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Nikon", alt: "Service kamera dan lensa Nikon Tangerang - Ibengcam", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nikon_Logo.svg/3840px-Nikon_Logo.svg.png" },
  { name: "Fujifilm", alt: "Service kamera Fujifilm Tangerang - Ibengcam", src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Fujifilm_logo.svg" },
  { name: "DJI", alt: "Service drone DJI Tangerang - Ibengcam", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/DJI_Innovations_logo.svg/1280px-DJI_Innovations_logo.svg.png" },
  { name: "Olympus", alt: "Service kamera Olympus Tangerang - Ibengcam", src: "https://wp.logos-download.com/wp-content/uploads/2016/05/Olympus_logo_logotype.png?dl" },
  { name: "Panasonic", alt: "Service kamera Panasonic Tangerang - Ibengcam", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/3840px-Panasonic_logo_%28Blue%29.svg.png" },
  { name: "Sigma", alt: "Service lensa Sigma Tangerang - Ibengcam", src: "https://1000logos.net/wp-content/uploads/2020/02/Sigma-Logo.png" },
];

export default function PartnerLogos() {
  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <div className="marquee-track flex">
        {/* First copy */}
        {BRANDS.map(({ name, alt, src }, i) => (
          <div key={`a-${i}`} className="flex items-center justify-center mx-10 lg:mx-14 flex-shrink-0">
            <img src={src} alt={alt} className="h-7 lg:h-9 w-auto object-contain" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {BRANDS.map(({ name, alt, src }, i) => (
          <div key={`b-${i}`} className="flex items-center justify-center mx-10 lg:mx-14 flex-shrink-0">
            <img src={src} alt={alt} className="h-7 lg:h-9 w-auto object-contain" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-track {
            animation: marquee-scroll 14s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}