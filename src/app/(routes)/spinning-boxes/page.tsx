"use client";

import { useRef, useState } from "react";

import { Vector3 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { MeshRef } from "@utils/exports";

type BoxProps = {
  position: number[];
};
/**
 * Source [CodeSandbox by drcmda](https://codesandbox.io/s/basic-demo-rrppl0y8l4)
 */
function Box({ position }: BoxProps) {
  const ref = useRef<MeshRef>(null);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame(
    (_, delta) => (ref.current!.rotation.x += delta)
  );

  return (
    <mesh
      position={
        new Vector3(position[0], position[1], position[2])
      }
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (
        event.stopPropagation(), hover(true)
      )}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[5, 24, 24]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight
          position={[-10, -10, -10]}
          decay={0}
          intensity={Math.PI}
        />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
