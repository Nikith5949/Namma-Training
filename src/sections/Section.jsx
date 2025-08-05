import React from "react";
import "@/styles/Section.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { videonamma } from "@/components/all_assets";

// import { Canvas } from "@react-three/fiber";
// import ThreeModel from "@/components/ThreeModel";

gsap.registerPlugin(useGSAP);

export default function Section() {
  useGSAP(() => {
    const titlesplit = SplitText.create(".section-title", { type: "words" });

    // Immediately hide words before animation

    const t1 = gsap.timeline({ delay: 0.4 });

    t1.to(".section-content", {
      opacity: 1,
      scale: 1,
    })
      .from(titlesplit.words, {
        scale: 3,
        stagger: 0.2,
        opacity: 0, // This now works correctly
        ease: "power4.in",
      })
      .to(".athlete", {
        duration: 0.6,
        opacity: 1,
        scale: 1,

        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.in",
      })
      .to(".background-video", {
        duration: 0.6,
        opacity: 1,
        scale: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.in",
      });
  });

  return (
    <section className="section-container top-0 left-0 w-screen h-screen flex items-center">
      <div className="section-grid flex justify-center items-center">
        <div className="section-content fixed z-10 opacity-0 ">
          <div className="section-title">
            EVERY.
            <br />
            BODY.
            <br />
            IS AN.
            <br />
          </div>
        </div>
        <div
          style={
            {
              // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }
          }
          className="section-athlete fixed z-13 translate-y-[168px] opacity-0"
        >
          <div
            className="athlete scale-[3] opacity-0"
            style={{
              color: "transparent",
              WebkitTextStroke: "4px white",
              display: "inline-block",
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            ATHLETE.
          </div>
        </div>

        <div className="section-gridvid max-w-full">
          <div className="section-contentvid">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video max-w-full w-[30vw]  mr-auto top-[30vh] left-[22vw] z-10"
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
      {/* <div className="model-3d h-[100vh] w-[100vw]"> */}
      {/* <Canvas>
          <ThreeModel />
        </Canvas> */}
      {/* </div> */}
    </section>
  );
}
