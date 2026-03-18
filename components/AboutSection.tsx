"use client";

import { motion } from "framer-motion";

// Solid, readable badges that work on a white background
const techStack = [
  { name: "Python",     bg: "bg-amber-50",   border: "border-amber-300",  text: "text-amber-700" },
  { name: "C++",        bg: "bg-blue-50",    border: "border-blue-300",   text: "text-blue-700" },
  { name: "PyTorch",    bg: "bg-orange-50",  border: "border-orange-300", text: "text-orange-700" },
  { name: "AWS",        bg: "bg-yellow-50",  border: "border-yellow-400", text: "text-yellow-800" },
  { name: "Flask",      bg: "bg-slate-100",  border: "border-slate-300",  text: "text-slate-700" },
  { name: "React",      bg: "bg-cyan-50",    border: "border-cyan-300",   text: "text-cyan-700" },
  { name: "Next.js",    bg: "bg-zinc-100",   border: "border-zinc-300",   text: "text-zinc-700" },
  { name: "Verilog",    bg: "bg-purple-50",  border: "border-purple-300", text: "text-purple-700" },
  { name: "TypeScript", bg: "bg-blue-50",    border: "border-blue-400",   text: "text-blue-800" },
  { name: "SQL",        bg: "bg-teal-50",    border: "border-teal-300",   text: "text-teal-700" },
  { name: "Git",        bg: "bg-rose-50",    border: "border-rose-300",   text: "text-rose-700" },
  { name: "Selenium",   bg: "bg-emerald-50", border: "border-emerald-300","text": "text-emerald-700" },
];

const stats = [
  { value: "3.93", label: "GPA" },
  { value: "2",    label: "Internships" },
  { value: "5+",   label: "Projects" },
  { value: "TAMU", label: "University" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 bg-white text-zinc-900 py-28 md:py-36 overflow-hidden border-b border-zinc-100"
    >
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-100/60 to-purple-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-blue-50/80 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-blue-600 font-bold mb-6"
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Stats */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-8 leading-[1.1]"
            >
              Computer Engineer.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Problem Solver.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-600 text-lg leading-relaxed mb-10"
            >
              I&apos;m a Junior at{" "}
              <span className="font-semibold text-zinc-800">Texas A&M University</span>{" "}
              studying Computer Engineering, bridging the gap between silicon and software.
              I&apos;ve shipped production AI systems at two internships, dug deep into
              hardware design with Verilog and circuit theory, and I&apos;m always chasing the
              next hard problem — whether that&apos;s optimizing memory in C++, architecting
              cloud backends with AWS, or designing the very website you&apos;re browsing right
              now.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 font-bold mb-6"
            >
              Tech Stack
            </motion.p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`px-4 py-2 text-sm font-mono font-bold rounded-full border ${tech.bg} ${tech.border} ${tech.text} cursor-default select-none shadow-sm transition-shadow hover:shadow-md`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
