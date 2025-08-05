import React from "react";
import "@/styles/Section2.css";

export default function Section2() {
  return (
    <section className="section2-vid h-[40vw] bg-transparent relative z-30">
      <div className="section2-vidgrid   bg-[rgba(251,248,237,0.99)] h-full w-[71vw] ml-auto z-30  ">
        <div className=" divline mr-[5vw] h-0.5  bg-[rgba(10,218,218,0.99)] "></div>
        <div className=" h-full grid grid-cols-[4fr_3fr] gap-4 overflow-hidden">
          <div className="section2-content2vid h-full flex items-center ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/assets/Namma_vid.mp4"
            />
          </div>
          <div className="content-text flex items-center justify-center p-4">
            <p className="text-white">
              This is where your content will go. You can add any text or
              components here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
