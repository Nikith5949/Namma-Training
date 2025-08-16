"use client";
import React, { useRef } from "react";
import "@/styles/Section.css";
import MobileSeparatorCard from "@/components/MobileSeparatorCardProps";
import { cards1 } from "@/components/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Batch all elements with .reveal class
      ScrollTrigger.batch(".reveal", {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.15,
            }
          ),
        start: "top 85%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="h-0.5 w-full z-35 relative bg-[var(--theme-color)]" />
      <section
        ref={sectionRef}
        className="section-container3 relative z-30 bg-[var(--theme-bgcolor)] w-full overflow-hidden"
      >
        <div className="all-containers">
          {/* Cards Grid */}
          <div className="cards-grid w-full flex justify-center py-12">
            {/* Mobile view */}
            <div className="w-full mx-auto flex flex-col items-center space-y-6 text-center">
              {/* Heading */}
              <h2
                className="text-3xl w-[100%] font-light text-[var(--theme-color)] reveal"
                style={{ fontFamily: "var(--font-perpetua-light)" }}
              >
                ENERGIZE YOUR EXPERIENCE
                <br />
                IN
                <br />
                LIFE
              </h2>
              {/* Cards stacked below heading */}
              {cards1.map((card) => (
                <MobileSeparatorCard key={card.somekey} {...card} />
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
