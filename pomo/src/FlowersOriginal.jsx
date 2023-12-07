import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const FlowersOriginal = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/flowers-original-draco.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Material.002"]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.003"]}
          position={[0, 0.672, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.004"]}
          position={[0.003, 1.317, -0.078]}
          rotation={[-0.321, 0, 0]}
          scale={0.717}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials["Material.004"]}
            position={[0, -0.002, -0.022]}
            rotation={[-1.816, 1.482, 1.918]}
            scale={0.912}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials["Material.004"]}
            position={[0, -0.013, -0.042]}
            rotation={[-2.893, -0.06, -3.137]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials["Material.004"]}
            position={[0, -0.002, -0.022]}
            rotation={[0.103, -1.48, 0]}
            scale={0.944}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials["Material.004"]}
            position={[0.009, 0.202, 0.002]}
            rotation={[-0.065, 0.909, 0.133]}
            scale={[0.525, 0.668, 0.527]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials["Material.004"]}
            position={[0, 0.199, -0.005]}
            rotation={[-2.936, 0.622, 3.079]}
            scale={[0.479, 0.609, 0.48]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials["Material.004"]}
            position={[-0.008, 0.192, -0.012]}
            rotation={[-2.909, -0.972, -3.039]}
            scale={[0.525, 0.668, 0.526]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials["Material.004"]}
            position={[0, 0.199, -0.005]}
            rotation={[0.103, -0.565, 0]}
            scale={[0.496, 0.632, 0.496]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-0.211, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-1.158, 1.227, 1.243]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-2.82, 0.213, 3.095]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-1.361, -1.313, -1.46]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.003"]}
          position={[0, 0.672, 0]}
          rotation={[-2.979, 0.809, 3.024]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials["Material.003"]}
          position={[0, 0.672, 0]}
          rotation={[-2.413, -1.035, -2.487]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Material.003"]}
          position={[0.008, 0.778, -0.044]}
          rotation={[0.445, -0.196, 0.092]}
          scale={0.705}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.003"]}
          position={[-0.051, 0.778, 0.029]}
          rotation={[2.686, 0.762, -2.816]}
          scale={0.705}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["Material.003"]}
          position={[0.044, 0.778, 0.043]}
          rotation={[2.927, -1.145, 2.945]}
          scale={0.705}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.004"]}
          position={[-0.097, 1.159, 0.097]}
          rotation={[0.349, 0.216, 0.331]}
          scale={0.5}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019.geometry}
            material={materials["Material.004"]}
            position={[0, -0.002, -0.022]}
            rotation={[-1.816, 1.482, 1.918]}
            scale={0.912}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane020.geometry}
            material={materials["Material.004"]}
            position={[0, -0.013, -0.042]}
            rotation={[-2.965, -0.06, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021.geometry}
            material={materials["Material.004"]}
            position={[0, -0.002, -0.022]}
            rotation={[0.103, -1.48, 0]}
            scale={0.944}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022.geometry}
            material={materials["Material.004"]}
            position={[0.009, 0.202, 0.002]}
            rotation={[-0.065, 0.909, 0.133]}
            scale={[0.525, 0.668, 0.527]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023.geometry}
            material={materials["Material.004"]}
            position={[0, 0.199, -0.005]}
            rotation={[-2.936, 0.622, 3.079]}
            scale={[0.479, 0.609, 0.48]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials["Material.004"]}
            position={[-0.008, 0.192, -0.012]}
            rotation={[-2.909, -0.972, -3.039]}
            scale={[0.525, 0.668, 0.526]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025.geometry}
            material={materials["Material.004"]}
            position={[0, 0.199, -0.005]}
            rotation={[0.103, -0.565, 0]}
            scale={[0.496, 0.632, 0.496]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-0.211, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-1.158, 1.227, 1.243]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-2.82, 0.213, 3.095]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-1.361, -1.313, -1.46]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["Material.004"]}
          position={[0.162, 1.177, 0.089]}
          rotation={[1.006, 0.831, -0.868]}
          scale={0.5}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane031.geometry}
            material={materials["Material.004"]}
            position={[0, -0.002, -0.022]}
            rotation={[-1.816, 1.482, 1.918]}
            scale={0.912}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane032.geometry}
            material={materials["Material.004"]}
            position={[0, -0.013, -0.042]}
            rotation={[-2.965, -0.06, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033.geometry}
            material={materials["Material.004"]}
            position={[0, -0.002, -0.022]}
            rotation={[0.103, -1.48, 0]}
            scale={0.944}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034.geometry}
            material={materials["Material.004"]}
            position={[0.009, 0.202, 0.002]}
            rotation={[-0.065, 0.909, 0.133]}
            scale={[0.525, 0.668, 0.527]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035.geometry}
            material={materials["Material.004"]}
            position={[0, 0.199, -0.005]}
            rotation={[-2.936, 0.622, 3.079]}
            scale={[0.479, 0.609, 0.48]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036.geometry}
            material={materials["Material.004"]}
            position={[-0.008, 0.192, -0.012]}
            rotation={[-2.909, -0.972, -3.039]}
            scale={[0.525, 0.668, 0.526]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane037.geometry}
            material={materials["Material.004"]}
            position={[0, 0.199, -0.005]}
            rotation={[0.103, -0.565, 0]}
            scale={[0.496, 0.632, 0.496]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane038.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-0.211, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane039.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-1.158, 1.227, 1.243]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-2.82, 0.213, 3.095]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041.geometry}
            material={materials["Material.004"]}
            position={[0, -0.02, -0.003]}
            rotation={[-1.361, -1.313, -1.46]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials["Material.003"]}
          position={[0, 0.089, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Material.003"]}
          position={[0.067, 0.092, -0.115]}
          rotation={[-2.905, 0.554, 2.974]}
          scale={0.926}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Material.003"]}
          position={[0, 0.089, 0]}
          rotation={[-2.859, -1.173, -2.906]}
          scale={0.926}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.005"]}
        position={[-0.352, 0, -1.086]}
        scale={0.672}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials["Material.004"]}
        position={[0.321, 0.06, -0.626]}
        rotation={[-2.242, -0.247, 3.005]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials["Material.004"]}
        position={[0.29, 0.06, -0.709]}
        rotation={[-0.959, -0.383, -0.926]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials["Material.004"]}
        position={[0.077, 0.06, -0.909]}
        rotation={[-2.219, -0.31, 3.089]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["Material.003"]}
        position={[0.385, -0.002, -1.221]}
        rotation={[-1.993, 1.132, 2.472]}
        scale={0.704}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials["Material.004"]}
        position={[-1.027, 0.06, -0.253]}
        rotation={[-0.969, -0.4, -0.952]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials["Material.004"]}
        position={[-1.083, 0.06, -0.182]}
        rotation={[-1.512, 0.706, 1.044]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials["Material.004"]}
        position={[-1.143, 0.06, 0.103]}
        rotation={[-0.937, -0.341, -0.862]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={materials["Material.004"]}
        position={[-1.453, 0.06, 0.137]}
        rotation={[-0.87, 0.111, -0.306]}
        scale={0.5}
      />
    </group>
  );
});

useGLTF.preload("/flowers-original-draco.glb");

export default FlowersOriginal;
