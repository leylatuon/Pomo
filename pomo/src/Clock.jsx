import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Clock = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/clock-draco.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        name="Vert001"
        castShadow
        receiveShadow
        geometry={nodes.Vert001.geometry}
        material={materials["Material.002"]}
        rotation={[0, 0, 2.582]}
      />
      <group name="Circle004">
        <mesh
          name="Circle005_2"
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={materials.Glass}
        />
        <mesh
          name="Circle005_3"
          castShadow
          receiveShadow
          geometry={nodes.Circle005_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Circle005_4"
          castShadow
          receiveShadow
          geometry={nodes.Circle005_4.geometry}
          material={materials["Material.002"]}
        />
        {/* <mesh
          name="Circle005_5"
          castShadow
          receiveShadow
          geometry={nodes.Circle005_5.geometry}
          material={materials.Material}
        /> */}
      </group>
      <mesh
        name="Circle005"
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["Material.004"]}
      />
      <group name="Empty" />
      <mesh
        name="Vert003"
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI, 0, 2.582]}
        scale={-1}
      />
    </group>
  );
});

useGLTF.preload("/clock-draco.glb");
export default Clock;
