"use client";

import React from "react";
import Section from "@/sections/Section";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import SectionMobile from "@/sections/SectionMobile";
import NammaSection from "@/sections/NammaSection";
import { section1bgimg } from "./all_assets";
import MobileSection1 from "@/sections/MobileSection1";
export default function AllSections() {
  return (
    <>
      {/* ✅ Mobile Sections */}
      <div className="md:hidden relative w-full min-h-screen">
        <div
          className="md:hidden relative w-full min-h-screen"
          style={{
            background: `url(${section1bgimg}) no-repeat center center`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70 -z-0"></div>

          <MobileSection1 />
          <div className="h-[20vh] sm:h-[20vh]" />
        </div>
        <Section2 />
        <SectionMobile />
        <Section4 />
        <Section5 />
      </div>

      {/* ✅ Desktop Sections */}
      <div className="hidden md:block">
        <Section />
        <div className="h-[10vh] sm:h-[20vh] md:h-[40vh] lg:h-[40vh]" />
        <Section2 />
        <Section3 />
        <NammaSection />
        <Section4 />
        <Section5 />
      </div>
    </>
  );
}
