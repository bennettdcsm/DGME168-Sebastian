
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';

function Model({ rotation = [0, 0, 0] }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF('/lovable-uploads/14c07885-b475-4aa5-98d8-3903153a511b.png');

  useEffect(() => {
    if (!scene) return;
    
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xC0C0C0,
          metalness: 1,
          roughness: 0.1,
        });
      }
    });
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} rotation={rotation}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

const MetallicAnimation = () => {
  // Preload the 3D model to avoid THREE not being defined error
  useEffect(() => {
    // Fix the error by properly importing THREE from the 'three' package
    // Instead of accessing it through window.THREE
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('');
  }, []);

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model rotation={[0, 0, 0]} />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default MetallicAnimation;
