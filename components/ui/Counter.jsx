"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Counter({ end, suffix = "", label, duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 10);
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center glass rounded-2xl p-10"
    >
      <div className="text-5xl md:text-6xl font-black text-gradient">
        {count.toLocaleString()}
        <span className="text-audi-red">{suffix}</span>
      </div>
      <div className="mt-3 text-xs tracking-[0.3em] text-white/60">
        {label.toUpperCase()}
      </div>
    </motion.div>
  );
}