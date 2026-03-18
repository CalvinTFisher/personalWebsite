"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

type Doc = { title: string; url: string; description: string };

export default function DocumentSection() {
  const [activePdf, setActivePdf] = useState<Doc | null>(null);

  const documents: Doc[] = [
    {
      title: "Technical Resume",
      url: "/resume.pdf",
      description: "B.E. Computer Engineering · Texas A&M University",
    },
  ];

  return (
    <div className="w-full relative z-20 max-w-3xl mx-auto">
      <div className="w-full space-y-4">
        {documents.map((doc) => (
          <motion.button
            key={doc.url}
            whileHover={{ scale: 1.015, y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setActivePdf(doc)}
            className="w-full flex items-center gap-5 p-7 text-left border border-zinc-200 rounded-2xl bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60 transition-all group relative overflow-hidden"
          >
            {/* Hover tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Icon */}
            <div className="relative z-10 w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-200 transition-all shrink-0">
              <FileText size={24} className="text-blue-500" />
            </div>

            {/* Text */}
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-lg font-bold text-zinc-900 mb-0.5">{doc.title}</h3>
              <p className="font-mono text-xs text-zinc-500 tracking-wider">{doc.description}</p>
            </div>

            {/* Action */}
            <div className="relative z-10 flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-blue-500 group-hover:text-blue-600 transition-colors shrink-0 font-semibold">
              <span className="hidden sm:inline">View</span>
              <ExternalLink size={16} />
            </div>
          </motion.button>
        ))}
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={(e) => { if (e.target === e.currentTarget) setActivePdf(null); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="w-full h-full max-w-6xl bg-white border border-zinc-200 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-blue-500" />
                  <h3 className="font-mono tracking-widest uppercase text-zinc-700 text-sm font-semibold">
                    {activePdf.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={activePdf.url}
                    target="_blank"
                    download
                    className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-2 rounded-lg hover:bg-zinc-100 text-sm font-mono"
                  >
                    <Download size={15} />
                    <span className="hidden sm:inline tracking-wider uppercase text-xs">Download</span>
                  </Link>
                  <button
                    onClick={() => setActivePdf(null)}
                    className="p-2 hover:bg-zinc-100 rounded-xl transition-colors text-zinc-400 hover:text-zinc-900"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full bg-zinc-100">
                <iframe
                  src={`${activePdf.url}#toolbar=0`}
                  className="w-full h-full border-0"
                  title={activePdf.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
