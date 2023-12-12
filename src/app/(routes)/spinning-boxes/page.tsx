"use client";

import { useRef, useState } from "react";

import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
  Vector3,
} from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

type BoxMeshRef = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
>;

type BoxProps = {
  position: number[];
};

/**
 * Source [CodeSandbox by drcmda](https://codesandbox.io/s/basic-demo-rrppl0y8l4)
 */
function Box({ position }: BoxProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<BoxMeshRef>(null);

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (_, delta) => (ref.current!.rotation.x += delta)
  );

  // Return the view, these are regular Threejs elements expressed in JSX
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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default function App() {
  return (
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
  );
}
