"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Philippe Fanaro&apos;s Three.js Lab</h1>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <li>
          Basic Techniques
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
                Environment Mapping
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Post-Processing
          <ul>
            <li>
              <Link href="/bloom-filter">Bloom Filter</Link>
            </li>
          </ul>
        </li>
        <li>
          Extrusion
          <ul>
            <li>
              <Link href="/extrusion">Simple</Link>
            </li>
          </ul>
        </li>
        <li>
          HTML and Text
          <ul>
            <li>
              <Link href="/text-3d">3D Text</Link>
            </li>
            <li>
              <Link href="/iframe-positioning">
                iframe Positioning
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Shaders
          <ul>
            <li>
              <Link href="/basic-custom-shader">
                Basic Custom Shader
              </Link>
            </li>
          </ul>
        </li>
        <li>
          SVG
          <ul>
            <li>
              <Link href="/svg">SVG Loading</Link>
            </li>
            <li>
              <Link href="/svg">SVG to Shape</Link>
            </li>
            <li>
              <Link href="/svg-mesh-3d">SVG Mesh 3D</Link>
            </li>
          </ul>
        </li>
        <li>
          Others
          <ul>
            <li>
              <Link href="/decal">Decal</Link>
            </li>
            <li>
              <Link href="/hover-on-face">
                Hover on Face
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
