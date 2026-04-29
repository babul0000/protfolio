'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experience = [
  {
    title: 'Junior Full Stack Developer',
    org: 'TechNova Solutions',
    period: '2024 — Present',
    desc: 'Building React-based dashboards, REST APIs with Node.js/Express, and MongoDB databases for SaaS clients. Implemented CI/CD pipelines and improved page load by 40%.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Freelance Web Developer',
    org: 'Self-Employed',
    period: '2023 — 2024',
    desc: 'Designed and deployed 8+ websites for local businesses using Next.js and Tailwind CSS. Handled full project lifecycle from wireframing to deployment on Vercel.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Sample Technician → Web Developer',
    org: 'ACI Pharmaceuticals Ltd.',
    period: '2021 — 2023',
    desc: 'Served as Sample Technician while self-teaching web development. Built internal lab tracking tool using HTML/CSS/JS that reduced data entry errors by 25%.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

const education = [
  {
    title: 'Full Stack Web Development',
    org: 'Programming Hero Bootcamp',
    period: '2022 — 2023',
    desc: 'Intensive bootcamp covering MERN stack, REST APIs, authentication, and deployment. Completed 15+ projects and collaborative team assignments.',
    tags: ['MERN', 'JWT', 'Express'],
  },
  {
    title: 'B.Sc. in Biochemistry',
    org: 'University of Dhaka',
    period: '2017 — 2021',
    desc: 'Major in Biochemistry with laboratory research experience. Developed systematic analytical skills and scientific documentation methodologies.',
    tags: ['Research', 'Analysis', 'Data'],
  },
  {
    title: 'HSC (Science)',
    org: 'Dhaka College',
    period: '2015 — 2017',
    desc: 'Higher Secondary Certificate in Science track. Strong foundation in mathematics and physics.',
    tags: ['Math', 'Physics', 'Science'],
  },
]

function TimelineCard({ item, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8"
    >
      {/* timeline dot */}
      <div
        className="absolute left-0 top-3 w-3 h-3 rounded-full border-2 shadow-glow-sm z-10"
        style={{ borderColor: color, background: '#090c0f', boxShadow: `0 0 12px ${color}60` }}
      />

      <motion.div
        whileHover={{ borderColor: `${color}40`, boxShadow: `0 4px 30px ${color}15` }}
        className="glass rounded-2xl p-5 border border-white/8 transition-all duration-300"
      >
        <div className="flex flex-wrap gap-2 justify-between items-start mb-2">
          <div>
            <h4 className="text-white font-bold text-sm">{item.title}</h4>
            <p className="text-slate-400 text-xs mt-0.5 font-medium">{item.org}</p>
          </div>
          <span
            className="text-[10px] font-mono px-2 py-1 rounded-full border"
            style={{ color, borderColor: `${color}30`, background: `${color}10` }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-3">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full glass border border-white/10 text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Qualification() {
  return (
    <section id="qualification" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Timeline</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Briefcase size={16} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-lg">Experience</h3>
            </div>

            {/* timeline line */}
            <div className="relative flex flex-col gap-6">
              <div className="absolute left-1.5 top-4 bottom-4 w-px timeline-line opacity-30" />
              {experience.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} color="#10b981" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <GraduationCap size={16} className="text-rose-400" />
              </div>
              <h3 className="text-white font-bold text-lg">Education</h3>
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="absolute left-1.5 top-4 bottom-4 w-px bg-gradient-to-b from-rose-500 to-transparent opacity-30" />
              {education.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} color="#f43f5e" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
