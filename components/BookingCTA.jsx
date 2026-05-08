"use client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function BookingCTA() {
  return (
    <section id="booking" className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-audi-charcoal via-transparent to-audi-charcoal/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-[1px] bg-audi-red" />
            <span className="text-xs tracking-[0.4em] text-audi-red font-medium">
              SCHEDULE YOUR SERVICE
            </span>
            <div className="w-12 h-[1px] bg-audi-red" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient leading-tight">
            Book Your Audi <br />
            <span className="text-audi-red">Service Today</span>
          </h2>

          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Reserve your appointment in seconds. Our team will reach out within
            24 hours to confirm and tailor every detail to your Audi.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary group text-lg !py-5 !px-10">
              <Calendar size={20} className="mr-3" />
              Book Appointment
              <ArrowRight
                size={20}
                className="ml-3 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a href="tel:+840394199012" className="btn-secondary text-lg !py-5 !px-10">
              Call: +84 (039) 419-9012
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs tracking-widest text-white/50">
            <span>✓ CERTIFIED TECHNICIANS</span>
            <span>✓ GENUINE PARTS</span>
            <span>✓ WARRANTY PROTECTED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}