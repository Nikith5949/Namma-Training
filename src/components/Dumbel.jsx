import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Dumbel(props) {
  const { nodes, materials } = useGLTF("/assets/iron_dumbel.glb");

  // Create teal materials
  const tealMaterial = new THREE.MeshStandardMaterial({
    color: "#008080", // Teal color
    metalness: 0.8,
    roughness: 0.2,
  });

  const darkTealMaterial = new THREE.MeshStandardMaterial({
    color: "#006666", // Darker teal for weights
    metalness: 0.9,
    roughness: 0.1,
  });

  return (
    <group scale={[35, 35, 35]} {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 47.992, 0]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[7.751, 7.751, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Grappler_Grappler_0.geometry}
            material={tealMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Grappler_Weight_0.geometry}
            material={darkTealMaterial}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/iron_dumbel.glb");
