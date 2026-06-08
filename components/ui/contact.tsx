"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, Sparkles, Send
} from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";
import { Button } from "./button";

interface ContactMethod {
  title: string;
  value: string;
  subtext: string;
  href: string;
  icon: React.ElementType;
  glowColor: "primary" | "secondary" | "accent";
}

export function Contact() {
  const contacts: ContactMethod[] = [
    {
      title: "Call Us Direct",
      value: "+91 90221 43182",
      subtext: "Mon-Sat from 9:00 AM to 6:00 PM",
      href: "tel:+919022143182",
      icon: Phone,
      glowColor: "primary",
    },
    {
      title: "WhatsApp Chat",
      value: "+91 90221 43182",
      subtext: "Instant support & consultation",
      href: "https://wa.me/919022143182",
      icon: MessageSquare,
      glowColor: "secondary",
    },
    {
      title: "Email Address",
      value: "info@shivcoretech.com",
      subtext: "We reply within 24 hours",
      href: "mailto:info@shivcoretech.com",
      icon: Mail,
      glowColor: "accent",
    },
  ];

  return (
    <Section id="contact" spacing="lg" containerSize="xl" className="border-b border-border/10" variant="grid">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>Connect With Us</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          Let&#39;s Transform Your Operations
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-muted-foreground font-sans leading-relaxed text-base"
        >
          Get in touch with our engineering and design team to discuss custom integrations, 
          software platforms, and cloud projects.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Contact Method Info Cards & Physical Address */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {contacts.map((c, index) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={index}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block group/link"
                >
                  <CardPremium
                    variant="glass-premium"
                    glowColor={c.glowColor}
                    hoverEffect="glow"
                    className="p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`p-2.5 rounded-xl border shrink-0 transition-colors
                        ${c.glowColor === "primary" ? "bg-primary/10 border-primary/20 text-primary group-hover/link:bg-primary/25" : ""}
                        ${c.glowColor === "secondary" ? "bg-secondary/10 border-secondary/20 text-secondary group-hover/link:bg-secondary/25" : ""}
                        ${c.glowColor === "accent" ? "bg-accent/10 border-accent/20 text-accent group-hover/link:bg-accent/25" : ""}
                      `}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm font-sans">{c.title}</h4>
                        <p className="font-bold text-foreground text-base mt-0.5 font-sans break-all">{c.value}</p>
                        <p className="text-xs text-muted-foreground font-sans mt-0.5">{c.subtext}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon-xs" 
                      className={`rounded-full group-hover/link:translate-x-1 transition-transform shrink-0
                        ${c.glowColor === "primary" ? "text-primary" : ""}
                        ${c.glowColor === "secondary" ? "text-secondary" : ""}
                        ${c.glowColor === "accent" ? "text-accent" : ""}
                      `}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardPremium>
                </motion.a>
              );
            })}
          </div>

          {/* Physical Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CardPremium
              variant="glass"
              glowColor="none"
              hoverEffect="lift"
              className="p-6 border-border/20 flex flex-col justify-between h-full bg-slate-950/40"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h4 className="font-bold text-foreground text-sm font-sans uppercase tracking-wider">Office Headquarters</h4>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Plot No 131, Jai Bhavani Nagar,<br />
                  Line No 12, Tirupati Colony,<br />
                  N4 CIDCO, Chhatrapati Sambhaji Nagar,<br />
                  Maharashtra, India
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/10 flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Plot+No+131,+Jai+Bhavani+Nagar,+Line+No+12,+Tirupati+Colony,+N4+CIDCO,+Chhatrapati+Sambhaji+Nagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline flex items-center gap-1 font-semibold"
                >
                  Open in Google Maps
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </CardPremium>
          </motion.div>
        </div>

        {/* Right Side: Map Iframe & Quick CTA block */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full flex-grow min-h-[300px] lg:min-h-[350px] relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl"
          >
            {/* Custom overlay/filter to give Google Maps a dark/futuristic look */}
            <div className="absolute inset-0 w-full h-full bg-slate-950/10 pointer-events-none z-10" />
            <iframe
              src="https://maps.google.com/maps?q=Plot%20No%20131,%20Jai%20Bhavani%20Nagar,%20Line%20No%2012,%20Tirupati%20Colony,%20N4%20CIDCO,%20Chhatrapati%20Sambhaji%20Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 [filter:invert(90%)_hue-rotate(180deg)_grayscale(85%)_contrast(110%)_opacity(80%)] pointer-events-auto"
              allowFullScreen={false}
              loading="lazy"
              title="Office Location Map"
            />
          </motion.div>

          {/* Quick CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CardPremium
              variant="glass-premium"
              glowColor="primary"
              hoverEffect="none"
              className="p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-foreground text-base font-sans">Have a project in mind?</h4>
                <p className="text-xs text-muted-foreground font-sans">Let&#39;s build reliable software systems for your business.</p>
              </div>
              
              <div className="flex flex-wrap gap-3 w-full sm:w-auto shrink-0">
                <Button 
                  variant="glow" 
                  onClick={() => window.open("https://wa.me/919022143182", "_blank")}
                  className="rounded-full gap-2 cursor-pointer text-xs flex-grow sm:flex-grow-0"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Chat</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = "mailto:info@shivcoretech.com"}
                  className="rounded-full gap-2 cursor-pointer text-xs flex-grow sm:flex-grow-0 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Send className="h-3.5 w-3.5 text-primary" />
                  <span>Send Email</span>
                </Button>
              </div>
            </CardPremium>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
