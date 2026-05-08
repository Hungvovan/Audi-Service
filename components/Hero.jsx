"use client";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-audi-charcoal via-transparent to-audi-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-12 h-[1px] bg-audi-red" />
          <span className="text-xs tracking-[0.4em] text-audi-red font-medium">
            PREMIUM AUDI SERVICE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-gradient max-w-4xl"
        >
          Precision.<br />
          Performance.<br />
          <span className="text-audi-red">Perfection.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
        >
          Experience unmatched automotive care crafted exclusively for Audi owners.
          Certified technicians, genuine parts, and luxury-grade service — delivered
          with German precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#booking" className="btn-primary group">
            <Wrench size={18} className="mr-2" />
            Book Service
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 hidden md:grid"
        >
          {[
            { v: "25+", l: "Years Experience" },
            { v: "15K+", l: "Cars Serviced" },
            { v: "99%", l: "Satisfaction" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold text-white">{s.v}</div>
              <div className="text-xs tracking-widest text-white/50 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 md:hidden"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-audi-red rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}