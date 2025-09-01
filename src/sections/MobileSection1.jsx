import React from "react";
import "@/styles/Section.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { videonamma } from "@/components/all_assets";

export default function MobileSection1() {
  useGSAP(() => {
    const titlesplit = SplitText.create(".section-title", { type: "words" });

    const t1 = gsap.timeline({ delay: 0.2 });
    t1.to(".section-content", { opacity: 1, scale: 1 }).from(titlesplit.words, {
      scale: 3,
      stagger: 0.2,
      opacity: 0,
      ease: "power4.in",
    });
    t1.fromTo(
      ".athletem",
      { opacity: 0, scale: 4 },
      {
        duration: 0.2,
        opacity: 1,
        scale: 1.05,
        ease: "power4.out",
      }
    ).to(".background-video", {
      duration: 0.4,
      opacity: 1,
      scale: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.in",
    });
  });

  return (
    <section className="section-container top-0 left-0 w-screen h-screen flex justify-center items-center overflow-x-hidden">
      <div className="section-grid flex justify-center items-center">
        <div className="section-content gap-0 w-full z-10 opacity-0">
          <div className="section-title">
            LIFT.
            <br />
            <div className="section-athletem h-full ">
              <div
                className="athletem scale-[4] "
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
            <span className="title-spacer"></span>
            THRIVE.
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
