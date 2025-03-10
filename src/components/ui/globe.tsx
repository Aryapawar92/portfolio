"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import EarthMaterial from "@/components/ui/earthMaterial";

const sunDirection = { x: 0, y: 0, z: 1 };

export default function Globe() {
  const { x, y, z } = sunDirection;
  return (
    <div>
      <Canvas gl={{ toneMapping: THREE.NoToneMapping }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <Earth />
        <directionalLight position={[x, y, z]} />
        <hemisphereLight args={[0xffffff, 0x000000, 1]} />
      </Canvas>
    </div>
  );
}

function Earth() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });
  return (
    <group rotation-z={THREE.MathUtils.degToRad(-23)}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2.5, 32]} />
        <EarthMaterial />
      </mesh>
    </group>
  );
}
