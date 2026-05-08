"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";

// Dynamically import ModelViewer to keep it client-only and avoid SSR issues
const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const models = [
  {
    name: "Audi RS7",
    tag: "Performance",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
    model: "/models/audi_rs7.glb",
  },
  {
    name: "Audi R8",
    tag: "Supercar",
    img: "https://images.unsplash.com/photo-1607603750909-408e193868c7?w=1200&q=80",
    model: "/models/audi_r8.glb",
  },
  {
    name: "Audi Q8",
    tag: "SUV Coupe",
    img: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&q=80",
    model: "/models/audi_q8.glb",
  },
  {
    name: "Audi A6",
    tag: "Executive",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80",
    model: "/models/audi_a6.glb",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function CarCard({ m, index }) {
  const [hovered, setHovered] = useState(false);
  const has3D = Boolean(m.model);
  
  
  const carId = m.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/models/${carId}`} className="block">
      <motion.div
        key={m.name}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`View ${m.name} details`}
      >
        {/* ── Static image layer ─────────────────────────────────────────────── */}
        <AnimatePresence>
          {(!hovered || !has3D) && (
            <motion.div
              key="static-img"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${m.img}')` }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* ── 3D viewer layer — cross-fade in on hover ────────────────────────── */}
        {has3D && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="3d-viewer"
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                <ModelViewer modelPath={m.model} active={hovered} allowZoom={false} />
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* ── Gradient overlay ─────────────────────────────── */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"
          animate={{ opacity: hovered && has3D ? 0.55 : 1 }}
          transition={{ duration: 0.55 }}
        />

        {/* ── 3D badge ─────────────────────────────────────────────────────────── */}
        {has3D && (
          <AnimatePresence>
            {hovered && (
              <motion.span
                key="3d-badge"
                className="absolute top-4 right-4 text-[10px] tracking-[0.2em] font-semibold
                           text-audi-red border border-audi-red/40 bg-black/60
                           backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                3D VIEW
              </motion.span>
            )}
          </AnimatePresence>
        )}

        {/* ── Text info ────────────────────────────────────────────────────────── */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-8 pointer-events-none
                      transform transition-transform duration-500
                      ${hovered ? "-translate-y-2" : "translate-y-0"}`}
        >
          <span className="text-xs tracking-[0.3em] text-audi-red font-medium">
            {m.tag.toUpperCase()}
          </span>
          <h3 className="text-4xl font-bold mt-2 text-white">{m.name}</h3>

          <motion.div
            className="mt-4 h-[1px] bg-audi-red"
            animate={{ width: hovered ? 96 : 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.p
            className="mt-4 text-white/70"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.4, delay: hovered ? 0.1 : 0 }}
          >
            {has3D
              ? "Drag to rotate · Click for details →"
              : "Specialized service & performance tuning →"}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeaturedModels() {
  return (
    <section id="models" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="FEATURED MODELS"
          title="Engineered for Legends"
          subtitle="We service every Audi with equal passion — from daily drivers to track legends."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {models.map((m, i) => (
            <CarCard key={m.name} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}