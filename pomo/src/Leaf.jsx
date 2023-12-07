import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Leaf = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/leaf-draco.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        material={materials["Material.002"]}
        position={[0, 0.097, 0]}
        rotation={[0, 0, -0.01]}
        scale={0.693}
      />
    </group>
  );
});

useGLTF.preload("/leaf-draco.glb");
export default Leaf;
