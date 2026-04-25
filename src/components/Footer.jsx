const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#work' },
  { label: 'Contact',    href: '#contact' },
]

const Footer = () => (
  <footer className="relative border-t border-white/[0.05] py-10 px-6 lg:px-20">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

      {/* Logo */}
      <a href="#" className="text-base font-bold tracking-tight">
        <span className="text-[#ff6200]">n.</span>
        <span className="text-white/60">dura</span>
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-7">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-gray-700 font-mono text-xs tracking-wider hover:text-[#ff6200] transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-gray-700 font-mono text-[11px]">
        Designed & built by{' '}
        <span className="text-[#ff6200]">Narayan Dura</span>
        {' '}· {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer
