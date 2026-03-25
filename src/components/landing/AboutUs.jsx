import React from "react";
import { motion } from "framer-motion";

const IMAGES = {
  topLeft: "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/9fb563523_17e7ae004bc00195a1f69a55bf3698455c5eab5c.jpg",
  topRight: "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/0d325cc73_c657f72c3acec2eb14b49297f0d0b378ac6ec5e6.jpg",
  center: "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/7c4630f8f_d860328600579f8f56f8907cb86483682759406e.jpg",
  bottomLeft: "https://media.base44.com/images/public/user_69648a8e883c6e471326f5ca/fdece0f58_4569f5fa4ef613b7583c73cf86c176d637d09b68.jpg",
};

export default function AboutUs() {
  return (
    <section id="tentang" className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Creative scattered image layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[420px] lg:h-[500px]"
          >
            {/* Large main image — top left, slightly tilted */}
            <motion.img
              src={IMAGES.topLeft}
              alt="Tim Ibengcam"
              initial={{ opacity: 0, rotate: -3, y: 20 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute top-0 left-0 w-[55%] h-48 lg:h-56 object-cover rounded-2xl shadow-lg"
            />

            {/* Top right — tilted right */}
            <motion.img
              src={IMAGES.topRight}
              alt="Workshop"
              initial={{ opacity: 0, rotate: 3, y: 20 }}
              whileInView={{ opacity: 1, rotate: 3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-0 w-[42%] h-40 lg:h-48 object-cover rounded-2xl shadow-lg"
            />

            {/* Center wide — overlapping slightly */}
            <motion.img
              src={IMAGES.center}
              alt="Proses service"
              initial={{ opacity: 0, rotate: 1, y: 20 }}
              whileInView={{ opacity: 1, rotate: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-[44%] left-[8%] w-[60%] h-44 lg:h-52 object-cover rounded-2xl shadow-xl z-10"
            />

            {/* Bottom right — tilted left */}
            <motion.img
              src={IMAGES.bottomLeft}
              alt="Signage Ibengcam"
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[45%] h-36 lg:h-44 object-cover rounded-2xl shadow-lg"
            />

            {/* Decorative accent dot */}
            <div className="absolute bottom-6 left-0 w-16 h-16 rounded-full bg-accent/20 -z-10" />
            <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-primary/10 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Tentang Kami
            </h2>
            <div className="space-y-4 text-sm text-foreground/70 leading-relaxed">
              <p>
                IBENGCAM adalah workshop service kamera dan peralatan produksi visual yang melayani fotografer dan videografer di Tangerang Selatan, Bogor, dan sekitarnya. Berdiri sejak tahun 2018, IBENGCAM telah menangani berbagai perbaikan dan perawatan perangkat seperti kamera, lensa, drone, lighting, hingga perangkat pendukung produksi visual lainnya.
              </p>
              <p>
                Didukung teknisi berpengalaman dan peralatan service modern, setiap proses pengerjaan dilakukan secara transparan dengan standar yang profesional. IBENGCAM juga dipercaya oleh berbagai pengguna, mulai dari fotografer individu hingga pelaku industri kreatif dan rental kamera, untuk menjaga performa perangkat mereka tetap optimal.
              </p>
              <p>
                Dengan layanan diagnosa dan konsultasi gratis, sparepart original, serta pengerjaan yang cepat dan bergaransi, IBENGCAM berkomitmen menjadi solusi terpercaya untuk setiap permasalahan perangkat fotografi dan produksi visual Anda.
              </p>
            </div>
            <a
              href="#kontak"
              className="inline-flex items-center px-6 py-3 mt-6 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}