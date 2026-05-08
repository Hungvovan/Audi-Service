"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why" },
  { name: "Models", href: "#models" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-audi-charcoal/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex items-center">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white"
                style={{ marginLeft: i === 0 ? 0 : "-10px" }}
              />
            ))}
          </div>
          <span className="font-bold tracking-[0.3em] text-sm hidden sm:block">
            AUDI SERVICE
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-audi-red transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="#booking" className="hidden lg:inline-block btn-primary !py-2.5 !px-6 text-sm">
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-audi-charcoal/95 backdrop-blur-lg border-t border-white/5"
          >
            <ul className="flex flex-col p-6 gap-4">
              {LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-white/80 hover:text-audi-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="btn-primary w-full mt-2"
              >
                Book Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}