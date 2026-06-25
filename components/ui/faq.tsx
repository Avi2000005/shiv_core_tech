"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What is the best IT company in Chhatrapati Sambhajinagar?",
      answer: "Shiv Core Tech is recognized as one of the best IT and custom software development companies in Chhatrapati Sambhajinagar, Maharashtra. We deliver enterprise-grade tech architecture, responsive website design, native/cross-platform mobile apps, and custom business automation tools across India.",
    },
    {
      question: "What web development technologies do you use?",
      answer: "As a leading web development company, we focus on modern, secure, and fast-loading web stacks. Our team specializes in Next.js, React.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, PHP, and Laravel, building SEO-friendly websites that achieve high Core Web Vitals.",
    },
    {
      question: "Can you build custom ERP or CRM software for local businesses?",
      answer: "Yes! We specialize in custom business software development, designing bespoke ERP software, CRM systems, POS systems, inventory management platforms, and billing software tailored to optimize operations and automate processes for businesses in Maharashtra and India.",
    },
    {
      question: "Do you provide AI integration and chatbot development services?",
      answer: "Absolutely. As an innovative AI development company, we integrate artificial intelligence solutions, machine learning models, OpenAI APIs, and custom conversational AI chatbots to help businesses automate customer support and operational workflows.",
    },
    {
      question: "How does local SEO help my business in Chhatrapati Sambhajinagar?",
      answer: "Local SEO optimizes your digital presence to rank at the top of search queries in your geographical area. By implementing structured LocalBusiness schemas, semantic headings, and location-based keywords, we help your business rank high for local searches and dominate local search rankings.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq" spacing="lg" containerSize="md" className="border-b border-border/10" variant="grid">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Frequently Asked Questions</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          Targeted IT & SEO Insights
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-muted-foreground font-sans leading-relaxed text-base"
        >
          Find answers to common questions about our software development, website design, and search engine optimization capabilities.
        </motion.p>
      </div>

      <div className="space-y-4 w-full">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <CardPremium
              key={index}
              variant="glass-premium"
              glowColor="primary"
              hoverEffect="glow"
              className="p-5 text-left cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3 items-start">
                  <HelpCircle className="w-5 h-5 mt-0.5 text-primary shrink-0" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="mt-1 text-muted-foreground shrink-0"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed pt-3 border-t border-border/5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardPremium>
          );
        })}
      </div>
    </Section>
  );
}
