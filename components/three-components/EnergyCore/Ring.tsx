
import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export const SphereShaderMaterial = {
  transparent: true,
  uniforms: {
    u_time: {  value: 0 }
  },
  // Vertex shader material's with Patricio Gonzalez Vivo - Book of shaders
  vertexShader: `
  uniform float u_time;
  varying float vTime;
  varying vec2 vUv;

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vTime = u_time;
    vUv = uv;
}
  `,
  // Fragment shader material's with Patricio Gonzalez Vivo - Book of shaders
  fragmentShader: `
varying float vTime;
varying vec2 vUv;

void main(){
    float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)) /* * max(cos(vTime * 0.009), 0.5)*/ );
    gl_FragColor = vec4(vec3(strength), max(0.1, min(abs(cos(vTime * 0.0006)), 0.4)));
}
  `
};

const Ring = ({position, rotation}: {position: number[], rotation: number[]}) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const startTime = Date.now()
  let current = startTime
  let elapsed = 0
  

  useFrame(({  }) => {
    if (!sphereRef.current) return;

    const currentTime = Date.now()
    current = currentTime
    elapsed = current - startTime

    const material = sphereRef.current.material as THREE.ShaderMaterial;
    material.uniforms.u_time.value = elapsed;
  });
  
  return (
    <mesh ref={sphereRef} {...position}>
      <torusGeometry args={[2.5,0.1,16,100]} />
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
};

export default Ring