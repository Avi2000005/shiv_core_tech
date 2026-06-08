"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, Activity, Server } from "lucide-react";
import { Button } from "./button";
import { CardPremium } from "./card-premium";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* 1. Animated background gradient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Blue Sphere */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/15 blur-[120px]"
        />
        {/* Cyan Sphere */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[130px]"
        />
        {/* Purple Sphere */}
        <motion.div
          animate={{
            x: [0, 30, -50, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] left-1/3 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[110px]"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        {/* Gradient mask to fade grid edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <Container size="xl" className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
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
            className="mt-10 flex flex-wrap gap-4 items-center"
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

        {/* Right Column: Floating Telemetry Metric Glass Cards */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          
          {/* Dynamic glowing background backplate */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[80px] -z-10 pointer-events-none" />

          {/* Staggered stack of bobbing glass cards that never overlap */}
          <div className="flex flex-col gap-6 w-full max-w-[380px]">
            
            {/* Card 1: Cloud Uptime (Bobbing up/down) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[90%] self-start"
            >
              <CardPremium variant="glass-premium" glowColor="primary" hoverEffect="glow" className="p-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <Activity className="w-5 h-5 glow-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">System Reliability</span>
                    <h3 className="text-xl font-bold text-foreground mt-0.5 font-heading">99.99% Uptime</h3>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs text-muted-foreground font-sans">Active in 8 global zones</span>
                </div>
              </CardPremium>
            </motion.div>

            {/* Card 2: Security Health (Bobs offset) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[90%] self-end"
            >
              <CardPremium variant="glass-premium" glowColor="secondary" hoverEffect="glow" className="p-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
                    <Shield className="w-5 h-5 glow-secondary" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Compliance Shield</span>
                    <h3 className="text-xl font-bold text-foreground mt-0.5 font-heading">Enterprise Safe</h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">
                  End-to-end telemetry encryption and automated threat defense configured.
                </p>
              </CardPremium>
            </motion.div>

            {/* Card 3: Network Latency (Bobs faster) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-[90%] self-start"
            >
              <CardPremium variant="glass" glowColor="accent" hoverEffect="glow" className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent border border-accent/20">
                    <Server className="w-4 h-4 glow-accent" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-muted-foreground">Cloud Node Latency</span>
                    <h4 className="text-sm font-bold text-foreground font-heading">12ms Edge Delay</h4>
                  </div>
                </div>
                <span className="text-xs font-semibold text-secondary font-mono">Fast</span>
              </CardPremium>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
