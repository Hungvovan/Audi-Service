"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-audi-charcoal">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8"
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-12 h-12 rounded-full border-2 border-audi-silver"
              initial={{ x: i * -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{ marginLeft: i === 0 ? 0 : "-20px" }}
            />
          ))}
        </motion.div>
        <motion.div
          className="h-0.5 w-48 bg-white/10 overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-audi-red"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="mt-4 text-xs tracking-[0.4em] text-audi-silver">LOADING</p>
      </div>
    </div>
  );
}