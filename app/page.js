"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedModels from "@/components/FeaturedModels";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="relative bg-audi-charcoal">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedModels />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
}