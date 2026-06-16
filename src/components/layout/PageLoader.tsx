"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const petals = [
  { d: "M40 8 C32 18 28 32 28 46 C28 56 33 62 40 62 C47 62 52 56 52 46 C52 32 48 18 40 8Z", delay: 0 },
  { d: "M28 46 C22 36 14 30 8 33 C4 37 7 47 17 52 C23 55 31 55 40 62", delay: 0.18 },
  { d: "M52 46 C58 36 66 30 72 33 C76 37 73 47 63 52 C57 55 49 55 40 62", delay: 0.36 },
  { d: "M17 52 C8 48 0 46 0 52 C0 58 8 64 20 64 C27 64 33 62 40 62", delay: 0.54 },
  { d: "M63 52 C72 48 80 46 80 52 C80 58 72 64 60 64 C53 64 47 62 40 62", delay: 0.72 },
];

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center gap-8"
        >
          {/* Lotus SVG — dessin des pétales */}
          <motion.svg
            viewBox="0 0 80 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24"
          >
            {petals.map((petal, i) => (
              <motion.path
                key={i}
                d={petal.d}
                stroke="#d45020"
                strokeWidth="1.8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: petal.delay, ease: "easeInOut" }}
              />
            ))}

            {/* Centre */}
            <motion.circle
              cx="40" cy="62" r="2.5"
              fill="#d45020"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.85, type: "spring", stiffness: 300 }}
            />

            {/* Tige */}
            <motion.line
              x1="40" y1="64.5" x2="40" y2="80"
              stroke="#2d5416" strokeWidth="1.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 1 }}
            />

            {/* Feuille gauche */}
            <motion.path
              d="M40 74 Q30 66 22 70"
              stroke="#2d5416" strokeWidth="1.4" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 0.35, delay: 1.15 }}
            />

            {/* Feuille droite */}
            <motion.path
              d="M40 74 Q50 66 58 70"
              stroke="#2d5416" strokeWidth="1.4" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 0.35, delay: 1.28 }}
            />
          </motion.svg>

          {/* Texte */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-serif text-white text-3xl tracking-[0.4em]">LE LOTUS</span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-copper/50" />
              <span className="text-white/45 text-[10px] tracking-[0.3em] uppercase font-sans">
                Spécialités Vietnamiennes
              </span>
              <div className="w-8 h-px bg-copper/50" />
            </div>
          </motion.div>

          {/* Barre de progression */}
          <div className="w-28 h-px bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-copper"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.1, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
