import { useThree, extend, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import Fern from "./Fern.jsx";
import Sprout from "./Sprout.jsx";
import Leaf from "./Leaf.jsx";
import FlowersOriginal from "./FlowersOriginal.jsx";

export default function HomeAnimation() {
  const { scene, camera, gl } = useThree();
  const objectDistance = 4;
  const introCardOffset = -5;
  const groupRef = useRef();
  const clockRef = useRef();
  const sproutRef = useRef();
  const leafRef = useRef();
  const fernRef = useRef();

  // const sectionMeshes = [Fern, Sprout, Sprout];
  const [scrollY, setScrollY] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  scene.remove(camera);
  const parallaxGroup = new THREE.Group();
  parallaxGroup.add(camera);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const minScroll = 0; // Minimum valid scroll position
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight; // Maximum valid scroll position

      if (scrollPosition >= minScroll && scrollPosition <= maxScroll) {
        setScrollY(scrollPosition);
      }
    };

    const handleMouseMove = (event) => {
      setCursorX(event.clientX / window.innerWidth - 0.75);
      setCursorY(event.clientY / window.innerHeight - 0.75);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    camera.position.y = (-scrollY / window.innerHeight) * objectDistance;

    // const parallaxX = cursorX;
    // const parallaxY = -cursorY;
    // parallaxGroup.position.x +=
    //   (parallaxX - parallaxGroup.position.x) * 5 * delta;
    // parallaxGroup.position.y +=
    //   (parallaxY - parallaxGroup.position.y) * 5 * delta;

    // parallaxGroup.position.x = parallaxX;
    // parallaxGroup.position.y = parallaxY;
    if (clockRef.current) {
      clockRef.current.rotation.y += delta * 0.25;
    }
    if (sproutRef.current) {
      sproutRef.current.rotation.y += delta * 0.75;
    }
    if (leafRef.current) {
      leafRef.current.rotation.y += delta * 0.5;
    }
    if (fernRef.current) {
      fernRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.25} />
      <primitive object={parallaxGroup} />
      <group ref={groupRef}>
        <FlowersOriginal
          ref={clockRef}
          scale={1}
          position={[-2, introCardOffset, 0]}
        />
        <Sprout
          ref={sproutRef}
          scale={1}
          position={[2, -objectDistance * 1 + introCardOffset, 0]}
        />
        <Leaf
          ref={leafRef}
          scale={0.5}
          position={[-2, -objectDistance * 2 + introCardOffset, 0]}
        />
        <Fern
          ref={fernRef}
          scale={0.25}
          position={[2, -objectDistance * 3 + introCardOffset, 0]}
        />
      </group>
    </>
  );
}
