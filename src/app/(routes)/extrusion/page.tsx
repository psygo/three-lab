"use client";

import {
  Vector3,
  CatmullRomCurve3,
  DoubleSide,
  ExtrudeGeometryOptions,
  Shape,
} from "three";
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

/**
 * From [Three.js Geometry Extrude Shapes](https://threejs.org/examples/?q=extru#webgl_geometry_extrude_shapes)
 */
const closedSpline = new CatmullRomCurve3([
  new Vector3(-60, -100, 60),
  new Vector3(-60, 20, 60),
  new Vector3(-60, 120, 60),
  new Vector3(60, 20, -60),
  new Vector3(60, -100, -60),
]);
closedSpline.curveType = "catmullrom";
closedSpline.closed = true;

const extrudeSettings: ExtrudeGeometryOptions = {
  curveSegments: 1,
  // Catmull-Rom is a recursive algorithm, it needs steps.
  steps: 100,
  depth: thickness,
  bevelEnabled: false,
  extrudePath: closedSpline,
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
