"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { imgSrc } from "@/lib/utils";
import menuData from "@/data/menu.json";

export default function MenuDuJour() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const items = menuData.menuDuJour;
  const current = items[active];

  return (
    <section ref={ref} className="section-padding bg-dark overflow-hidden">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-copper text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Midi · Lun – Sam
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Menus du Jour
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="h-px bg-copper/60"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-copper"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="h-px bg-copper/60"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <p className="text-white/50 text-sm max-w-md mx-auto tracking-wide leading-relaxed">
            Chaque jour, notre chef prépare des menus frais, généreux et savoureux
            inspirés des traditions vietnamiennes.
          </p>
        </motion.div>

        {/* Main layout */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-5"
        >
          {/* ── Large featured board ── */}
          <div className="flex-1 min-w-0 relative bg-white/5 border border-white/10 overflow-hidden group">

            {/* Warm hover overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none
                            bg-gradient-to-t from-copper/12 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Corner shimmer */}
            <div className="absolute inset-0 z-10 pointer-events-none
                            bg-gradient-to-br from-white/4 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1,    filter: "blur(0px)" }}
                exit={{   opacity: 0, scale: 0.95,  filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="float-gentle"
              >
                <img
                  src={imgSrc(current.image)}
                  alt={current.titre}
                  className="w-full object-contain"
                  style={{ maxHeight: "68vh", minHeight: "280px" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Badge */}
            <AnimatePresence mode="wait">
              {current.badge && (
                <motion.span
                  key={current.badge}
                  initial={{ opacity: 0, x: -14, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0,   scale: 1 }}
                  exit={{   opacity: 0, x: -10 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-copper text-white
                             text-[10px] tracking-[0.15em] uppercase font-medium shadow-lg
                             shadow-copper/30"
                >
                  {current.badge}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center
                            justify-between px-3 pointer-events-none">
              <motion.button
                onClick={() => setActive((active - 1 + items.length) % items.length)}
                whileHover={{ scale: 1.15, backgroundColor: "rgba(212,80,32,0.88)" }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-10 h-10 flex items-center justify-center
                           bg-dark/65 text-white backdrop-blur-sm text-xl font-light
                           transition-colors duration-200"
                aria-label="Précédent"
              >
                ‹
              </motion.button>
              <motion.button
                onClick={() => setActive((active + 1) % items.length)}
                whileHover={{ scale: 1.15, backgroundColor: "rgba(212,80,32,0.88)" }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-10 h-10 flex items-center justify-center
                           bg-dark/65 text-white backdrop-blur-sm text-xl font-light
                           transition-colors duration-200"
                aria-label="Suivant"
              >
                ›
              </motion.button>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
              {items.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.3 }}
                  animate={
                    i === active
                      ? { width: 20, height: 6, backgroundColor: "#d45020", opacity: 1 }
                      : { width: 6,  height: 6, backgroundColor: "rgba(255,255,255,0.3)", opacity: 0.7 }
                  }
                  transition={{ duration: 0.3 }}
                  className="rounded-full"
                  aria-label={`Menu ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Thumbnail sidebar ── */}
          <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible
                          lg:w-64 xl:w-72 shrink-0 pb-1 lg:pb-0">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => setActive(i)}
                whileHover={{ x: i === active ? 0 : 3 }}
                transition={{ duration: 0.2 }}
                className={`group flex items-center gap-3 p-2.5 border text-left
                            transition-all duration-300 shrink-0 lg:shrink relative overflow-hidden
                            ${i === active
                              ? "border-copper bg-copper/10 shadow-[inset_0_0_20px_rgba(212,80,32,0.08)]"
                              : "border-white/10 bg-white/5 hover:border-copper/40 hover:bg-white/8"
                            }`}
              >
                {/* Shimmer on active */}
                {i === active && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-copper/10 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  />
                )}

                {/* Thumb */}
                <div className={`w-[72px] h-12 shrink-0 overflow-hidden transition-all duration-300
                                ${i === active ? "bg-dark/60" : "bg-dark/40"}`}>
                  <motion.img
                    src={imgSrc(item.image)}
                    alt={item.titre}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    animate={i === active ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 relative z-10">
                  <p className={`text-[9px] tracking-[0.2em] uppercase mb-0.5 transition-colors
                    ${i === active ? "text-copper" : "text-copper/50"}`}>
                    Menu {String(item.id).padStart(2, "0")}
                  </p>
                  <p className={`font-serif text-[13px] leading-tight truncate transition-colors
                    ${i === active ? "text-white" : "text-white/55"}`}>
                    {item.titre}
                  </p>
                  {item.badge && (
                    <span className="text-[8px] tracking-widest uppercase text-copper/60 mt-0.5 inline-block">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Active bar */}
                <motion.div
                  className="hidden lg:block w-0.5 self-stretch"
                  animate={{ backgroundColor: i === active ? "#d45020" : "transparent" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* Price box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.prix}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="hidden lg:flex items-center justify-between px-4 py-3 mt-2
                           border border-copper/30 bg-copper/5 relative overflow-hidden group/price"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-copper/0 via-copper/8 to-copper/0
                                translate-x-[-100%] group-hover/price:translate-x-[100%]
                                transition-transform duration-800 ease-in-out pointer-events-none" />
                <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase">Prix unique</span>
                <motion.span
                  className="font-serif text-white text-2xl"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {current.prix}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile price */}
        <div className="lg:hidden mt-3 flex items-center justify-between px-4 py-3
                        border border-copper/30 bg-copper/5">
          <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase">Prix unique</span>
          <span className="font-serif text-white text-2xl">{current.prix}</span>
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-3 px-5 py-4 bg-white/[0.03] border border-white/[0.07]
                       relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px]
                            bg-gradient-to-b from-transparent via-copper to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-white/55 text-sm leading-relaxed">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-white/60 text-sm tracking-wide mb-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Toutes nos plats sont aussi à{" "}
            <span className="text-copper font-medium tracking-[0.1em] uppercase">Emporter</span>
          </motion.p>
          <p className="text-white/30 text-xs tracking-[0.2em] uppercase">
            Menus susceptibles de changer · Renseignez-vous auprès de notre équipe
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="tel:0264223571"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                         border border-copper/50 text-copper text-xs tracking-[0.2em] uppercase font-medium
                         hover:bg-copper hover:text-white transition-all duration-300
                         hover:shadow-lg hover:shadow-copper/25"
            >
              Réserver par téléphone
            </motion.a>
            <motion.a
              href="#carte"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#carte")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                         bg-copper/10 text-copper/80 text-xs tracking-[0.2em] uppercase font-medium
                         hover:bg-copper hover:text-white transition-all duration-300
                         hover:shadow-lg hover:shadow-copper/25"
            >
              Voir la carte complète
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
