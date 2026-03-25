import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const STATS = [
  { value: "7000+", label: "Client Puas" },
  { value: "7000+", label: "Alat Kembali Sehat" },
  { value: "170+", label: "Unit Teratasi Per-Bulan" },
];

const REVIEWS = [
  {
    name: "Feivel Riodan",
    rating: 5,
    text: "Fast service, competitive price. Friendly admin and transparent during all the process. Great experience.",
  },
  {
    name: "Y.F Nugroho",
    rating: 5,
    text: "Excellent. Excellent service. Cleaned the lens fungus. It was done in less than an hour. They also cleaned the shutter speed on my EOS 1300D.",
  },
  {
    name: "Muhammad Zaki",
    rating: 5,
    text: "Got my camera sensor fungus cleaned here. Great service, and I got a discount for walk-ins. The place is also comfortable, with coffee and a waiting room. Highly recommended.",
  },
];

export default function StatsReviews() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
            Dipercaya oleh Banyak Pelanggan
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mb-12">
            Komitmen kami adalah memberikan layanan profesional, transparan, dan hasil terbaik untuk setiap perangkat Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/50 rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{review.name}</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={12} className="fill-accent text-accent" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">5/5</span>
                  </div>
                </div>
              </div>
              <Quote size={24} className="text-primary/20 mb-2" />
              <p className="text-sm text-foreground/70 leading-relaxed">
                {review.text}
              </p>
              <Quote size={24} className="text-primary/20 mt-2 ml-auto block rotate-180" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}