"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imgSrc } from "@/lib/utils";
import { Utensils, Leaf, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Utensils,
    titre: "Sur Place & À Emporter",
    desc: "Profitez de notre salle de restaurant ou commandez à emporter.",
  },
  {
    icon: Leaf,
    titre: "Fait Maison",
    desc: "Chaque plat est préparé avec soin à partir de recettes familiales.",
  },
  {
    icon: Clock,
    titre: "Produits Frais",
    desc: "Nous sélectionnons des ingrédients frais chaque jour pour vos repas.",
  },
  {
    icon: Star,
    titre: "Cuisine Authentique",
    desc: "Des saveurs du Vietnam directement dans votre assiette, à Fribourg.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="apropos"
      ref={ref}
      className="section-padding bg-cream bg-texture"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative pb-12"
          >
            {/* Main image */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden shadow-2xl shadow-dark/15 -mx-[7.5%] w-[115%]"
            >
              <img
                src={imgSrc("phobo.png")}
                alt="Cuisine vietnamienne Le Lotus"
                className="w-full h-auto block hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Floating secondary image */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-6 w-44 md:w-52 aspect-square overflow-hidden
                         shadow-xl shadow-dark/10"
            >
              <img
                src={imgSrc("mixaotom.png")}
                alt="Plats vietnamiens Le Lotus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Decorative element */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-6 -left-6 w-24 h-24 border border-copper/30"
            />
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute -top-3 -left-3 w-24 h-24 border border-copper/15"
            />

          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:pl-4"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="label-copper mb-4"
            >
              Notre Histoire
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="heading-lg text-dark mb-6"
            >
              L&apos;Authenticité
              <br />
              <span className="text-copper italic">Vietnamienne</span>
              <br />à Fribourg
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-copper" />
              <div className="w-1 h-1 rounded-full bg-copper" />
              <div className="w-4 h-px bg-copper/40" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-dark/70 leading-relaxed mb-5 text-[15px]"
            >
              Bienvenue chez <strong className="text-dark font-medium">Le Lotus</strong>, votre restaurant
              vietnamien au cœur de Fribourg. Nous vous proposons une cuisine authentique,
              préparée chaque jour avec amour et des ingrédients frais soigneusement sélectionnés.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-dark/70 leading-relaxed mb-10 text-[15px]"
            >
              Chaque plat est préparé avec passion, à partir d&apos;ingrédients frais et de recettes
              vietnamiennes authentiques. Notre objectif est de vous faire découvrir les saveurs
              du Vietnam à travers une cuisine faite maison, généreuse et pleine d&apos;amour.
            </motion.p>

            {/* Features grid */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {features.map((f) => (
                <div
                  key={f.titre}
                  className="flex gap-3 p-3 hover:bg-copper/5 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center
                                  border border-copper/30 group-hover:border-copper
                                  transition-colors duration-200">
                    <f.icon size={14} className="text-copper" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-dark mb-0.5">
                      {f.titre}
                    </p>
                    <p className="text-xs text-dark/50 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Hours mini */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="border-t border-dark/10 pt-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div>
                <p className="label-copper mb-1">Horaires</p>
                <p className="text-sm text-dark font-medium">Lun – Sam : 11h00 – 14h00</p>
                <p className="text-xs text-dark/50 mt-0.5">Service du soir · Fermé dimanche</p>
              </div>
              <div className="sm:border-l sm:border-dark/10 sm:pl-6">
                <p className="label-copper mb-1">Adresse</p>
                <p className="text-sm text-dark font-medium">
                  Bvd de Pérolles 81
                </p>
                <p className="text-xs text-dark/50 mt-0.5">1700 Fribourg, Suisse</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
