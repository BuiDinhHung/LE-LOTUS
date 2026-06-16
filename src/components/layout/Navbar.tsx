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
            className="flex items-center gap-3 group"
          >
            <LotusLogo
              className={`w-9 h-9 transition-colors duration-500 ${
                scrolled ? "text-copper" : "text-copper"
              }`}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-xl tracking-[0.15em] transition-colors duration-500 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                LE LOTUS
              </span>
              <span
                className={`text-[9px] tracking-[0.35em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-copper" : "text-white/70"
                }`}
              >
                Spécialités Vietnamiennes
              </span>
            </div>
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
              026 422 35 71
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
              <div className="flex items-center gap-3">
                <LotusLogo className="w-8 h-8 text-copper" />
                <span className="font-serif text-xl tracking-[0.15em] text-white">
                  LE LOTUS
                </span>
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
                <span className="text-sm tracking-wider">026 422 35 71</span>
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
    <svg
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4 C15 10 13 20 13 28 C13 34 16 38 20 38 C24 38 27 34 27 28 C27 20 25 10 20 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M13 28 C9 22 4 18 2 20 C0 23 2 30 9 34 C13 36 17 36 20 38"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M27 28 C31 22 36 18 38 20 C40 23 38 30 31 34 C27 36 23 36 20 38"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M9 34 C5 30 0 28 0 32 C0 36 5 40 12 40 C15 40 18 39 20 38"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M31 34 C35 30 40 28 40 32 C40 36 35 40 28 40 C25 40 22 39 20 38"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        opacity="0.6"
      />
      <circle cx="20" cy="38" r="1.5" fill="currentColor" />
      <line
        x1="20"
        y1="39.5"
        x2="20"
        y2="44"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  );
}
