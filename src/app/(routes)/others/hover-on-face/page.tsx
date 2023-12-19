"use client";

import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

function Cube() {
  const ref = useRef<Mesh>(null);

  const [activeFaceIndex, setActiveFaceIndex] =
    useState(-1);

  useFrame((_, delta) => {
    ref.current!.rotation.x += delta;
    ref.current!.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      ref={ref}
      onPointerMove={({ face }) => {
        setActiveFaceIndex(face!.materialIndex);
      }}
      onPointerOut={(e) => {
        setActiveFaceIndex(-1);
      }}
    >
      <boxGeometry />
      <meshStandardMaterial
        attach={`material-0`}
        color={activeFaceIndex === 0 ? "red" : "green"}
      />
      <meshStandardMaterial
        attach={`material-1`}
        color={activeFaceIndex === 1 ? "red" : "green"}
      />
      <meshStandardMaterial
        attach={`material-2`}
        color={activeFaceIndex === 2 ? "red" : "green"}
      />
      <meshStandardMaterial
        attach={`material-3`}
        color={activeFaceIndex === 3 ? "red" : "green"}
      />
      <meshStandardMaterial
        attach={`material-4`}
        color={activeFaceIndex === 4 ? "red" : "green"}
      />
      <meshStandardMaterial
        attach={`material-5`}
        color={activeFaceIndex === 5 ? "red" : "green"}
      />
    </mesh>
  );
}

/**
 * From [this question](https://stackoverflow.com/q/77679154/4756173)
 */
export default function HoverOnFace() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <directionalLight
        position={[1, 1, 1]}
        intensity={Math.PI}
      />
      <ambientLight intensity={Math.PI / 8} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}
