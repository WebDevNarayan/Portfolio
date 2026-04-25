# Portfolio Project — Claude Instructions

## Stack
- React 18 + Vite + JSX
- Tailwind CSS + styled-components
- Framer Motion (animations & scroll reveals)
- Three.js + @react-three/fiber + @react-three/drei (3D & particles)
- Lenis (smooth scroll)
- GSAP (legacy, can still use for timeline sequences)

## UI Component Generation
When building any UI component, ALWAYS use the `21st_magic_component_builder` MCP tool first to get a professional, animated base component before customizing it.

## Design Principles
- Dark theme: primary bg `#0f0f0f` or `#0d0d0d`, accent colors: electric blue `#3b82f6`, purple `#8b5cf6`
- Every section should have scroll-triggered entrance animations using Framer Motion `useInView`
- Use `framer-motion` `motion` components instead of plain HTML elements wherever animation is needed
- Parallax depth via `useScroll` + `useTransform` from framer-motion
- Smooth scroll via Lenis initialized globally in `main.jsx`
- 3D elements use `@react-three/fiber` Canvas with `@react-three/drei` helpers

## Preserved Components
- `LoadingPreloader.jsx` — DO NOT modify this component, it is intentionally kept as-is

## File Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx        ← Three.js particle background + Framer Motion
    Main.jsx        ← hero text section
    About.jsx
    Experience.jsx
    Work.jsx
    Contact.jsx
    Footer.jsx
    LoadingPreloader.jsx  ← preserved, do not touch
```
