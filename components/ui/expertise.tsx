"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Globe, Smartphone, Cpu, MessageSquare, Palette, TrendingUp } from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  glowColor: "primary" | "secondary" | "accent";
  features: string[];
}

export function Expertise() {
  const services: ServiceItem[] = [
    {
      title: "Website Development",
      description: "Crafting fast, search-optimized, responsive web platforms and dynamic custom SaaS applications.",
      icon: Globe,
      glowColor: "primary",
      features: ["Next.js & React", "SEO Best Practices", "Headless CMS Integration"],
    },
    {
      title: "Mobile App Development",
      description: "Engineering fluid cross-platform and native mobile applications with robust performance.",
      icon: Smartphone,
      glowColor: "secondary",
      features: ["React Native", "iOS & Android Apps", "Offline Synchronization"],
    },
    {
      title: "Software Development",
      description: "Developing scalable custom desktop, backend systems, cloud architectures, and database nodes.",
      icon: Cpu,
      glowColor: "accent",
      features: ["REST & GraphQL APIs", "Microservices", "Cloud Engineering"],
    },
    {
      title: "AI Chatbots",
      description: "Designing intelligent LLM conversational agents and automated workflow engines for business support.",
      icon: MessageSquare,
      glowColor: "secondary",
      features: ["RAG Deployments", "Custom NLP Engines", "Integration API Pipelines"],
    },
    {
      title: "Design Services",
      description: "Formulating premium UI/UX design schemes, component design systems, and visual brand assets.",
      icon: Palette,
      glowColor: "primary",
      features: ["High-Fidelity Mockups", "Interactive Prototypes", "Responsive Layout Rules"],
    },
    {
      title: "Digital Marketing",
      description: "Formulating organic brand strategy, analytics dashboard monitoring, and lead acquisition programs.",
      icon: TrendingUp,
      glowColor: "accent",
      features: ["Search Performance (SEO)", "Analytics Telemetry", "Content Growth Funnels"],
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
    <Section id="expertise" spacing="lg" containerSize="lg" className="border-b border-border/10" variant="dots">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
        >
          <span>Our Capabilities</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          World-Class IT Expertise
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-muted-foreground font-sans leading-relaxed text-base"
        >
          We engineer technical foundations to empower modern enterprises, creating smooth digital 
          workflows and robust custom systems.
        </motion.p>
      </div>

      {/* Grid wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          
          return (
            <motion.div key={index} variants={itemVariants} className="flex h-full">
              <CardPremium
                variant="glass-premium"
                glowColor={service.glowColor}
                hoverEffect="glow"
                className="p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Glowing Icon Frame */}
                  <div className={`p-3 w-12 h-12 rounded-xl bg-card border border-border/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110
                    ${service.glowColor === "primary" ? "text-primary glow-primary" : ""}
                    ${service.glowColor === "secondary" ? "text-secondary glow-secondary" : ""}
                    ${service.glowColor === "accent" ? "text-accent glow-accent" : ""}
                  `}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="typography-h3 text-foreground mt-5 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground font-sans leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 border-t border-border/5 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-muted-foreground flex items-center gap-2 font-sans">
                        <span className={`w-1 h-1 rounded-full 
                          ${service.glowColor === "primary" ? "bg-primary" : ""}
                          ${service.glowColor === "secondary" ? "bg-secondary" : ""}
                          ${service.glowColor === "accent" ? "bg-accent" : ""}
                        `} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>


              </CardPremium>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Featured AI Spotlight Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-16 w-full"
      >
        <CardPremium
          variant="glass-premium"
          glowColor="accent"
          hoverEffect="glow"
          className="p-6 sm:p-8 bg-gradient-to-r from-accent/5 via-primary/5 to-transparent border-accent/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: text content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-bold">
                Advanced AI capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
                Integrating Next-Gen Large Language Models
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                We build and deploy intelligent RAG (Retrieval-Augmented Generation) pipelines, custom conversational agents, 
                and automation workflows that integrate directly into your legacy tools to multiply operational throughput.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground font-sans pt-2 border-t border-border/5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Custom NLP Integration Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Semantic Search & Vector Stores
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Automated Agent Workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Secure Local LLM Deployments
                </li>
              </ul>
            </div>

            {/* Right Column: AI Brain Laptop Image */}
            <div className="lg:col-span-5 flex items-center justify-center w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/ai-brain.webp" 
                alt="AI Deep Learning Brain and Laptop" 
                className="w-full h-auto object-contain max-h-[220px] rounded-xl transition-transform duration-500 hover:scale-102"
              />
            </div>
          </div>
        </CardPremium>
      </motion.div>
    </Section>
  );
}
