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
    <Section id="about" spacing="lg" containerSize="xl" className="border-b border-border/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* Left Column: Story, Values, Stats, Leadership */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div>
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
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground font-sans leading-relaxed text-base"
            >
              Shivcore Tech empowers startups, businesses, and local enterprises in emerging markets to embrace digital transformation. 
              We simplify technology adoption by delivering affordable, scalable, and innovative digital solutions.
            </motion.p>
          </div>

          {/* Core Values */}
          <div className="space-y-3">
            <h3 className="typography-h3 text-foreground font-heading">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((v, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-card border border-border/20">
                  <h4 className="font-semibold text-foreground text-sm font-sans">{v.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Staggered Team Collaboration, Mission, Vision, and Digital City */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CardPremium variant="glass-premium" glowColor="primary" hoverEffect="glow" className="p-5 flex flex-col justify-between min-h-[140px] text-left">
              <div>
                <Target className="w-5 h-5 text-primary glow-primary" />
                <h3 className="font-bold text-foreground text-sm font-sans mt-3">Our Mission</h3>
                <p className="mt-1 text-xs text-muted-foreground font-sans leading-relaxed">
                  Empower organizations through accessible technology.
                </p>
              </div>
              <span className="text-[9px] uppercase font-mono tracking-widest text-primary/70 font-semibold mt-3">Accessibility</span>
            </CardPremium>

            <CardPremium variant="glass-premium" glowColor="secondary" hoverEffect="glow" className="p-5 flex flex-col justify-between min-h-[140px] text-left">
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

          {/* Teamwork Illustration Card */}
          <CardPremium variant="glass-premium" glowColor="accent" hoverEffect="glow" className="overflow-hidden p-0 w-full bg-slate-950/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/teamwork.webp" 
              alt="Shivcore Tech Team Collaboration" 
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-5 text-left">
              <h4 className="font-bold text-foreground text-sm font-sans uppercase tracking-wider font-heading">Engineering Excellence</h4>
              <p className="text-xs text-muted-foreground font-sans mt-1">Our engineering team collaborating on custom software platforms and secure integrations.</p>
            </div>
          </CardPremium>

          {/* Digital Solutions Illustration Card */}
          <CardPremium variant="glass-premium" glowColor="primary" hoverEffect="glow" className="overflow-hidden p-0 w-full bg-slate-950/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/city-hand.webp" 
              alt="Digital Solutions Infrastructure" 
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-5 text-left">
              <h4 className="font-bold text-foreground text-sm font-sans uppercase tracking-wider font-heading">Digital Infrastructure</h4>
              <p className="text-xs text-muted-foreground font-sans mt-1">Accelerating modern enterprise operations with scalable, future-proof cloud systems.</p>
            </div>
          </CardPremium>

        </div>

      </div>
    </Section>
  );
}
