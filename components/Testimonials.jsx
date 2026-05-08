"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const reviews = [
  {
    name: "Marcus Hoffmann",
    role: "RS7 Owner",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Absolutely unmatched service. My RS7 came back better than the day I bought it. The detail and care is simply on another level.",
    rating: 5,
  },
  {
    name: "Sofia Lindgren",
    role: "R8 Owner",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "The only place I trust my R8 with. Certified, professional, and genuinely passionate about Audi engineering. Highly recommended.",
    rating: 5,
  },
  {
    name: "James Whitmore",
    role: "Q8 Owner",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "Premium experience from start to finish. Same-day turnaround, transparent pricing, and the best technicians in the city.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "A6 Owner",
    avatar: "https://i.pravatar.cc/150?img=49",
    text: "I've been a client for 6 years. Never once disappointed. Their attention to detail is what keeps me coming back every single time.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-audi-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          tag="TESTIMONIALS"
          title="Voices of Trust"
          subtitle="What our clients say about their experience."
        />

        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-14 text-center relative"
            >
              <Quote className="absolute top-8 left-8 text-audi-red/30" size={48} />

              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[index].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-audi-red text-audi-red" />
                ))}
              </div>

              <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-light italic max-w-3xl mx-auto">
                “{reviews[index].text}”
              </p>

              <div className="mt-10 flex flex-col items-center gap-3">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="w-16 h-16 rounded-full border-2 border-audi-red object-cover"
                />
                <div>
                  <h4 className="font-bold">{reviews[index].name}</h4>
                  <p className="text-xs tracking-widest text-audi-silver mt-1">
                    {reviews[index].role.toUpperCase()}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-audi-red/20 hover:border-audi-red transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-10 bg-audi-red" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-audi-red/20 hover:border-audi-red transition-all"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}