'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react'

const socials = [
  { Icon: Github, href: 'https://github.com/babul0000' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/babul-hossan-09932837a/' },
  { Icon: Twitter, href: 'https://twitter.com' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#020617] py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER (more compact) */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-xs tracking-[0.3em] uppercase">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Let’s build something <span className="text-emerald-400">great</span>
          </h2>

          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            Have a project or idea? I’m ready to help you build it.
          </p>

          {/* availability */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            🟢 Available for Work
          </div>
        </div>

        {/* MAIN GRID (more tight spacing) */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-widest">Email</p>
              <p className="text-white font-semibold mt-2">
                babulhossan.info@gmail.com
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-5">

            <input
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-emerald-500/40"
            />

            <input
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-emerald-500/40"
            />

            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-emerald-500/40 resize-none"
            />

            <button className="w-full py-3 rounded-xl bg-emerald-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition">
              Send Message <Send size={16} />
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}