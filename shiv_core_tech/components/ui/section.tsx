import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "transparent" | "background" | "surface" | "glass" | "grid" | "dots";
  glow?: boolean;
}

export function Section({
  children,
  className,
  as: Component = "section",
  containerSize = "lg",
  spacing = "lg",
  variant = "transparent",
  glow = false,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden",
        {
          "py-0": spacing === "none",
          "py-8 sm:py-12": spacing === "sm",
          "py-12 sm:py-20": spacing === "md",
          "py-16 sm:py-28": spacing === "lg",
          "py-24 sm:py-36": spacing === "xl",
          "py-32 sm:py-48": spacing === "2xl",
        },
        {
          "bg-transparent": variant === "transparent",
          "bg-background": variant === "background",
          "bg-card/50 backdrop-blur-md border-y border-border/30": variant === "surface",
          "glass border-y": variant === "glass",
          "bg-grid-pattern bg-background": variant === "grid",
          "bg-dots-pattern bg-background": variant === "dots",
        },
        className
      )}
      {...props}
    >
      {glow && (
        <>
          <div className="absolute top-0 left-1/4 -z-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[500px] translate-x-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        </>
      )}

      {(variant === "grid" || variant === "dots") && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      )}

      {containerSize !== "none" ? (
        <Container size={containerSize}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Component>
  );
}
