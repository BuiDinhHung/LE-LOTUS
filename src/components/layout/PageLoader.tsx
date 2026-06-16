"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const maskStyle: React.CSSProperties = {
  maskImage:
    "radial-gradient(ellipse 92% 88% at 50% 56%, black 38%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 92% 88% at 50% 56%, black 38%, transparent 100%)",
  objectFit: "contain",
};

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center gap-8"
        >
          {/* 3D Lotus */}
          <div style={{ perspective: "700px" }}>
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              initial={{ rotateY: -90, scale: 0.4, opacity: 0, filter: "blur(10px)" }}
              animate={{ rotateY: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              {/* Vòng sáng ngoài */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 400,
                  height: 400,
                  background:
                    "radial-gradient(circle, rgba(212,80,32,0.22) 0%, rgba(212,80,32,0.06) 55%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              />

              {/* Vòng sáng trong */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 280,
                  height: 280,
                  background:
                    "radial-gradient(circle, rgba(253,248,238,0.12) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              />

              {/* Lotus image */}
              <motion.img
                src="/images/b2354c6f-03fc-4264-bc68-27805167adab.png"
                alt="Le Lotus"
                className="relative z-10"
                style={{ width: 340, height: 340, ...maskStyle }}
                animate={{
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 4px 14px rgba(212,80,32,0.4)) drop-shadow(0 0 30px rgba(253,248,238,0.1))",
                    "drop-shadow(0 8px 28px rgba(212,80,32,0.7)) drop-shadow(0 0 50px rgba(253,248,238,0.2))",
                    "drop-shadow(0 4px 14px rgba(212,80,32,0.4)) drop-shadow(0 0 30px rgba(253,248,238,0.1))",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              />
            </motion.div>
          </div>

          {/* Tên & tagline */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Thanh tiến trình */}
          <div className="w-28 h-px bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-copper"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
