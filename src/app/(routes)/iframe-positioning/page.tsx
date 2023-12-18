"use client";

import { useRef, useState } from "react";

import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Html,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

/**
 * [Useful Reference](https://youtu.be/SQRqU3N3ehs)
 */
export default function IframePositioning() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Laptop />
      </Canvas>
    </main>
  );
}

export function Laptop() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) ref.current!.rotation.x += delta;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <Environment preset="warehouse" />

      <PresentationControls
        global
        polar={[-0.4, -0.2]}
        azimuth={[-0.4, 0.2]}
      >
        <primitive object={laptop.scene} position-y={-1.2}>
          <Html
            wrapperClass="laptop"
            position={[0, 1.7, -1.5]}
            transform
            distanceFactor={1.16}
            rotation-x={-0.25}
          >
            <iframe
              style={{
                width: "1024px",
                height: "670px",
                border: "none",
                borderRadius: "20px",
              }}
              src="https://fanaro.io"
            />
          </Html>
        </primitive>
      </PresentationControls>

      <OrbitControls />
    </>
  );
}
