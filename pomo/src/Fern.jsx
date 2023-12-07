import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Fern = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/fern-draco.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={materials["Material.002"]}
        position={[0, 0.215, 0]}
        scale={[0.872, 0.623, 0.872]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001.geometry}
          material={materials["Material.002"]}
          position={[0.038, 6.31, 0]}
          rotation={[-2.015, -1.058, -1.916]}
          scale={0.488}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert003.geometry}
          material={materials["Material.002"]}
          position={[0.131, 1.67, 0]}
          rotation={[-0.441, -0.576, -0.617]}
          scale={0.693}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert004.geometry}
          material={materials["Material.002"]}
          position={[-0.051, 2.03, 0]}
          rotation={[-2.78, 0.323, 2.672]}
          scale={0.693}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert005.geometry}
          material={materials["Material.002"]}
          position={[0.037, 2.921, 0]}
          rotation={[-3.013, -0.127, -2.932]}
          scale={0.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert006.geometry}
          material={materials["Material.002"]}
          position={[-0.073, 4.39, 0]}
          rotation={[-2.953, 0.314, 2.588]}
          scale={0.527}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert007.geometry}
          material={materials["Material.002"]}
          position={[0.038, 5.695, 0]}
          rotation={[-2.668, -0.24, -2.865]}
          scale={0.563}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert008.geometry}
          material={materials["Material.002"]}
          position={[-0.138, 6.994, 0]}
          rotation={[-1.534, 0.736, 1.714]}
          scale={0.574}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert009.geometry}
          material={materials["Material.002"]}
          position={[0, 7.899, 0]}
          rotation={[0, 0, -0.01]}
          scale={0.693}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert010.geometry}
          material={materials["Material.002"]}
          position={[0.079, 6.994, -0.027]}
          rotation={[-0.914, -0.361, -0.232]}
          scale={0.564}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert011.geometry}
          material={materials["Material.002"]}
          position={[-0.106, 3.699, -0.074]}
          rotation={[-0.913, 0.359, 0.625]}
          scale={0.693}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert012.geometry}
          material={materials["Material.002"]}
          position={[0.038, 4.99, 0]}
          rotation={[-0.478, 0.272, 0.294]}
          scale={0.513}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert013.geometry}
          material={materials["Material.002"]}
          position={[-0.073, 3.845, 0]}
          rotation={[-0.241, -0.727, -0.656]}
          scale={0.629}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.004"]}
        position={[0, 1.054, 0]}
      />
    </group>
  );
});

useGLTF.preload("/fern-draco.glb");

export default Fern;
