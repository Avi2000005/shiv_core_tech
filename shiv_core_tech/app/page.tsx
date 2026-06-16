"use client";

import React from "react";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/about";
import { Expertise } from "@/components/ui/expertise";
import { TechShowcase } from "@/components/ui/tech-showcase";
import { Portfolio } from "@/components/ui/portfolio";
import { Testimonials } from "@/components/ui/testimonials";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-background text-foreground bg-dots-pattern selection:bg-primary/20 selection:text-primary">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,192,255,0.08),transparent_60%)] opacity-40 pointer-events-none" />
      <div className="absolute top-[20%] left-0 -z-10 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,122,0,0.04),transparent_60%)] opacity-10 pointer-events-none" />

      {/* Premium Hero Section */}
      <Hero />

      {/* Premium About Section */}
      <About />

      {/* Premium Expertise Section */}
      <Expertise />

      {/* Premium Tech Showcase Section */}
      <TechShowcase />

      {/* Premium Portfolio Case Studies Section */}
      <Portfolio />

      {/* Premium Testimonials Section */}
      <Testimonials />

      {/* Premium Contact Section */}
      <Contact />

      {/* Premium Footer Section */}
      <Footer />
    </div>
  );
}
