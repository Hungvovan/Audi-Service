"use client";
import { motion } from "framer-motion";
import {
  Wrench, Droplet, Disc3, Activity, CircleDot, Sparkles,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const services = [
  { icon: Wrench, title: "Engine Repair", desc: "Comprehensive diagnostics and repairs for optimal engine performance." },
  { icon: Droplet, title: "Oil Change", desc: "Premium synthetic oils engineered for Audi's precision engines." },
  { icon: Disc3, title: "Brake Service", desc: "Genuine Audi brake systems installed with millimeter accuracy." },
  { icon: Activity, title: "Car Diagnostics", desc: "Advanced OEM tools to decode every signal from your vehicle." },
  { icon: CircleDot, title: "Tire Replacement", desc: "Premium tires fitted and balanced with laser-precise alignment." },
  { icon: Sparkles, title: "Car Detailing", desc: "Showroom-grade detailing that restores factory luxury finish." },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial from-audi-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          tag="OUR SERVICES"
          title="Crafted for Excellence"
          subtitle="From routine maintenance to advanced diagnostics, every service is performed by factory-trained Audi specialists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-audi-red to-audi-redDark flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                <s.icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-audi-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}