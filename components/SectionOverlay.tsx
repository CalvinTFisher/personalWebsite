"use client";

import { motion } from "framer-motion";
import { PortfolioBeat } from "../lib/portfolioData";
import PortfolioCard from "./PortfolioCard";

type SectionOverlayProps = {
  beat: PortfolioBeat;
  align?: "left" | "right" | "center";
  anchorId?: string;
};

export default function SectionOverlay({ beat, align = "left", anchorId }: SectionOverlayProps) {
  const alignmentClass =
    align === "left"  ? "justify-start md:pl-24" :
    align === "right" ? "justify-end md:pr-24"   :
    "justify-center text-center";

  return (
    <div className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-24 pointer-events-none relative">
      {/* Invisible anchor positioned at the top of the section content */}
      {anchorId && (
        <div
          id={anchorId}
          className="absolute top-[15%] left-0 w-px h-px pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className={`w-full max-w-7xl mx-auto flex ${alignmentClass}`}>
        <div className="w-full max-w-2xl pointer-events-auto">

          <motion.div
            initial={{ opacity: 0, x: align === "right" ? 50 : align === "left" ? -50 : 0, y: align === "center" ? 50 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            {beat.subtitle && (
              <h4 className="text-sm md:text-base font-mono tracking-[0.2em] text-white/40 uppercase mb-4">
                {beat.subtitle}
              </h4>
            )}
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              {beat.title}
            </h2>
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>

          {beat.cards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beat.cards.map((card, index) => (
                <div key={card.id} className={`${beat.cards.length === 1 || align === "center" ? "md:col-span-2" : ""}`}>
                  <PortfolioCard data={card} index={index} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
