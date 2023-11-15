import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import Experience from "./Experience.jsx";
import AnimationsContext from "./AnimationsContext";
import * as THREE from "three";
import React, { useState } from "react";

const App = () => {
  const [playAllAnimations, setPlayAllAnimations] = useState(() => () => {});

  return (
    <AnimationsContext.Provider
      value={{ playAllAnimations, setPlayAllAnimations }}
    >
      <button onClick={playAllAnimations}>Play Animations</button>

      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
      >
        <Experience />
      </Canvas>
    </AnimationsContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
