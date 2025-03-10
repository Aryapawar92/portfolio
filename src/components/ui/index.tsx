"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Index() {
  return (
    <div>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  const texture1 = useLoader(TextureLoader, "/tailwind-css.png");

  const texture2 = useLoader(TextureLoader, "/reactjs.png");
  const texture3 = useLoader(TextureLoader, "/next-js.svg");
  const texture4 = useLoader(TextureLoader, "/js.png");
  const texture5 = useLoader(TextureLoader, "/html.png");
  const texture6 = useLoader(TextureLoader, "/cpp.png");

  return (
    <group rotation-z={THREE.MathUtils.degToRad(-23)}>
      <mesh ref={ref}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={texture1} attach="material-0" />
        <meshStandardMaterial map={texture2} attach="material-1" />
        <meshStandardMaterial map={texture3} attach="material-2" />
        <meshStandardMaterial map={texture4} attach="material-3" />
        <meshStandardMaterial map={texture5} attach="material-4" />
        <meshStandardMaterial map={texture6} attach="material-5" />
      </mesh>
    </group>
  );
}
