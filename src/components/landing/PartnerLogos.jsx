import React from "react";

const BRANDS = [
  { name: "Canon", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/1280px-Canon_wordmark.svg.png" },
  { name: "Sony", src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Nikon", src: "https://www.nikon.com.au/media/wysiwyg/logos/lg-nikon-logo-nikon-cameras-lenses-accessories.png" },
  { name: "Fujifilm", src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Fujifilm_logo.svg" },
  { name: "DJI", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/DJI_Innovations_logo.svg/1280px-DJI_Innovations_logo.svg.png" },
  { name: "Olympus", src: "https://wp.logos-download.com/wp-content/uploads/2016/05/Olympus_logo_logotype.png?dl" },
  { name: "Panasonic", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panasonic_logo_%28Blue%29.svg/3840px-Panasonic_logo_%28Blue%29.svg.png" },
  { name: "Sigma", src: "https://1000logos.net/wp-content/uploads/2020/02/Sigma-Logo.png" },
];

const ALL_BRANDS = [...BRANDS, ...BRANDS];

export default function PartnerLogos() {
  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {ALL_BRANDS.map(({ name, src }, i) => (
            <div key={i} className="inline-flex items-center justify-center mx-10 lg:mx-14 flex-shrink-0">
              <img
                src={src}
                alt={name}
                className="h-7 lg:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}