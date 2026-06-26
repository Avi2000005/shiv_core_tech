import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/ui/hero";

// Dynamically import below-the-fold components to reduce initial page bundle size
const About = dynamic(() => import("@/components/ui/about").then((m) => m.About));
const Expertise = dynamic(() => import("@/components/ui/expertise").then((m) => m.Expertise));
const TechShowcase = dynamic(() => import("@/components/ui/tech-showcase").then((m) => m.TechShowcase));
const Portfolio = dynamic(() => import("@/components/ui/portfolio").then((m) => m.Portfolio));
const Testimonials = dynamic(() => import("@/components/ui/testimonials").then((m) => m.Testimonials));
const Contact = dynamic(() => import("@/components/ui/contact").then((m) => m.Contact));
const Footer = dynamic(() => import("@/components/ui/footer").then((m) => m.Footer));

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

      {/* Premium FAQ Section */}
      {/* <FAQ /> */}

      {/* Premium Contact Section */}
      <Contact />

      {/* Premium Footer Section */}
      <Footer />
    </div>
  );
}
