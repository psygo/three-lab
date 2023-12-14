"use client";

import { useMemo } from "react";

import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";
import {
  Canvas,
  MeshProps,
  useLoader,
} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * [Closing in on a solution](https://stackoverflow.com/q/77660929/4756173)
 */
// function Logo() {
//   const svgData = useLoader(SVGLoader, "lvup_icon.svg");
//   const shapes = useMemo(() => {
//     return svgData.paths.map((p) => p.toShapes(true));
//   }, [svgData]);

//   return (
//     <mesh
//       scale={0.05}
//       rotation={[1 * Math.PI, 0, 0]}
//       position={[-0.7, 0.5, 0]}
//     >
//       {shapes.map((s, i) => (
//         <extrudeGeometry
//           key={i}
//           args={[
//             s,
//             {
//               depth: 1,
//               bevelEnabled: false,
//               steps: 30,
//             },
//           ]}
//         />
//       ))}
//       <meshPhongMaterial
//         color="red"
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// }

function Logo() {
  const svgData = useLoader(SVGLoader, "/tiger.svg");
  const shapes = useMemo(() => {
    return svgData.paths.map((p) => p.toShapes(true));
  }, [svgData]);

  return (
    <mesh
      scale={0.01}
      rotation={[Math.PI, 0, 0]}
      position={[-1.7, 2.5, 0]}
    >
      {shapes.map((s, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <extrudeGeometry
            args={[
              s,
              {
                depth: 5,
                bevelEnabled: false,
                steps: 30,
              },
            ]}
          />
          <meshPhongMaterial
            attach="material"
            color={svgData.paths[i].color}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </mesh>
  );
}

export default function Svg() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[300, 300, 4000]}
        />

        <Logo />
      </Canvas>
    </main>
  );
}
