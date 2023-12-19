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

type SphereProps = {
  color: string;
  position: THREE.Vector3;
};
function Sphere({ color, position }: SphereProps) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

CameraControls.install({ THREE });

type ControlsProps = {
  zoom: boolean;
  focus: any;
  pos: THREE.Vector3;
  look: THREE.Vector3;
};
/**
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

type SpheresProps = {
  zoomToView: Function;
};
function Spheres({ zoomToView }: SpheresProps) {
  return (
    <group>
      <mesh
        position={[1, 1, 1]}
        onClick={(e) => zoomToView(e.object.position)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh
        position={[1, -3, -2]}
        onClick={(e) => zoomToView(e.object.position)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}

/**
 * References:
 *
 * - [Zoomable Cloud](https://codesandbox.io/p/sandbox/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=%2Fsrc%2FApp.js%3A25%2C1)
 */
export default function CameraMovement() {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({});

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <color attach="background" args={["darkblue"]} />
        <OrbitControls />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />

        <Spheres
          zoomToView={(focusRef: any) => (
            setZoom(!zoom), setFocus(focusRef)
          )}
        />
      </Canvas>
    </main>
  );
}
