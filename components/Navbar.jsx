'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // 🔥 scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollPos = window.scrollY + 120

      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1))
        if (!section) return

        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(link.href.substring(1))
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🔥 smooth scroll
  const handleNav = (href) => {
    setMenuOpen(false)

    const el = document.getElementById(href.substring(1))
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNav('#home')
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 font-bold text-white"
            >
              <span className="w-8 h-8 bg-emerald-500 text-black rounded-lg flex items-center justify-center font-bold">
                BH
              </span>
              <span>
                Babul<span className="text-emerald-400">.</span>
              </span>
            </motion.a>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-white/10">

              {navLinks.map(link => {
                const isActive = active === link.href.substring(1)

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link.href)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* THEME TOGGLE */}
              <ThemeToggle />

              {/* CTA */}
              <button
                onClick={() => handleNav('#contact')}
                className="hidden md:flex px-5 py-2 rounded-full bg-emerald-500 text-black font-semibold hover:scale-105 transition"
              >
                Hire Me
              </button>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white"
              >
                {menuOpen ? <X /> : <Menu />}
              </button>

            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-3xl text-gray-300 hover:text-emerald-400 font-bold"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNav('#contact')}
              className="mt-6 px-10 py-3 rounded-full bg-emerald-500 text-black font-bold"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}