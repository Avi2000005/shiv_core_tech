"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Database } from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";

interface ProjectItem {
  id: string;
  title: string;
  category: "cloud" | "web" | "ai";
  categoryLabel: string;
  client: string;
  description: string;
  details: string[];
  techStack: string[];
  icon: React.ElementType;
  glowColor: "primary" | "secondary" | "accent";
}

export function Portfolio() {
  const projects: ProjectItem[] = [
    {
      id: "santparampara",
      title: "Santparampara Web Platform",
      category: "cloud",
      categoryLabel: "Legacy Cloud Migration",
      client: "Santparampara.com",
      description: "Built a modern Marathi e-commerce platform for Sant Parampara, empowering the Warkari community through digital access to authentic spiritual products, devotional resources, and culturally rich experiences in their native language.",
      details: [
        "Delivered a Marathi-first digital commerce experience for the Warkari community",
        "Streamlined product discovery and purchasing with an intuitive user journey",
        "Built a responsive and scalable e-commerce platform optimized for growth"
      ],
      techStack: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      icon: Database,
      glowColor: "secondary",
    },
  ];

  return (
    <Section id="portfolio" spacing="lg" containerSize="xl" className="border-b border-border/10" variant="grid">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Success Stories</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          Proven Technical Implementations
        </motion.h2>
      </div>

      {/* Grid mapping projects as unified horizontal cards */}
      <div className="w-full max-w-5xl mx-auto">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <CardPremium
                variant="glass-premium"
                glowColor={p.glowColor}
                hoverEffect="glow"
                className="overflow-hidden p-0 w-full bg-slate-950/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Column: Case Study Details */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between h-full text-left">
                    <div className="space-y-6">
                      {/* Header: Client details */}
                      <div className="flex items-center justify-end">
                        <span className="text-xs text-muted-foreground font-sans font-semibold">
                          {p.client}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-lg border shrink-0 bg-secondary/10 border-secondary/20 text-secondary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground font-sans mt-3 leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      {/* Features list */}
                      <ul className="space-y-2 text-[11px] text-muted-foreground font-sans border-t border-border/10 pt-4">
                        {p.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-secondary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-8 pt-4 border-t border-border/10">
                      <div className="flex flex-wrap gap-1.5">
                        {p.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-muted-foreground font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Platform Showcase (Side-by-Side) */}
                  <div className="lg:col-span-6 flex flex-col justify-between bg-black/10 border-t lg:border-t-0 lg:border-l border-border/5">
                    <div className="flex-grow flex items-center justify-center p-6 sm:p-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/santparampara.png" 
                        alt="Santparampara E-commerce Platform" 
                        className="w-full h-auto object-contain max-h-[280px] transition-transform duration-500 hover:scale-102"
                      />
                    </div>
                    <div className="p-4 text-center border-t border-border/5 bg-slate-950/20">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground block">
                        Interactive Platform Showcase
                      </span>
                    </div>
                  </div>
                </div>
              </CardPremium>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
