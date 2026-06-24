"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { imgSrc } from "@/lib/utils";
import menuData from "@/data/menu.json";

export default function MenuDuJour() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("activeMenuIndex");
    if (stored !== null) {
      const idx = parseInt(stored);
      if (idx >= 0 && idx < menuData.menuDuJour.length) {
        setActiveIndex(idx);
      }
    }
  }, []);

  const current = menuData.menuDuJour[activeIndex];

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
          <p className="text-copper/80 text-xs tracking-[0.2em] uppercase font-medium mt-4">
            Menu étudiant · + 1 boisson au choix 33cl
          </p>
        </motion.div>

        {/* Menu image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-white/5 border border-white/10 overflow-hidden group max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 z-10 pointer-events-none
                          bg-gradient-to-t from-copper/12 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.img
            key={activeIndex}
            src={imgSrc(current.image)}
            alt={current.titre}
            className="w-full h-auto block"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            loading="eager"
          />
        </motion.div>

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
              href="tel:0264243571"
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
