"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";

export function Hero() {
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  
  React.useEffect(() => {
    // Enable complex rendering animations only on desktop devices
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldAnimate(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setShouldAnimate(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* 1. Animated background gradient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Blue Sphere */}
        <motion.div
          animate={shouldAnimate ? {
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          } : {}}
          transition={shouldAnimate ? {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/15 blur-[120px]"
        />
        {/* Cyan Sphere */}
        <motion.div
          animate={shouldAnimate ? {
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          } : {}}
          transition={shouldAnimate ? {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[130px]"
        />
        {/* Purple Sphere */}
        <motion.div
          animate={shouldAnimate ? {
            x: [0, 30, -50, 0],
            y: [0, 60, -30, 0],
          } : {}}
          transition={shouldAnimate ? {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="absolute top-[40%] left-1/3 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[110px]"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        {/* Gradient mask to fade grid edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <Container size="xl" className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Center Headline and CTAs */}
        <div className="max-w-3xl flex flex-col items-center">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span className="font-sans">Transforming Ideas Into Digital Solutions</span>
          </motion.div>
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 typography-display text-foreground font-heading"
          >
            Empowering Businesses Through{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Innovation & Technology
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground font-sans leading-relaxed"
          >
            Shivcore Tech designs and delivers world-class custom cloud architectures, secure software engineering, 
            and intelligent IT consulting services to accelerate enterprise digital transformation.
          </motion.p>
          
          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center justify-center"
          >
            <Button 
              variant="glow" 
              size="lg" 
              className="group gap-2 rounded-full cursor-pointer"
              onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-border bg-card/40 backdrop-blur-sm hover:bg-card cursor-pointer"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
