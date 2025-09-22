"use client";

import { Sparkles } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export const ScrollAnimationR3F = () => {
  type Model3DProps = {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
    route: string;
  };

  const Model3D = ({ position, rotation, scale, route }: Model3DProps) => {
    const gltf = useLoader(GLTFLoader, `${route}`), [geometry, setGeometry] = useState<THREE.Group | null>(null);
    if (!geometry) {
      const scene = gltf.scene.clone(true)
      setGeometry(scene);
    }
    const primitiveProps = {
      object: geometry,
      position: position,
      scale: scale,
    }; 
    return <primitive object={primitiveProps.object!} position={primitiveProps.position} scale={primitiveProps.scale} />
  };

  const objectsDistance = 4;
  const mesh1 = useRef<any>(null), mesh2 = useRef<any>(null), mesh3 = useRef<any>(null), mesh4 = useRef<any>(null);
  const lightRef = useRef<any>(null);
  const sectionMeshes = [mesh1, mesh2, mesh3];

  useEffect(() => {
    let scrollY = window.scrollY;
    let currentSection = 0;

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
    });
  });

  function CameraEffects() {
    useFrame(({ camera, clock }) => {
      camera.position.y = - scrollY / window.innerHeight * objectsDistance;
      mesh1.current.rotation.y -= -0.005;
      mesh2.current.rotation.y -= -0.005;
      mesh3.current.rotation.y -= -0.005;
      mesh4.current.rotation.y -= -0.005;
      lightRef.current.intensity = Math.max(0.3, 
        Math.min(
          Math.abs(
            Math.cos(clock.elapsedTime * 0.5)), 
        1.5)
      );
    });
    return null;
  }
    
  return(
    <group>
        <ambientLight ref={lightRef} />
        <Sparkles count={1500} scale={6 * 6} size={6} speed={0.4} />
        <group 
          ref={mesh1}
          scale={[0.1,0.1,0.1]}
          position={[2,- objectsDistance * 0.1,0]}>
          <Model3D 
            position={[1.5,- objectsDistance * 0,0]}
            rotation={[0,0,0]}
            scale={[50,50,50]}
            route='/models/microsoft.glb'/>
        </group>

        <group
          ref={mesh2}
          scale={[0.1,0.1,0.1]}
          position={[-2,- objectsDistance * 1,0]}>

          <Model3D 
            position={[1,- objectsDistance * 0.8,0]}
            rotation={[0,0,0]}
            scale={[6,6,6]}
            route='/models/java_icon.glb'/>
        </group>
        
        <group 
          ref={mesh3}
          scale={[0.1,0.1,0.1]}
          position={[2,- objectsDistance * 1.9,0]}>
          <Model3D 
            position={[1.5,- objectsDistance * 2,0]}
            rotation={[0,0,0]}
            scale={[6,6,6]}
            route='/models/unity_icon.glb'/>
        </group>

        <group
          ref={mesh4}
          scale={[0.1,0.1,0.1]}
          position={[-2,- objectsDistance * 2.9,0]}>
          <Model3D 
            position={[1,- objectsDistance * 1.9,0]}
            rotation={[0,0,0]}
            scale={[6,6,6]}
            route='/models/nextjs_icon.glb'/>
        </group>

        <CameraEffects />
    </group>
  )
}

export default ScrollAnimationR3F