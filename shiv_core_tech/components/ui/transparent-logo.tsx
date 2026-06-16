"use client";

import React, { useEffect, useState } from "react";

interface TransparentLogoProps {
  src: string;
  alt: string;
  className?: string;
  forceTheme?: "light" | "dark";
}

export function TransparentLogo({ src, alt, className, forceTheme }: TransparentLogoProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });
  const [processedSrc, setProcessedSrc] = useState<string>(src);
  const [isProcessed, setIsProcessed] = useState<boolean>(false);

  // Detect theme changes dynamically
  useEffect(() => {
    if (forceTheme) {
      setIsDark(forceTheme === "dark");
      return;
    }

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [forceTheme]);

  useEffect(() => {
    let active = true;
    setIsProcessed(false);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (!active) return;
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        if (active) {
          setProcessedSrc(src);
          setIsProcessed(true);
        }
        return;
      }

      ctx.drawImage(img, 0, 0);
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Process pixels based on theme
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          const maxVal = Math.max(r, g, b);

          if (isDark) {
            // Dark theme: traditional keying out of the dark background
            const minAlphaLimit = 15;
            const maxAlphaLimit = 65;

            if (maxVal < minAlphaLimit) {
              data[i + 3] = 0;
            } else if (maxVal < maxAlphaLimit) {
              const ratio = (maxVal - minAlphaLimit) / (maxAlphaLimit - minAlphaLimit);
              data[i + 3] = Math.round(ratio * (a / 255) * 255);
            }
          } else {
            // Light theme:
            // 1. Resolve blackish background/glow
            // 2. Replace inner white semicircular ring with black color

            // Check if pixel is part of the white/gray ring
            // The white/gray ring has high brightness and low color saturation (RGB are close)
            const isWhiteOrGray = 
              r > 195 && g > 195 && b > 195 &&
              Math.abs(r - g) < 20 &&
              Math.abs(r - b) < 20 &&
              Math.abs(g - b) < 20;

            // Check if pixel is part of the cyan/blue logo shape
            // Cyan/blue has high green and blue compared to red
            const isCyan = b > r + 30 && g > r + 10;

            // Check if pixel is part of the orange logo shape
            // Orange has high red and medium green, low blue
            const isOrange = r > b + 50 && r > g - 20;

            if (isWhiteOrGray) {
              // Replace white/gray with black
              data[i] = 0;
              data[i + 1] = 0;
              data[i + 2] = 0;
              data[i + 3] = 255; // Fully opaque black
            } else if (isCyan || isOrange) {
              // Keep the original color but make sure it is clean
              // For edge pixels that are darker, apply a smooth alpha fade
              const brightness = (r + g + b) / 3;
              if (brightness < 40) {
                data[i + 3] = 0; // Key out very dark edges to avoid black halo
              } else if (brightness < 80) {
                const ratio = (brightness - 40) / 40;
                data[i + 3] = Math.round(ratio * 255);
              } else {
                data[i + 3] = 255;
              }
            } else {
              // If it's neither white/gray, cyan, nor orange, it's background/glow
              // Make it fully transparent to resolve the blackish background!
              data[i + 3] = 0;
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
        if (active) {
          setProcessedSrc(canvas.toDataURL());
          setIsProcessed(true);
        }
      } catch (e) {
        console.error("Failed to process logo:", e);
        if (active) {
          setProcessedSrc(src);
          setIsProcessed(true);
        }
      }
    };
    img.src = src;

    return () => {
      active = false;
    };
  }, [src, isDark]);

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img 
      src={processedSrc} 
      alt={alt} 
      className={`${className} transition-opacity duration-150 ${isProcessed ? "opacity-100" : "opacity-0"}`} 
    />
  );
}
