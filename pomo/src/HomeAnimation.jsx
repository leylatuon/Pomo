import { useThree, extend, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import gsap from 'gsap';
import Fern from "./Fern.jsx";
import Sprout from "./Sprout.jsx";
import Leaf from "./Leaf.jsx";
import FlowersOriginal from "./FlowersOriginal.jsx";

export default function HomeAnimation() {
  const { scene, camera, gl } = useThree();
  const objectDistance = 4;
  const introCardOffset = -5.5;
  const groupRef = useRef();
  const flowerRef = useRef();
  const sproutRef = useRef();
  const leafRef = useRef();
  const fernRef = useRef();

  const sectionMeshes = [flowerRef, sproutRef, leafRef, fernRef];
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const particles = useMemo(() => {
    const particlesCount = 400;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // (x,y,z) (Math.random() - 0.5) * 10 just gives more spread from -5 to 5
      // for y we're spreading across the sections + the space between the sections
      positions[i * 3] =  (Math.random() - 0.5) * 10; 
      positions[i * 3 + 1] = objectDistance * 0.5 - Math.random() * objectDistance * 4;
      positions[i * 3 + 2] =  (Math.random() - 0.5) * 10;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: '#FFFFFF',
      sizeAttenuation: true,
      size: 0.03
    });

    return new THREE.Points(particlesGeometry, particlesMaterial);
  }, []);

  scene.remove(camera);
  const parallaxGroup = new THREE.Group();
  parallaxGroup.add(camera);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const minScroll = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollPosition >= minScroll && scrollPosition <= maxScroll) {
        setScrollY(scrollPosition);
      }
      const newSection = Math.round(scrollPosition / window.innerHeight);

      // Animate when new section reacted
      if(newSection !== currentSection) {
        setCurrentSection(newSection);

        gsap.to(sectionMeshes[newSection].current.rotation, {
          duration: 3,
          ease: 'power2.inOut',
          x: '+=0',
          y: '+=30',
          z: '+=.075'
        });
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
  }, [currentSection, sectionMeshes]);

  useFrame((state, delta) => {
    camera.position.y = (-scrollY / window.innerHeight) * objectDistance;

    const parallaxX = cursorX;
    const parallaxY = -cursorY;

    parallaxGroup.position.x = parallaxX;
    parallaxGroup.position.y = parallaxY;
    if (flowerRef.current) {
      flowerRef.current.rotation.y += delta * 0.25;
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
      <primitive object={particles}  position={[-2, introCardOffset, 0]}/>
      <group ref={groupRef}>
        <FlowersOriginal
          ref={flowerRef}
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
