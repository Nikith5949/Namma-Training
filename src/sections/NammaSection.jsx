import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navBarLogo } from "@/components/all_assets";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function NammaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    // Pin the section at the top and animate clip-path on scroll
    gsap.fromTo(
      element,
      { clipPath: "ellipse(5% 5% at 50% 50%)" },
      {
        clipPath: "ellipse(150% 150% at 50% 50%)",
        scrollTrigger: {
          trigger: element,
          start: "top top", // when top of section hits top of viewport
          end: "+=50%", // duration of scroll (adjust if needed)
          scrub: true,
          pin: true, // pin the section while animating
        },
      }
    );
  }, []);

  return (
    <div className="bg-[var(--theme-bgcolor)] relative w-screen h-[100svh] z-30 flex justify-center items-center">
      <div
        ref={sectionRef}
        className="bg-black w-full h-full text-[rgba(10,218,218,0.99)] flex justify-center items-center text-4xl font-bold"
      >
        <Image
          src={navBarLogo}
          alt="Go Namma Logo"
          height={400}
          width={400}
          priority
          className="w-auto h-20 sm:h-24"
        />
      </div>
    </div>
  );
}

export default NammaSection;
