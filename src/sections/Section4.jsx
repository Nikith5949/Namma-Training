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
                  At NAMMA Training, we believe that everybody is an athlete.
                  Our training facilities are vibrant communities dedicated to
                  supporting your athletic lifestyle and enhancing your
                  performance. Whether you're a beginner venturing into training
                  or an experienced athlete looking to hone your skills, we have
                  something for everyone.
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
                  Our Coaches are committed to providing personalized guidance,
                  ensuring you progress at your own pace. Whether you're a kid
                  aged 4 to 17, a senior working to improve strength, or anyone
                  in between, we moderate our programmes to meet your unique
                  needs. You will never be more healthier!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
