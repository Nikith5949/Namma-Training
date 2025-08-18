import React from "react";
import "@/styles/Section.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { videonamma } from "@/components/all_assets";

gsap.registerPlugin(useGSAP);

export default function Section() {
  useGSAP(() => {
    const titlesplit = SplitText.create(".section-title", { type: "words" });
    const t1 = gsap.timeline({ delay: 0 });

    // Option 1: Using explicit positioning with absolute timing
    t1.to(".section-content", {
      opacity: 0,
      scale: 1,
    });
    // Wait for previous animation to complete, then start title words
    t1.from(titlesplit.words, {
      scale: 3,
      opacity: 1,
      ease: "power4.out",
      duration: 0.4,
      stagger: 0,
    });
    t1.fromTo(
      ".athlete",
      { opacity: 0, scale: 4 },
      {
        duration: 0.4,
        opacity: 1,
        scale: 1.05,
        ease: "power4.out",
      }
      // Wait 1.5 seconds after previous animation starts
    );

    // Video starts after athlete animation completes
    t1.to(
      ".background-video",
      {
        duration: 1,
        opacity: 1,
        scale: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.out",
      },
      "+=2.5"
    ); // Starts immediately after athlete animation ends
  });

  return (
    <section className="section-container top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="section-grid flex justify-center items-center">
        <div
          className="section-content gap-0 w-full md:fixed lg:fixed z-10 opacity-0"
          data-speed="0.1"
        >
          <div className="section-title">
            LIFT.
            <br />
            <span className="title-spacer"></span>
            THRIVE.
          </div>
        </div>
        <div
          className="section-athlete hidden md:fixed md:block lg:fixed lg:block md:mb-[330px] lg:mb-[330px] z-13 lg:translate-y-[168px] md:translate-y-[168px] opacity-0 "
          data-speed="0.1"
        >
          <div
            className="athlete scale-[4] opacity-0"
            style={{
              color: "transparent",
              WebkitTextStroke: "4px white",
              display: "inline-block",
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            STRYV.
          </div>
        </div>
        <div className="section-gridvid max-w-full">
          <div className="section-contentvid">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video max-w-full w-[30svw] mr-auto top-[30svh] left-[22svw] z-10"
              src={videonamma}
              style={{
                position: "relative",
                zIndex: 10,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
