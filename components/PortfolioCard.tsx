"use client";

import { motion } from "framer-motion";
import { CardData } from "../lib/portfolioData";
import { ChevronRight } from "lucide-react";

type PortfolioCardProps = {
  data: CardData;
  index: number;
};

// Readable on dark card backgrounds
const tagColorMap: Record<string, string> = {
  "Deep Learning":    "bg-orange-500/15 border-orange-400/30 text-orange-300",
  "PyTorch":          "bg-orange-500/15 border-orange-400/25 text-orange-200",
  "Research":         "bg-violet-500/15 border-violet-400/30 text-violet-300",
  "Statistics":       "bg-sky-500/15   border-sky-400/30   text-sky-300",
  "Data Structures":  "bg-sky-500/15   border-sky-400/25   text-sky-200",
  "Probability":      "bg-sky-500/15   border-sky-400/30   text-sky-300",
  "Verilog":          "bg-purple-500/15 border-purple-400/30 text-purple-300",
  "Digital Logic":    "bg-purple-500/15 border-purple-400/25 text-purple-200",
  "Circuits":         "bg-indigo-500/15 border-indigo-400/30 text-indigo-300",
  "Calculus":         "bg-blue-500/15  border-blue-400/25  text-blue-200",
  "C++":              "bg-blue-500/15  border-blue-400/30  text-blue-300",
  "Memory Management":"bg-blue-500/15  border-blue-400/25  text-blue-200",
  "Pointers":         "bg-blue-400/10  border-blue-400/20  text-blue-200",
  "Flask":            "bg-slate-500/15 border-slate-400/30 text-slate-300",
  "AWS":              "bg-yellow-500/15 border-yellow-400/30 text-yellow-300",
  "Real-time AI":     "bg-amber-500/15 border-amber-400/25 text-amber-200",
  "AI Models":        "bg-amber-500/15 border-amber-400/25 text-amber-200",
  "Selenium":         "bg-slate-400/15 border-slate-400/25 text-slate-300",
  "$800K Savings":    "bg-teal-500/15  border-teal-400/30  text-teal-300",
  "Python":           "bg-yellow-500/15 border-yellow-400/30 text-yellow-300",
  "LLMs":             "bg-teal-500/15  border-teal-400/30  text-teal-300",
  "Algorithms":       "bg-cyan-500/15  border-cyan-400/30  text-cyan-300",
  "Mechanics":        "bg-zinc-400/15  border-zinc-400/25  text-zinc-300",
  "Chemistry":        "bg-lime-500/15  border-lime-400/25  text-lime-300",
  "Physics Labs":     "bg-fuchsia-500/15 border-fuchsia-400/25 text-fuchsia-300",
};

const defaultTagColor = "bg-white/10 border-white/15 text-white/60";

export default function PortfolioCard({ data, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{
        scale: 1.025,
        boxShadow: "0 0 50px rgba(99,102,241,0.12), 0 0 0 1px rgba(99,102,241,0.22)",
      }}
      className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-md shadow-2xl relative overflow-hidden group transition-all"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      {/* Top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col h-full relative z-10">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
            {data.title}
          </h3>
          {data.subtitle && (
            <p className="text-sm font-mono text-blue-400/70 tracking-wider mt-1.5">
              {data.subtitle}
            </p>
          )}
        </div>

        <p className="text-white/60 font-light leading-relaxed mb-6 text-sm md:text-base">
          {data.description}
        </p>

        {data.metrics && data.metrics.length > 0 && (
          <ul className="mb-6 space-y-2">
            {data.metrics.map((metric, i) => (
              <li key={i} className="flex items-start text-sm text-white/55 font-mono">
                <ChevronRight className="w-4 h-4 mr-2 shrink-0 mt-[2px] text-indigo-400/60" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
          {data.tags?.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border ${
                tagColorMap[tag] ?? defaultTagColor
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
