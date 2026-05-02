'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend",
    icon: "💻",
    gradient: "from-blue-400 to-cyan-400",
    bg: "bg-blue-500/5",
    border: "border-blue-500/20",
    skills: [
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Next.js", level: 70, icon: "▲" },
      { name: "Tailwind", level: 90, icon: "🎨" },

    ]
  },
  {
    title: "Backend",
    icon: "⚙️",
    gradient: "from-emerald-400 to-teal-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    skills: [
      { name: "Node.js", level: 68, icon: "🟢" },
      { name: "REST APIs", level: 70, icon: "🔗" },
    ]
  },
  {
    title: "Database & Tools",
    icon: "🗄️",
    gradient: "from-purple-400 to-pink-400",
    bg: "bg-purple-500/5",
    border: "border-purple-500/20",
    skills: [
      { name: "MongoDB", level: 55, icon: "🍃" },
      { name: "Git", level: 85, icon: "📦" },
      { name: "Figma", level: 75, icon: "🎯" },
    ]
  }
]

export default function Skills() {
  const sectionRef = useRef(null)

  return (
    <section id="skills" ref={sectionRef} className="section-padding pt-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className={`glass rounded-3xl p-6 border ${category.border} ${category.bg} flex flex-col gap-4`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-xl p-2 bg-white/5 rounded-xl border border-white/10 shadow-inner flex items-center justify-center">
                  {category.icon}
                </span>
                <h3 className={`text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} font-bold text-lg`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="glass border border-white/5 rounded-xl p-3 flex flex-col gap-2 hover:border-white/10 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{skill.icon}</span>
                        <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{skill.level}%</span>
                    </div>
                    {/* Mini progress bar */}
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
