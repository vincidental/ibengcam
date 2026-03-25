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
    <section id="tentang" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <img
              src={IMAGES.topLeft}
              alt="Tim Ibengcam"
              className="rounded-xl w-full h-40 lg:h-48 object-cover"
            />
            <img
              src={IMAGES.topRight}
              alt="Workshop Ibengcam"
              className="rounded-xl w-full h-40 lg:h-48 object-cover"
            />
            <img
              src={IMAGES.center}
              alt="Proses service"
              className="rounded-xl w-full h-40 lg:h-48 object-cover col-span-2"
            />
            <img
              src={IMAGES.bottomLeft}
              alt="Signage Ibengcam"
              className="rounded-xl w-full h-40 lg:h-48 object-cover col-span-2"
            />
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