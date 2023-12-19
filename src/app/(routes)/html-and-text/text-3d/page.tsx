"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";

/**
 * Drei requires fonts to be in JSON format.
 *
 * Use [this](https://gero3.github.io/facetype.js/) to convert them.
 *
 * References:
 *
 * - [Julia's CodeSandbox](https://codesandbox.io/p/sandbox/r3f-drei-3d-text-de86ih?file=%2Fsrc%2Findex.js)
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

        <CustomText />
      </Canvas>
    </main>
  );
}

function CustomText() {
  const [matcapTexture] = useMatcapTexture(
    "CB4E88_F99AD6_F384C3_ED75B9"
  );

  return (
    <Text3D font={"./gt.json"}>
      HELLO R3F
      <meshMatcapMaterial
        color="white"
        matcap={matcapTexture}
      />
    </Text3D>
  );
}
