import { useRef} from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export const pixelRatio = 2; 
export const PointShaderMaterial = {
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    uniforms: {
      uSize: { value: 180 * pixelRatio },
      u_time: {  value: 0 }
    },
    // Vertex shader material's with Patricio Gonzalez Vivo - Book of shaders
    vertexShader: `
    uniform float uSize;
  uniform float uTime;
  
  attribute float aScale;
  attribute vec3 aRandomness;
  
  varying vec3 vColor;
  
  void main()
  {
      /**
      * Position
      */
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
      //Spin
      float angle = atan(modelPosition.x, modelPosition.z);
      float distanceToCenter = length(modelPosition.xz);
      float angleOffset = (1.0 / distanceToCenter) * uTime * 8.5 ;
      angle += angleOffset;
      modelPosition.x = cos(angle) * distanceToCenter;
      modelPosition.z = sin(angle) * distanceToCenter;
  
      //Randomness
      modelPosition.xyz += aRandomness;
  
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
  
      gl_PointSize = uSize * aScale;
      gl_PointSize *= ( 1.0 / - viewPosition.z );
  
      vColor = color;
  }
    `,
    // Fragment shader material's with Patricio Gonzalez Vivo - Book of shaders
    fragmentShader: `
    varying vec3 vColor;
  
    void main()
    {
        float strength = distance(gl_PointCoord, vec2(0.5));
        strength = 1.0 - strength;
        strength = pow(strength, 10.0);
    
        //Final color
        vec3 color = mix(vec3(0.0), vColor, strength);
        gl_FragColor = vec4(vec3(color), 1.0);
    }
    `
};

type StarParameters = {
  count: number;
  size: number;
  radius: number;
  branches: number;
  spin: number;
  randomness: number;
  randomnessPower: number;
  insideColor: string;
  outsideColor: string;
};

export const Stars = () => {
  const startTime = Date.now();
  const ref = useRef<THREE.Mesh>(null);
  
  let current = startTime;
  let elapsed = 0;

  const parameters: StarParameters = {
    count: 10000,
    size: 7,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.5,
    randomnessPower: 3,
    insideColor: '#ffffff',
    outsideColor: '#BF40BF'
  };

  const geometry = new THREE.BufferGeometry();
  let positions = new Float32Array(parameters.count * 3);
  let colors = new Float32Array(parameters.count * 3);
  let scales = new Float32Array(parameters.count * 1);
  let randomness = new Float32Array(parameters.count * 3);

  let insideColor = new THREE.Color(parameters.insideColor);
  let outsideColor = new THREE.Color(parameters.outsideColor);
  
  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;
    const i2 = i * 2;
    const radius = Math.random() * parameters.radius;
    
    positions[i3    ] = (Math.random() -0.5) * 50;
    positions[i3 + 1] = (Math.random() -0.5) * 50;
    positions[i3 + 2] = (Math.random() -0.5) * 50;

    const mixedColor = insideColor.clone();
    mixedColor.lerp(outsideColor, radius / parameters.radius);

    colors[i2    ] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    scales[i] = Math.random();
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3));

useFrame(() => {
    if (!ref.current) return;

    const currentTime = Date.now();
    current = currentTime;
    elapsed = current - startTime;

    ref.current.rotation.y = elapsed * 0.00002;
  });

return (
    <mesh>
        <points ref={ref} args={[geometry]}>
            <shaderMaterial args={[PointShaderMaterial]} />
        </points>
    </mesh>
  );
};

export default Stars