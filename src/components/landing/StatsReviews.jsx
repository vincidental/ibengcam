import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const STATS = [
  { value: "1000+", label: "Client Puas" },
  { value: "5000+", label: "Alat Kembali Sehat" },
  { value: "100+", label: "Unit Teratasi Per-Bulan" },
];

const REVIEWS = [
  {
    name: "Feivel Riodan",
    rating: 5,
    text: "Fast service, competitive price. Friendly admin and transparent during all the process. Great experience.",
    avatar: "https://media.base44.com/images/public/69c429ffa350c71452f71e34/ad31eb887_eca028858b71a6e9f254650e91a82990059b4a82.png",
  },
  {
    name: "Y.F Nugroho",
    rating: 5,
    text: "Excellent. Excellent service. Cleaned the lens fungus. It was done in less than an hour. They also cleaned the shutter speed on my EOS 1300D.",
    avatar: "https://media.base44.com/images/public/69c429ffa350c71452f71e34/99da15859_731c5d2fd9ff59785cac984bff10f06593161872.png",
  },
  {
    name: "Muhammad Zaki",
    rating: 5,
    text: "Got my camera sensor fungus cleaned here. Great service, and I got a discount for walk-ins. The place is also comfortable, with coffee and a waiting room. Highly recommended.",
    avatar: "https://media.base44.com/images/public/69c429ffa350c71452f71e34/f7ea1450b_6c8e00879914b5234df0fd413203209edf2b28bb.png",
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
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
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
