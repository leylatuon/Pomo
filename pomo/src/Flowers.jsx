import React, { useRef, useCallback, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useAnimationsContext } from "./AnimationsContext.jsx";
import * as THREE from "three";

export default function Flowers(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/flowers.glb");
  const { actions } = useAnimations(animations, group);

  const { setPlayAllAnimations } = useAnimationsContext();

  const playAllAnimations = useCallback(() => {
    Object.values(actions).forEach((action) => {
      if (action && typeof action.play === "function") {
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true; // Keeps animation on last keyframe
        action.reset().play();
      }
    });
  }, [actions]);

  useEffect(() => {
    setPlayAllAnimations(() => playAllAnimations);
  }, [playAllAnimations, setPlayAllAnimations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Circle"
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.002"]}
        >
          <mesh
            name="Flower1"
            castShadow
            receiveShadow
            geometry={nodes.Flower1.geometry}
            material={materials["Material.004"]}
            position={[0.002, 0.776, -0.044]}
            rotation={[-0.321, 0, 0]}
            scale={0.026}
          >
            <mesh
              name="Plane002"
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials["Material.004"]}
              position={[0, -0.002, -0.022]}
              rotation={[-1.816, 1.482, 1.918]}
              scale={0.912}
            />
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials["Material.004"]}
              position={[0, -0.013, -0.042]}
              rotation={[-2.893, -0.06, -3.137]}
            />
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["Material.004"]}
              position={[0, -0.002, -0.022]}
              rotation={[0.103, -1.48, 0]}
              scale={0.944}
            />
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials["Material.004"]}
              position={[0.009, 0.202, 0.002]}
              rotation={[-0.065, 0.909, 0.133]}
              scale={[0.525, 0.668, 0.527]}
            />
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials["Material.004"]}
              position={[0, 0.199, -0.005]}
              rotation={[-2.936, 0.622, 3.079]}
              scale={[0.479, 0.609, 0.48]}
            />
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials["Material.004"]}
              position={[-0.008, 0.192, -0.012]}
              rotation={[-2.909, -0.972, -3.039]}
              scale={[0.525, 0.668, 0.526]}
            />
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials["Material.004"]}
              position={[0, 0.199, -0.005]}
              rotation={[0.103, -0.565, 0]}
              scale={[0.496, 0.632, 0.496]}
            />
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-0.211, 0, 0]}
            />
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-1.158, 1.227, 1.243]}
            />
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-2.82, 0.213, 3.095]}
            />
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-1.361, -1.313, -1.46]}
            />
          </mesh>
          <mesh
            name="Flower2"
            castShadow
            receiveShadow
            geometry={nodes.Flower2.geometry}
            material={materials["Material.004"]}
            position={[-0.039, 0.779, 0.021]}
            rotation={[0.349, 0.216, 0.331]}
            scale={0.056}
          >
            <mesh
              name="Plane019"
              castShadow
              receiveShadow
              geometry={nodes.Plane019.geometry}
              material={materials["Material.004"]}
              position={[0, -0.002, -0.022]}
              rotation={[-1.816, 1.482, 1.918]}
              scale={0.912}
            />
            <mesh
              name="Plane020"
              castShadow
              receiveShadow
              geometry={nodes.Plane020.geometry}
              material={materials["Material.004"]}
              position={[0, -0.013, -0.042]}
              rotation={[-2.965, -0.06, Math.PI]}
            />
            <mesh
              name="Plane021"
              castShadow
              receiveShadow
              geometry={nodes.Plane021.geometry}
              material={materials["Material.004"]}
              position={[0, -0.002, -0.022]}
              rotation={[0.103, -1.48, 0]}
              scale={0.944}
            />
            <mesh
              name="Plane022"
              castShadow
              receiveShadow
              geometry={nodes.Plane022.geometry}
              material={materials["Material.004"]}
              position={[0.009, 0.202, 0.002]}
              rotation={[-0.065, 0.909, 0.133]}
              scale={[0.525, 0.668, 0.527]}
            />
            <mesh
              name="Plane023"
              castShadow
              receiveShadow
              geometry={nodes.Plane023.geometry}
              material={materials["Material.004"]}
              position={[0, 0.199, -0.005]}
              rotation={[-2.936, 0.622, 3.079]}
              scale={[0.479, 0.609, 0.48]}
            />
            <mesh
              name="Plane024"
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Material.004"]}
              position={[-0.008, 0.192, -0.012]}
              rotation={[-2.909, -0.972, -3.039]}
              scale={[0.525, 0.668, 0.526]}
            />
            <mesh
              name="Plane025"
              castShadow
              receiveShadow
              geometry={nodes.Plane025.geometry}
              material={materials["Material.004"]}
              position={[0, 0.199, -0.005]}
              rotation={[0.103, -0.565, 0]}
              scale={[0.496, 0.632, 0.496]}
            />
            <mesh
              name="Plane026"
              castShadow
              receiveShadow
              geometry={nodes.Plane026.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-0.211, 0, 0]}
            />
            <mesh
              name="Plane027"
              castShadow
              receiveShadow
              geometry={nodes.Plane027.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-1.158, 1.227, 1.243]}
            />
            <mesh
              name="Plane028"
              castShadow
              receiveShadow
              geometry={nodes.Plane028.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-2.82, 0.213, 3.095]}
            />
            <mesh
              name="Plane029"
              castShadow
              receiveShadow
              geometry={nodes.Plane029.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-1.361, -1.313, -1.46]}
            />
          </mesh>
          <mesh
            name="Flower3"
            castShadow
            receiveShadow
            geometry={nodes.Flower3.geometry}
            material={materials["Material.004"]}
            position={[0.069, 0.766, 0.049]}
            rotation={[0.837, 1.071, -0.717]}
            scale={0.031}
          >
            <mesh
              name="Plane031"
              castShadow
              receiveShadow
              geometry={nodes.Plane031.geometry}
              material={materials["Material.004"]}
              position={[0, -0.002, -0.022]}
              rotation={[-1.816, 1.482, 1.918]}
              scale={0.912}
            />
            <mesh
              name="Plane032"
              castShadow
              receiveShadow
              geometry={nodes.Plane032.geometry}
              material={materials["Material.004"]}
              position={[0, -0.013, -0.042]}
              rotation={[-2.965, -0.06, -Math.PI]}
            />
            <mesh
              name="Plane033"
              castShadow
              receiveShadow
              geometry={nodes.Plane033.geometry}
              material={materials["Material.004"]}
              position={[0, -0.002, -0.022]}
              rotation={[0.103, -1.48, 0]}
              scale={0.944}
            />
            <mesh
              name="Plane034"
              castShadow
              receiveShadow
              geometry={nodes.Plane034.geometry}
              material={materials["Material.004"]}
              position={[0.009, 0.202, 0.002]}
              rotation={[-0.065, 0.909, 0.133]}
              scale={[0.525, 0.668, 0.527]}
            />
            <mesh
              name="Plane035"
              castShadow
              receiveShadow
              geometry={nodes.Plane035.geometry}
              material={materials["Material.004"]}
              position={[0, 0.199, -0.005]}
              rotation={[-2.936, 0.622, 3.079]}
              scale={[0.479, 0.609, 0.48]}
            />
            <mesh
              name="Plane036"
              castShadow
              receiveShadow
              geometry={nodes.Plane036.geometry}
              material={materials["Material.004"]}
              position={[-0.008, 0.192, -0.012]}
              rotation={[-2.909, -0.972, -3.039]}
              scale={[0.525, 0.668, 0.526]}
            />
            <mesh
              name="Plane037"
              castShadow
              receiveShadow
              geometry={nodes.Plane037.geometry}
              material={materials["Material.004"]}
              position={[0, 0.199, -0.005]}
              rotation={[0.103, -0.565, 0]}
              scale={[0.496, 0.632, 0.496]}
            />
            <mesh
              name="Plane038"
              castShadow
              receiveShadow
              geometry={nodes.Plane038.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-0.211, 0, 0]}
            />
            <mesh
              name="Plane039"
              castShadow
              receiveShadow
              geometry={nodes.Plane039.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-1.158, 1.227, 1.243]}
            />
            <mesh
              name="Plane040"
              castShadow
              receiveShadow
              geometry={nodes.Plane040.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-2.82, 0.212, 3.095]}
            />
            <mesh
              name="Plane041"
              castShadow
              receiveShadow
              geometry={nodes.Plane041.geometry}
              material={materials["Material.004"]}
              position={[0, -0.02, -0.003]}
              rotation={[-1.361, -1.313, -1.46]}
            />
          </mesh>
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["Material.003"]}
            position={[0, 0.672, 0]}
            rotation={[0.15, 0.063, 0.04]}
            scale={0.733}
          />
          <mesh
            name="Plane013"
            castShadow
            receiveShadow
            geometry={nodes.Plane013.geometry}
            material={materials["Material.003"]}
            position={[0, 0.672, 0]}
            rotation={[3.051, 0.887, 3.105]}
            scale={0.733}
          />
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials["Material.003"]}
            position={[0, 0.672, 0]}
            rotation={[-2.719, -1.383, -2.782]}
            scale={0.733}
          />
          <mesh
            name="Plane015"
            castShadow
            receiveShadow
            geometry={nodes.Plane015.geometry}
            material={materials["Material.003"]}
            position={[0.002, 0.778, -0.001]}
            rotation={[0.816, -0.403, 0.437]}
            scale={0.139}
          />
          <mesh
            name="Plane016"
            castShadow
            receiveShadow
            geometry={nodes.Plane016.geometry}
            material={materials["Material.003"]}
            position={[-0.01, 0.778, 0.013]}
            rotation={[2.236, 0.706, -2.231]}
            scale={0.139}
          />
          <mesh
            name="Plane017"
            castShadow
            receiveShadow
            geometry={nodes.Plane017.geometry}
            material={materials["Material.003"]}
            position={[0.009, 0.778, 0.016]}
            rotation={[1.89, -1.029, 1.731]}
            scale={0.139}
          />
          <mesh
            name="Stem1"
            castShadow
            receiveShadow
            geometry={nodes.Stem1.geometry}
            material={materials["Material.003"]}
            position={[0.001, 0.629, -0.034]}
            scale={0.12}
          />
          <mesh
            name="Stem2"
            castShadow
            receiveShadow
            geometry={nodes.Stem2.geometry}
            material={materials["Material.003"]}
            position={[0.009, 0.472, -0.04]}
            rotation={[-2.905, 0.554, 2.974]}
            scale={0.266}
          />
          <mesh
            name="Stem3"
            castShadow
            receiveShadow
            geometry={nodes.Stem3.geometry}
            material={materials["Material.003"]}
            position={[0.093, 0.5, 0.04]}
            rotation={[2.719, -1.234, 2.674]}
            scale={0.224}
          />
        </mesh>
        <mesh
          name="Plane045"
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Material.005"]}
          position={[-0.352, 0, -1.086]}
          scale={0.672}
        />
        <mesh
          name="Plane046"
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials["Material.004"]}
          position={[0.321, 0.06, -0.626]}
          rotation={[-2.242, -0.247, 3.005]}
          scale={0.5}
        />
        <mesh
          name="Plane047"
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["Material.004"]}
          position={[0.29, 0.06, -0.709]}
          rotation={[-0.959, -0.383, -0.926]}
          scale={0.5}
        />
        <mesh
          name="Plane048"
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials["Material.004"]}
          position={[0.077, 0.06, -0.909]}
          rotation={[-2.219, -0.31, 3.089]}
          scale={0.5}
        />
        <mesh
          name="Plane049"
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.003"]}
          position={[0.385, -0.002, -1.221]}
          rotation={[-1.993, 1.132, 2.472]}
          scale={0.704}
        />
        <mesh
          name="Plane050"
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.004"]}
          position={[-1.027, 0.06, -0.253]}
          rotation={[-0.969, -0.4, -0.952]}
          scale={0.5}
        />
        <mesh
          name="Plane051"
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials["Material.004"]}
          position={[-1.083, 0.06, -0.182]}
          rotation={[-1.512, 0.706, 1.044]}
          scale={0.5}
        />
        <mesh
          name="Plane052"
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials["Material.004"]}
          position={[-1.143, 0.06, 0.103]}
          rotation={[-0.937, -0.341, -0.862]}
          scale={0.5}
        />
        <group name="Empty001" />
        <mesh
          name="Plane053"
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials["Material.004"]}
          position={[-1.453, 0.06, 0.137]}
          rotation={[-0.87, 0.111, -0.306]}
          scale={0.5}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/flowers.glb");
