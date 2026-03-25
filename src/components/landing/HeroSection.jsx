import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (activeSlide + 1) % HERO_IMAGES.length;

  return (
    <section id="home" className="pt-20 lg:pt-24 pb-8 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Text Content */}
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

          {/* Right Image Composition */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[520px] w-full mt-8 lg:mt-0">

            {/* Back layer: next image, blurred */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={`back-${nextSlide}`}
                src={HERO_IMAGES[nextSlide]}
                alt="Next slide preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-[68%] h-[72%] object-cover rounded-3xl shadow-lg z-10"
                style={{ filter: "blur(5px)" }}
              />
            </AnimatePresence>

            {/* Front layer: current image, sharp */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={`front-${activeSlide}`}
                src={HERO_IMAGES[activeSlide]}
                alt="Camera repair service"
                initial={{ opacity: 0, scale: 0.82, x: -36, y: -36 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, x: 18, y: 18 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[76%] h-[76%] object-cover rounded-3xl shadow-2xl border-4 border-white z-20"
              />
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-[-28px] right-0 flex gap-2 z-30">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === activeSlide ? "bg-primary" : "bg-foreground/20"
                  }`}
                />
              ))}
            </div>

            {/* Decorative accents */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-accent/15 -z-10" />
            <div className="absolute bottom-16 left-4 w-8 h-8 rounded-full bg-primary/10 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}