'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown, Code2, Zap, Globe } from 'lucide-react'

const floatingBadges = [
  { icon: Code2, label: 'Clean Code', position: 'top-8 -left-4', delay: 0 },
  { icon: Zap, label: 'Fast & Scalable', position: 'bottom-16 -left-8', delay: 0.5 },
  { icon: Globe, label: 'Full Stack', position: 'top-1/2 -right-6', delay: 1 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const orbitRef = useRef(null)

  useEffect(() => {
    const el = orbitRef.current
    if (!el) return
    let frame
    let angle = 0
    const animate = () => {
      angle += 0.003
      el.style.transform = `rotate(${angle}rad)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 section-padding">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Tag */}
          <motion.div variants={childVariants} className="inline-flex w-fit">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold glass border border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              Available for Work — 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={childVariants} className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight text-white">
            Building{' '}
            <span className="relative">
              <span className="gradient-text">Smart</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path d="M0 2 Q25 0 50 2 Q75 4 100 2" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
            </span>
            {' '}&{' '}
            <span className="gradient-text">Scalable</span>
            <br />
            Web Solutions
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={childVariants} className="text-slate-400 text-lg leading-relaxed max-w-lg font-medium">
            Former lab technician turned full-stack developer. I craft{' '}
            <span className="text-white">performance-first</span> digital experiences
            with clean architecture, accessible interfaces, and meticulous attention to detail.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={childVariants} className="flex gap-6">
            {[
              { value: '15+', label: 'Projects Built' },
              { value: '2+', label: 'Years Coding' },
              { value: '100%', label: 'Dedicated' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-black gradient-text">{s.value}</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={childVariants} className="flex flex-wrap gap-4 mt-2">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(244,63,94,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-glow-coral transition-all"
            >
              View Portfolio →
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/resume.pdf"
              className="px-7 py-3.5 rounded-2xl font-bold text-sm glass border border-white/10 text-white hover:border-emerald-500/40 transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social */}
          <motion.div variants={childVariants} className="flex items-center gap-4 pt-2">
            <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Find me on</span>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(16,185,129,0.4)' }}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow backdrop */}
          <div className="absolute inset-0 bg-glow-emerald rounded-full blur-3xl opacity-60" />

          {/* Orbit ring */}
          <div ref={orbitRef} className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-full border border-dashed border-emerald-500/20">
            {/* Orbit dot */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-glow-sm" />
          </div>

          {/* Second orbit ring */}
          <div
            className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-emerald-500/10"
            style={{ animation: 'spin 15s linear infinite reverse' }}
          />

          {/* Profile card */}
          <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden glass-strong border border-emerald-500/20 shadow-glow">
            {/* Placeholder avatar */}
            <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-950 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 mx-auto flex items-center justify-center text-[#090c0f] text-4xl font-black shadow-glow">
                  BH
                </div>
                <p className="text-white font-bold mt-4 text-lg">Babul Hossan</p>
                <p className="text-emerald-400 text-xs mt-1 font-mono">Front-End Developer</p>
              </div>
            </div>

            {/* Corner glow */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
          </div>

          {/* Floating badges */}
          {floatingBadges.map(({ icon: Icon, label, position, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + delay, duration: 0.5, type: 'spring' }}
              className={`absolute ${position} glass border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shadow-card z-20 whitespace-nowrap`}
              style={{ animation: `float ${4 + delay}s ease-in-out infinite` }}
            >
              <Icon size={13} className="text-emerald-400" />
              <span className="text-xs font-semibold text-white">{label}</span>
            </motion.div>
          ))}

          {/* Tech stack floating pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
          >
            {['React', 'Next.js', 'Node.js'].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-[10px] font-bold glass border border-emerald-500/20 text-emerald-300">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} className="text-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
