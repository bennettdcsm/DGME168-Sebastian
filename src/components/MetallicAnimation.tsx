
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const clock = useMemo(() => new THREE.Clock(), []);
  
  // Animation
  useFrame(() => {
    if (!sphereRef.current) return;
    
    const t = clock.getElapsedTime() * 0.15;
    sphereRef.current.rotation.x = Math.cos(t) * 0.2;
    sphereRef.current.rotation.y = Math.sin(t) * 0.2;
  });

  return (
    <Sphere args={[1.4, 64, 64]} ref={sphereRef}>
      <MeshDistortMaterial 
        color="#8B0000"
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        metalness={0.8}
        roughness={0.15}
      />
    </Sphere>
  );
};

const LiquidMetallic = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} position={[5, 5, 5]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default LiquidMetallic;
