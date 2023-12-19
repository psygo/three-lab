"use client";

import { useRef } from "react";

import { Mesh } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

export default function BasicCustomShader() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [1.0, 1.0, 1.0] }}>
        <axesHelper />
        <OrbitControls />

        <Flag />
      </Canvas>
    </main>
  );
}

function Flag() {
  const mesh = useRef<Mesh>(null);

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        wireframe
      />
    </mesh>
  );
}
