import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { num: '01', label: 'About',      href: '#about' },
  { num: '02', label: 'Experience', href: '#experience' },
  { num: '03', label: 'Work',       href: '#work' },
  { num: '04', label: 'Contact',    href: '#contact' },
]

/* Thread draws in from left on hover, retracts right on leave */
function NavLink({ num, label, href, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
      className="relative inline-flex items-center gap-1 font-mono text-sm pb-[3px]"
      style={{ color: hovered ? '#ffffff' : '#6b7280', transition: 'color 0.25s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[#ff6200] text-[11px]">{num}.</span>
      <span>{label}</span>

      {/* Thread underline */}
      <motion.span
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, #ff6200 0%, #ff620060 70%, transparent 100%)',
          transformOrigin: hovered ? 'left' : 'right',
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.a>
  )
}

/* Mobile link with same thread effect at larger size */
function MobileNavLink({ num, label, href, delay, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, ease: [0.33, 1, 0.68, 1] }}
      onClick={onClick}
      className="relative inline-block pb-1"
      style={{
        fontFamily: 'Montserrat Alternates, sans-serif',
        fontSize: '2.25rem',
        fontWeight: 700,
        color: hovered ? '#ff6200' : '#ffffff',
        transition: 'color 0.25s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="font-mono mr-2"
        style={{ fontSize: '1.1rem', color: '#ff6200' }}
      >
        {num}.
      </span>
      {label}

      <motion.span
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: '1.5px',
          background: 'linear-gradient(90deg, #ff6200 0%, #ff620060 70%, transparent 100%)',
          transformOrigin: hovered ? 'left' : 'right',
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.a>
  )
}

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false)
  const [showMenu,  setShowMenu]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-8 lg:px-20 h-[68px]">

          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold font-sans tracking-tight select-none"
          >
            <span className="text-[#ff6200]">n.</span>
            <span className="text-white">dura</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ num, label, href }, i) => (
              <NavLink
                key={label}
                num={num}
                label={label}
                href={href}
                delay={0.1 * i + 0.45}
              />
            ))}

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              href="https://drive.google.com/file/d/1hljF2QvTSxobCgt9ekmFdrjRuKYil1p_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#ff6200] border border-[#ff6200]/40 px-5 py-2 rounded-lg font-mono
                hover:bg-[#ff6200] hover:text-white hover:border-[#ff6200]
                hover:shadow-[0_0_28px_rgba(255,98,0,0.35)]
                transition-all duration-300"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-500 hover:text-white transition-colors"
            onClick={() => setShowMenu(true)}
            aria-label="Open menu"
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[60] bg-[#080808]/97 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-8 text-gray-500 hover:text-white transition-colors"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="absolute w-64 h-64 rounded-full bg-[#ff6200]/8 blur-[80px] pointer-events-none" />

            <div className="flex flex-col items-center gap-10 relative z-10">
              {navLinks.map(({ num, label, href }, i) => (
                <MobileNavLink
                  key={label}
                  num={num}
                  label={label}
                  href={href}
                  delay={0.07 * i}
                  onClick={() => setShowMenu(false)}
                />
              ))}

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                href="https://drive.google.com/file/d/1hljF2QvTSxobCgt9ekmFdrjRuKYil1p_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowMenu(false)}
                className="mt-4 px-8 py-3 text-sm text-[#ff6200] border border-[#ff6200]/40 rounded-xl font-mono
                  hover:bg-[#ff6200] hover:text-white transition-all duration-300"
              >
                Resume ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
