"use client";

import { useState, useEffect, useCallback } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Resume",     href: "#docs" },
  { label: "Life",       href: "#life" },
  { label: "Contact",    href: "#contact" },
];

// Offset to account for the fixed nav bar height
const NAV_OFFSET = 72;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleNavClick(e, "#hero")}
        className="font-black text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 select-none shrink-0"
      >
        CF
      </a>

      {/* Center nav links */}
      <div className="hidden lg:flex items-center gap-0.5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="px-3.5 py-2 text-xs font-mono tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="https://github.com/CalvinTFisher"
          target="_blank"
          className="text-white/40 hover:text-white transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={17} />
        </Link>
        <Link
          href="https://linkedin.com/in/calvin-t-fisher/"
          target="_blank"
          className="text-white/40 hover:text-white transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={17} />
        </Link>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono tracking-widest uppercase rounded-full border border-white/20 text-white/60 hover:text-white hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-200"
        >
          <Mail size={13} />
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
