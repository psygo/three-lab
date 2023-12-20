"use client";

import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import {
  Physics,
  RigidBody,
  CuboidCollider,
} from "@react-three/rapier";

function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-10, 10, 0]}
        intensity={0.4}
      />
      <OrbitControls />

      <RigidBody position={[0, 10, 3]}>
        <Box>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody>
      <RigidBody position={[1, 10, 3]} colliders="ball">
        <Sphere>
          <meshStandardMaterial color="pink" />
        </Sphere>
      </RigidBody>

      {/* [`RigidBody` `type`](https://rapier.rs/docs/user_guides/bevy_plugin/rigid_bodies/#:~:text=Rigid%2Dbody%20type&text=It%20acts%20as%20if%20it,for%20temporarily%20freezing%20a%20body.) */}
      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
}

export default function Simple() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: [10, 10, 10], fov: 30 }}
      >
        <color attach="background" args={["#ececec"]} />
        <OrbitControls />

        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
