"use client";
import React from "react";
import Section from "@/sections/Section";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ThreeModel from "./ThreeModel";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
gsap.registerPlugin(ScrollTrigger);

// In AllSections.tsx
export default function AllSections() {
  return (
    <>
      <div className="all-sections-container ">
        <div className="background-overlay"></div>
        <Section />
        <div className="h-[40vh]"></div>
        <Section2 />
      </div>

      <Section3 />

      <Section4 />
      <Section5 />
    </>
  );
}
