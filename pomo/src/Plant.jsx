import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function Plant(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF("/plantgrowth.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);

  useEffect(() => {
    // Play all animations at once
    for (const actionName in actions) {
      if (actions[actionName]) {
        actions[actionName].reset().play();
      }
    }
    // This will log all the actions, you may remove it if not needed for production
    console.log(actions);
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plant" position={[0, 0.924, 0]}>
          <mesh
            name="Stem"
            castShadow
            receiveShadow
            geometry={nodes.Stem.geometry}
            material={materials.PlantMat}
            position={[0, -1.116, 0]}
            scale={0.126}
          >
            <mesh
              name="Leaf1"
              castShadow
              receiveShadow
              geometry={nodes.Leaf1.geometry}
              material={materials.PlantMat}
              position={[0.204, 1.673, 0.131]}
              rotation={[-2.447, -0.797, -2.885]}
              scale={0.403}
            />
            <mesh
              name="Leaf2"
              castShadow
              receiveShadow
              geometry={nodes.Leaf2.geometry}
              material={materials.PlantMat}
              position={[0.183, 2.407, -0.051]}
              rotation={[-0.848, 0.555, 0.023]}
              scale={0.403}
            />
            <mesh
              name="Leaf3"
              castShadow
              receiveShadow
              geometry={nodes.Leaf3.geometry}
              material={materials.PlantMat}
              position={[0.154, 3.413, 0.037]}
              rotation={[-2.377, 0.541, -2.982]}
              scale={0.403}
            />
            <mesh
              name="Leaf4"
              castShadow
              receiveShadow
              geometry={nodes.Leaf4.geometry}
              material={materials.PlantMat}
              position={[0.126, 4.392, -0.073]}
              scale={0}
            />
            <mesh
              name="Leaf5"
              castShadow
              receiveShadow
              geometry={nodes.Leaf5.geometry}
              material={materials.PlantMat}
              position={[0.089, 5.697, 0.038]}
              scale={0}
            />
            <mesh
              name="Leaf6"
              castShadow
              receiveShadow
              geometry={nodes.Leaf6.geometry}
              material={materials.PlantMat}
              position={[0.052, 6.995, 0.012]}
              scale={0}
            />
            <mesh
              name="Leaf7"
              castShadow
              receiveShadow
              geometry={nodes.Leaf7.geometry}
              material={materials.PlantMat}
              position={[0.027, 7.899, 0]}
              scale={0}
            />
          </mesh>
        </group>
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.PlaneMat}
        />
        <mesh
          name="Pot"
          castShadow
          receiveShadow
          geometry={nodes.Pot.geometry}
          material={materials.PotMat}
        />
        <mesh
          name="Dirt"
          castShadow
          receiveShadow
          geometry={nodes.Dirt.geometry}
          material={materials.DirtMat}
          position={[0, 1.054, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/plantgrowth.glb");
