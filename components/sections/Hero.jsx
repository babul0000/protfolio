'use client'
import myImg from '../../app/assets/my.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react'

export default function Hero() {
  // সিভি ডাউনলোডের কনফার্মেশন ও ডাউনলোড ফাংশন
  const handleDownloadCV = () => {
    const isConfirmed = window.confirm("Do you want to download Babul Hossan's CV?");
    if (isConfirmed) {
      const cvUrl = '/babul-hossan-cv.pdf'; // public/ ফোল্ডারে তোমার সিভির ফাইলটি এই নামে রাখবে
      const link = document.createElement('a');
      link.href = cvUrl;
      link.setAttribute('download', 'Babul_Hossan_CV.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#020617] font-sans antialiased text-white">

      {/* Background Elements (Premium Ambient Light & Subtle Grid) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        {/* Subtle Dots Grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="space-y-4">
            {/* Active Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-emerald-400/90">Available for Projects</span>
            </motion.div>

            {/* Premium & Clean Headline (No Over-bold/Stretched Fonts) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white leading-[1.2]">
              Building <span className="text-emerald-400 font-semibold">Smart</span> <br />
              <span className="flex items-center gap-3 my-1">
                <span className="h-[1px] w-8 md:w-12 bg-emerald-500/20 hidden sm:block" />
                & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-semibold">Scalable</span>
              </span>
              Web Solutions
            </h1>

            {/* Premium Subtext/Description */}
            <p className="text-slate-400 text-sm md:text-base max-w-md font-normal leading-relaxed tracking-normal opacity-90">
              I build modern web applications that solve real-world problems, work fast, and are easy to use.
              <span className="text-emerald-400/90 font-medium">Focused on performance and user-friendly experience</span>.
            </p>
          </div>

          {/* Action Buttons Selections */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Main Button: Get Resume (Primary CTA) */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium rounded-xl shadow-lg shadow-emerald-500/10 transition-all text-sm flex items-center gap-2 tracking-wide"
            >
              Get Resume <Download size={16} />
            </motion.button>

            {/* Secondary Button: View Portfolio */}
            {/* <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-slate-900 border border-white/10 hover:border-emerald-500/30 hover:bg-slate-800 text-white font-medium rounded-xl transition-all text-sm flex items-center gap-2 tracking-wide"
            >
              View Portfolio <ArrowDown size={16} className="text-emerald-400" />
            </motion.a> */}

            {/* Clean Professional Links (Mail Removed) */}
            <motion.div className="flex gap-2.5">
              {[
                { Icon: Github, url: 'https://github.com/your-username' }, // তোমার গিটহাব ইউআরএল এখানে বসাবে
                { Icon: Linkedin, url: 'https://linkedin.com/in/your-username' } // তোমার লিংকডইন ইউআরএল এখানে বসাবে
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, backgroundColor: 'rgba(16,185,129,0.1)', color: '#10b981' }}
                  className="w-11 h-11 rounded-xl border border-white/5 flex items-center justify-center bg-white/5 transition-all text-slate-400"
                >
                  <item.Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Tech Ecosystem Footer Layout */}
          {/* <div className="pt-8 border-t border-white/5 max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold mb-4">Tech Ecosystem</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 opacity-50 grayscale contrast-125">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'MONGODB'].map(logo => (
                <span key={logo} className="text-xs font-semibold tracking-widest text-white hover:opacity-100 transition-opacity cursor-default">{logo}</span>
              ))}
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT SIDE: Visual Profile (Premium Profile Layout) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/5] max-w-[450px] mx-auto group">
            {/* Decorative Card Shadow Pattern */}
            <div className="absolute top-10 -left-10 w-full h-full bg-emerald-600/20 rounded-[3rem] rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700" />

            {/* Profile Frame Content */}
            <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <Image
                src={myImg}
                alt="Babul Hossan"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Bottom Transparent Overlay Title */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-medium tracking-wide">Babul Hossan</h3>
                    <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mt-1">Mern-Stack Web Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badge Card (Inter/Poppins System Standard) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-20 z-20 px-5 py-3 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium text-sm">JS</div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Main Stack</p>
                  <p className="text-xs font-medium text-white leading-none mt-0.5">Modern Web</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}