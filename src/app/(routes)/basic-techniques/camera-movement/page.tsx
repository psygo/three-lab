"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CameraMovement() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <color attach="background" args={["darkblue"]} />
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
