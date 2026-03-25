import React from "react";

const LOGO_WHITE = "https://media.base44.com/images/public/69c429ffa350c71452f71e34/b2be8b865_LogoIbeng-Cam-02.png";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Testimoni", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const SERVICES_LINKS = [
  "Service Kamera",
  "Cleaning & Kalibrasi",
  "Service Lensa",
  "Ganti Komponen",
  "Service Drone & Lightning",
  "Diagnosa Gratis",
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.89a8.18 8.18 0 004.78 1.52V7a4.85 4.85 0 01-1.01-.31z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.738-8.835L2.25 2.25h6.988l4.26 5.634L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { label: "TikTok", Icon: TikTokIcon, href: "#", hoverClass: "hover:text-white" },
  { label: "Instagram", Icon: InstagramIcon, href: "#", hoverClass: "hover:text-pink-400" },
  { label: "X", Icon: XIcon, href: "#", hoverClass: "hover:text-white" },
  { label: "Facebook", Icon: FacebookIcon, href: "#", hoverClass: "hover:text-blue-400" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D2B1F" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-1">
            <img
              src={LOGO_WHITE}
              alt="Ibengcam"
              className="h-10 w-auto mb-4"
            />
            <p className="text-xs text-white/60 leading-relaxed">
              Workshop service kamera dan peralatan produksi visual terpercaya sejak 2018, melayani fotografer dan videografer di Tangerang Selatan, Bogor, dan sekitarnya.
            </p>
            <p className="text-xs text-white/40 mt-6">
              © 2026 IBENGCAM. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Layanan Utama</h4>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((service, i) => (
                <li key={i}>
                  <span className="text-xs text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Kontak & Alamat</h4>
            <div className="space-y-3 text-xs text-white/60">
              <p>Jalan Raya Lapan, Kp. Cikoleang, RT 04 RW 04, Desa Sukamulya, Kecamatan Rumpin, Kabupaten Bogor</p>
              <p>Telp: 0898-5253-708</p>
              <p>mail: ibengcam@gmail.com</p>
              <p>Jam Operasional: 09:00 - 18:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Social Media</h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, Icon, href, hoverClass }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 transition-all duration-200 hover:bg-white/20 ${hoverClass}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}