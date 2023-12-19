"use client";

import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus } from "@react-three/drei";
import {
  Physics,
  RigidBody,
  CuboidCollider,
} from "@react-three/rapier";

export default function Simple() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls />

        <Suspense>
          <Physics debug>
            <RigidBody colliders={"hull"} restitution={2}>
              <Torus />
            </RigidBody>

            <CuboidCollider
              position={[0, -2, 0]}
              args={[20, 0.5, 20]}
            />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
