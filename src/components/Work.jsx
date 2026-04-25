import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* react-icons feather set */
const IconLink = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const IconGitHub = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482
    0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462
    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832
    .091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
    -.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.58 9.58
    0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699
    1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
    0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12
    c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const projects = [
  {
    num:         '01',
    title:       'QR Menu',
    subtitle:    'Digital Restaurant Experience',
    description: "A production-grade digital menu system — customers scan a QR code to browse the full menu, view dish details, and experience a restaurant's brand digitally. Built for real restaurant deployments.",
    tech:        ['Next.js', 'Zustand', 'Tailwind CSS', 'Node.js'],
    image:       './images/QR-menu.png',
    live:        'https://revel.qrmenu.revelerp.com/13',
    github:      null,
  },
  {
    num:         '02',
    title:       'Duk@an',
    subtitle:    'Full-Stack E-Commerce Platform',
    description: 'A complete e-commerce web application with product catalog, cart management, and user authentication. Designed for real-world scale with a responsive, conversion-optimized interface.',
    tech:        ['React', 'JavaScript', 'Styled Components', 'REST API'],
    image:       './images/dukaan.png',
    live:        null,
    github:      'https://github.com/WebDevNarayan/dukaan',
  },
  {
    num:         '03',
    title:       'Nep Tech Pal',
    subtitle:    'Corporate Web Presence',
    description: 'Professional website for a technology company. Features smooth scroll transitions, animated service showcases, team sections, and a contact flow — all optimised for performance and SEO.',
    tech:        ['React', 'Styled Components', 'JavaScript'],
    image:       './images/NepTechPal.png',
    live:        'https://www.neptechpal.com.np/',
    github:      null,
  },
]

/* ── Individual project card ──────────────────────────── */
const ProjectCard = ({ project, i, inView }) => {
  const [imgHovered, setImgHovered] = useState(false)
  const isEven = i % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 64 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.82, delay: i * 0.14, ease: [0.33, 1, 0.68, 1] }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-2xl aspect-video group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        {/* Outer border glow on hover */}
        <div className="absolute -inset-px rounded-2xl transition-all duration-500"
          style={{
            background: imgHovered
              ? 'linear-gradient(135deg, rgba(255,98,0,0.4), rgba(59,130,246,0.2))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.06), transparent)',
          }}
        />

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] relative z-0"
        />

        {/* Dark overlay with links */}
        <AnimatePresence>
          {imgHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-[#080808]/82 backdrop-blur-[2px] flex items-center justify-center gap-5 z-10"
            >
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl border border-[#ff6200] text-[#ff6200] text-xs font-mono
                    hover:bg-[#ff6200] hover:text-black hover:shadow-[0_0_40px_rgba(255,98,0,0.5)] transition-all duration-300"
                >
                  <IconLink size={13} /> Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl border border-white/20 text-white text-xs font-mono
                    hover:bg-white hover:text-black transition-all duration-300"
                >
                  <IconGitHub size={13} /> Source
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} lg:px-4`}>
        {/* Big faded number */}
        <div
          className="text-[7rem] lg:text-[9rem] font-bold font-mono leading-none select-none -ml-1 mb-0"
          style={{ color: 'rgba(255,255,255,0.04)' }}
        >
          {project.num}
        </div>

        <div className="text-[#ff6200] font-mono text-[11px] tracking-[0.22em] uppercase -mt-4 mb-3">
          {project.subtitle}
        </div>

        <h3
          className="text-3xl lg:text-4xl font-bold mb-5 text-white leading-tight"
          style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
        >
          {project.title}
        </h3>

        <p className="text-gray-500 text-[14px] leading-[1.85] mb-7 max-w-md">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full text-[11px] font-mono text-[#ff6200]/80 border border-[#ff6200]/18 bg-[#ff6200]/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link row */}
        <div className="flex gap-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#ff6200] transition-all duration-300 font-mono group"
            >
              <IconLink size={14} />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                View Live
              </span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-all duration-300 font-mono group"
            >
              <IconGitHub size={14} />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                Source Code
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ── Section root ─────────────────────────────────────── */
const Work = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="work" ref={ref} className="relative py-32 lg:py-40 px-6 lg:px-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#ff6200]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#ff6200] font-mono text-sm">03.</span>
          <span className="text-gray-600 font-mono text-xs tracking-[0.25em] uppercase">Selected Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent ml-2" />
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col gap-28 lg:gap-36">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-gray-600 font-mono text-xs tracking-[0.2em] mb-5 uppercase">More on GitHub</p>
          <a
            href="https://github.com/WebDevNarayan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/8 rounded-xl text-gray-400 text-sm font-mono
              hover:border-[#ff6200]/30 hover:text-[#ff6200] hover:bg-[#ff6200]/4 transition-all duration-400"
          >
            <IconGitHub size={15} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
