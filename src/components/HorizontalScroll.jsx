"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "@/styles/HorizontalScroll.css"; // keep if you still need custom styles
import { section1bgimg } from "./all_assets";
import ImageContainer from "./ImageContainer";

function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div className="h-[400vh]" ref={targetRef}>
      <div className="h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div className="flex  gap-30" style={{ x }}>
          <div className="imageItem w-[400px] flex-shrink-0">
            <ImageContainer
              imageSource={section1bgimg}
              description="Coach Alex is a certified personal trainer with 10+ years of experience helping clients achieve strength and endurance goals."
            />
          </div>
          <div className="imageItem w-[400px] flex-shrink-0">
            <ImageContainer
              imageSource={section1bgimg}
              description="Coach Mia specializes in HIIT and functional fitness, inspiring clients to push their limits and stay motivated."
            />
          </div>
          <div className="imageItem w-[400px] flex-shrink-0">
            <ImageContainer
              imageSource={section1bgimg}
              description="Coach Ryan focuses on bodybuilding and nutrition, creating customized plans for sustainable muscle growth."
            />
          </div>
          <div className="imageItem w-[400px] flex-shrink-0">
            <ImageContainer
              imageSource={section1bgimg}
              description="Coach Sophia is a yoga and mobility expert who helps clients improve flexibility, balance, and mindfulness."
            />
          </div>
          <div className="imageItem w-[400px] flex-shrink-0">
            <ImageContainer
              imageSource={section1bgimg}
              description="Coach Daniel is passionate about powerlifting, guiding athletes in building explosive strength with proper form."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
