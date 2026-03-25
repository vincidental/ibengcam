import React from "react";
import { motion } from "framer-motion";
import { Camera, Paintbrush, Aperture, Settings, MonitorSmartphone, FileSearch } from "lucide-react";

const SERVICES = [
  {
    icon: Camera,
    num: "1",
    title: "Service Kamera DSLR & Mirrorless",
    desc: "IBENGCAM melayani perbaikan berbagai kerusakan kamera digital, mulai dari kamera tidak menyala, error sistem, kerusakan board atau fleksibel, hingga kerusakan fisik akibat terjatuh.",
  },
  {
    icon: Paintbrush,
    num: "2",
    title: "Cleaning & Kalibrasi Kamera",
    desc: "Layanan ini mencakup pembersihan body dan sensor kamera dari debu maupun kotoran yang menyebabkan bintik pada hasil foto. Selain itu...",
  },
  {
    icon: Aperture,
    num: "3",
    title: "Service & Perbaikan Lensa Kamera",
    desc: "IBENGCAM melayani perbaikan berbagai kerusakan kamera digital, mulai dari kamera tidak menyala, error sistem, kerusakan board atau fleksibel, hingga...",
  },
  {
    icon: Settings,
    num: "4",
    title: "Penggantian Komponen Kamera",
    desc: "Melayani penggantian komponen penting seperti shutter unit, LCD, slot memory, hingga perbaikan atau penggantian mainboard/FPGA mosfet.",
  },
  {
    icon: MonitorSmartphone,
    num: "5",
    title: "Service Peralatan Produksi Visual",
    desc: "Selain kamera dan lensa, IBENGCAM juga melayani perbaikan berbagai perangkat produksi visual seperti drone, gimbal, lighting, serta PC atau laptop untuk...",
  },
  {
    icon: FileSearch,
    num: "6",
    title: "Diagnosa & Konsultasi Gratis",
    desc: "IBENGCAM menyediakan layanan pengecekan dan konsultasi gratis untuk semua perangkat. Proses dilakukan secara transparan dan dapat ditunggu...",
  },
];

export default function ServicesGrid() {
  return (
    <section id="layanan" className="py-12 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Apa Saja yang Kami Tangani
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Kami menangani berbagai permasalahan kamera, lensa, drone, dan perangkat produksi visual lainnya secara profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white rounded-xl p-6 border border-border hover:bg-primary transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-5xl lg:text-6xl font-extrabold text-foreground/5 group-hover:text-primary-foreground/10 transition-colors">
                {service.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-5 transition-colors">
                  <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}