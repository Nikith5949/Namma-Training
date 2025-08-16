import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/Section.css";
import gsap from "gsap";
import Card from "@/components/Card";
import { cards1 } from "@/components/assets";

export default function Section3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      // ✅ Pin heading only for desktop/tablet
      if (window.innerWidth >= 768) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top", // unpin when next section pushes it
          pin: headingRef.current,
          pinSpacing: false,
        });
      }
      // Refresh ScrollTrigger on images load
      const images = sectionRef.current?.querySelectorAll("img");
      images?.forEach((img) => {
        img.addEventListener("load", () => ScrollTrigger.refresh());
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <div className="h-0.5 w-full z-35 relative bg-[var(--theme-color)]" />
      <section
        ref={sectionRef}
        className="section-container3 relative z-30 bg-[var(--theme-bgcolor)] w-full overflow-hidden"
      >
        <div className="all-containers">
          {/* Background Heading (pinned only on desktop/tablet) */}
          <div className="hidden md:flex w-full h-screen flex-col items-center justify-center px-4 lg:px-8">
            <div className="w-full max-w-6xl flex flex-col items-center justify-center">
              <h2
                ref={headingRef}
                className="font-light text-[var(--theme-color)] text-4xl sm:text-5xl lg:text-6xl text-center px-4"
                style={{ fontFamily: "var(--font-perpetua-light)" }}
              >
                ENERGIZE YOUR EXPERIENCE
                <br />
                IN
                <br />
                LIFE
              </h2>
            </div>
          </div>
          {/* Cards Grid */}
          <div className="cards-grid w-full flex justify-center lg:px-8 py-12">
            {/* Desktop/tablet cards with animations */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 w-full max-w-6xl">
              {cards1.map((card) => (
                <div key={card.somekey} className="flex justify-center">
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>
          {/* Bottom Spacer and Divider */}
          <div className="h-[40svh]" />
          <div className="h-0.5 w-[90svw] max-w-6xl mx-auto bg-[var(--theme-color)]" />
        </div>
      </section>
    </>
  );
}
