"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  glowColor: "primary" | "secondary" | "accent";
}

export function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: "Omprakash",
      role: "Founder & Owner",
      company: "Santparampara.com",
      quote: "Shiv Core Tech understood our requirements clearly and delivered the website on time. The team was professional, responsive, and ensured the final product reflected our vision perfectly",
      rating: 5,
      glowColor: "primary",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Section id="testimonials" spacing="lg" containerSize="lg" className="border-b border-border/10" variant="grid">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Client Reviews</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          Trusted by Industry Leaders
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-muted-foreground font-sans leading-relaxed text-base"
        >
          See how we help organizations accelerate digital operations and build reliable, 
          scalable modern applications.
        </motion.p>
      </div>

      {/* Grid items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex justify-center w-full"
      >
        {testimonials.map((t, index) => {
          return (
            <motion.div key={index} variants={itemVariants} className="w-full max-w-lg flex">
              <CardPremium
                variant="glass-premium"
                glowColor={t.glowColor}
                hoverEffect="glow"
                className="p-6 flex flex-col justify-between h-full w-full relative"
              >
                <div>
                  {/* Quote icon accent */}
                  <div className="absolute top-6 right-6 text-white/5 pointer-events-none">
                    <Quote className="w-16 h-16 transform rotate-180" />
                  </div>
 
                  {/* Stars Rating Row */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {Array.from({ length: t.rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm text-foreground font-sans leading-relaxed italic relative z-10">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-4 border-t border-border/5 flex items-center justify-between w-full">
                  <div>
                    <h4 className="font-bold text-foreground text-sm font-sans">{t.name}</h4>
                    <span className="text-xs text-muted-foreground font-sans block">{t.role}</span>
                  </div>
                  <span className="text-xs font-semibold font-sans tracking-wide px-2.5 py-1 rounded bg-white/5 border border-white/5 text-primary">
                    {t.company}
                  </span>
                </div>
              </CardPremium>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
