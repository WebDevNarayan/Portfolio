import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo, Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { Environment } from '@react-three/drei'

/* ─── Glowing torus knot — drag to spin + inertia ──────── */
function TorusKnot() {
  const groupRef = useRef()
  const { gl } = useThree()

  const isDragging = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const rotation = useRef({ x: 0.3, y: 0.5 })

  useEffect(() => {
    const canvas = gl.domElement

    const onMove = (e) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastPointer.current.x
      const dy = e.clientY - lastPointer.current.y
      velocity.current = { x: dy * 0.007, y: dx * 0.007 }
      rotation.current.x += dy * 0.007
      rotation.current.y += dx * 0.007
      lastPointer.current = { x: e.clientX, y: e.clientY }
    }

    const onUp = () => {
      isDragging.current = false
      canvas.style.cursor = 'default'
    }

    // Use window so fast drags don't lose tracking when pointer leaves canvas
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [gl])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    // Gentle float bob
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.15

    if (!isDragging.current) {
      // Inertia decay
      velocity.current.x *= 0.95
      velocity.current.y *= 0.95
      // Fallback auto-spin when fully stopped
      if (Math.abs(velocity.current.y) < 0.002) velocity.current.y = 0.004
    }

    rotation.current.x += velocity.current.x
    rotation.current.y += velocity.current.y
    groupRef.current.rotation.x = rotation.current.x
    groupRef.current.rotation.y = rotation.current.y
  })

  return (
    <group ref={groupRef} position={[1.8, 0, 0]}>
      <mesh
        castShadow
        onPointerDown={(e) => {
          e.stopPropagation()
          isDragging.current = true
          lastPointer.current = { x: e.clientX, y: e.clientY }
          velocity.current = { x: 0, y: 0 }
          gl.domElement.style.cursor = 'grabbing'
        }}
        onPointerOver={() => { gl.domElement.style.cursor = 'grab' }}
        onPointerOut={() => { if (!isDragging.current) gl.domElement.style.cursor = 'default' }}
      >
        <torusKnotGeometry args={[1.1, 0.36, 220, 32]} />
        <meshPhysicalMaterial
          color={new THREE.Color('#ff6200')}
          roughness={0.02}
          metalness={0.55}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.12}
          thickness={1.0}
          ior={1.7}
          envMapIntensity={6}
          emissive={new THREE.Color('#ff2800')}
          emissiveIntensity={0.18}
        />
      </mesh>
    </group>
  )
}

/* ─── Comet: glowing head + fading tail along a circular orbit ── */
function OrbitalComet({ radius, tilt, speed, color, trailLength = 70, startAngle = 0 }) {
  const pointsRef  = useRef()
  const headRef    = useRef()
  const angle      = useRef(startAngle)

  const positions = useMemo(() => new Float32Array(trailLength * 3), [trailLength])
  const colors    = useMemo(() => new Float32Array(trailLength * 3), [trailLength])
  const baseColor = useMemo(() => new THREE.Color(color), [color])

  useFrame((_, delta) => {
    angle.current += speed * delta
    const θ = angle.current

    const geo = pointsRef.current?.geometry
    if (geo) {
      const pos = geo.attributes.position
      const col = geo.attributes.color
      for (let i = 0; i < trailLength; i++) {
        const t = i / trailLength          // 0 = head, 1 = tail end
        const a = θ - t * 1.6              // tail spans ~1.6 rad behind head
        pos.setXYZ(i, radius * Math.cos(a), 0, radius * Math.sin(a))
        const fade = Math.pow(1 - t, 1.4)  // quadratic-ish fade
        col.setXYZ(i, baseColor.r * fade, baseColor.g * fade, baseColor.b * fade)
      }
      pos.needsUpdate = true
      col.needsUpdate = true
    }

    if (headRef.current) {
      headRef.current.position.set(radius * Math.cos(θ), 0, radius * Math.sin(θ))
    }
  })

  return (
    <group position={[1.8, 0, 0]} rotation={[tilt, 0, 0]}>
      {/* Tail */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={trailLength} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color"    count={trailLength} array={colors}    itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.062}
          vertexColors
          sizeAttenuation
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Head */}
      <group ref={headRef}>
        {/* Soft glow halo */}
        <mesh>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
        {/* Bright core */}
        <mesh>
          <sphereGeometry args={[0.016, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  )
}

/* ─── Floating particle cloud ───────────────────────────── */
function Particles({ count = 1400 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r     = 3.2 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      arr[i * 3]     = 1.8 + r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.045
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.015) * 0.12
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.016}
        color="#ff7020"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

/* ─── Accent icosahedron — hover color shift ────────────── */
function AccentSphere() {
  const mesh = useRef()
  const mat = useRef()
  const hovered = useRef(false)
  const { gl } = useThree()

  useFrame(({ clock }) => {
    if (!mesh.current || !mat.current) return
    mesh.current.rotation.y = clock.elapsedTime * 0.07
    mesh.current.rotation.z = clock.elapsedTime * 0.04

    // Lerp color and opacity toward hover target
    const targetColor = hovered.current
      ? new THREE.Color('#ff6200')
      : new THREE.Color('#3b82f6')
    mat.current.color.lerp(targetColor, 0.06)

    const targetOpacity = hovered.current ? 0.9 : 0.55
    mat.current.opacity = THREE.MathUtils.lerp(mat.current.opacity, targetOpacity, 0.06)

    const targetEmissiveIntensity = hovered.current ? 0.9 : 0.35
    mat.current.emissiveIntensity = THREE.MathUtils.lerp(
      mat.current.emissiveIntensity,
      targetEmissiveIntensity,
      0.06
    )
  })

  return (
    <mesh
      ref={mesh}
      position={[4.2, 2.1, -3]}
      scale={0.6}
      onPointerOver={() => {
        hovered.current = true
        gl.domElement.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        hovered.current = false
        gl.domElement.style.cursor = 'default'
      }}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        ref={mat}
        color="#3b82f6"
        roughness={0.4}
        metalness={0.6}
        emissive="#3b82f6"
        emissiveIntensity={0.35}
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  )
}

/* ─── Scene root ─────────────────────────────────────────── */
const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 7.2], fov: 40 }}
    gl={{ antialias: true, alpha: false }}
    dpr={[1, 1.5]}
    shadows
  >
    <color attach="background" args={['#080808']} />

    <ambientLight intensity={0.14} />
    <pointLight position={[-3.5, 4, 2]} intensity={7} color="#ff6200" />
    <pointLight position={[5.5, -3, -4]} intensity={2.5} color="#3b82f6" />
    <spotLight
      position={[2, 7, 5]}
      intensity={3.5}
      angle={0.42}
      penumbra={1}
      castShadow
    />

    <Suspense fallback={null}>
      <Environment preset="city" />
      <TorusKnot />
      <AccentSphere />
      <OrbitalComet radius={2.3} tilt={ Math.PI / 4}   speed={ 0.55} color="#ff6200" startAngle={0} />
      <OrbitalComet radius={3.1} tilt={-Math.PI / 5}  speed={ 0.38} color="#3b82f6" startAngle={2.1} trailLength={90} />
      <OrbitalComet radius={1.9} tilt={ Math.PI / 2.3} speed={ 0.82} color="#ff8c40" startAngle={4.2} trailLength={50} />
      <Particles />
    </Suspense>
  </Canvas>
)

export default HeroScene
