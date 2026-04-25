import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const [hovered,  setHovered]  = useState(false)
  const [clicking, setClicking] = useState(false)

  const dotX  = useSpring(mx, { damping: 45, stiffness: 700 })
  const dotY  = useSpring(my, { damping: 45, stiffness: 700 })
  const ringX = useSpring(mx, { damping: 20, stiffness: 160 })
  const ringY = useSpring(my, { damping: 20, stiffness: 160 })

  useEffect(() => {
    const move  = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    const over  = (e) => { if (e.target.closest('a,button,[data-cursor]')) setHovered(true) }
    const out   = (e) => { if (e.target.closest('a,button,[data-cursor]')) setHovered(false) }
    const down  = () => setClicking(true)
    const up    = () => setClicking(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout',  out)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup',   up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout',  out)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup',   up)
    }
  }, [mx, my])

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: 7, height: 7,
          background: hovered ? 'transparent' : '#ff6200',
        }}
        animate={{ scale: clicking ? 0.5 : hovered ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          border: `1.5px solid ${hovered ? 'rgba(255,98,0,0.9)' : 'rgba(255,98,0,0.45)'}`,
        }}
        animate={{
          width:   hovered ? 44 : clicking ? 24 : 36,
          height:  hovered ? 44 : clicking ? 24 : 36,
          opacity: clicking ? 0.6 : 0.7,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      />

      {/* Subtle fill on hover */}
      {hovered && (
        <motion.div
          className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full"
          style={{
            x: ringX, y: ringY,
            translateX: '-50%', translateY: '-50%',
            width: 44, height: 44,
            background: 'rgba(255,98,0,0.08)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        />
      )}
    </>
  )
}

export default CustomCursor
