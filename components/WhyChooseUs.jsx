"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Cog, Zap, BadgeCheck } from "lucide-react";
import Counter from "./ui/Counter";
import SectionHeading from "./ui/SectionHeading";

const reasons = [
  { icon: Award, title: "Premium Service Quality", desc: "Every detail handled with luxury-grade precision." },
  { icon: BadgeCheck, title: "Certified Technicians", desc: "Factory-trained specialists with decades of experience." },
  { icon: Cog, title: "Genuine Audi Parts", desc: "Only 100% OEM components — never compromised." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most services completed same-day without delays." },
  { icon: ShieldCheck, title: "Warranty Support", desc: "Full manufacturer warranty coverage preserved." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-padding relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-audi-charcoal via-audi-charcoal/90 to-audi-charcoal" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          tag="WHY CHOOSE US"
          title="Engineered Trust"
          subtitle="Five reasons Audi owners return to us — again and again."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-audi-red/40 border border-transparent transition-all"
            >
              <r.icon className="text-audi-red mb-4" size={28} />
              <h4 className="font-bold mb-2">{r.title}</h4>
              <p className="text-xs text-white/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter end={25} suffix="+" label="Years Experience" />
          <Counter end={15000} suffix="+" label="Cars Serviced" />
          <Counter end={99} suffix="%" label="Customer Satisfaction" />
        </div>
      </div>
    </section>
  );
}