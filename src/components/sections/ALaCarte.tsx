"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { imgSrc } from "@/lib/utils";
import menuData from "@/data/menu.json";

type Tab = "entrees" | "soupes" | "plats" | "sandwichs" | "combo" | "boissons";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "entrees",   label: "Entrées",         emoji: "🥟" },
  { id: "soupes",    label: "Soupes",           emoji: "🍜" },
  { id: "plats",     label: "Plats Principaux", emoji: "🍽️" },
  { id: "sandwichs", label: "Bánh Mì",          emoji: "🥖" },
  { id: "combo",     label: "Combo",            emoji: "🍱" },
  { id: "boissons",  label: "Boissons",         emoji: "🧋" },
];

interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: string;
  image: string;
  tag: string | null;
  portion?: string;
}

/* ─────────────────────────────────────────────
   MenuCard — rich animated food card
───────────────────────────────────────────── */
function MenuCard({
  item,
  index,
  showSteam = false,
  rotateImage = false,
}: {
  item: MenuItem;
  index: number;
  showSteam?: boolean;
  rotateImage?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative bg-white border border-dark/5 overflow-hidden cursor-default
                 transition-shadow duration-500
                 hover:shadow-[0_24px_60px_-8px_rgba(212,80,32,0.22)]"
    >
      {/* ── Image zone ── */}
      <div className="relative overflow-hidden bg-[#f8f6f1] food-shimmer" style={{ aspectRatio: "4/3" }}>

        {/* Warm colour overlay on hover */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100
                        bg-gradient-to-t from-amber-900/20 via-transparent to-transparent
                        transition-opacity duration-500 pointer-events-none" />

        {/* Vignette (always subtle) */}
        <div className="absolute inset-0 z-10
                        bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.06)_100%)]
                        pointer-events-none" />

        <motion.img
          src={imgSrc(item.image)}
          alt={item.nom}
          loading="lazy"
          className={`w-full h-full ${rotateImage ? "object-cover" : "object-contain"}`}
          style={rotateImage ? { transform: "rotate(90deg) scale(1.35)" } : undefined}
          whileHover={{ scale: rotateImage ? 1.22 : 1.09, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
        />

        {/* Steam effect for soups */}
        {showSteam && (
          <div className="steam-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="steam-line" />
            <div className="steam-line" />
            <div className="steam-line" />
          </div>
        )}

        {/* Tag badge */}
        {item.tag && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.07 + 0.25, type: "spring", stiffness: 350, damping: 18 }}
            style={{ animation: "pulse-tag 2.5s ease-in-out infinite" }}
            className={`absolute top-3 left-3 z-20 px-2.5 py-1 text-[10px]
                        tracking-[0.15em] uppercase font-semibold shadow-sm
              ${item.tag === "Végétarien"                                      ? "bg-sage text-white"
              : item.tag === "Épicé"                                           ? "bg-red-500 text-white"
              : item.tag === "Signature" || item.tag === "Spécialité"          ? "bg-copper text-white"
              : item.tag === "Maison"                                          ? "bg-amber-700 text-white"
              : item.tag === "À partager"                                      ? "bg-dark text-white"
              :                                                                  "bg-dark text-white"}`}
          >
            {item.tag}
          </motion.span>
        )}

        {/* "Voir le plat" reveal */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center pb-3
                        opacity-0 group-hover:opacity-100 transition-all duration-400
                        translate-y-2 group-hover:translate-y-0">
          <span className="text-white text-[9px] tracking-[0.35em] uppercase
                           bg-dark/65 backdrop-blur-sm px-4 py-1.5">
            Voir le plat
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-5 relative">
        {/* Top accent line */}
        <div className="absolute top-0 left-5 right-5 h-px
                        bg-copper/0 group-hover:bg-copper/20
                        transition-colors duration-500" />

        {item.portion && (
          <span className="text-[9px] text-copper/55 tracking-[0.2em] uppercase mb-1 block">
            {item.portion}
          </span>
        )}

        <h3 className="font-serif text-dark text-[17px] leading-tight mb-1.5
                       group-hover:text-copper transition-colors duration-300">
          {item.nom}
        </h3>
        <p className="text-dark/55 text-xs leading-relaxed mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <motion.span
            whileHover={{ scale: 1.06 }}
            className="font-serif text-copper text-lg font-medium"
          >
            {item.prix}
          </motion.span>
          <span className="h-px bg-copper/25 transition-all duration-500
                           w-6 group-hover:w-12 group-hover:bg-copper" />
        </div>
      </div>

      {/* Bottom copper sweep */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-copper via-amber-400 to-copper
                      w-0 group-hover:w-full transition-all duration-700 ease-out" />

      {/* Corner glow */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full
                      bg-copper/0 group-hover:bg-copper/8
                      transition-all duration-500 blur-xl pointer-events-none" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Panels
───────────────────────────────────────────── */
function EntreesPanel() {
  const items = menuData.alaCarte.entrees as MenuItem[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <MenuCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

function SoupesPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuData.alaCarte.soupes.map((item, i) => (
        <MenuCard key={item.id} item={item} index={i} showSteam />
      ))}
    </div>
  );
}

function PlatsPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {menuData.alaCarte.plats.map((item, i) => (
        <MenuCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

function SandwichsPanel() {
  const items = (menuData.alaCarte as unknown as { sandwichs: MenuItem[] }).sandwichs;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
      {items.map((item, i) => (
        <MenuCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

function ComboPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {menuData.alaCarte.combo.map((item, i) => (
        <MenuCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Boisson cards
───────────────────────────────────────────── */
function BoissonSpeciale({
  b,
  index,
}: {
  b: { id: string; nom: string; description: string; prix: string; image: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white border border-dark/5 overflow-hidden
                 transition-shadow duration-500
                 hover:shadow-[0_24px_60px_-8px_rgba(212,80,32,0.22)]"
    >
      <div className="relative overflow-hidden bg-[#f8f6f1] food-shimmer" style={{ aspectRatio: "4/3" }}>
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100
                        bg-gradient-to-t from-amber-900/15 via-transparent to-transparent
                        transition-opacity duration-500 pointer-events-none" />
        <motion.img
          src={`/images/${b.image}`}
          alt={b.nom}
          loading="lazy"
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.08, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-dark text-[17px] leading-tight mb-1.5
                       group-hover:text-copper transition-colors duration-300">
          {b.nom}
        </h3>
        <p className="text-dark/55 text-xs leading-relaxed mb-4">{b.description}</p>
        <div className="flex items-center justify-between">
          <motion.span
            whileHover={{ scale: 1.06 }}
            className="font-serif text-copper text-lg font-medium"
          >
            {b.prix}
          </motion.span>
          <span className="h-px bg-copper/25 transition-all duration-500 w-6 group-hover:w-12 group-hover:bg-copper" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-copper via-amber-400 to-copper
                      w-0 group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
}

function BoissonAvecImage({
  b,
  index,
}: {
  b: { id: string; nom: string; prix: string; image: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.06 + 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white border border-dark/5 overflow-hidden
                 transition-shadow duration-400
                 hover:shadow-[0_16px_40px_-6px_rgba(212,80,32,0.18)]"
    >
      <div className="relative overflow-hidden bg-[#f8f6f1] food-shimmer" style={{ aspectRatio: "1/1" }}>
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100
                        bg-gradient-to-t from-amber-900/12 via-transparent to-transparent
                        transition-opacity duration-400 pointer-events-none" />
        <motion.img
          src={`/images/${b.image}`}
          alt={b.nom}
          loading="lazy"
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-dark leading-tight mb-2
                      group-hover:text-copper transition-colors duration-250">
          {b.nom}
        </p>
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-serif text-copper text-base font-medium"
        >
          {b.prix}
        </motion.span>
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-copper to-amber-400
                      w-0 group-hover:w-full transition-all duration-600 ease-out" />
    </motion.div>
  );
}

function BoissonPanel() {
  return (
    <div className="space-y-12">
      {/* Spécialités */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="label-copper mb-6"
        >
          Spécialités Maison
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {menuData.alaCarte.boissons.speciales.map((b, i) => (
            <BoissonSpeciale key={b.id} b={b} index={i} />
          ))}
        </div>
      </div>

      {/* Autres Boissons */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="label-copper mb-6"
        >
          Autres Boissons
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {menuData.alaCarte.boissons.avecImage.map((b, i) => (
            <BoissonAvecImage key={b.id} b={b} index={i} />
          ))}
        </div>
      </div>

      {/* Boissons sans image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white border border-dark/5 p-6"
      >
        <p className="label-copper mb-5">Boissons & Eau</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
          {menuData.alaCarte.boissons.autres.map((b, i) => (
            <motion.div
              key={b.nom}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 + 0.3 }}
              whileHover={{ backgroundColor: "rgba(212,80,32,0.04)" }}
              className="flex items-center justify-between py-3 px-3 border-b border-dark/5 group"
            >
              <span className="text-sm text-dark/75 group-hover:text-copper transition-colors duration-200">
                {b.nom}
              </span>
              <span className="text-sm font-medium text-copper ml-2 whitespace-nowrap">
                {b.prix}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
const panels = {
  entrees:   EntreesPanel,
  soupes:    SoupesPanel,
  plats:     PlatsPanel,
  sandwichs: SandwichsPanel,
  combo:     ComboPanel,
  boissons:  BoissonPanel,
} as const;

export default function ALaCarte() {
  const [activeTab, setActiveTab] = useState<Tab>("soupes");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent<string>).detail as Tab;
      if (tabs.some((t) => t.id === tab)) setActiveTab(tab);
    };
    window.addEventListener("open-carte-tab", handler);
    return () => window.removeEventListener("open-carte-tab", handler);
  }, []);

  const ActivePanel = panels[activeTab];

  return (
    <section id="carte" ref={ref} className="section-padding bg-cream">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="label-copper mb-4">Notre Sélection</p>
          <h2 className="heading-lg text-dark mb-4">À la Carte</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-copper/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-copper" />
            <div className="w-12 h-px bg-copper/50" />
          </div>
          <p className="text-dark/55 text-sm max-w-lg mx-auto leading-relaxed">
            Tous nos plats sont préparés <strong>fait maison</strong> à partir de produits
            frais, dans le respect des traditions culinaires vietnamiennes.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium
                          flex items-center gap-2 transition-colors duration-300
                          ${activeTab === tab.id ? "text-white" : "text-dark/60 hover:text-dark"}`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab-bg"
                  className="absolute inset-0 bg-copper"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10 text-base leading-none">{tab.emoji}</span>
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="relative mb-10">
          <div className="w-full h-px bg-dark/8" />
          <motion.div
            className="absolute top-0 left-0 h-px bg-copper"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.38, ease: "easeInOut" }}
          >
            <ActivePanel />
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-6 border border-copper/20 bg-copper/5 text-center
                     relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-copper/5 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-transform duration-1000 ease-in-out pointer-events-none" />
          <p className="font-serif italic text-dark/70 text-[15px] mb-1 relative z-10">
            Tous nos plats sont également disponibles{" "}
            <strong className="text-copper not-italic">à emporter</strong>
          </p>
          <p className="text-dark/40 text-xs tracking-wider relative z-10">
            Merci de nous appeler pour votre commande · 026 422 35 71 · 079 170 79 69
          </p>
        </motion.div>
      </div>
    </section>
  );
}
