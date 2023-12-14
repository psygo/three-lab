"use client";

import { useState } from "react";

import { OrbitControls } from "@react-three/drei";

import { Canvas, extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { UnrealBloomPass } from "three-stdlib";

import { useControls } from "leva";

extend({ UnrealBloomPass });

export default function BloomFilter() {
  const { jsm, intensity, radius } = useControls({
    jsm: true,
    intensity: { value: 0.4, min: 0, max: 1.5, step: 0.01 },
    radius: { value: 0, min: 0, max: 1, step: 0.01 },
  });

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat orthographic camera={{ zoom: 100 }}>
        <OrbitControls />
        <color attach="background" args={["#111"]} />
        <ambientLight />

        {jsm ? (
          <Effects disableGamma>
            {/* @ts-ignore */}
            <unrealBloomPass
              threshold={1}
              strength={intensity}
              radius={radius}
            />
            {/* <outputPass args={[THREE.ACESFilmicToneMapping]} /> */}
          </Effects>
        ) : (
          <EffectComposer disableNormalPass>
            <Bloom
              mipmapBlur
              luminanceThreshold={1}
              levels={8}
              intensity={intensity * 4}
            />
            <ToneMapping
              mode={ToneMappingMode.ACES_FILMIC}
            />
          </EffectComposer>
        )}
        <Shape color="hotpink" position={[-2, 0, 0]}>
          <planeGeometry args={[1.5, 1.5]} />
        </Shape>
        <Shape
          color="orange"
          position={[0, -0.25, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <circleGeometry args={[1, 1]} />
        </Shape>
        <Shape color="skyblue" position={[2, 0, 0]}>
          <circleGeometry args={[0.8, 64]} />
        </Shape>
      </Canvas>
    </main>
  );
}

function Shape({ children, color, ...props }: any) {
  const [hovered, hover] = useState(true);
  return (
    <mesh
      {...props}
      onPointerOver={() => hover(false)}
      onPointerOut={() => hover(true)}
    >
      {children}
      {/* Now, in order to get selective bloom we simply crank colors out of
        their natural spectrum. Where colors are normally defined between 0 - 1 we push them
        way out of range, into a higher defintion (HDR). What previously was [1, 1, 1] now could
        for instance be [10, 10, 10]. This requires that toneMapping is off, or it clamps to 1 */}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={!hovered ? 4 : 0}
        toneMapped={false}
      />
    </mesh>
  );
}
