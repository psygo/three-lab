"use client";

import { DoubleSide, Shape } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const length = 14,
  width = 2,
  deg = 10,
  thickness = 0.3;
const rad = (deg * Math.PI) / 180;
const offset = Math.min(Math.tan(rad) * width, length / 2);

const shape = new Shape();
shape.moveTo(0, 0);
shape.lineTo(offset, width);
shape.lineTo(length - offset, width);
shape.lineTo(length, 0);
shape.lineTo(0, 0);

const extrudeSettings = {
  curveSegments: 1,
  steps: 1,
  depth: thickness,
  bevelEnabled: false,
};

/**
 * References:
 *
 * - [How to Create an Irregular 3D Polygon extruded shape React-Three-Fiber](https://stackoverflow.com/a/69438868/4756173)
 * - [2D Shape](https://codesandbox.io/p/sandbox/geometry-2d-f408i?file=%2Fsrc%2Findex.js)
 * - [Brad Woods Demos](https://garden.bradwoods.io/notes/javascript/react/react-three-fiber)
 */
export default function Extrusion() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls />
        <mesh>
          <extrudeGeometry
            attach="geometry"
            args={[shape, extrudeSettings]}
          />
          <meshStandardMaterial
            color="red"
            side={DoubleSide}
          />
        </mesh>
      </Canvas>
    </main>
  );
}
