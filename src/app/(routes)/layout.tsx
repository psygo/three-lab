import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Three Lab",
  description:
    "Three.js Lab with React Three Fiber and Drei",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0 }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
