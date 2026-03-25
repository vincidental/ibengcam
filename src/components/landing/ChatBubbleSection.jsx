import React from "react";
import { motion } from "framer-motion";
import { Plus, Send, Copy } from "lucide-react";

const LEFT_BUBBLES = [
  "Kamera error / mati / jatuh / ga fokus?",
  "Lensa jamuran / AF rusak?",
];

const RIGHT_BUBBLES = [
  "Drone / Lightning / Laptop bermasalah?",
];

export default function ChatBubbleSection() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3"
        >
          Mengalami Kendala pada Kamera atau
          <br />
          Peralatan Produksi Anda?
        </motion.h2>
        <p className="text-sm text-muted-foreground mb-10">
          Kami siap membantu mendiagnosa dan memperbaiki berbagai permasalahan perangkat Anda.
        </p>

        <div className="space-y-4 mb-8">
          {LEFT_BUBBLES.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex justify-start"
            >
              <div className="bg-primary text-primary-foreground px-5 py-3 rounded-2xl rounded-bl-md text-sm font-medium max-w-sm text-left">
                {text}
              </div>
            </motion.div>
          ))}

          {RIGHT_BUBBLES.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex justify-end"
            >
              <div className="bg-foreground/10 text-foreground px-5 py-3 rounded-2xl rounded-br-md text-sm font-medium max-w-sm text-left">
                {text}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-secondary rounded-full px-4 py-3 max-w-lg mx-auto">
          <Plus size={20} className="text-muted-foreground flex-shrink-0" />
          <span className="flex-1 text-left text-sm text-muted-foreground">
            Semua bisa di sini!
          </span>
          <Copy size={18} className="text-muted-foreground flex-shrink-0" />
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Send size={14} className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}