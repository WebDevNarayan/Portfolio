import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    color: '#ff6200',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Styling',
    color: '#3b82f6',
    items: ['Tailwind CSS', 'Styled Components', 'Framer Motion'],
  },
  {
    category: '3D & Creative',
    color: '#8b5cf6',
    items: ['Three.js', 'GSAP', 'WebGL', 'R3F'],
  },
  {
    category: 'Tools',
    color: '#10b981',
    items: ['Git', 'Figma', 'Vite', 'Node.js'],
  },
]

const stats = [
  { value: 3,  suffix: '+', label: 'Years Building' },
  { value: 10, suffix: '+', label: 'Projects Shipped' },
  { value: 5,  suffix: '+', label: 'Clients Served' },
]

/* Counter that animates up when in view */
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = () => {
      start += 1
      setCount(start)
      if (start < target) setTimeout(step, 80)
    }
    step()
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const fadeUp = {
  hidden:   { opacity: 0, y: 40 },
  visible:  (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.75, ease: [0.33, 1, 0.68, 1] },
  }),
}

const AboutMe = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 px-6 lg:px-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[500px] h-[500px] rounded-full bg-[#ff6200]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#ff6200] font-mono text-sm">01.</span>
          <span className="text-gray-600 font-mono text-xs tracking-[0.25em] uppercase">About Me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent ml-2" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* ── Left: Story ───────────────────────────────── */}
          <div>
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
              className="text-4xl lg:text-[3.6rem] font-bold leading-[1.05] mb-8"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              Building experiences<br />
              <span className="text-gradient">people remember.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
              className="text-gray-400 leading-[1.9] mb-6 max-w-[480px] text-[15px]"
            >
              Hi, I'm Narayan — a frontend developer from Pokhara, Nepal. My journey began in 2021 as a web designer, obsessed with making interfaces that feel alive. That obsession naturally pulled me deeper into code.
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              className="text-gray-500 leading-[1.9] mb-14 max-w-[480px] text-[15px]"
            >
              Today I bridge the gap between design and engineering — crafting web applications that don't just work, but <em className="text-gray-300 not-italic">feel</em> alive. From React SPAs to immersive Three.js worlds, I push the web's full potential.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
              className="flex gap-10 pt-10 border-t border-white/5"
            >
              {stats.map(({ value, suffix, label }) => (
                <div key={label}>
                  <div className="text-3xl lg:text-4xl font-bold text-[#ff6200] font-mono leading-none mb-1">
                    {inView ? <Counter target={value} suffix={suffix} /> : `0${suffix}`}
                  </div>
                  <div className="text-gray-600 text-[11px] font-mono tracking-[0.18em] uppercase mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Skills grid ────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            {skillGroups.map(({ category, color, items }, ci) => (
              <motion.div
                key={category}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={2 + ci * 0.4}
                className="relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]
                  hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 group overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${color}18, transparent 70%)` }}
                />

                <div
                  className="text-[10px] font-mono tracking-[0.22em] uppercase mb-3.5"
                  style={{ color }}
                >
                  {category}
                </div>

                <div className="flex flex-col gap-2">
                  {items.map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: color, opacity: 0.5 }}
                      />
                      <span className="text-gray-400 text-[13px] group-hover:text-gray-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
