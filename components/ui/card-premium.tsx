"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardPremiumProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "primary" | "secondary" | "accent" | "none";
  variant?: "default" | "glass" | "glass-premium" | "outlined";
  hoverEffect?: "none" | "scale" | "lift" | "glow";
  isAnimated?: boolean;
}

export function CardPremium({
  children,
  className,
  glowColor = "primary",
  variant = "glass",
  hoverEffect = "lift",
  isAnimated = false,
  ...props
}: CardPremiumProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const glowStyles = {
    primary: "rgba(37, 99, 235, 0.15)",
    secondary: "rgba(6, 182, 212, 0.15)",
    accent: "rgba(139, 92, 246, 0.15)",
    none: "transparent",
  };

  const backgroundGlow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${glowStyles[glowColor]}, transparent 80%)`;

  const baseClasses = cn(
    "group relative overflow-hidden rounded-2xl border transition-all duration-300",
    {
      "bg-card text-card-foreground border-border": variant === "default",
      "glass text-foreground border-border/30": variant === "glass",
      "glass-premium text-foreground border-border/40": variant === "glass-premium",
      "bg-transparent text-foreground border-border": variant === "outlined",
    },
    {
      "hover:scale-[1.02]": hoverEffect === "scale",
      "hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 hover:border-border/50": hoverEffect === "lift",
    },
    className
  );

  const cardContent = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={baseClasses}
      {...props}
    >
      {hoverEffect === "glow" && glowColor !== "none" && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
          style={{ background: backgroundGlow }}
        />
      )}
      
      {glowColor !== "none" && (
        <div
          className={cn(
            "absolute top-0 inset-x-0 h-[2px] opacity-0 transition-opacity duration-300",
            {
              "bg-primary": glowColor === "primary",
              "bg-secondary": glowColor === "secondary",
              "bg-accent": glowColor === "accent",
            },
            "group-hover:opacity-100"
          )}
        />
      )}

      {children}
    </div>
  );

  if (isAnimated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full flex flex-col"
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
