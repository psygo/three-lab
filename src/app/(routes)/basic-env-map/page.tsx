"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";

import { useControls } from "leva";

/**
 * Useful Reference: [SBCode - Examples: Shiny Refraction](https://sbcode.net/threejs/refract-reflect/)
 */
export default function BasicEnvMap() {
  const { position } = useControls({
    position: { value: { x: -2, y: 0, z: 0 }, step: 0.1 },
  });

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Environment preset="forest" background />
        <color attach="background" args={["green"]} />
        <OrbitControls />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />

        <mesh
          position={[position.x, position.y, position.z]}
        >
          <icosahedronGeometry args={[1]} />
          <meshPhysicalMaterial
            reflectivity={1}
            transmission={1}
            roughness={0}
            metalness={0}
            clearcoat={0.3}
            clearcoatRoughness={0.25}
            color="black"
            ior={1.5}
          />

          <meshStandardMaterial
            roughness={0.6}
            transparent
            polygonOffset
            polygonOffsetFactor={-10}
          >
            <RenderTexture attach="map" anisotropy={16}>
              <PerspectiveCamera
                makeDefault
                manual
                aspect={0.9 / 0.25}
                position={[0, 0, 5]}
              />
              <color
                attach="background"
                args={["#af2040"]}
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} />
              <Text
                rotation={[0, Math.PI, 0]}
                fontSize={2}
                color="white"
              >
                hello from drei
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </main>
  );
}
