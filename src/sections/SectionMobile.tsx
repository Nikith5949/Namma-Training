"use client";
import React, { useEffect, useRef } from "react";
import "@/styles/Section.css";
import MobileSeparatorCard from "@/components/MobileSeparatorCardProps";
import { cards1 } from "@/components/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".section-heading", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
        },
      });

      // Animate cards on scroll
      gsap.utils.toArray<HTMLElement>(".mobile-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Press & hold animation (image zoom + overlay fade)
  const handleHold = (
    e: React.MouseEvent | React.TouchEvent,
    hold: boolean
  ) => {
    const wrapper = (e.currentTarget as HTMLElement).querySelector(
      ".image-wrapper"
    );
    const image = wrapper?.querySelector("img");
    const overlay = wrapper?.querySelector(".card-overlay");

    if (image) {
      gsap.to(image, {
        scale: hold ? 1.08 : 1,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    if (overlay) {
      gsap.to(overlay, {
        opacity: hold ? 1 : 0,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  return (
    <>
      <div className="h-0.5 w-full relative z-35 bg-[var(--theme-color)]" />

      <section
        ref={sectionRef}
        className="relative z-30 w-full overflow-hidden bg-[var(--theme-bgcolor)]"
      >
        <div className="mt-25 flex flex-col items-center space-y-20 text-center py-12">
          <h2
            className="section-heading w-full text-3xl font-light text-[var(--theme-color)]"
            style={{ fontFamily: "var(--font-perpetua-light)" }}
          >
            ENERGIZE YOUR EXPERIENCE
            <br />
            IN
            <br />
            LIFE
          </h2>

          <div className="space-y-5">
            {cards1.map((card) => (
              <div
                key={card.somekey}
                className="mobile-card"
                onMouseDown={(e) => handleHold(e, true)}
                onMouseUp={(e) => handleHold(e, false)}
                onMouseLeave={(e) => handleHold(e, false)}
                onTouchStart={(e) => handleHold(e, true)}
                onTouchEnd={(e) => handleHold(e, false)}
              >
                <MobileSeparatorCard {...card} />
              </div>
            ))}
          </div>
        </div>

        <div className="h-[8svh]" />
        <div className="h-0.5 w-[90svw] max-w-6xl mx-auto bg-[var(--theme-color)]" />
      </section>
    </>
  );
}
