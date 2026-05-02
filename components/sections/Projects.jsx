'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import tilesImg from '@/app/assets/tiles-gallery.png'
import pixgenImg from '@/app/assets/pixgen.png'
import dragonImg from '@/app/assets/dragon-news.png'
import digitoolsImg from '@/app/assets/digitools.png'
import issueTrackerImg from '@/app/assets/issue-tracker.png'

const projects = [
  {
    title: 'Tiles Galary',
    desc: 'Developed a fully functional tiles gallery application. Implemented responsive design, interactive UI, and smooth navigation to showcase tile products effectively.',
    tags: ['Next.js', 'Tailwind CSS', 'java script', 'mongodb'],
    color: '#10b981',
    emoji: '🖼️',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    image: tilesImg,
    liveLink: 'https://tiles-galary-a-8.vercel.app/',
    repoLink: 'https://github.com/babul0000/tiles-galary-a-8',
  },
  {
    title: 'Pixgen',
    desc: 'An AI-powered creative image generator tool with a modern glassmorphism UI, offering dynamic tools for creative professionals.',
    tags: ['Next.js', 'Tailwind CSS', 'Mongodb'],
    color: '#38bdf8',
    emoji: '🎨',
    gradient: 'from-sky-500/10 to-cyan-500/5',
    image: pixgenImg,
    liveLink: 'https://pixgen-b.vercel.app/',
    repoLink: 'https://github.com/babul0000/pixgen-s-8-2',
  },
  {
    title: 'The Dragon News',
    desc: 'A full-stack dynamic news portal application. Features category-wise news rendering, user authentication, and responsive layout for a smooth reading experience.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    color: '#f59e0b',
    emoji: '📰',
    gradient: 'from-amber-500/10 to-orange-500/5',
    image: dragonImg,
    liveLink: 'https://the-dragan-news-b.vercel.app/category/01',
    repoLink: 'https://github.com/babul0000/The-dragan-news-m-46',
  },
  {
    title: 'DigiTools Platform',
    desc: 'A comprehensive digital tools platform featuring an interactive dashboard, diverse utility applications, and a smooth user experience designed for productivity.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    color: '#8b5cf6',
    emoji: '🛠️',
    gradient: 'from-violet-500/10 to-purple-500/5',
    image: digitoolsImg,
    liveLink: 'https://digitools-platform-assignment-babul.netlify.app/',
    repoLink: 'https://github.com/babul0000/B13-A6-DigiTools-Platform-6',
  },
  {
    title: 'GitHub Issue Tracker',
    desc: 'A dedicated issue tracking interface for GitHub repositories. Streamlines bug reporting, task tracking, and developer workflows efficiently.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    color: '#38bdf8',
    emoji: '🐛',
    gradient: 'from-sky-500/10 to-cyan-500/5',
    image: issueTrackerImg,
    liveLink: 'https://github-issue-tracker-babul.netlify.app/home.html',
    repoLink: 'https://github.com/babul0000/assingment-5--Issues-Tracker',
  },

]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.color}20` }}
      className="glass rounded-3xl border border-white/8 overflow-hidden group transition-all duration-500 flex flex-col"
    >
      {/* Card image area */}
      <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
            />
            {/* Dark overlay for better text readability and styling */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          </>
        ) : (
          <span className="text-7xl opacity-60 group-hover:scale-110 transition-transform duration-500">{project.emoji}</span>
        )}

        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${project.color}20 0%, transparent 70%)` }}
        />

        {/* Corner action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.repoLink && (
            <motion.a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
              title="View Source Code"
            >
              <Github size={13} />
            </motion.a>
          )}
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10"
              title="View Live Site"
            >
              <ExternalLink size={13} />
            </motion.a>
          )}
        </div>

        {/* glowing border on hover */}
        <div
          className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
          <ArrowUpRight
            size={16}
            className="text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5"
          />
        </div>

        <p className="text-slate-400 text-xs leading-relaxed flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
              style={{
                color: project.color,
                borderColor: `${project.color}25`,
                background: `${project.color}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Real-world applications built with production-grade code and modern tooling.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-emerald-500/30 transition-all"
          >
            <Github size={16} />
            View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
