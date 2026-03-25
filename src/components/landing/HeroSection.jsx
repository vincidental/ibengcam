import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const HERO_IMAGES = [
  "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/14153ef50_6f3a83b66c45e38193b59ad652fe478309b5ed7e.jpg",
  "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/7c4630f8f_d860328600579f8f56f8907cb86483682759406e.jpg",
  "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/0d325cc73_c657f72c3acec2eb14b49297f0d0b378ac6ec5e6.jpg",
];

const BADGES = [
  "Pengecekan & Konsultasi GRATIS",
  "Transparan",
  "Bergaransi",
  "Bisa Ditunggu",
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-20 lg:pt-24 pb-8 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-foreground/70">
                Dipercaya Fotografer & Videografer sejak 2018
              </span>
              <span className="text-lg">🏆</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Solusi Profesional untuk{" "}
              <span className="text-foreground">Service Kamera & Peralatan Produksi Visual</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              {BADGES.map((badge, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-foreground/70">
                  {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/6208985253708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <MessageSquare size={18} />
                Konsultasi via Whatsapp
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Cek Kerusakan Gratis
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-secondary">
              {HERO_IMAGES.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Ibengcam service ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === activeSlide ? "bg-primary" : "bg-foreground/20"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}