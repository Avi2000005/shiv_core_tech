"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";

export function About() {
  const values = [
    { title: "Innovation", desc: "Pushing boundaries to craft future-proof, robust solutions." },
    { title: "Accessibility", desc: "Making advanced technology readable, reliable, and easily deployable." },
    { title: "Collaboration", desc: "Partnering closely to ensure alignment with business goals." },
  ];

  return (
    <Section id="about" spacing="lg" containerSize="lg" className="border-b border-border/10">
      <div className="space-y-16">
        
        {/* 1. Header & Story Block (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6 text-left space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
            >
              <span>Our Story</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 typography-h1 text-foreground"
            >
              Driving Digital Excellence
            </motion.h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-sans leading-relaxed text-base"
            >
              Shiv Core Tech is a trusted software company in Chhatrapati Sambhajinagar, Maharashtra, empowering startups, businesses, and local enterprises to embrace digital transformation. We simplify technology adoption by delivering affordable, scalable, and innovative custom software development and web design solutions across India.
            </motion.p>
          </div>
        </div>

        {/* 2. Mission & Vision Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CardPremium variant="glass-premium" glowColor="primary" hoverEffect="glow" className="p-6 flex flex-col justify-between min-h-[140px] text-left">
            <div>
              <Target className="w-5 h-5 text-primary glow-primary" />
              <h3 className="font-bold text-foreground text-sm font-sans mt-3">Our Mission</h3>
              <p className="mt-1 text-xs text-muted-foreground font-sans leading-relaxed">
                Empower organizations through accessible technology and scalable digital solutions.
              </p>
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-primary/70 font-semibold mt-3">Accessibility</span>
          </CardPremium>

          <CardPremium variant="glass-premium" glowColor="secondary" hoverEffect="glow" className="p-6 flex flex-col justify-between min-h-[140px] text-left">
            <div>
              <Eye className="w-5 h-5 text-secondary glow-secondary" />
              <h3 className="font-bold text-foreground text-sm font-sans mt-3">Our Vision</h3>
              <p className="mt-1 text-xs text-muted-foreground font-sans leading-relaxed">
                Become a trusted digital transformation partner across India.
              </p>
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest text-secondary/70 font-semibold mt-3">Scale & Trust</span>
          </CardPremium>
        </div>

        {/* 3. Core Pillars (Side-by-side Image Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engineering Excellence Card */}
          <CardPremium variant="glass-premium" glowColor="accent" hoverEffect="glow" className="overflow-hidden p-0 w-full bg-card/40 flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/teamwork.webp" 
              alt="Shiv Core Tech Software Developers and Web Designers collaborating on custom business software" 
              loading="lazy"
              className="w-full aspect-[16/9] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-left flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-foreground text-base font-sans uppercase tracking-wider font-heading">Engineering Excellence</h4>
                <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">
                  Our engineering team collaborates to build custom software platforms, secure integrations, and cloud-native solutions that solve complex technical challenges.
                </p>
              </div>
            </div>
          </CardPremium>

          {/* Digital Solutions Illustration Card */}
          <CardPremium variant="glass-premium" glowColor="primary" hoverEffect="glow" className="overflow-hidden p-0 w-full bg-card/40 flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/city-hand.webp" 
              alt="Digital infrastructure and cloud solution deployment by Shiv Core Tech" 
              loading="lazy"
              className="w-full aspect-[16/9] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6 text-left flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-foreground text-base font-sans uppercase tracking-wider font-heading">Digital Infrastructure</h4>
                <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">
                  We design and deploy modern digital infrastructures, automated cloud environments, and intelligent systems to scale enterprise operations seamlessly.
                </p>
              </div>
            </div>
          </CardPremium>
        </div>

        {/* 4. Core Values Grid */}
        <div className="space-y-4 pt-4">
          <h3 className="typography-h3 text-foreground font-heading text-left">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-card border border-border/20 text-left hover:border-primary/30 transition-colors duration-300">
                <h4 className="font-semibold text-foreground text-sm font-sans">{v.title}</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
