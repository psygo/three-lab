"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * Working on it in [this question](https://stackoverflow.com/q/77679154/4756173)
 */
export default function Simple() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <color attach="background" args={["green"]} />
        <OrbitControls />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
      </Canvas>
    </main>
  );
}
