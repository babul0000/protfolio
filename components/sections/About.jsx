'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'React', level: 90, color: '#61dafb' },
  { name: 'Next.js', level: 85, color: '#10b981' },
  { name: 'TypeScript', level: 80, color: '#3178c6' },
  { name: 'Node.js', level: 78, color: '#68a063' },
  { name: 'MongoDB', level: 75, color: '#4db33d' },
  { name: 'Tailwind CSS', level: 92, color: '#38bdf8' },
]

const techStack = [
  { label: 'React', emoji: '⚛️' },
  { label: 'Next.js', emoji: '▲' },
  { label: 'TypeScript', emoji: '📘' },
  { label: 'Node.js', emoji: '🟢' },
  { label: 'MongoDB', emoji: '🍃' },
  { label: 'Tailwind', emoji: '🎨' },
  { label: 'PostgreSQL', emoji: '🐘' },
  { label: 'Docker', emoji: '🐳' },
  { label: 'Git', emoji: '📦' },
  { label: 'Figma', emoji: '🎯' },
  { label: 'REST APIs', emoji: '🔗' },
  { label: 'GraphQL', emoji: '◈' },
]

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-white">{name}</span>
        <span className="text-xs font-mono text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">About me</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            My Story &{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* About card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-8 border border-white/8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                👤
              </div>
              <div>
                <h3 className="text-white font-bold">Babul Hossan</h3>
                <p className="text-emerald-400 text-xs font-mono">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              I started my career as a <span className="text-white font-semibold">Sample Technician</span> in a pharmaceutical lab — mastering precision, documentation, and systematic problem-solving. In 2022, I discovered my passion for building things on the web.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              That same analytical mindset I used in the lab now drives my approach to software: <span className="text-white font-semibold">structured thinking, clean code, and obsessive attention to detail</span>. I specialize in React, Next.js, and Node.js — building interfaces that are as reliable as they are beautiful.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Location', value: 'Dhaka, Bangladesh' },
                { label: 'Experience', value: '2+ Years Dev' },
                { label: 'Education', value: 'B.Sc. Biochemistry' },
                { label: 'Status', value: 'Open to Work ✅' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-3 border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">{item.label}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Skill bars */}
            <div ref={ref} className="glass rounded-3xl p-8 border border-white/8 flex flex-col gap-5">
              <h3 className="text-white font-bold text-lg">Proficiency</h3>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>

            {/* Tech grid */}
            <div className="glass rounded-3xl p-6 border border-white/8">
              <h3 className="text-white font-bold text-sm mb-4">Full Stack</h3>
              <div className="grid grid-cols-4 gap-2">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.08, borderColor: 'rgba(16,185,129,0.4)' }}
                    className="glass border border-white/8 rounded-xl p-2.5 flex flex-col items-center gap-1 cursor-default transition-all"
                  >
                    <span className="text-lg">{tech.emoji}</span>
                    <span className="text-[9px] text-slate-400 font-semibold text-center leading-tight">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
