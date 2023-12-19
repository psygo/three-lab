"use client";

import Link from "next/link";

import "./home.scss";

export default function Home() {
  return (
    <main>
      <h1>Philippe Fanaro&apos;s Three.js Lab</h1>

      <ul>
        <li>
          Basic Techniques
          <ul>
            <li>
              <Link href="/basic-techniques/simple">
                Simple
              </Link>
            </li>
            <li>
              <Link href="/basic-techniques/spinning-boxes">
                Spinning Geometries
              </Link>
            </li>
            <li>
              <Link href="/basic-techniques/reflective-plane">
                Reflective Plane
              </Link>
            </li>
            <li>
              <Link href="/basic-techniques/basic-env-map">
                Environment Mapping
              </Link>
            </li>
            <li>
              <Link href="/basic-techniques/camera-movement">
                Camera Movement
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Post-Processing
          <ul>
            <li>
              <Link href="/post-processing/bloom-filter">
                Bloom Filter
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Extrusion
          <ul>
            <li>
              <Link href="/extrusion/basic-extrusion">
                Simple
              </Link>
            </li>
          </ul>
        </li>
        <li>
          HTML and Text
          <ul>
            <li>
              <Link href="/html-and-text/text-3d">
                3D Text
              </Link>
            </li>
            <li>
              <Link href="/html-and-text/iframe-positioning">
                iframe Positioning
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Shaders
          <ul>
            <li>
              <Link href="/shaders/basic-custom-shader">
                Basic Custom Shader
              </Link>
            </li>
          </ul>
        </li>
        <li>
          SVG
          <ul>
            <li>
              <Link href="/svg/basic-svg">SVG Loading</Link>
            </li>
            <li>
              <Link href="/svg/svg-to-shape">
                SVG to Shape
              </Link>
            </li>
            <li>
              <Link href="/svg/svg-mesh-3d">
                SVG Mesh 3D
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Physics
          <ul>
            <li>
              <Link href="/physics/simple-rapier">
                Simple Rapier
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Others
          <ul>
            <li>
              <Link href="/others/decal">Decal</Link>
            </li>
            <li>
              <Link href="/others/hover-on-face">
                Hover on Face
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
