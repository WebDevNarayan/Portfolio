import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import HeroScene from './HeroScene'

const roles = ['Frontend Developer', 'React Specialist', 'Creative Developer', 'UI Engineer']

const AnimatedWord = ({ text, color, delayOffset = 0 }) => (
  <span className="inline-flex overflow-hidden">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: delayOffset + i * 0.045,
          duration: 0.7,
          ease: [0.33, 1, 0.68, 1],
        }}
        style={{ display: 'inline-block', color }}
      >
        {char}
      </motion.span>
    ))}
  </span>
)

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#080808]">

      {/* Three.js canvas — full bleed */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Gradient masks */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080808] via-[#080808]/88 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#080808]/30 via-transparent to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-[2] h-full flex items-center pointer-events-none">
        <div className="lg:pl-20 pl-8 pr-4 max-w-[580px] w-full pointer-events-auto">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-[11px] font-mono tracking-[0.22em] uppercase">Available for Work</span>
          </motion.div>

          {/* Name — letter-by-letter */}
          <div
            style={{
              fontFamily: 'Montserrat Alternates, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3.4rem, 8.5vw, 8rem)',
              lineHeight: 0.86,
              marginBottom: '1.75rem',
            }}
          >
            <div><AnimatedWord text="DURA" color="#ffffff" delayOffset={0.35} /></div>
            <div><AnimatedWord text="NARAYAN" color="#ff6200" delayOffset={0.58} /></div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.35, duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="w-14 h-[2px] bg-gradient-to-r from-[#ff6200] to-[#ff6200]/20 mb-6 rounded-full"
          />

          {/* Role switcher */}
          <div className="h-6 overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 26, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -26, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
                className="text-gray-400 text-sm font-mono tracking-[0.28em] uppercase"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.65 }}
            className="text-gray-500 text-sm leading-[1.9] mb-10 max-w-[340px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Crafting immersive web experiences from Pokhara, Nepal — where React meets Three.js and design meets code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.55 }}
            className="flex gap-3 flex-wrap"
          >
            <a
              href="#work"
              className="px-8 py-3.5 bg-[#ff6200] text-white text-sm font-semibold rounded-xl
                transition-all duration-300 hover:bg-orange-400 hover:scale-105
                hover:shadow-[0_0_50px_rgba(255,98,0,0.6)]"
            >
              View Work →
            </a>
            <a
              href="https://drive.google.com/file/d/1hljF2QvTSxobCgt9ekmFdrjRuKYil1p_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 border border-white/10 text-gray-400 text-sm font-semibold rounded-xl
                transition-all duration-300 hover:border-[#ff6200]/40 hover:text-[#ff6200] hover:bg-[#ff6200]/5"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="flex gap-8 mt-12"
          >
            {[
              { label: 'GitHub',    href: 'https://github.com/WebDevNarayan' },
              { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/narayan-dura-b04a8a212/' },
              { label: 'Instagram', href: 'https://www.instagram.com/narayan_dura01/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 text-xs font-mono tracking-wider hover:text-[#ff6200] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-0 right-0 z-[3] flex items-end justify-between px-8 lg:px-20 pointer-events-none"
      >
        <span className="text-gray-700 text-[11px] font-mono">
          <span className="text-[#ff6200]">©</span> 2025 · n.dura
        </span>

        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-700 text-[9px] tracking-[0.5em] font-mono">SCROLL</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-14 bg-gradient-to-b from-[#ff6200] to-transparent"
          />
        </div>

        <span className="text-gray-700 text-[11px] font-mono">
          naryandura5<span className="text-[#ff6200]">@gmail</span>
        </span>
      </motion.div>
    </section>
  )
}

export default HeroSection
