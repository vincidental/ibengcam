import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

const FAQS = [
  {
    q: "Apakah IBENGCAM melayani semua merek kamera?",
    a: "Ya, IBENGCAM melayani service semua kamera digital, baik DSLR maupun Mirrorless, dari berbagai merek seperti Canon, Nikon, Sony, Fujifilm, dan Olympus.",
  },
  {
    q: "Apakah pengerjaan service bisa ditunggu?",
    a: "Ya, untuk beberapa jenis service ringan seperti cleaning sensor atau pengecekan, pengerjaan bisa ditunggu. Untuk perbaikan yang lebih kompleks, estimasi waktu akan diinformasikan terlebih dahulu.",
  },
  {
    q: "Apakah IBENGCAM menerima service dari luar daerah?",
    a: "Ya, kami menerima pengiriman perangkat dari luar daerah melalui jasa ekspedisi. Silakan hubungi kami terlebih dahulu untuk konsultasi dan panduan pengiriman.",
  },
  {
    q: "Apakah pengecekan dikenakan biaya?",
    a: "Tidak, pengecekan dan konsultasi di IBENGCAM sepenuhnya gratis. Anda hanya dikenakan biaya jika menyetujui proses perbaikan.",
  },
  {
    q: "Apakah service IBENGCAM bergaransi?",
    a: "Ya, setiap service yang dilakukan di IBENGCAM mendapatkan garansi. Durasi garansi bervariasi tergantung jenis perbaikan yang dilakukan.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-foreground mb-12"
            >
              Frequently Asked
              <br />
              Question
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-xl p-6 border border-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                Masih Punya Pertanyaan?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Temukan jawaban lebih lengkap atau hubungi tim IBENGCAM untuk bantuan lebih lanjut.
              </p>
              <a
                href="mailto:ibengcam@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Kirim Mail
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-white text-foreground border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold pr-4">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm mt-3 leading-relaxed opacity-90">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}