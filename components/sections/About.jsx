'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import myImg from '@/app/assets/my.png'



export default function About() {
  const sectionRef = useRef(null)

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            About me
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            My Story & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/8 flex flex-col gap-6"
          >

            {/* PROFILE */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-emerald-500/30">
                <Image
                  src={myImg}
                  alt="Babul Hossan"
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <h3 className="text-white font-bold text-xl">Babul Hossan</h3>
                <p className="text-emerald-400 text-sm font-mono mt-1">
                  Frontend Developer → Future Full Stack
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                I started my career as a{" "}
                <span className="text-white font-semibold">
                  Sample Technician
                </span>{" "}
                in the garments industry with 8+ years of experience.
              </p>

              <p>
                Now I build modern web applications using{" "}
                <span className="text-white font-semibold">
                  React, Next.js, and Node.js
                </span>
                . My goal is to become a Full Stack Developer and work globally.
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5">
              {[
                { label: 'Location', value: 'Dhaka, BD' },
                { label: 'Experience', value: '8+ Years' },
                { label: 'Focus', value: 'Frontend Dev' },
                { label: 'Status', value: 'Open to Work' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1"
                >
                  <p className="text-[10px] text-slate-500 uppercase font-mono">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}