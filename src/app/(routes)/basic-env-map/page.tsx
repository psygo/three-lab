"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";

function Sphere() {
  return (
    <mesh position={[1, 1, 1]}>
      <sphereGeometry args={[1, 32, 32]} />
      {/* <meshStandardMaterial color="hotpink" /> */}
      <MeshReflectorMaterial
        mirror={0}
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      />
    </mesh>
  );
}

export default function BasicEnvMap() {
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

        <Sphere />
      </Canvas>
    </main>
  );
}
