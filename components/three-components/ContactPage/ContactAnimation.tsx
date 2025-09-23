import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export const ContactAnimation = () => {
  const desktop = useLoader(GLTFLoader, '/models/gaming_desktop_pc.glb');
  const chair = useLoader(GLTFLoader, '/models/red_gaming_chair.glb');

  const dirLightRef = useRef<THREE.DirectionalLight>(null!);

  function UpdateCamera() {
    useFrame(({ camera, clock }) => {
      if(camera.position.z > 4.5){
        camera.position.z -= (clock.elapsedTime * 0.01);
      }
    });
    return null;
  }

  return(
      <group rotation={[0, 1.55, 0]} scale={[2, 2, 2]}>
        <ambientLight intensity={1.2} />

        <directionalLight
          ref={dirLightRef}
          color={"#ffffff"}
          intensity={1}
          position={[-10, 10, 5]}
          castShadow/>

        <pointLight color={"#F5B5B1"} position={[0, 2, -5]} intensity={1.5} />
        <pointLight color={"#F2E7CB"} position={[-2, 3, 2]} intensity={1} />

        <primitive object={desktop.scene} scale={0.22} position={[0.72, 0.005, 0]} rotation={[0, -Math.PI, 0]}>
          <Html
            transform
            rotation={[0, Math.PI / 2, 0]}
            wrapperClass="htmlScreen"
            distanceFactor={1}             
            position={[0.29, 3.18, 3.02]}  
            scale={[2, 2, 5]}  >
            <iframe src="/Portfolio" width="1127" height="592" />
          </Html>
        </primitive>

        <primitive object={chair.scene} scale={1} position={[-0.31, -0.6, 0.4]} rotation={[0, Math.PI, 0]}/>
        <UpdateCamera />
      </group>
  )
}

export default ContactAnimation