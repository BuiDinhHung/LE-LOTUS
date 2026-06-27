"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Phone, Facebook } from "lucide-react";

export default function Hours() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 border border-copper/30 mb-6 lg:inline-flex">
              <Clock size={20} className="text-copper" />
            </div>
            <h3 className="font-serif text-2xl text-dark mb-6">Horaires d&apos;ouverture</h3>

            <div className="space-y-3">
              <div className="flex items-start justify-between lg:justify-start gap-6 pb-3 border-b border-dark/8">
                <span className="text-sm text-dark/60 w-28">Lundi – Samedi</span>
                <div>
                  <span className="text-sm font-medium text-dark">11h00 – 14h00</span>
                  <p className="text-xs text-dark/40 mt-0.5">Service du midi</p>
                </div>
              </div>
              <div className="flex items-start justify-between lg:justify-start gap-6 pb-3 border-b border-dark/8">
                <span className="text-sm text-dark/60 w-28">Lundi – Samedi</span>
                <div>
                  <span className="text-sm font-medium text-dark">Service du soir</span>
                  <p className="text-xs text-copper mt-0.5">Heure à confirmer</p>
                </div>
              </div>
              <div className="flex items-start justify-between lg:justify-start gap-6 pt-1">
                <span className="text-sm text-dark/60 w-28">Dimanche</span>
                <span className="text-sm text-dark/40 italic">Fermé</span>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-sage/10">
              <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-xs text-sage font-medium tracking-wide">
                Ouvert maintenant – Lun à Sam
              </span>
            </div>
          </motion.div>

          {/* Adresse */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 border border-copper/30 mb-6">
              <MapPin size={20} className="text-copper" />
            </div>
            <h3 className="font-serif text-2xl text-dark mb-6">Notre Adresse</h3>

            <address className="not-italic space-y-1 mb-6">
              <p className="text-base font-medium text-dark">Le Lotus</p>
              <p className="text-sm text-dark/60">Boulevard de Pérolles 81</p>
              <p className="text-sm text-dark/60">1700 Fribourg, Suisse</p>
            </address>

            <div className="mt-4 overflow-hidden border border-dark/10">
              <iframe
                title="Le Lotus – Boulevard de Pérolles 81, Fribourg"
                src="https://maps.google.com/maps?q=Boulevard+de+P%C3%A9rolles+81%2C+1700+Fribourg%2C+Suisse&output=embed&hl=fr&z=16"
                width="100%"
                height="200"
                style={{ border: "none", display: "block" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/GUH5LfAkEWomG5Ei9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-copper
                         hover:text-copper-dark transition-colors duration-200 border-b border-copper/30
                         hover:border-copper pb-0.5"
            >
              <MapPin size={12} />
              Ouvrir dans Google Maps
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 border border-copper/30 mb-6">
              <Phone size={20} className="text-copper" />
            </div>
            <h3 className="font-serif text-2xl text-dark mb-6">Nous Contacter</h3>

            <div className="space-y-4 mb-8">
              <a
                href="tel:0264223571"
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={14}
                  className="text-copper group-hover:text-copper-dark transition-colors"
                />
                <div>
                  <span className="text-sm font-medium text-dark group-hover:text-copper transition-colors duration-200">
                    026 424 35 71
                  </span>
                  <p className="text-xs text-dark/40">Restaurant</p>
                </div>
              </a>
              <a
                href="tel:0791707969"
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={14}
                  className="text-copper group-hover:text-copper-dark transition-colors"
                />
                <div>
                  <span className="text-sm font-medium text-dark group-hover:text-copper transition-colors duration-200">
                    079 170 79 69
                  </span>
                  <p className="text-xs text-dark/40">Mobile / Traiteur</p>
                </div>
              </a>
            </div>

            <p className="label-copper mb-4">Réseaux Sociaux</p>
            <div className="flex flex-col gap-3 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/share/1E2WbZfnWz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5
                           bg-[#1877F2] text-white
                           hover:bg-[#1464d0] transition-all duration-200 group"
              >
                <Facebook size={18} className="shrink-0" />
                <span className="text-sm font-medium">Facebook</span>
                <span className="ml-auto text-white/60 group-hover:translate-x-1 transition-transform duration-200 text-xs">@LeLotus</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-copper/8 border-l-2 border-copper">
              <p className="text-xs text-dark/70 leading-relaxed">
                <span className="font-medium text-dark">Commandes à emporter :</span>
                <br />
                Appelez-nous 15 minutes avant votre arrivée pour que votre commande soit prête.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
