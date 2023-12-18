"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Three.js Lab</h1>

      <ul>
        <li>
          <Link href="/simple">Simple</Link>
        </li>
        <li>
          <Link href="/spinning-boxes">
            Spinning Geometries
          </Link>
        </li>
        <li>
          <Link href="/reflective-plane">
            Reflective Plane
          </Link>
        </li>
        <li>
          <Link href="/basic-env-map">
            Basic Environment Mapping
          </Link>
        </li>
        <li>
          <Link href="/basic-custom-shader">
            Basic Custom Shader
          </Link>
        </li>
        <li>
          <Link href="/decal">Decal</Link>
        </li>
        <li>
          <Link href="/extrusion">Extrusion</Link>
        </li>
        <li>
          <Link href="/svg">SVG</Link>
        </li>
        <li>
          <Link href="/bloom-filter">Bloom Filter</Link>
        </li>
        <li>
          <Link href="/svg-mesh-3d">SVG Mesh 3D</Link>
        </li>
        <li>
          <Link href="/text-3d">3D Text</Link>
        </li>
        <li>
          <Link href="/hover-on-face">Hover on Face</Link>
        </li>
        <li>
          <Link href="/iframe-positioning">
            iframe Positioning
          </Link>
        </li>
      </ul>
    </main>
  );
}
