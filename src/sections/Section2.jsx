import React from "react";
import "@/styles/Section2.css";
import { videonamma2 } from "@/components/all_assets";

export default function Section2() {
  return (
    <section className="section2-vid h-[40vw] bg-transparent relative z-30">
      <div className="section2-vidgrid   bg-[var(--theme-bgcolor)] h-full w-[71vw] ml-auto z-30  ">
        <div className=" divline mr-[5vw] h-0.5  bg-[var(--theme-color)] "></div>
        <div className=" h-full grid grid-cols-[4fr_3fr] gap-4 overflow-hidden">
          <div className="section2-content2vid h-full flex items-center ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={videonamma2}
            />
          </div>
          <div className="content-text flex items-center justify-center p-4">
            <p className="text-[var(--theme-color)]">
              This is where your content will go. You can add any text or
              components here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
