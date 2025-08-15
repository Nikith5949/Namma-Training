"use client";
import React from "react";
import Section from "@/sections/Section";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas } from "@react-three/fiber";
// import ThreeModel from "./ThreeModel";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import { section1bgimg } from "@/components/all_assets";

gsap.registerPlugin(ScrollTrigger);

// In AllSections.tsx
export default function AllSections() {
  return (
    <>
      <div className="all-sections-container ">
        <div
          className="fixed top-0 left-0 w-full h-full -z-10
             before:content-[''] before:absolute before:inset-0 
             before:bg-gradient-to-b before:from-[rgba(12,12,12,0.592)] before:to-[rgba(17,17,17,0.59)]"
          style={{
            background: `url(${section1bgimg}) no-repeat center center fixed`,
            backgroundSize: "cover",
          }}
        />
        <Section />
        <div className="h-[10vh] sm:h-[20vh]  md:h-[40vh] lg:h-[40vh]"></div>
        <Section2 />
      </div>

      <Section3 />

      <Section4 />
      <Section5 />
    </>
  );
}
