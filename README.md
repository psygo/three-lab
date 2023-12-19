# Three Lab

A lab for [Three.js](https://threejs.org/) things, with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), and [Drei](https://github.com/pmndrs/drei).

## Things to Learn

- Basic Techniques
  - [x] Simple Scene
  - [x] 3D Text
  - [x] Camera Move with Transitions
    - [Camera Zoom to Object](https://codesandbox.io/p/sandbox/three-fiber-zoom-to-object-camera-controls-solution-final-sbgx0?file=%2Fsrc%2FApp.js)
  - [x] GLTF Loader
  - [x] Reflective Surfaces
    - [Beautiful Glossy Sphere](https://pierfrancesco-soffritti.medium.com/glossy-spheres-in-three-js-bfd2785d4857)
    - [Drei Reflector](https://onion2k.github.io/r3f-by-example/examples/other/reflector/)
    - [Clear Mirror with Spinning and Bouncing Shapes](https://threejs.org/examples/?q=mir#webgl_mirror)
  - [x] Spinning
  - [x] Environment Mapping
- SVG
  - [x] SVG to Shape
    - [Three.js Examples - `SVGLoader`](https://threejs.org/examples/?q=svg#webgl_loader_svg)
  - [ ] [SVG Mesh 3D](https://github.com/mattdesl/svg-mesh-3d)
- Extrusion
  - [x] Simple
  - [ ] Extrusion from SVG
    - [LogRocket - Extrusion from SVG](https://blog.logrocket.com/bringing-svgs-three-js-svgloader/)
  - [ ] Rotational Extrusion
  - [Super Cool Cylinder to Sphere Extrusion Sandbox](https://codesandbox.io/p/sandbox/r3f-extrude-cylinder-gdvrg?file=%2Fsrc%2Findex.js)
- Post-Processing
  - [x] [Bloom Filter on Hover](https://codesandbox.io/p/sandbox/bloom-hdr-workflow-gnn4yt?file=%2Fsrc%2FApp.js)
  - [Crazy Cool Ring](https://codesandbox.io/p/sandbox/diamond-ring-forked-k9zqx8?file=%2Fsrc%2FApp.js)
  - [Distort Material](https://codesandbox.io/p/sandbox/react-postprocessing-dof-blob-pqrpl?file=%2Fsrc%2FApp.js%3A102%2C14)
- HTML and Text
  - `<iframe>`
    - [x] Positioning
      - Mapping an `<iframe>` onto a Face
        - You can't make it a texture actually.
        - [`<iframe>` positionining with React Three Fiber](https://youtu.be/SQRqU3N3ehs)
  - [Henry Heffernan's Portfolio](https://henryheffernan.com/)
  - [3D HTML](https://discourse.threejs.org/t/how-can-i-embed-an-iframe-in-three-js-3d-modeling/44075/2)
- Shaders
  - [x] Simple
  - [ ] Noise Shader on Top of an Existent Geometry (e.g. Cube)
  - [ ] Galaxy Shader
  - [Sun](https://youtu.be/3krH52AhPqk)
- Physics
  - [ ] Simple with Rapier
  - [ ] Detect when Something Enters Somethings Else (e.g. a basket)
- Others
  - [x] Decal
  - [x] Face Intersection (Hovering)
    - [Stack Overflow - _Hover on Face with React Three Fiber_](https://stackoverflow.com/q/77679154/4756173)
    - [Engine with Highlight on Hover](https://codesandbox.io/p/sandbox/react-pp-outlines-nurp5t?file=%2Fsrc%2FEngine.js%3A33%2C10)
    - [Highlighting Triangles of Faces](https://jsfiddle.net/nkmqt3p2/)

## References

- [Three.js Journey](https://threejs-journey.com/#table-of-content)
  - [Early Examples of Three.js Journey Made with R3F](https://journey.pmnd.rs/)
- [React Three Fiber (R3F)](https://github.com/pmndrs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei?tab=readme-ov-file)
- [Leva GUI Debugging](https://github.com/pmndrs/leva)
- [R3F-Perf](https://github.com/utsuboco/r3f-perf)
- [Free Matcap Textures by emmelleppi](https://github.com/emmelleppi/matcaps)
- [SVG to Mesh 3D](https://github.com/mattdesl/svg-mesh-3d?tab=readme-ov-file)
- [SBCode Tutorials](https://sbcode.net/threejs/raycast-to-displacementmap/)
- [React Three Rapier (Physics Library)](https://github.com/pmndrs/react-three-rapier)
- Shaders:
  - Yuri Artiukh
    - [Fake 3D Image Effect with WebGL](https://github.com/akella/fake3d?tab=readme-ov-file)
    - [Yuri Artiukh's YouTube Channel](https://www.youtube.com/@akella_)
  - Maxime Heckel
    - [Magical World of Particles](https://blog.maximeheckel.com/posts/the-magical-world-of-particles-with-react-three-fiber-and-shaders/)
    - [Frame Buffer Objects (FBO) for handling 100k+ particles](https://blog.maximeheckel.com/posts/the-magical-world-of-particles-with-react-three-fiber-and-shaders/)
    - [Maxime's Showcase of Examples](https://r3f.maximeheckel.com/caustics)
  - [Zoom Distort Effect on Image](https://codesandbox.io/p/sandbox/react-three-fiber-hover-zoom-channel-displacement-4o8gj?file=%2Fsrc%2Findex.js)
- Physics
  - [Snap to 2D Grid when moving](https://codesandbox.io/p/sandbox/plane-project-uexjm?file=%2Fsrc%2FApp.js%3A39%2C2)
  - [Bowling](https://codesandbox.io/p/sandbox/bowling-with-react-three-fiber-react-three-rapier-rpgjiy?file=%2Fsrc%2FApp.jsx)
  - [Pacman Bowl](https://codesandbox.io/p/sandbox/rapier-physics-7e9y1b?file=%2Fsrc%2FApp.js)
- Other Articles and Resources:
  - [Henry Heffernan's Portfolio](https://henryheffernan.com/)
  - [Varun Vachhar on Shaders](https://varun.ca/modular-webgl/)
  - [Wawa Sensei - Mesh Explosion Effect](https://youtu.be/If8Cl2NSNZU)
  - [Twist Mesh](https://stackoverflow.com/a/39767668/4756173)
  - [Shear Mesh](https://stackoverflow.com/a/25647543/4756173)
  - [Text Moebius](https://tympanus.net/codrops/2023/01/20/rotating-twisted-3d-typography-with-three-js-and-shaders/)
