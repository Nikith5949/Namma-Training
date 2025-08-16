import React from "react";
// import { videonamma2 } from "@/components/all_assets";

export default function Section2() {
  return (
    <section className="relative z-30 bg-transparent">
      <div className="bg-[var(--theme-bgcolor)] w-[71vw] ml-auto h-[40vw] max-md:w-full max-md:h-auto">
        {/* Divider line */}
        <div className="h-0.5 bg-[var(--theme-color)] mr-[5vw] max-md:mr-0" />

        {/* Content grid */}
        <div className="h-full grid grid-cols-[4fr_3fr] gap-4 overflow-hidden max-md:grid-cols-1">
          {/* Video */}
          <div className="flex items-center h-full max-md:h-auto">
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover max-md:h-auto"
              src={videonamma2}
            /> */}
          </div>

          {/* Text */}
          <div className="flex items-center justify-center p-4 max-md:text-center max-md:p-6">
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
