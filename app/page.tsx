import NavBar from "@/components/NavBar";
import MouseGlow from "@/components/MouseGlow";
import ScrollPcPortfolio from "@/components/ScrollPcPortfolio";
import SectionOverlay from "@/components/SectionOverlay";
import DocumentSection from "@/components/DocumentSection";
import AboutSection from "@/components/AboutSection";
import { portfolioData, experienceCards, projectCards } from "@/lib/portfolioData";
import { Github, Linkedin, Mail, ArrowDown, Briefcase, FolderOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-zinc-900 font-sans selection:bg-indigo-500/20">

      <MouseGlow />
      <NavBar />

      {/* ════════════════════════════════════════════════════
          1. HERO — White / Animated blobs
      ════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center relative z-20 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-blue-200/70 to-blue-400/30 blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-purple-200/60 to-purple-400/20 blur-[110px] animate-blob-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[-5%] left-[20%] w-[50vw] h-[40vw] rounded-full bg-gradient-to-tr from-sky-100/80 to-indigo-200/40 blur-[130px] animate-blob-slower" style={{ animationDelay: "4s" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right,#1e3a8a 1px,transparent 1px),linear-gradient(to bottom,#1e3a8a 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="text-center max-w-5xl px-6 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 text-blue-700 text-xs font-mono tracking-[0.2em] uppercase font-bold mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for Opportunities
          </div>
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 leading-none">
            {portfolioData.hero.title}
          </h1>
          <p className="text-base md:text-lg font-bold tracking-[0.25em] text-zinc-500 mb-12 uppercase font-mono">
            {portfolioData.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="https://github.com/CalvinTFisher" target="_blank"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-mono tracking-wider hover:bg-zinc-700 transition-all shadow-lg">
              <Github size={18} /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/calvin-t-fisher/" target="_blank"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0A66C2] text-white text-sm font-mono tracking-wider hover:opacity-90 transition-all shadow-lg">
              <Linkedin size={18} /> LinkedIn
            </Link>
            <Link href="mailto:calvinf@tamu.edu"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-blue-600 text-blue-700 text-sm font-mono tracking-wider hover:bg-blue-600 hover:text-white transition-all">
              <Mail size={18} /> Email
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-blue-600 font-semibold">Scroll to Explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent" />
          <ArrowDown size={14} className="text-blue-400 animate-bounce" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ════════════════════════════════════════════════════
          2. HARDWARE SHOWCASE — Dark scroll animation (right after hero)
      ════════════════════════════════════════════════════ */}
      <div id="hardware" className="relative z-10 w-full bg-black" style={{ overflow: 'clip' }}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 select-none mix-blend-screen overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-700/30 blur-[150px]" />
          <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-700/20 blur-[130px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/40 blur-[180px]" />
        </div>
        <ScrollPcPortfolio>
          <div className="absolute w-full" style={{ top: '0vh' }}>
            <SectionOverlay beat={portfolioData.gpu}     align="left" />
          </div>
          <div className="absolute w-full" style={{ top: '130vh' }}>
            <SectionOverlay beat={portfolioData.cpu}     align="right" />
          </div>
          <div className="absolute w-full" style={{ top: '260vh' }}>
            <SectionOverlay beat={portfolioData.ram}     align="left" />
          </div>
          <div className="absolute w-full" style={{ top: '390vh' }}>
            <SectionOverlay beat={portfolioData.storage} align="right" />
          </div>
          <div className="absolute w-full" style={{ top: '480vh' }}>
            <SectionOverlay beat={portfolioData.code}    align="left" />
          </div>
        </ScrollPcPortfolio>
      </div>

      {/* ════════════════════════════════════════════════════
          3. ABOUT — White
      ════════════════════════════════════════════════════ */}
      <AboutSection />

      {/* ════════════════════════════════════════════════════
          4. EXPERIENCE — Light zinc (recruiter priority #1)
      ════════════════════════════════════════════════════ */}
      <section id="experience" className="bg-zinc-50 py-28 md:py-36 relative border-t border-zinc-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[35vw] h-[35vw] rounded-full bg-blue-50/80 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              <Briefcase size={15} className="text-blue-600" />
            </div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-blue-600 font-bold">Work Experience</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-4 leading-none">
            Where I&apos;ve Worked
          </h2>
          <p className="text-zinc-500 text-lg font-light mb-16 max-w-2xl">
            Two software engineering internships shipping production AI systems at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceCards.map((card) => (
              <div key={card.id}
                className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/40 transition-all group"
              >
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">{card.title}</h3>
                <p className="text-sm font-mono text-blue-600 mb-5 font-semibold">{card.subtitle}</p>
                <p className="text-zinc-600 leading-relaxed mb-6">{card.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
                  {card.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. PROJECTS — White (recruiter priority #2)
      ════════════════════════════════════════════════════ */}
      <section id="projects" className="bg-white py-28 md:py-36 relative border-t border-zinc-100 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-purple-50/60 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
              <FolderOpen size={15} className="text-purple-600" />
            </div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-purple-600 font-bold">Personal Projects</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-4 leading-none">
            What I&apos;ve Built
          </h2>
          <p className="text-zinc-500 text-lg font-light mb-16 max-w-2xl">
            Side projects and passion builds — engineering for the love of it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectCards.map((card) => (
              <div key={card.id}
                className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/30 transition-all group"
              >
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">{card.title}</h3>
                {card.subtitle && <p className="text-sm font-mono text-purple-600 mb-5 font-semibold">{card.subtitle}</p>}
                <p className="text-zinc-600 leading-relaxed mb-6">{card.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
                  {card.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-white border border-zinc-200 text-zinc-600 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. RESUME — Light grey
      ════════════════════════════════════════════════════ */}
      <section id="docs" className="bg-slate-50 py-28 md:py-36 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-slate-500 font-bold mb-4 text-center">Official Docs</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4 text-center leading-none">
            The Full Picture
          </h2>
          <p className="text-zinc-500 font-light text-center mb-16 max-w-lg mx-auto text-lg">
            Every project, grade, and experience — compiled.
          </p>
          <DocumentSection />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. LIFE / HOBBIES — Dark
      ════════════════════════════════════════════════════ */}
      <section id="life" className="bg-zinc-900 py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[40vw] h-[30vw] rounded-full bg-purple-900/20 blur-[130px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-purple-400 font-bold mb-4">Life &amp; Hobbies</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-5 leading-none">
            When I&apos;m Not Coding
          </h2>
          <p className="text-white/40 font-light mb-16 max-w-2xl text-lg">
            Staying sharp physically and mentally is part of the process — gym PRs, competitive gaming, and everything in between.
          </p>
          <div className="flex w-full h-72 md:h-[420px] gap-2 md:gap-3 overflow-hidden rounded-2xl">
            {[
              { src: "/hobby/gym.png",            alt: "Gym",          label: "The Gym",       sub: "Discipline & Drive",    accent: "text-blue-300",   tag: "[Iron]" },
              { src: "/hobby/rocketLeague.jpg",   alt: "Rocket League",label: "Rocket League", sub: "Competitive Drive",     accent: "text-blue-300",   tag: "[RL]" },
              { src: "/hobby/rainbow6siege.avif", alt: "R6 Siege",     label: "R6 Siege",      sub: "Tactical Coordination", accent: "text-purple-300", tag: "[R6]" },
              { src: "/hobby/roblox.png",         alt: "Roblox",       label: "Roblox",        sub: "Creative Sandbox",      accent: "text-purple-400", tag: "[Rblx]" },
            ].map((h) => (
              <div key={h.alt} className="relative flex-1 overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3] cursor-crosshair group/item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={h.src} alt={h.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-70 group-hover/item:opacity-50 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 delay-100">
                  <p className="text-white font-black tracking-widest uppercase text-xl">{h.label}</p>
                  <p className={`${h.accent} font-semibold text-sm mt-1`}>{h.sub}</p>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-4 group-hover/item:opacity-0 transition-opacity duration-300">
                  <p className="text-white/50 font-mono text-xs tracking-widest uppercase">{h.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. CONTACT — Black / Bold CTA
      ════════════════════════════════════════════════════ */}
      <section id="contact" className="bg-black py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vw] rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-blue-400 font-bold mb-6">Get in Touch</p>
          <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tight text-white mb-8 leading-none">
            Let&apos;s Build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Something Great.
            </span>
          </h2>
          <p className="text-white/40 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Whether you want to talk scalable systems, hardware, or queue up for a match — I&apos;m always down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="mailto:calvinf@tamu.edu"
              className="inline-flex items-center justify-center gap-3 bg-white text-zinc-900 hover:bg-zinc-100 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest shadow-2xl transition-all">
              <Mail size={18} /> Say Hello
            </Link>
            <Link href="https://linkedin.com/in/calvin-t-fisher/" target="_blank"
              className="inline-flex items-center justify-center gap-3 border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all">
              <Linkedin size={18} /> LinkedIn
            </Link>
            <Link href="https://github.com/CalvinTFisher" target="_blank"
              className="inline-flex items-center justify-center gap-3 border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all">
              <Github size={18} /> GitHub
            </Link>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
          <p className="text-white/20 font-mono text-xs font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Calvin Fisher · Built with Next.js &amp; Framer Motion
          </p>
        </div>
      </section>

    </main>
  );
}
