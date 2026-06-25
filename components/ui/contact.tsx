"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ArrowRight, Sparkles, Send, User, ChevronDown, CheckCircle
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

interface EnquiryFormValues {
  fullName: string;
  email: string;
  service: string;
  message: string;
}

export function Contact() {
  const [successData, setSuccessData] = useState<EnquiryFormValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitMethod, setSubmitMethod] = useState<'whatsapp' | 'email' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setSubmitError(null);
    if (submitMethod === 'whatsapp') {
      try {
        const messageText = `*New Enquiry from Shiv Core Tech*
----------------------------------
*Name:* ${data.fullName}
*Email:* ${data.email}
*Service:* ${data.service}
*Message:* ${data.message}`;

        const whatsappUrl = `https://wa.me/918983564489?text=${encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, "_blank");
        reset();
      } catch (err: any) {
        setSubmitError("Failed to redirect to WhatsApp. Please try again.");
      }
    } else if (submitMethod === 'email') {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            phone: "",
            service: data.service,
            message: data.message,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to send inquiry email. Please try again.");
        }

        setSuccessData(data);
      } catch (err: any) {
        setSubmitError(err.message || "Something went wrong. Please try again.");
      }
    }
  };

  const handleResetForm = () => {
    reset();
    setSuccessData(null);
    setSubmitError(null);
    setSubmitMethod(null);
  };

  const contacts: ContactMethod[] = [
    {
      title: "Call Us Direct",
      value: "+91 8983564489",
      subtext: "Mon-Sat from 9:00 AM to 6:00 PM",
      href: "tel:+918983564489",
      icon: Phone,
      glowColor: "primary",
    },
    {
      title: "WhatsApp Chat",
      value: "+91 89835 64489",
      subtext: "Instant support & consultation",
      href: "https://wa.me/918983564489",
      icon: MessageSquare,
      glowColor: "secondary",
    },
    {
      title: "Email Address",
      value: "info@shivcoretech.com",
      subtext: "We reply within 24 hours",
      href: "mailto:info@shivcoretech.com?subject=Inquiry%20to%20Shiv%20Core%20Tech",
      icon: Mail,
      glowColor: "accent",
    },
  ];

  return (
    <Section id="contact" spacing="lg" containerSize="lg" className="border-b border-border/10" variant="grid">
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
          Hire the best website development company and software company in Chhatrapati Sambhajinagar. Connect with our developers to discuss your custom business software, ERP development, POS software, or AI solutions project.
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
              className="p-6 border-border/20 flex flex-col justify-between h-full bg-card/40"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h4 className="font-bold text-foreground text-sm font-sans uppercase tracking-wider">Office Headquarters</h4>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                   1st Floor, Auto Cars Compound,<br />
                   Adalat Road, Kranti Chawk,<br />
                   Chhatrapati Sambhaji Nagar,<br />
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

        {/* Right Side: Whatsapp Enquiry Form */}
        <div className="lg:col-span-7 w-full flex flex-col">
          <CardPremium
            variant="glass-premium"
            glowColor="secondary"
            hoverEffect="none"
            className="p-6 sm:p-8 relative h-full flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              {!successData ? (
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-between h-full space-y-4"
                  noValidate
                >
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-heading">Send an Enquiry</h3>
                      <p className="text-xs text-muted-foreground mt-1 font-sans">
                        Fill in details below to connect via email or WhatsApp.
                      </p>
                    </div>

                    {submitError && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans">
                        {submitError}
                      </div>
                    )}

                    {/* Field: Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-muted-foreground">
                          <User className="h-4 w-4" />
                        </span>
                        <input
                          id="fullName"
                          type="text"
                          aria-invalid={errors.fullName ? "true" : "false"}
                          placeholder="Your Name"
                          {...register("fullName", {
                            required: "Full name is required",
                            minLength: { value: 2, message: "Name must be at least 2 characters" }
                          })}
                          className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground pl-10 pr-3.5 py-2.5 outline-none transition-all font-sans
                            ${errors.fullName ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                          `}
                        />
                      </div>
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400 font-sans block">{errors.fullName.message}</span>
                      )}
                    </div>

                    {/* Field: Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-muted-foreground">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          id="email"
                          type="email"
                          aria-invalid={errors.email ? "true" : "false"}
                          placeholder="your.email@example.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Please enter a valid email address"
                            }
                          })}
                          className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground pl-10 pr-3.5 py-2.5 outline-none transition-all font-sans
                            ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                          `}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-[11px] text-red-400 font-sans block">{errors.email.message}</span>
                      )}
                    </div>

                    {/* Field: Service Required */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          aria-invalid={errors.service ? "true" : "false"}
                          {...register("service", { required: "Please select a service" })}
                          className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground px-3.5 py-2.5 outline-none transition-all appearance-none cursor-pointer font-sans
                            ${errors.service ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                          `}
                        >
                          <option value="" disabled className="bg-background text-muted-foreground">Select a service...</option>
                          <option value="Website Development" className="bg-background text-foreground">Website Development</option>
                          <option value="Mobile App Development" className="bg-background text-foreground">Mobile App Development</option>
                          <option value="Software Development" className="bg-background text-foreground">Software Development</option>
                          <option value="AI Chatbots" className="bg-background text-foreground">AI Chatbots</option>
                          <option value="Design Services" className="bg-background text-foreground">Design Services</option>
                          <option value="Digital Marketing" className="bg-background text-foreground">Digital Marketing</option>
                          <option value="Other / General Inquiry" className="bg-background text-foreground">Other / General Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-muted-foreground">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                      {errors.service && (
                        <span className="text-[11px] text-red-400 font-sans block">{errors.service.message}</span>
                      )}
                    </div>

                    {/* Field: Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        placeholder="Briefly describe your project requirements, goals, or timeline..."
                        rows={4}
                        aria-invalid={errors.message ? "true" : "false"}
                        {...register("message", {
                          required: "Message is required",
                          minLength: { value: 10, message: "Message must be at least 10 characters" },
                          maxLength: { value: 1000, message: "Message cannot exceed 1000 characters" }
                        })}
                        className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground px-3.5 py-2.5 outline-none transition-all resize-none font-sans
                          ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                        `}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-400 font-sans block">{errors.message.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button
                      variant="glow"
                      type="submit"
                      onClick={() => setSubmitMethod('email')}
                      disabled={isSubmitting}
                      className="flex-1 h-11 justify-center rounded-lg gap-2 cursor-pointer font-semibold text-sm"
                    >
                      {isSubmitting && submitMethod === 'email' ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin shrink-0" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4" />
                          <span>Send via Email</span>
                        </>
                      )}
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => setSubmitMethod('whatsapp')}
                      disabled={isSubmitting}
                      className="flex-1 h-11 justify-center rounded-lg gap-2 cursor-pointer font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send via WhatsApp</span>
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="enquiry-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    <CheckCircle className="h-12 w-12" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground font-heading">Inquiry Sent!</h3>
                    <p className="text-sm text-muted-foreground font-sans max-w-sm">
                      Thank you, <span className="text-foreground font-semibold">{successData.fullName}</span>. 
                      Your inquiry regarding <span className="text-primary font-semibold">{successData.service}</span> has been received, and our team has been notified.
                    </p>
                  </div>

                  <div className="w-full max-w-md rounded-xl bg-muted/30 border border-border/20 p-5 text-left text-xs space-y-3 font-sans">
                    <div className="flex justify-between border-b border-border/10 pb-2">
                      <span className="text-muted-foreground">Prospect Name:</span>
                      <span className="font-semibold text-foreground">{successData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/10 pb-2">
                      <span className="text-muted-foreground">Email Address:</span>
                      <span className="font-semibold text-foreground truncate max-w-[200px]">{successData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Selected Service:</span>
                      <span className="font-semibold text-foreground">{successData.service}</span>
                    </div>
                  </div>

                  <div className="pt-4 w-full max-w-md">
                    <Button
                      variant="outline"
                      onClick={handleResetForm}
                      className="w-full h-10 rounded-lg justify-center cursor-pointer text-xs"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardPremium>
        </div>

      </div>

      {/* Map Card at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="w-full h-[300px] lg:h-[350px] relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl mt-12"
      >
        <div className="absolute inset-0 w-full h-full bg-slate-950/10 pointer-events-none z-10" />
        <iframe
          src="https://maps.google.com/maps?q=Plot%20No%20131,%20Jai%20Bhavani%20Nagar,%20Line%20No%2012,%20Tirupati%20Colony,%20N4%20CIDCO,%20Chhatrapati%20Sambhaji%20Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0 [filter:invert(90%)_hue-rotate(180deg)_grayscale(85%)_contrast(110%)_opacity(80%)] pointer-events-auto"
          allowFullScreen={false}
          loading="lazy"
          title="Office Location Map"
        />
      </motion.div>
    </Section>
  );
}
