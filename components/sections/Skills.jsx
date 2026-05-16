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
      { name: "JavaScript", icon: "🟨" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
    ]
  },
  {
    title: "Backend",
    icon: "⚙️",
    gradient: "from-emerald-400 to-teal-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST APIs", icon: "🔗" },
    ]
  },
  {
    title: "Database",
    icon: "🗄️",
    gradient: "from-purple-400 to-pink-400",
    bg: "bg-purple-500/5",
    border: "border-purple-500/20",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Mongoose", icon: "🐍" },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    gradient: "from-orange-400 to-red-400",
    bg: "bg-orange-500/5",
    border: "border-orange-500/20",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Netlify", icon: "🌐" },
      { name: "Figma", icon: "🎯" },
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
        <div className="grid lg:grid-cols-2 gap-6">
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
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="glass border border-white/5 rounded-xl p-3 flex items-center gap-2 hover:border-white/10 transition-colors"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-xs font-semibold text-slate-200">
                      {skill.name}
                    </span>
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