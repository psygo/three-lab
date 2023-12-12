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
      </ul>
    </main>
  );
}
