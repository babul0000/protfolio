'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    title: 'Full Stack Web Development',
    org: 'Programming Hero',
    period: '2025 — present',
    desc: 'Learned MERN stack including React, Node.js, Express, MongoDB, authentication, and deployment. Built multiple real-world projects.',
    tags: ['MERN', 'Firebase', 'REST API'],
  },
  {
    title: 'HSC (commerce)',
    org: 'Satkhira Govt College',
    period: '2022',
    desc: 'Completed higher secondary education in commerce with strong foundation in economics and business.',
    tags: ['Commerce', 'Math', 'Business'],
  },
  {
    title: 'SSC (commerce)',
    org: 'Kadakati Arar High School',
    period: '2019',
    desc: 'Completed secondary education in commerce.',
    tags: ['commerce', 'Math', 'Business'],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding pt-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">
            Learning Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-6 md:p-8 border border-white/8 relative overflow-hidden group hover:border-rose-500/30 transition-colors duration-500"
            >
              {/* background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>
                    <p className="text-rose-400 text-sm font-mono mt-1">{item.org}</p>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-mono whitespace-nowrap h-fit">
                  {item.period}
                </span>
              </div>
              
              <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6 relative z-10">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full glass border border-white/10 text-slate-300 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
