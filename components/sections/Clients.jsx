'use client'

import { motion } from 'framer-motion'

// আপনার বর্তমান Tech Stack যা আপনি ব্যবহার করছেন
const techStack = [
  'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind',
  'JavaScript', 'MERN Stack', 'Express', 'HeroUI',
]

function TechLogo({ name }) {
  return (
    <div className="flex items-center justify-center px-10 py-4 opacity-40 hover:opacity-100 hover:text-emerald-400 transition-all duration-300 cursor-default">
      <span className="text-white font-black text-xl tracking-tighter whitespace-nowrap uppercase italic">
        {name}
      </span>
    </div>
  )
}

export default function TechMarquee() {
  return (
    // ব্যাকগ্রাউন্ড আপনার Hero সেকশনের সাথে মিল রেখে #020617 করা হয়েছে
    <section className="py-14 bg-[#020617] border-y border-white/5 overflow-hidden relative">

      {/* গ্লাস ইফেক্ট এডজ */}
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="mb-6 text-center">
        <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.4em]">
          Current Tech Ecosystem
        </span>
      </div>

      {/* স্লাইডিং অ্যানিমেশন */}
      <div className="flex select-none">
        <div className="flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <TechLogo key={`${tech}-${i}`} name={tech} />
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {[...techStack, ...techStack].map((tech, i) => (
            <TechLogo key={`clone-${tech}-${i}`} name={tech} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}