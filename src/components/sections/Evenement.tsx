"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { imgSrc } from "@/lib/utils";
import { CalendarDays, Users, Building2, Heart, UtensilsCrossed, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Heart,
    titre: "Anniversaires",
    desc: "Célébrez vos moments précieux avec un buffet vietnamien fait maison, savoureux et généreux.",
  },
  {
    icon: Building2,
    titre: "Entreprises",
    desc: "Repas d'affaires, séminaires ou team buildings – notre traiteur s'adapte à vos besoins.",
  },
  {
    icon: CalendarDays,
    titre: "Mariages",
    desc: "Un buffet exotique et raffiné pour rendre votre grand jour inoubliable.",
  },
  {
    icon: UtensilsCrossed,
    titre: "Buffets",
    desc: "Large sélection de plats vietnamiens pour des buffets chaleureux et conviviaux.",
  },
  {
    icon: Users,
    titre: "Réceptions",
    desc: "Événements privés ou publics – nous apportons la cuisine vietnamienne chez vous.",
  },
];

export default function Evenement() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="evenements"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-40"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={imgSrc("WhatsApp Image 2026-06-12 at 13.09.45 (3).jpeg")}
          alt="Service traiteur Le Lotus"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/80 backdrop-brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/70 to-dark/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-copper text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Traiteur & Réceptions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            La Cuisine Vietnamienne
            <br />
            <span className="italic text-copper">Chez Vous</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-copper/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-copper" />
            <div className="w-12 h-px bg-copper/60" />
          </div>
          <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed">
            Le Lotus vous propose un service traiteur complet pour vos événements privés et
            professionnels. Cuisine authentique, préparée sur mesure.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.titre}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className="group p-6 border border-white/10 bg-white/5
                         hover:border-copper/50 hover:bg-white/10
                         transition-all duration-500 text-center"
            >
              <div
                className="w-10 h-10 mx-auto mb-4 border border-copper/40
                            group-hover:border-copper group-hover:bg-copper/10
                            flex items-center justify-center transition-all duration-300"
              >
                <s.icon size={18} className="text-copper" />
              </div>
              <h3 className="font-serif text-white text-base mb-2 group-hover:text-copper transition-colors duration-300">
                {s.titre}
              </h3>
              <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-8 tracking-wide">
            Pour tout renseignement ou devis personnalisé, contactez-nous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0264223571"
              className="inline-flex items-center justify-center gap-3 px-10 py-5
                         bg-copper text-white text-xs tracking-[0.25em] uppercase font-medium
                         hover:bg-copper-dark transition-all duration-300 hover:-translate-y-0.5
                         hover:shadow-xl hover:shadow-copper/30 group"
            >
              Réserver votre Événement
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="tel:0791707969"
              className="inline-flex items-center justify-center gap-3 px-10 py-5
                         border border-white/30 text-white text-xs tracking-[0.25em] uppercase font-medium
                         hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              079 170 79 69
            </a>
          </div>

          {/* Decorative logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center select-none pointer-events-none"
          >
            <span className="sr-only">Le Lotus</span>
            <img
              src={imgSrc("lelotus.png")}
              alt="Le Lotus"
              className="w-[240px] md:w-[360px] h-auto opacity-30"
              style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.45))" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
