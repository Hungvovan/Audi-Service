"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ tag, title, subtitle, center = true }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
      >
        <div className="w-8 h-[1px] bg-audi-red" />
        <span className="text-xs tracking-[0.4em] text-audi-red font-medium">{tag}</span>
        <div className="w-8 h-[1px] bg-audi-red" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-white/60 text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}