"use client";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-white"
                    style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                  />
                ))}
              </div>
              <span className="font-bold tracking-[0.3em] text-sm">AUDI SERVICE</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium Audi service crafted with German precision. Your luxury,
              our passion — driven by excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-audi-red hover:border-audi-red transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {["Engine Repair", "Oil Change", "Brake Service", "Diagnostics", "Tire Replacement", "Detailing"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-audi-red transition-colors">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {["About Us", "Our Team", "Careers", "Press", "Privacy Policy", "Terms"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-audi-red transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-audi-red mt-0.5 flex-shrink-0" />
                <span>123 Luxury Avenue, Frankfurt, Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-audi-red flex-shrink-0" />
                <a href="tel:+1000000000" className="hover:text-audi-red transition-colors">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-audi-red flex-shrink-0" />
                <a href="mailto:hello@audiservice.com" className="hover:text-audi-red transition-colors">
                  hello@audiservice.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 tracking-wider">
            © {new Date().getFullYear()} AUDI PREMIUM SERVICE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-white/40 tracking-wider">
            Crafted with precision · Driven by passion
          </p>
        </div>
      </div>
    </footer>
  );
}