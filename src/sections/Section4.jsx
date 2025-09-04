import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/Section.css";
import gsap from "gsap";

export default function Section4() {
  return (
    <section className="section-container4 pb-20 relative z-30 text-[var(--theme-color)] bg-[var(--theme-bgcolor)]">
      <div className="section-background4 w-full  flex flex-col items-center gap-8">
        <div className="w-full flex flex-col items-center mt-40">
          <div
            className="font-light text-6xl text-center mb-16"
            style={{ fontFamily: "var(--font-perpetua-light)" }}
          >
            ABOUT US
          </div>

          {/* Two-column grid container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full px-8">
            {/* Philosophy Column */}
            <div className="section-content4 flex flex-col items-center">
              <h2 className="section-title4 text-4xl font-light mb-6 text-center">
                Our Philosophy
              </h2>
              <div className=" py-4 px-6 max-w-md">
                <p className="text-lg leading-relaxed text-justify">
                  STRYV FIT isn’t just a gym — it’s a movement. Here, fitness
                  meets purpose, and every session is designed to push you
                  beyond the ordinary. From MMA to strength & conditioning, and
                  cutting-edge equipment in a raw, industrial space, we build
                  more than strength.
                  <br />
                  We build a community that lifts, stryvs, and thrives together.
                  <br />
                  Ready to redefine your limits? Welcome to STRYV FIT.
                </p>
              </div>
            </div>

            {/* Approach Column */}
            <div className="section-content4 flex flex-col items-center">
              <h2 className="section-title4 text-4xl font-light mb-6 text-center">
                Our Approach
              </h2>
              <div className=" py-4 px-6 max-w-md">
                <p className="text-lg leading-relaxed text-justify">
                  At STRYV FIT, we’re redefining what it means to train. No
                  gimmicks, no fads — just serious training in a community built
                  on grit, drive, and discipline. Whether you’re chasing your
                  first rep or your next personal record, this is where your
                  journey transforms. We’re not here to blend in. We’re here to
                  help you Lift. Stryv. Thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
