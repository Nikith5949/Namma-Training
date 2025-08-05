import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dumbel } from "./Dumbel";

gsap.registerPlugin(ScrollTrigger);
const ThreeModel = () => {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera
        fov={50}
        near={1}
        far={1000}
        makeDefault
        position={[0, 0, 90]}
      />
      <Environment preset="city" />
      <Dumbel />
      <axesHelper args={[500]} />
    </>
  );
};

export default ThreeModel;
