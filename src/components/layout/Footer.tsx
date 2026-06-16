"use client";

import { MapPin, Phone, Facebook, Instagram, Clock, ArrowUp } from "lucide-react";

function LotusLogoFooter() {
  return (
    <img
      src="/images/b2354c6f-03fc-4264-bc68-27805167adab.png"
      alt="Le Lotus"
      className="w-12 h-12"
      style={{
        objectFit: "contain",
        mixBlendMode: "screen",
        maskImage: "radial-gradient(ellipse 92% 88% at 50% 56%, black 38%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 92% 88% at 50% 56%, black 38%, transparent 100%)",
      }}
    />
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-dark text-white">
      {/* Banner */}
      <div className="bg-copper/10 border-b border-white/5 py-5 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif italic text-white/80 text-lg md:text-xl">
            Tous nos plats sont également disponibles{" "}
            <span className="text-copper font-semibold">à emporter</span>
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <LotusLogoFooter />
              <div>
                <p className="font-serif text-2xl tracking-[0.15em]">LE LOTUS</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-copper/80">
                  Spécialités Vietnamiennes
                </p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Restaurant vietnamien authentique au cœur de Fribourg.
              Cuisine fait maison depuis 2020.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Le-Lotus-take-away-100057256187554/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10
                           text-white/50 hover:text-white hover:border-copper hover:text-copper
                           transition-all duration-300"
                aria-label="Facebook Le Lotus"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/lelotustakeaway/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10
                           text-white/50 hover:text-white hover:border-copper hover:text-copper
                           transition-all duration-300"
                aria-label="Instagram Le Lotus"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-copper mb-5 font-medium">
              Horaires
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={13} className="text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/80">Lundi – Samedi</p>
                  <p className="text-xs text-white/40">11h00 – 14h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={13} className="text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/80">Service du soir</p>
                  <p className="text-xs text-copper/80">Heure à confirmer</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={13} className="text-white/20 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/35">Dimanche</p>
                  <p className="text-xs text-white/25 italic">Fermé</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Adresse */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-copper mb-5 font-medium">
              Adresse
            </p>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/80">Boulevard de Pérolles 81</p>
                  <p className="text-xs text-white/40">1700 Fribourg, Suisse</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={13} className="text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:0264223571"
                    className="text-sm text-white/80 hover:text-copper transition-colors duration-200 block"
                  >
                    026 422 35 71
                  </a>
                  <a
                    href="tel:0791707969"
                    className="text-sm text-white/80 hover:text-copper transition-colors duration-200 block mt-0.5"
                  >
                    079 170 79 69
                  </a>
                </div>
              </div>
            </address>
            <a
              href="https://maps.app.goo.gl/GUH5LfAkEWomG5Ei9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs text-white/40
                         hover:text-copper transition-colors duration-200 tracking-wide group"
            >
              <MapPin size={11} />
              Voir sur Google Maps
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </a>
          </div>

          {/* Liens */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-copper mb-5 font-medium">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "À Propos", href: "#apropos" },
                { label: "Menus du Jour", href: "#carte" },
                { label: "À La Carte", href: "#carte" },
                { label: "Événements & Traiteur", href: "#evenements" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-white/40 hover:text-copper transition-colors duration-200
                               tracking-wide text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Services */}
            <div className="mt-6 pt-6 border-t border-white/8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3">
                Services
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Sur Place", "À Emporter", "Traiteur", "Réservation"].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-[10px] tracking-wider border border-white/10 text-white/35"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif italic text-white/30 text-base">
            Bon appétit et à bientôt 🌸
          </p>
          <div className="flex items-center gap-6">
            <p className="text-white/20 text-xs tracking-wider">
              © {new Date().getFullYear()} Le Lotus · Fribourg
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center border border-white/10
                         text-white/30 hover:text-copper hover:border-copper
                         transition-all duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
