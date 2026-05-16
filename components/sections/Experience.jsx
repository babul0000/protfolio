'use client'

import { motion } from 'framer-motion'
import { Briefcase, Github, ExternalLink } from 'lucide-react'

const experience = [

  {
    title: 'Mern Stack Developer (Programming Hero Level 1 + Self Learning)',
    org: 'Programming Hero & Personal Projects',
    period: '2025 — Present',
    desc: 'Currently learning full stack web development through Programming Hero Level 1 course while building real-world projects. Working with frontend and backend technologies including React, Next.js, Node.js, Express.js, and MongoDB. Focused on UI/UX, API development, authentication, and performance optimization.',
    tags: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Sample Technician',
    org: 'Buying House (Garments Industry)',
    period: '2018 — Present',
    desc: '8 years of experience in the garments industry, including 5 years in production units and 3 years in a buying house. Currently handling sample development, quality control, and coordination between buyers and production teams. Strong focus on meeting buyer requirements, ensuring product quality, and maintaining smooth workflow communication.',
    tags: ['Communication', 'Buyer Requirement Analysis', 'Problem Solving', 'Attention to Detail', 'Workflow Management', 'Understanding Requirements'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-7">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-6 md:p-8 border border-white/8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500"
            >
              {/* background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>
                    <p className="text-emerald-400 text-sm font-mono mt-1">{item.org}</p>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono whitespace-nowrap h-fit">
                  {item.period}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6 relative z-10">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full glass border border-white/10 text-slate-300 text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links if available */}
              {(item.liveLink || item.repoLink) && (
                <div className="flex items-center gap-4 mt-5 relative z-10 pt-4 border-t border-white/5">
                  {item.liveLink && (
                    <a href={item.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {item.repoLink && (
                    <a href={item.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
