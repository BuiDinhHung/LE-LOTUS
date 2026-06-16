"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { imgSrc } from "@/lib/utils";

export default function BanhMiPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm cursor-pointer"
            onClick={close}
          />

          {/* Popup card */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.75, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{
              type: "spring",
              damping: 18,
              stiffness: 280,
              delay: 0.08,
            }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-5 pointer-events-none"
          >
            <div className="relative max-w-md w-full pointer-events-auto">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-sm bg-copper/30 blur-lg" />

              {/* Close */}
              <button
                onClick={close}
                aria-label="Fermer"
                className="absolute -top-3.5 -right-3.5 z-10 w-8 h-8 bg-copper hover:bg-copper-dark
                           text-white rounded-full flex items-center justify-center
                           transition-colors duration-200 shadow-lg"
              >
                <X size={15} strokeWidth={2.5} />
              </button>

              {/* Image */}
              <img
                src={imgSrc("WhatsApp Image 2026-06-12 at 02.24.48.jpeg")}
                alt="Spécialité Bánh Mì Vietnam – Fr 12.-"
                className="relative w-full h-auto rounded-sm shadow-2xl block"
              />

              {/* CTA strip */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="relative mt-3 flex gap-3"
              >
                <button
                  onClick={() => {
                    close();
                    document
                      .querySelector("#carte")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 py-3 bg-copper text-white text-xs tracking-[0.18em] uppercase
                             font-medium hover:bg-copper-dark transition-colors duration-300"
                >
                  Voir la carte
                </button>
                <button
                  onClick={close}
                  className="px-5 py-3 border border-white/25 text-white/60 text-xs tracking-wider
                             hover:text-white hover:border-white/50 transition-colors duration-300"
                >
                  Fermer
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
