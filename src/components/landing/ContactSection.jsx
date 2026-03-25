import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "TikTok", icon: "T", href: "#" },
  { label: "Instagram", icon: "I", href: "#" },
  { label: "X", icon: "X", href: "#" },
  { label: "Facebook", icon: "F", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-12 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Get In Touch
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              Butuh bantuan atau ingin melakukan pengecekan perangkat? Tim IBENGCAM siap membantu Anda. Silakan hubungi kami melalui WhatsApp, telepon, atau kunjungi langsung workshop kami untuk konsultasi dan pengecekan gratis.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Alamat Bogor</div>
                  <div className="text-sm text-muted-foreground">
                    Jalan Raya Lapan, Kp. Cikoleang, RT 04 RW 04, Desa Sukamulya, Kecamatan Rumpin, Kabupaten Bogor
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Telp</div>
                  <div className="text-sm text-muted-foreground">0898-5253-708</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">ibengcam@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="text-sm font-semibold text-foreground mb-3">Follow Us:</div>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-sm font-bold text-primary transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border bg-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0!2d106.6!3d-6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMDAuMCJTIDEwNsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi IBENGCAM"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}