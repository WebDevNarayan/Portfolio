import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    year: "2023",
    duration: "Present",
    company: "Asarfi",
    role: "Frontend Developer",
    description:
      "Building fintech-grade dashboards and internal tools for financial infrastructure. Led UI development for in-house projects like Bank Settlements, PaymentsLake, and Simulator platforms. Also served as Angular developer on a foreign client engagement and contributed to Creqingo, HR/Payroll management product.",
    projects: [
      "Bank Settlements Dashboard",
      "PaymentsLake Dashboard",
      "Simulator UI",
      "Creqingo (HR)",
    ],
    tech: [
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
  },
  {
    year: "2022",
    duration: "3 Months",
    company: "Nep Tech Pal Ltd.",
    role: "Frontend Developer",
    description:
      "Collaborated in a cross-functional team (designer, frontend, backend) to deliver production-ready web applications on deadline. Took full ownership of UI components and responsive design.",
    projects: ["Nep Tech Pal", "Loksewa Platform"],
    tech: ["React", "JavaScript", "Styled Components", "Figma"],
  },
  {
    year: "2022",
    duration: "3 Months",
    company: "Rangin Technology",
    role: "Frontend Intern",
    description:
      "My first professional engineering role. Shipped real features on a production e-commerce platform, learning JavaScript, React, and the discipline of writing code that others depend on.",
    projects: ["Duk@an E-Commerce"],
    tech: ["React", "Styled Components", "JavaScript"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 lg:py-40 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#ff6200] font-mono text-sm">02.</span>
          <span className="text-gray-600 font-mono text-xs tracking-[0.25em] uppercase">
            Where I've Worked
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent ml-2" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[88px] top-4 bottom-4 w-px bg-gradient-to-b from-[#ff6200]/60 via-white/8 to-transparent hidden lg:block"
          />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.72,
                  delay: 0.3 + i * 0.16,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="lg:flex gap-12 items-start"
              >
                {/* Year column */}
                <div className="hidden lg:flex flex-col items-end gap-1.5 w-[88px] shrink-0 pt-1.5">
                  <span className="text-gray-600 font-mono text-[11px] tracking-wider">
                    {exp.year}
                  </span>
                  {/* Timeline node */}
                  <div className="relative translate-x-[7px] mt-1">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#ff6200] bg-[#080808]" />
                    <div className="absolute inset-0 rounded-full bg-[#ff6200]/20 scale-[2.2] animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                  <span className="text-gray-700 font-mono text-[10px] text-right mt-1">
                    {exp.duration}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015]
                  hover:border-[#ff6200]/18 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6200]/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Mobile: year badge */}
                  <div className="lg:hidden flex items-center gap-2 mb-4">
                    <span className="text-[#ff6200] font-mono text-[10px]">
                      {exp.year}
                    </span>
                    <span className="text-gray-700 font-mono text-[10px]">
                      ·
                    </span>
                    <span className="text-gray-600 font-mono text-[10px]">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="mb-5">
                    <div className="text-[#ff6200] font-mono text-[11px] tracking-[0.18em] uppercase mb-1.5">
                      {exp.role}
                    </div>
                    <h3
                      className="text-xl font-bold text-white group-hover:text-[#ff6200] transition-colors duration-400"
                      style={{
                        fontFamily: "Montserrat Alternates, sans-serif",
                      }}
                    >
                      {exp.company}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-[1.85] mb-5 max-w-xl">
                    {exp.description}
                  </p>

                  {exp.projects.length > 0 && (
                    <div className="flex items-center gap-2 mb-5 flex-wrap">
                      <span className="text-gray-700 text-[11px] font-mono">
                        Projects:
                      </span>
                      {exp.projects.map((p) => (
                        <span
                          key={p}
                          className="text-gray-400 text-[12px] font-mono"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/[0.07] text-gray-600
                          hover:border-[#ff6200]/30 hover:text-[#ff6200] transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
