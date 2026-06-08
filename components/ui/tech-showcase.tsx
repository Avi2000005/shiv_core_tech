"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Code, Layers, Database, Cloud, Sparkles, Palette,
  Zap, Server, Cpu, Terminal
} from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "ai" | "design";
  description: string;
  icon: React.ElementType;
  glowColor: "primary" | "secondary" | "accent";
  tag: string;
}

export function TechShowcase() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "cloud", label: "Cloud & Infra" },
    { id: "ai-design", label: "AI & Design" },
  ];

  const technologies: TechItem[] = [
    // Frontend
    { name: "React", category: "frontend", description: "Standard component UI library.", icon: Layers, glowColor: "primary", tag: "Library" },
    { name: "Next.js", category: "frontend", description: "SSR & Static Web Framework.", icon: Zap, glowColor: "primary", tag: "Framework" },
    { name: "TypeScript", category: "frontend", description: "Typed superset of JavaScript.", icon: Code, glowColor: "primary", tag: "Language" },
    { name: "HTML", category: "frontend", description: "Standard web document markup.", icon: Code, glowColor: "primary", tag: "Markup" },
    { name: "CSS", category: "frontend", description: "Tailwind utility styling system.", icon: Palette, glowColor: "primary", tag: "Styling" },
    
    // Backend
    { name: "Node.js", category: "backend", description: "V8 javascript runtime engine.", icon: Terminal, glowColor: "secondary", tag: "Runtime" },
    { name: "PHP", category: "backend", description: "Backend web scripting language.", icon: Server, glowColor: "secondary", tag: "Language" },
    { name: "Express", category: "backend", description: "REST micro-framework.", icon: Terminal, glowColor: "secondary", tag: "Framework" },
    
    // Databases
    { name: "MongoDB", category: "database", description: "NoSQL document store.", icon: Database, glowColor: "secondary", tag: "NoSQL" },
    { name: "PostgreSQL", category: "database", description: "Relational database server.", icon: Database, glowColor: "secondary", tag: "SQL" },
    { name: "MySQL", category: "database", description: "Structured query repository.", icon: Database, glowColor: "secondary", tag: "SQL" },
    { name: "Firebase", category: "database", description: "Realtime cloud datastore.", icon: Cloud, glowColor: "secondary", tag: "BaaS" },
    
    // Cloud
    { name: "AWS", category: "cloud", description: "Global elastic infrastructure.", icon: Cloud, glowColor: "primary", tag: "IaaS" },
    { name: "Vercel", category: "cloud", description: "Serverless web deployment node.", icon: Zap, glowColor: "primary", tag: "Paas" },
    { name: "Render", category: "cloud", description: "Containerized app scaling engine.", icon: Cloud, glowColor: "primary", tag: "PaaS" },
    
    // AI
    { name: "OpenAI", category: "ai", description: "GPT semantic integration.", icon: Cpu, glowColor: "accent", tag: "LLM API" },
    
    // Design
    { name: "Figma", category: "design", description: "High-fidelity canvas prototyping.", icon: Palette, glowColor: "accent", tag: "UI/UX" },
  ];

  // Filter tech by category
  const filteredTech = technologies.filter((tech) => {
    if (activeTab === "all") return true;
    if (activeTab === "ai-design") return tech.category === "ai" || tech.category === "design";
    return tech.category === activeTab;
  });

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
  };

  return (
    <Section id="showcase" spacing="lg" containerSize="xl" className="border-b border-border/10">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Technical Stack</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          Our Technology Ecosystem
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-muted-foreground font-sans leading-relaxed text-base"
        >
          We employ robust, modern frameworks and architectures to ensure high performance, 
          scalability, and security across digital solutions.
        </motion.p>
      </div>

      {/* Tabs list selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer font-sans
              ${activeTab === cat.id 
                ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20" 
                : "bg-card border-border/20 text-muted-foreground hover:text-foreground hover:border-border/50"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid container with AnimatePresence */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech) => {
            const Icon = tech.icon;
            
            return (
              <motion.div
                layout
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex h-full"
              >
                <CardPremium
                  variant="glass-premium"
                  glowColor={tech.glowColor}
                  hoverEffect="glow"
                  className="p-5 flex flex-col justify-between h-full w-full group cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Icon */}
                      <div className={`p-2 rounded-lg bg-card border border-border/20 transition-all duration-300 group-hover:scale-110
                        ${tech.glowColor === "primary" ? "text-primary glow-primary" : ""}
                        ${tech.glowColor === "secondary" ? "text-secondary glow-secondary" : ""}
                        ${tech.glowColor === "accent" ? "text-accent glow-accent" : ""}
                      `}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Tag */}
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 text-muted-foreground">
                        {tech.tag}
                      </span>
                    </div>

                    <h3 className="typography-h3 text-foreground mt-4 text-base group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground font-sans leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </CardPremium>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
