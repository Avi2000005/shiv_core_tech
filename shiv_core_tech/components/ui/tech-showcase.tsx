"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Code, Layers, Database, Cloud, Sparkles, Palette,
  Zap, Server, Cpu, Terminal, CreditCard, Globe,
  Package, Shield, GitBranch, Brain, ChevronDown, ChevronUp
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
  { name: "React", category: "frontend", description: "Component-based UI library.", icon: Layers, glowColor: "primary", tag: "Library" },
  { name: "Next.js", category: "frontend", description: "React framework for modern web applications.", icon: Zap, glowColor: "primary", tag: "Framework" },
  { name: "TypeScript", category: "frontend", description: "Strongly typed JavaScript language.", icon: Code, glowColor: "primary", tag: "Language" },
  { name: "HTML", category: "frontend", description: "Standard language for web structure.", icon: Code, glowColor: "primary", tag: "Markup" },
  { name: "CSS", category: "frontend", description: "Stylesheet language for web design.", icon: Palette, glowColor: "primary", tag: "Styling" },
  { name: "Vue.js", category: "frontend", description: "Progressive JavaScript framework.", icon: Layers, glowColor: "primary", tag: "Framework" },
  { name: "Angular", category: "frontend", description: "Enterprise-grade frontend framework.", icon: Layers, glowColor: "primary", tag: "Framework" },
  { name: "Redux", category: "frontend", description: "Predictable state management library.", icon: Layers, glowColor: "primary", tag: "State" },
  { name: "Framer Motion", category: "frontend", description: "Animation library for React.", icon: Zap, glowColor: "primary", tag: "Animation" },

  // Backend
  { name: "Node.js", category: "backend", description: "JavaScript runtime for server applications.", icon: Terminal, glowColor: "secondary", tag: "Runtime" },
  { name: "PHP", category: "backend", description: "Popular server-side scripting language.", icon: Server, glowColor: "secondary", tag: "Language" },
  { name: "Express", category: "backend", description: "Minimalist Node.js web framework.", icon: Terminal, glowColor: "secondary", tag: "Framework" },
  { name: "Laravel", category: "backend", description: "Elegant PHP web application framework.", icon: Server, glowColor: "secondary", tag: "Framework" },
  { name: "NestJS", category: "backend", description: "Scalable framework for Node.js applications.", icon: Server, glowColor: "secondary", tag: "Framework" },
  { name: "Python", category: "backend", description: "Versatile programming language.", icon: Code, glowColor: "secondary", tag: "Language" },
  { name: "Django", category: "backend", description: "High-level Python web framework.", icon: Server, glowColor: "secondary", tag: "Framework" },
  { name: "FastAPI", category: "backend", description: "High-performance framework for APIs.", icon: Zap, glowColor: "secondary", tag: "API" },
  { name: "WordPress", category: "backend", description: "Leading content management system.", icon: Globe, glowColor: "secondary", tag: "CMS" },
  { name: "Razorpay", category: "backend", description: "Secure payment gateway solution.", icon: CreditCard, glowColor: "secondary", tag: "Gateway" },
  { name: "Stripe", category: "backend", description: "Global online payment platform.", icon: CreditCard, glowColor: "secondary", tag: "Gateway" },

  // Databases
  { name: "MongoDB", category: "database", description: "Document-oriented NoSQL database.", icon: Database, glowColor: "secondary", tag: "NoSQL" },
  { name: "PostgreSQL", category: "database", description: "Advanced open-source SQL database.", icon: Database, glowColor: "secondary", tag: "SQL" },
  { name: "MySQL", category: "database", description: "Widely used relational database.", icon: Database, glowColor: "secondary", tag: "SQL" },
  { name: "Firebase", category: "database", description: "Google's backend-as-a-service platform.", icon: Cloud, glowColor: "secondary", tag: "BaaS" },
  { name: "Redis", category: "database", description: "In-memory data structure store.", icon: Database, glowColor: "secondary", tag: "Cache" },
  { name: "Supabase", category: "database", description: "Open-source Firebase alternative.", icon: Cloud, glowColor: "secondary", tag: "BaaS" },

  // Cloud & Infrastructure
  { name: "AWS", category: "cloud", description: "Comprehensive cloud computing platform.", icon: Cloud, glowColor: "primary", tag: "Cloud" },
  { name: "Vercel", category: "cloud", description: "Platform for frontend deployment.", icon: Zap, glowColor: "primary", tag: "PaaS" },
  { name: "Render", category: "cloud", description: "Cloud platform for modern applications.", icon: Cloud, glowColor: "primary", tag: "PaaS" },
  { name: "Netlify", category: "cloud", description: "Deployment platform for web projects.", icon: Globe, glowColor: "primary", tag: "PaaS" },
  { name: "Docker", category: "cloud", description: "Containerization platform for applications.", icon: Package, glowColor: "primary", tag: "Containers" },
  { name: "Cloudflare", category: "cloud", description: "Web performance and security platform.", icon: Shield, glowColor: "primary", tag: "Security" },
  { name: "GitHub", category: "cloud", description: "Code hosting and collaboration platform.", icon: GitBranch, glowColor: "primary", tag: "Git" },

  // AI
  { name: "OpenAI", category: "ai", description: "Advanced AI model integrations.", icon: Cpu, glowColor: "accent", tag: "LLM API" },
  { name: "Claude", category: "ai", description: "AI assistant and language model platform.", icon: Cpu, glowColor: "accent", tag: "LLM API" },
  { name: "Gemini", category: "ai", description: "Google's multimodal AI platform.", icon: Sparkles, glowColor: "accent", tag: "LLM API" },
  { name: "Hugging Face", category: "ai", description: "Open-source AI and ML ecosystem.", icon: Brain, glowColor: "accent", tag: "AI Platform" },

  // Design
  { name: "Figma", category: "design", description: "Collaborative interface design platform.", icon: Palette, glowColor: "accent", tag: "UI/UX" },
];
  // Filter tech by category
  const filteredTech = technologies.filter((tech) => {
    if (activeTab === "all") return true;
    if (activeTab === "ai-design") return tech.category === "ai" || tech.category === "design";
    return tech.category === activeTab;
  });

  const visibleTech = isExpanded ? filteredTech : filteredTech.slice(0, 10);

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
    <Section id="showcase" spacing="lg" containerSize="lg" className="border-b border-border/10">
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
            onClick={() => {
              setActiveTab(cat.id);
              setIsExpanded(false);
            }}
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
          {visibleTech.map((tech) => {
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

      {filteredTech.length > 10 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md shadow-primary/5 cursor-pointer font-sans"
          >
            <span>{isExpanded ? "Show Less" : "Show More"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
