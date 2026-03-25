import React from "react";

const LOGO_WHITE = "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/224a0e6ba_LogoIbeng-Cam-02.png";

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

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-1">
            <img src={LOGO_WHITE} alt="Ibengcam" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
              Workshop service kamera dan peralatan produksi visual terpercaya sejak 2018, melayani fotografer dan videografer di Tangerang Selatan, Bogor, dan sekitarnya.
            </p>
            <p className="text-xs text-primary-foreground/50 mt-6">
              © 2026 IBENGCAM. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
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
                  <span className="text-xs text-primary-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Kontak & Alamat</h4>
            <div className="space-y-3 text-xs text-primary-foreground/70">
              <p>
                Jalan Raya Lapan, Kp. Cikoleang, RT 04 RW 04, Desa Sukamulya, Kecamatan Rumpin, Kabupaten Bogor
              </p>
              <p>Telp: 0898-5253-708</p>
              <p>mail: ibengcam@gmail.com</p>
              <p>Jam Operasional: 09:00 - 18:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Social Media</h4>
            <div className="flex items-center gap-3">
              {["T", "I", "X", "F"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}