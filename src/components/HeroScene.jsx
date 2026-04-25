import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'
import { Environment, Float } from '@react-three/drei'

/* ─── Glowing torus knot — reacts to mouse ─────────────── */
function TorusKnot() {
  const mesh = useRef()

  useFrame(({ pointer, clock }) => {
    if (!mesh.current) return
    const t = clock.elapsedTime
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      -pointer.y * 0.38 + t * 0.06,
      0.025
    )
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      pointer.x * 0.38 + t * 0.10,
      0.025
    )
  })

  return (
    <Float speed={1.3} floatIntensity={0.7} rotationIntensity={0.18} position={[1.8, 0, 0]}>
      <mesh ref={mesh} castShadow>
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
    </Float>
  )
}

/* ─── Thin orbital ring ─────────────────────────────────── */
function OrbitalRing({ radius, tilt, speed, color, opacity }) {
  const mesh = useRef()
  useFrame(({ clock }) => {
    if (mesh.current) mesh.current.rotation.z = clock.elapsedTime * speed
  })
  return (
    <mesh ref={mesh} position={[1.8, 0, 0]} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.007, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
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

/* ─── Secondary smaller knot in background ──────────────── */
function AccentSphere() {
  const mesh = useRef()
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.elapsedTime * 0.07
      mesh.current.rotation.z = clock.elapsedTime * 0.04
    }
  })
  return (
    <mesh ref={mesh} position={[4.2, 2.1, -3]} scale={0.6}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.4}
        metalness={0.6}
        wireframe
        transparent
        opacity={0.2}
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
      <OrbitalRing radius={2.3} tilt={Math.PI / 4}   speed={ 0.13} color="#ff6200" opacity={0.28} />
      <OrbitalRing radius={3.1} tilt={-Math.PI / 5}  speed={-0.09} color="#3b82f6" opacity={0.20} />
      <OrbitalRing radius={1.9} tilt={ Math.PI / 2.3} speed={ 0.20} color="#ff6200" opacity={0.13} />
      <Particles />
    </Suspense>
  </Canvas>
)

export default HeroScene
