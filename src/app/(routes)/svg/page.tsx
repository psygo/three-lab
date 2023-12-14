"use client";

import { useMemo } from "react";

import { SVGLoader } from "three/examples/jsm/Addons.js";
import { Canvas, useLoader } from "@react-three/fiber";
import { Shape } from "@react-three/drei";
import { useTransition } from "@react-spring/three";

export default function Svg() {
  const data = useLoader(
    SVGLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/svg/tiger.svg"
  );

  const shapes = useMemo(
    () =>
      data.paths.flatMap((g, index) =>
        g.toShapes(true).map((shape) => ({
          shape,
          color: g.color,
          index,
        }))
      ),
    [data]
  );

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[300, 300, 4000]}
        />

        {/* @ts-ignore */}
        {shapes && <shapeGeometry args={[...shapes]} />}
      </Canvas>
    </main>
  );
}
