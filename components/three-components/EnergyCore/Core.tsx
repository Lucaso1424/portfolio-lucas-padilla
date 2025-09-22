
import React, {useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { Vector2 } from "three";
import * as THREE from 'three'

export const SphereShaderMaterial = {
  transparent: true,
  uniforms: {
    u_time: { value: 0 },
    u_resolution: {value: new Vector2(800, 600)}
  },
  vertexShader: `
    varying vec2 vUv;
    void main()
    {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
    
        vUv = uv;
    
    }
  `,
  fragmentShader: `
  precision mediump float;
  varying vec2 vUv;
  // Author: @patriciogv - 2015
  // Tittle: Ridge
  uniform vec2 u_resolution;
  uniform float u_time;
  // Some useful functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  //
  // Description : GLSL 2D simplex noise function
  //      Author : Ian McEwan, Ashima Arts
  //  Maintainer : ijm
  //     Lastmod : 20110822 (ijm)
  //     License :
  //  Copyright (C) 2011 Ashima Arts. All rights reserved.
  //  Distributed under the MIT License. See LICENSE file.
  //  https://github.com/ashima/webgl-noise
  //
  
  float snoise(vec2 v) {
  
      // Precompute values for skewed triangular grid
      const vec4 C = vec4(0.211324865405187,
                          // (3.0-sqrt(3.0))/6.0
                          0.366025403784439,
                          // 0.5*(sqrt(3.0)-1.0)
                          -0.577350269189626,
                          // -1.0 + 2.0 * C.x
                          0.024390243902439);
                          // 1.0 / 41.0
  
      // First corner (x0)
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
  
      // Other two corners (x1, x2)
      vec2 i1 = vec2(0.0);
      i1 = (x0.x > x0.y)? vec2(1.0, 0.0):vec2(0.0, 1.0);
      vec2 x1 = x0.xy + C.xx - i1;
      vec2 x2 = x0.xy + C.zz;
  
      // Do some permutations to avoid
      // truncation effects in permutation
      i = mod289(i);
      vec3 p = permute(
              permute( i.y + vec3(0.0, i1.y, 1.0))
                  + i.x + vec3(0.0, i1.x, 1.0 ));
  
      vec3 m = max(0.5 - vec3(
                          dot(x0,x0),
                          dot(x1,x1),
                          dot(x2,x2)
                          ), 0.0);
  
      m = m*m ;
      m = m*m ;
  
      // Gradients:
      //  41 pts uniformly over a line, mapped onto a diamond
      //  The ring size 17*17 = 289 is close to a multiple
      //      of 41 (41*7 = 287)
  
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
  
      // Normalise gradients implicitly by scaling m
      // Approximation of: m *= inversesqrt(a0*a0 + h*h);
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);
  
      // Compute final noise value at P
      vec3 g = vec3(0.0);
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * vec2(x1.x,x2.x) + h.yz * vec2(x1.y,x2.y);
      return 130.0 * dot(m, g);
  }
  
  #define OCTAVES 4
  
  // Ridged multifractal
  // See "Texturing & Modeling, A Procedural Approach", Chapter 12
  float ridge(float h, float offset) {
      h = abs(h);     // create creases
      h = offset - h; // invert so creases are at top
      h = h * h;      // sharpen creases
      return h;
  }
  
  float ridgedMF(vec2 p) {
      float lacunarity = 2.0;
      float gain = 0.5;
      float offset = 0.9;
  
      float sum = 0.0;
      float freq = 1.0, amp = 0.5;
      float prev = 1.0;
      for(int i=0; i < OCTAVES; i++) {
          float n = ridge(snoise(p*freq), offset);
          sum += n*amp;
          sum += n*amp*prev;  // scale by previous octave
          prev = n;
          freq *= lacunarity;
          amp *= gain;
      }
      return sum;
  }
  
  void main() {
      vec2 st = gl_FragCoord.xy/u_resolution.xy + (u_time * 0.000003);
      st.x *= u_resolution.x/u_resolution.y;
      vec3 color = vec3(0.0);
  
      color += ridgedMF(vec2(ridgedMF(st*3.0) + u_time * 0.0002));
      color += snoise(vec2 ((ridgedMF(st*2.0))  + u_time * 0.00002));  
      gl_FragColor = vec4(color,0.3);
  }
  `
};

export const RomboShaderMaterial = {
  transparent: true,
  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: new Vector2(800, 600) }
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;

      // Posición base
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);

      // Deformación para crear rombo normal (puntiagudo arriba y abajo)
      modelPosition.x *= abs(modelPosition.y) * 2.0 + 0.3; 
      modelPosition.y *= 1.8; 

      vec4 viewPosition = viewMatrix * modelPosition;
      gl_Position = projectionMatrix * viewPosition;
    }
  `,
  fragmentShader: `
    precision mediump float;
    varying vec2 vUv;

    void main() {
      // Color sólido para el rombo
      vec3 color = vec3(0.2, 0.6, 1.0); // azul celeste

      gl_FragColor = vec4(color, 1.0);
    }
  `
};

// Shader material's with Patricio Gonzalez Vivo - Book of shaders

// export const Core = ({position}: {position: number[]}) => {
//   const sphereRef = useRef<THREE.Mesh>(null);
//   const startTime = Date.now();
//   let current = startTime;
//   let elapsed = 0;

//   useFrame(() => {
//     if (!sphereRef.current) return;
    
//     const currentTime = Date.now();
//     current = currentTime;
//     elapsed = current - startTime;

//     const material = sphereRef.current.material as THREE.ShaderMaterial;
//     material.uniforms.u_time.value = elapsed;
//     sphereRef.current.rotation.y = elapsed * 0.0001;
//   });

//   return (
//     <mesh ref={sphereRef} {...position}>
//       <sphereGeometry args={[2, 64, 32]} />
//       <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
//     </mesh>
//   );
// };

export const Core = ({ position }: { position: number[] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!groupRef.current) return;

    if (hovered) {
      groupRef.current.rotation.x += 0.02;
      groupRef.current.rotation.y += 0.03;
    } else {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const romboGeometry = new THREE.OctahedronGeometry(2.5, 0);

  return (
    <group
      ref={groupRef}
      position={position as [number, number, number]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh geometry={romboGeometry}>
        <meshStandardMaterial color="red" flatShading />
      </mesh>

      <lineSegments geometry={new THREE.EdgesGeometry(romboGeometry)}>
        <lineBasicMaterial attach="material" color="purple" linewidth={2} />
      </lineSegments>
    </group>
  );
};

export default Core