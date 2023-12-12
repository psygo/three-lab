"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";

function Sphere() {
  return (
    <mesh position={[1, 2, 1]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ fov: 70, position: [0, 2, 15] }}
      >
        <OrbitControls />
        <color attach="background" args={["#191920"]} />
        <Environment preset="city" />

        <group position={[0, -0.5, 0]}>
          <Sphere />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              mirror={0}
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </group>
      </Canvas>
    </main>
  );
}
