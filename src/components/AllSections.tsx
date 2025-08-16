"use client";
import React from "react";
import Section from "@/sections/Section";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import { section1bgimg } from "@/components/all_assets";
import SectionMobile from "@/sections/SectionMobile";

gsap.registerPlugin(ScrollTrigger);

export default function AllSections() {
  return (
    <>
      {/* ✅ Desktop Background */}
      <div
        className="hidden md:block bg-init fixed top-0 left-0 w-full h-full -z-10
         before:content-[''] before:absolute before:inset-0
         before:bg-gradient-to-b before:from-[rgba(12,12,12,0.592)] before:to-[rgba(17,17,17,0.59)]"
        style={{
          background: `url(${section1bgimg}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      />

      {/* ✅ Mobile Background Wrapper */}
      <div
        className="md:hidden relative w-full"
        style={{
          background: `url(${section1bgimg}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70 -z-0"></div>

        {/* All sections inside mobile background */}
        <div className="relative z-10">
          <Section />
          <div className="h-[10vh] sm:h-[20vh]" />
          <Section2 />
          <SectionMobile />
          <Section4 />
          <Section5 />
        </div>
      </div>

      {/* ✅ Desktop Sections */}
      <div className="hidden md:block">
        <Section />
        <div className="h-[10vh] sm:h-[20vh] md:h-[40vh] lg:h-[40vh]" />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </>
  );
}
