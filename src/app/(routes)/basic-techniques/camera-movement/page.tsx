"use client";

import React, { useMemo, useState } from "react";

import * as THREE from "three";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraControls from "camera-controls";

type ControlsProps = {
  zoom: boolean;
  focus: any;
  pos?: THREE.Vector3;
  look?: THREE.Vector3;
};
// /**
//  * References:
//  *
//  * - [Zoomable Cloud](https://codesandbox.io/p/sandbox/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=%2Fsrc%2FApp.js%3A25%2C1)
//  */
CameraControls.install({ THREE });
const randomPos = (min = 5, max = -5) =>
  Math.random() * (max - min) + min;

/**
 * You can also use [Drei's `useBounds` hook](https://www.reddit.com/r/threejs/comments/wwhdwi/comment/iln1uxu/?utm_source=share&utm_medium=web2x&context=3)
 *
 * Uses [the Camera Controls package](https://github.com/yomotsu/camera-controls?tab=readme-ov-file)
 */
function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}: ControlsProps) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement]
  );

  return useFrame((state, delta) => {
    zoom
      ? pos.set(focus.x, focus.y, focus.z + 0.2)
      : pos.set(0, 0, 5);
    zoom
      ? look.set(focus.x, focus.y, focus.z - 0.2)
      : look.set(0, 0, 4);

    state.camera.position.lerp(pos, 0.5);
    state.camera.updateProjectionMatrix();

    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    return controls.update(delta);
  });
}

function Cloud({
  momentsData,
  zoomToView,
}: {
  momentsData: any;
  zoomToView: any;
}) {
  return (
    <>
      <mesh
        position={[1, 1, 1]}
        onClick={(e) =>
          zoomToView({
            ...e.object.position,
            z: e.object.position.z + 3,
          })
        }
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh
        position={[1, -3, -2]}
        onClick={(e) =>
          zoomToView({
            ...e.object.position,
            z: e.object.position.z + 3,
          })
        }
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}

export default function App() {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState<THREE.Vector3>();

  const momentsArray = useMemo(
    () =>
      Array.from({ length: 500 }, () => ({
        color: "red",
        position: [randomPos(), randomPos(), randomPos()],
      })),
    []
  );

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas linear camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight
          position={[150, 150, 150]}
          intensity={0.55}
        />
        <OrbitControls />

        <Controls zoom={zoom} focus={focus} />
        <Cloud
          momentsData={momentsArray}
          zoomToView={(focusRef: any) => (
            setZoom(!zoom), setFocus(focusRef)
          )}
        />
      </Canvas>
    </main>
  );
}
