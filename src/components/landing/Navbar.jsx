import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/f34f7c927_LogoIbeng-Cam-01.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Artikel", href: "#artikel" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur-md border-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Ibengcam - Service Kamera Tangerang" className="w-auto h-8 lg:h-10" />
          </a>

          <div className="items-center hidden gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition-colors text-foreground/70 hover:text-primary group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/6208985253708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Servis Sekarang!
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 md:hidden text-foreground"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white border-t md:hidden border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setOpen(false);
                    const id = link.href.replace("#", "");
                    setTimeout(() => {
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                    e.preventDefault();
                  }}
                  className="block py-2 text-sm font-medium text-foreground/70 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6208985253708"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold"
              >
                Servis Sekarang!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}