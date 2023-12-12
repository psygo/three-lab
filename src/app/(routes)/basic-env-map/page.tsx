"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
} from "@react-three/drei";

import { useControls } from "leva";

/**
 * Useful Reference: [SBCode - Examples: Shiny Refraction](https://sbcode.net/threejs/refract-reflect/)
 */
export default function BasicEnvMap() {
  const { position } = useControls({
    position: { value: { x: -2, y: 0, z: 0 }, step: 0.1 },
  });

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Environment preset="forest" background />
        <color attach="background" args={["green"]} />
        <OrbitControls />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />

        <mesh
          position={[position.x, position.y, position.z]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            reflectivity={1}
            transmission={1}
            roughness={0}
            metalness={0}
            clearcoat={0.3}
            clearcoatRoughness={0.25}
            color="black"
            ior={1.5}
          />
        </mesh>
      </Canvas>
    </main>
  );
}
