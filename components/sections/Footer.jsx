'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin, Send } from 'lucide-react'

const socials = [
  { Icon: Github, href: 'https://github.com/babul0000', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/babul-hossan-09932837a/', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function ContactSection() {
  return (
    // py-5 থেকে বাড়িয়ে py-24 করা হয়েছে এবং id="contact" নিশ্চিত করা হয়েছে
    <section id="contact" className="bg-[#020617] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* বাম দিক: টাইপোগ্রাফি ও সিম্পল টেক্সট */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-6xl md:text-7xl font-[1000] text-white leading-[0.9] tracking-tighter">
                Let&apos;s <br />
                <span className="text-emerald-500">Connect.</span>
              </h2>
              <p className="mt-8 text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
                Ready to bring your ideas to life. Let&apos;s build something great together.
              </p>
            </div>

            {/* কন্টাক্ট ইনফো কার্ড */}
            <div className="space-y-4">
              <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-bold text-base">babulhossan.info@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold text-base">Banani, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ডান দিক: মডার্ন গ্লাস ফর্ম */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-white/[0.01] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-8"> {/* ফর্ম ট্যাগ যোগ করা ভালো */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <input type="text" placeholder="MD Babul Hossan" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-700" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] ml-1">Email Address</label>
                  <input type="email" placeholder="example@mail.com" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-700" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] ml-1">Your Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-emerald-500/50 transition-all resize-none placeholder:text-slate-700" />
              </div>

              <button type="submit" className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-[#020617] font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] uppercase tracking-widest text-sm">
                Send Message
                <Send size={18} strokeWidth={3} />
              </button>

              {/* সোশ্যাল লিঙ্কসমূহ */}
              <div className="flex justify-center gap-5 pt-8 border-t border-white/5">
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </form>
          </motion.div>
        </div>

        {/* ফুটার কপিরাইট */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em]">© 2026 MD Babul Hossan</p>
          <div className="flex gap-8 text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em]">
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </section>
  )
}