"use client";

import React, { useEffect, useState } from "react";

interface TransparentLogoProps {
  src: string;
  alt: string;
  className?: string;
  forceTheme?: "light" | "dark";
}

export function TransparentLogo({ src, alt, className, forceTheme }: TransparentLogoProps) {
  const [logoSrc, setLogoSrc] = useState<string>(src);

  useEffect(() => {
    if (forceTheme) {
      setLogoSrc(forceTheme === "dark" ? "/logo_dark.webp?v=3" : "/logo.webp?v=3");
      return;
    }

    const updateLogo = () => {
      const isDarkTheme = document.documentElement.classList.contains("dark");
      setLogoSrc(isDarkTheme ? "/logo_dark.webp?v=3" : "/logo.webp?v=3");
    };

    updateLogo();

    const observer = new MutationObserver(updateLogo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [src, forceTheme]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={logoSrc} 
      alt={alt} 
      className={className} 
      loading="eager"
    />
  );
}
