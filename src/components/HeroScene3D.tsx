import React, { useRef, useMemo, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating orbiting rings
const OrbitRing: React.FC<{ radius: number; speed: number; color: string; tilt: number }> = ({
  radius,
  speed,
  color,
  tilt,
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
      ref.current.rotation.x = tilt;
    }
  });
  return (
    <Torus ref={ref} args={[radius, 0.015, 16, 120]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.65}
      />
    </Torus>
  );
};

// Core sculpture with distortion
const CoreSculpture: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.18;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.15 + mouse.y * 0.08;
      meshRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.2) * 0.08 + mouse.x * 0.06;
    }
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.1, 4]} />
      <MeshDistortMaterial
        color="#0EA5E9"
        emissive="#0369A1"
        emissiveIntensity={0.5}
        metalness={0.95}
        roughness={0.05}
        distort={0.28}
        speed={2.2}
        envMapIntensity={1.2}
      />
    </mesh>
  );
};

// Floating particle field
const ParticleField: React.FC = () => {
  const COUNT = 220;
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.4 + Math.random() * 2.8;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.06;
      ref.current.rotation.x = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#38BDF8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
};

// Small floating geometries
const FloatingGeo: React.FC<{
  position: [number, number, number];
  shape: 'box' | 'sphere';
  color: string;
  speed: number;
}> = ({ position, shape, color, speed }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed;
      ref.current.rotation.y = clock.getElapsedTime() * speed * 0.7;
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + position[0]) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      {shape === 'box' ? (
        <boxGeometry args={[0.18, 0.18, 0.18]} />
      ) : (
        <sphereGeometry args={[0.09, 8, 8]} />
      )}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.85}
        roughness={0.15}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ThreeErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('3D Hero Scene fallback activated:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroScene3D: React.FC = () => {
  return (
    <ThreeErrorBoundary
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-72 h-72 rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
        </div>
      }
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[4, 4, 4]} intensity={2.5} color="#38BDF8" />
        <pointLight position={[-4, -2, 2]} intensity={1.5} color="#818CF8" />
        <pointLight position={[0, -4, -2]} intensity={0.8} color="#0EA5E9" />

        {/* Core sculpture */}
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.4}>
          <CoreSculpture />
        </Float>

        {/* Orbit rings */}
        <OrbitRing radius={1.85} speed={0.35} color="#38BDF8" tilt={Math.PI / 4} />
        <OrbitRing radius={2.2} speed={-0.22} color="#818CF8" tilt={Math.PI / 6} />
        <OrbitRing radius={2.6} speed={0.18} color="#0EA5E9" tilt={Math.PI / 3} />

        {/* Particle cloud */}
        <ParticleField />

        {/* Floating geometries */}
        <FloatingGeo position={[2.4, 0.8, 0.5]} shape="box" color="#38BDF8" speed={0.9} />
        <FloatingGeo position={[-2.6, -0.5, 0.3]} shape="box" color="#818CF8" speed={0.7} />
        <FloatingGeo position={[1.8, -1.6, -0.4]} shape="sphere" color="#7DD3FC" speed={1.2} />
        <FloatingGeo position={[-1.4, 1.8, 0.6]} shape="sphere" color="#A78BFA" speed={0.6} />
        <FloatingGeo position={[2.8, -1.2, -0.6]} shape="box" color="#E0F2FE" speed={0.8} />
        <FloatingGeo position={[-2.2, 1.2, -0.5]} shape="sphere" color="#38BDF8" speed={1.0} />
      </Canvas>
    </ThreeErrorBoundary>
  );
};
