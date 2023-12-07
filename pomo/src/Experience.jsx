import { extend, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import Plant from "/Plant.jsx";
import Flowers from "/Flowers.jsx";

extend({ OrbitControls });

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Flowers position-y={-0.5}/>
    </>
  );
}
