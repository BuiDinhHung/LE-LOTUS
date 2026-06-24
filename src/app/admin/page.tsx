"use client";

import { useState, useEffect } from "react";
import menuData from "@/data/menu.json";
import { imgSrc } from "@/lib/utils";

export default function AdminMenuPage() {
  const [selected, setSelected] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("activeMenuIndex");
    if (stored !== null) setSelected(parseInt(stored));
  }, []);

  const handleSelect = (index: number) => {
    setSelected(index);
    localStorage.setItem("activeMenuIndex", String(index));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] p-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#d4502020]">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d45020] font-medium mb-1">
            Le Lotus — Administration
          </p>
          <h1 className="font-serif text-3xl text-[#1a1a1a]">Menu du Jour</h1>
          <p className="text-[#1a1a1a]/50 text-sm mt-2">
            Sélectionnez le menu à afficher sur le site.
          </p>
        </div>

        {/* Success message */}
        {saved && (
          <div className="mb-6 px-4 py-3 bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
            ✓ Menu mis à jour — visible sur le site
          </div>
        )}

        {/* Menu grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {menuData.menuDuJour.map((menu, i) => (
            <button
              key={menu.id}
              onClick={() => handleSelect(i)}
              className={`relative overflow-hidden border-2 text-left transition-all duration-200 bg-white
                ${selected === i
                  ? "border-[#d45020] shadow-lg shadow-[#d45020]/20"
                  : "border-[#1a1a1a]/10 hover:border-[#d45020]/40"}`}
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={imgSrc(menu.image)}
                  alt={menu.titre}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                {selected === i && (
                  <div className="absolute inset-0 bg-[#d45020]/15" />
                )}
                {selected === i && (
                  <div className="absolute top-2 right-2 w-7 h-7 bg-[#d45020] rounded-full
                                  flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                )}
              </div>

              {/* Label */}
              <div className="p-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#d45020]/60 mb-0.5">
                  Menu {String(menu.id).padStart(2, "0")}
                </p>
                <p className={`text-sm font-medium leading-tight transition-colors
                  ${selected === i ? "text-[#d45020]" : "text-[#1a1a1a]"}`}>
                  {menu.titre}
                </p>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#1a1a1a]/30 text-center tracking-wide">
          La sélection est sauvegardée localement dans ce navigateur.
        </p>
      </div>
    </div>
  );
}
