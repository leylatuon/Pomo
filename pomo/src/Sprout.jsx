import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Sprout = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/sprout-draco.glb");

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.002"]}
        position={[0, 0.4, 0]}
        scale={0.158}
      />
    </group>
  );
});

useGLTF.preload("/sprout-draco.glb");

export default Sprout;
