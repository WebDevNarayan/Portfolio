import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  { label: 'GitHub',    href: 'https://github.com/WebDevNarayan' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/narayan-dura-b04a8a212/' },
  { label: 'Instagram', href: 'https://www.instagram.com/narayan_dura01/' },
]

const Contact = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  /* Magnetic button effect */
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top  + rect.height / 2
    setMagnetic({
      x: (e.clientX - cx) * 0.28,
      y: (e.clientY - cy) * 0.28,
    })
  }
  const resetMagnetic = () => setMagnetic({ x: 0, y: 0 })

  return (
    <section id="contact" ref={ref} className="relative py-32 lg:py-44 px-6 lg:px-20 overflow-hidden">

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-[#ff6200]/6 blur-[140px]" />
      </div>

      {/* Decorative horizontal rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-2xl mx-auto text-center relative z-10">

        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.07] bg-white/[0.02] mb-10"
        >
          <span className="text-[#ff6200] font-mono text-xs">04.</span>
          <span className="text-gray-600 font-mono text-xs tracking-[0.22em] uppercase">What's Next</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.78, delay: 0.08 }}
          className="text-5xl lg:text-[5.5rem] font-bold leading-[1.0] mb-8 tracking-tight"
          style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
        >
          Let's Build<br />
          <span className="text-gradient">Something.</span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="text-gray-500 text-[15px] leading-[1.9] mb-12 max-w-md mx-auto"
        >
          Currently open to new opportunities — freelance, full-time, or just a great conversation. My inbox is always open.
        </motion.p>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 font-mono text-xs tracking-[0.22em] uppercase">Available for Work</span>
        </motion.div>

        {/* Magnetic CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="block mb-16"
        >
          <motion.a
            href="mailto:narayandura5@gmail.com"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMagnetic}
            animate={{ x: magnetic.x, y: magnetic.y }}
            transition={{ type: 'spring', damping: 14, stiffness: 200 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#ff6200] text-white text-sm font-semibold rounded-2xl
              hover:bg-orange-400 hover:shadow-[0_0_80px_rgba(255,98,0,0.6)] hover:scale-[1.04]
              transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700
              bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
            <span className="relative z-10">Get In Touch</span>
            <span className="relative z-10 text-xl">→</span>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="flex items-center justify-center gap-10"
        >
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 font-mono text-xs tracking-[0.18em] uppercase
                hover:text-[#ff6200] hover:tracking-[0.28em] transition-all duration-400"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
