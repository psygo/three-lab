"use client";

import { Suspense, useEffect, useRef } from "react";

// @ts-ignore
import loadSvg from "load-svg";
// @ts-ignore
import { parse } from "extract-svg-path";

// @ts-ignore
import createGeometry from "three-simplicial-complex";
// @ts-ignore
import svgMesh3d from "svg-mesh-3d";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import flame from "../../../../public/flame.svg";

/**
 * [Trying to make things work](https://stackoverflow.com/q/77662432/4756173)
 */
export function SvgButton() {
  const ref = useRef(null);

  useEffect(() => {
    loadSvg(flame, (err: any, svg: any) => {
      const svgPath = parse(/* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19.61" viewBox="0 0 28 19.61">
          <g>
            <path class="cls-1" d="M18.93,3.61l-.28,0v3l.28,0c.41-.07.79-.5.79-1.7S19.39,3.54,18.93,3.61Z"/>
            <path class="cls-1" d="M23.19,0,0,3.11V16.83l5,2.78,23-3.09V2.71ZM1.28,15.56V4l1.94-.26v9.66l2.11-.28L5.61,15Zm7.53-1-2.27.3L4.87,3.56l2.07-.27s.46,5,.69,7.44h0c.21-2.52.63-7.63.63-7.63l2.06-.27Zm7-4.05c0,2.19-.8,3.29-2.47,3.54s-2.46-.6-2.46-2.8V2.76c.77-.11,1.16-.14,1.94-.25v8.62c0,.75.2,1,.53.93s.55-.35.55-1.09V2.34l1.91-.25Zm3-1.68-.21,0v4.38l-1.94.26V2s1.31-.16,2.16-.29c1.9-.26,2.88.49,2.88,3C21.75,7,20.82,8.53,18.86,8.82Z"/>
          </g>
        </svg>
      `);
      const meshComplex = svgMesh3d(svgPath, {
        delaunay: false,
        scale: 4,
      });

      if (ref.current)
        // @ts-ignore
        ref.current.geometry = createGeometry(meshComplex);
    });
  }, []);

  useFrame(({ pointer }) => {
    // @ts-ignore
    ref.current!.rotation.y += Math.sin(pointer.x);
  });

  return (
    <>
      <mesh ref={ref} />
    </>
  );
}

function Content() {
  return (
    <Suspense fallback={null}>
      <SvgButton />
      <meshDepthMaterial />
    </Suspense>
  );
}

export default function SvgMesh3d() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[300, 300, 4000]}
        />

        <Content />
      </Canvas>
    </main>
  );
}
