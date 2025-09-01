"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import CardTall from "./CardTall";
// import CardTallReverse from "./CardTallReverse";
import "../styles/HorizontalScroll.css";
import { section1bgimg } from "./all_assets";
import ImageContainer from "./ImageContainer";
function HorizontalScroll() {
  return (
    <div className="carousel">
      <div className="contentCarousel">
        <div className="images">
          <div className="imageItem">
            <ImageContainer
              imageSource={section1bgimg}
              description={"hi there cool"}
            />
            <ImageContainer
              imageSource={section1bgimg}
              description={"hi there cool"}
            />
            <ImageContainer
              imageSource={section1bgimg}
              description={"hi there cool"}
            />
            <ImageContainer
              imageSource={section1bgimg}
              description={"hi there cool"}
            />
          </div>
        </div>
      </div>
    </div>

    // <section ref={targetRef} className="relative h-[300vh] bg-black">
    //   <div className="sticky top-0 h-screen flex items-center overflow-hidden">
    //     <motion.div style={{ x }} className="flex space-x-4 px-4">
    //       <CardTall
    //         imageSrc={section1bgimg}
    //         text="Coach Alex is a certified personal trainer with 10+ years of experience helping clients achieve strength and endurance goals."
    //       />
    //       <CardTallReverse
    //         imageSrc={section1bgimg}
    //         text="Coach Mia specializes in HIIT and functional fitness, inspiring clients to push their limits and stay motivated."
    //       />
    //       <CardTall
    //         imageSrc={section1bgimg}
    //         text="Coach Ryan focuses on bodybuilding and nutrition, creating customized plans for sustainable muscle growth."
    //       />
    //       <CardTallReverse
    //         imageSrc={section1bgimg}
    //         text="Coach Sophia is a yoga and mobility expert who helps clients improve flexibility, balance, and mindfulness."
    //       />
    //       <CardTall
    //         imageSrc={section1bgimg}
    //         text="Coach Daniel is passionate about powerlifting, guiding athletes in building explosive strength with proper form."
    //       />
    //       <CardTallReverse
    //         imageSrc={section1bgimg}
    //         text="Coach Emily designs fun and engaging group workouts, perfect for those who thrive in a team environment."
    //       />
    //       <CardTall
    //         imageSrc={section1bgimg}
    //         text="Coach Liam combines sports conditioning with rehabilitation techniques to help clients recover and perform better."
    //       />
    //       <CardTallReverse
    //         imageSrc={section1bgimg}
    //         text="Coach Olivia specializes in endurance training, preparing runners and cyclists for marathons and long-distance events."
    //       />
    //     </motion.div>
    //   </div>
    // </section>
  );
}

export default HorizontalScroll;
