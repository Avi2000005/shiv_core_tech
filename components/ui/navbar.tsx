"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { Button } from "./button";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { TransparentLogo } from "./transparent-logo";

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  };

  const menuItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  // Scroll listener to toggle solid glassmorphic background
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "glass-premium border-border/30 py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container size="lg" className="flex items-center justify-between">
        {/* Placeholder Brand Logo Component */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer select-none" aria-label="Shivcore Tech Home">
          <TransparentLogo
            src="/logo.webp"
            alt="Shivcore Tech Logo"
            className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-heading text-xl font-bold tracking-wider bg-gradient-to-r from-[#0284C7] to-[#EA580C] dark:from-[#00C0FF] dark:to-[#FF7A00] bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-90">
            SHIVCORE TECH
          </span>
        </a>

        {/* Desktop Menu Link list */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-1.5 group font-sans"
            >
              {item.label}
              {/* Dynamic hover bottom line indicator */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <Button
            variant="glass"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full cursor-pointer h-9 w-9 border-border/20 text-muted-foreground hover:text-foreground"
            aria-label="Toggle dark/light mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-primary" />
            )}
          </Button>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="glow"
              size="default"
              className="group gap-2 cursor-pointer rounded-full"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Toggler Hamburger Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="glass"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="rounded-xl cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Slide-down Overlay Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 h-screen bg-background/95 backdrop-blur-xl border-b border-border/20 px-6 py-8 flex flex-col justify-between"
            style={{ height: "calc(100vh - 100%)" }}
          >
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground border-b border-border/5 pb-2 transition-colors duration-300 font-sans"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.05 }}
              className="pb-16 flex flex-col gap-4"
            >
              <Button
                variant="glow"
                size="lg"
                className="w-full justify-center group gap-2 rounded-full cursor-pointer"
                onClick={() => {
                  setIsMobileOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
