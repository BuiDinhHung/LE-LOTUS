"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { imgSrc } from "@/lib/utils";

const banners = [
  {
    src: "WhatsApp Image 2026-06-12 at 02.22.05.jpeg",
    alt: "Nos plats – Le Lotus Take Away",
    tab: null,
  },
  {
    src: "WhatsApp Image 2026-06-12 at 02.24.48.jpeg",
    alt: "Spécialité Bánh Mì Vietnam – Fr 12.-",
    tab: "sandwichs",
  },
];

export default function PromoBanners() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % banners.length);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d * 80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d * -80, opacity: 0, scale: 0.97 }),
  };

  return (
    <section ref={ref} className="bg-dark py-0 overflow-hidden">
      {/* Reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <button
                type="button"
                className="w-full block focus:outline-none"
                style={{ cursor: banners[current].tab ? "pointer" : "default" }}
                onClick={() => {
                  const banner = banners[current];
                  if (banner.tab) {
                    window.dispatchEvent(new CustomEvent("open-carte-tab", { detail: banner.tab }));
                  }
                  document.getElementById("carte")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <img
                  src={imgSrc(banners[current].src)}
                  alt={banners[current].alt}
                  className="w-full h-auto block"
                  style={{ maxHeight: "70vh", objectFit: "contain", margin: "0 auto" }}
                />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-dark to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-dark to-transparent pointer-events-none" />
        </div>

        {/* Dots + counter */}
        <div className="flex items-center justify-center gap-3 py-5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? "bg-copper w-8 h-2"
                  : "bg-white/25 hover:bg-white/50 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
