"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { imgSrc } from "@/lib/utils";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const scrollToNext = () => {
    const el = document.querySelector("#apropos");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-[1.15] origin-center"
      >
        <img
          src={imgSrc("WhatsApp Image 2026-06-12 at 13.09.44 (4).jpeg")}
          alt="Le Lotus – Restaurant Vietnamien à Fribourg"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/50 to-dark/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-dark/30 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-0"
      >
        {/* Lotus icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <HeroLotus />
        </motion.div>

        {/* Restaurant name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[72px] sm:text-[96px] md:text-[120px] lg:text-[144px]
                     text-white tracking-[0.15em] leading-none mb-2"
        >
          LE LOTUS
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-16 h-px bg-copper/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-copper" />
          <div className="w-16 h-px bg-copper/70" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif italic text-copper text-xl md:text-2xl tracking-[0.2em] mb-2"
        >
          Spécialités Vietnamiennes
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-white/70 text-sm tracking-[0.3em] uppercase mb-10"
        >
          Fait maison · Produits frais · Fribourg
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <a
            href="#carte"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#carte")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-copper text-white text-xs tracking-[0.25em] uppercase font-medium
                       hover:bg-copper-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-copper/30
                       min-w-[180px] text-center"
          >
            Voir la Carte
          </a>
          <a
            href="tel:0264223571"
            className="px-8 py-4 border border-white/60 text-white text-xs tracking-[0.25em] uppercase font-medium
                       hover:bg-white hover:text-dark transition-all duration-300 hover:-translate-y-0.5
                       min-w-[180px] text-center"
          >
            Réserver
          </a>
          <a
            href="https://maps.app.goo.gl/GUH5LfAkEWomG5Ei9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white/70
                       text-xs tracking-[0.25em] uppercase font-medium hover:border-white/60 hover:text-white
                       transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]"
          >
            <MapPin size={13} />
            Google Maps
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 z-10"
        aria-label="Défiler vers le bas"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function HeroLotus() {
  return (
    <svg
      viewBox="0 0 80 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 md:w-20 md:h-20"
    >
      {/* Center petal */}
      <path
        d="M40 8 C32 18 28 32 28 46 C28 56 33 62 40 62 C47 62 52 56 52 46 C52 32 48 18 40 8Z"
        stroke="#d45020"
        strokeWidth="1.8"
        fill="rgba(212,80,32,0.12)"
      />
      {/* Left inner petal */}
      <path
        d="M28 46 C22 36 14 30 8 33 C4 37 7 47 17 52 C23 55 31 55 40 62"
        stroke="#d45020"
        strokeWidth="1.8"
        fill="rgba(212,80,32,0.08)"
      />
      {/* Right inner petal */}
      <path
        d="M52 46 C58 36 66 30 72 33 C76 37 73 47 63 52 C57 55 49 55 40 62"
        stroke="#d45020"
        strokeWidth="1.8"
        fill="rgba(212,80,32,0.08)"
      />
      {/* Left outer petal */}
      <path
        d="M17 52 C8 48 0 46 0 52 C0 58 8 64 20 64 C27 64 33 62 40 62"
        stroke="#d45020"
        strokeWidth="1.4"
        fill="rgba(212,80,32,0.05)"
        opacity="0.8"
      />
      {/* Right outer petal */}
      <path
        d="M63 52 C72 48 80 46 80 52 C80 58 72 64 60 64 C53 64 47 62 40 62"
        stroke="#d45020"
        strokeWidth="1.4"
        fill="rgba(212,80,32,0.05)"
        opacity="0.8"
      />
      {/* Center dot */}
      <circle cx="40" cy="62" r="2.5" fill="#d45020" />
      {/* Stem */}
      <line
        x1="40"
        y1="64.5"
        x2="40"
        y2="80"
        stroke="#2d5416"
        strokeWidth="1.8"
      />
      {/* Left leaf */}
      <path
        d="M40 74 Q30 66 22 70"
        stroke="#2d5416"
        strokeWidth="1.4"
        fill="none"
        opacity="0.8"
      />
      {/* Right leaf */}
      <path
        d="M40 74 Q50 66 58 70"
        stroke="#2d5416"
        strokeWidth="1.4"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}
