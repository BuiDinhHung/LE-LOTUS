"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#apropos" },
  { label: "Carte", href: "#carte" },
  { label: "Événements", href: "#evenements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-dark/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#accueil")}
            className="group"
          >
            <LotusLogo className="h-16 w-auto max-w-[260px] transition-all duration-500" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-copper ${
                  scrolled ? "text-dark/70" : "text-white/80"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0264223571"
              className={`flex items-center gap-2 text-xs tracking-wider transition-colors duration-300 hover:text-copper ${
                scrolled ? "text-dark/60" : "text-white/70"
              }`}
            >
              <Phone size={13} />
              026 424 35 71
            </a>
            <a
              href="#carte"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#carte");
              }}
              className="px-5 py-2.5 bg-copper text-white text-xs tracking-[0.15em] uppercase font-medium
                         hover:bg-copper-dark transition-all duration-300"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-dark" : "text-white"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-dark flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <div className="flex items-center">
                <LotusLogo className="h-10 w-auto max-w-[180px]" />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-6 pt-12 gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-4 border-b border-white/10 text-white/80 hover:text-copper
                             font-serif text-3xl tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Mobile contact */}
            <div className="px-6 pb-12 space-y-4">
              <a
                href="tel:0264223571"
                className="flex items-center gap-3 text-white/60 hover:text-copper transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm tracking-wider">026 424 35 71</span>
              </a>
              <a
                href="tel:0791707969"
                className="flex items-center gap-3 text-white/60 hover:text-copper transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm tracking-wider">079 170 79 69</span>
              </a>
              <button
                onClick={() => handleNavClick("#carte")}
                className="w-full mt-4 py-4 bg-copper text-white text-xs tracking-[0.2em] uppercase font-medium"
              >
                Réserver une table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LotusLogo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-banner.jpeg"
      alt="Le Lotus"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
