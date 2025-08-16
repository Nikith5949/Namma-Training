import React from "react";
import "@/styles/Section.css";
// import { Canvas } from "@react-three/fiber";
// import ThreeModel from "@/components/ThreeModel";
export default function Tmp_Section() {
  return (
    <section className="section-container">
      <div className="section-grid">
        <div className="section-content">
          <h2 className="section-title">Our Philosophy</h2>
          <p>
            At NAMMA Training, we believe that everybody is an athlete. Our
            training facilities are vibrant communities dedicated to supporting
            your athletic lifestyle and enhancing your performance. Whether
            you're a beginner venturing into training or an experienced athlete
            looking to hone your skills, we have something for everyone.
          </p>
        </div>

        <div className="section-content">
          <h2 className="section-title">Our Approach</h2>
          <p>
            Our Coaches are committed to providing personalized guidance,
            ensuring you progress at your own pace. Whether you're a kid aged 4
            to 17, a senior working to improve strength, or anyone in between,
            we moderate our programmes to meet your unique needs. You will never
            be more healthier!
          </p>
        </div>
      </div>
      <div className="model-3d h-[100svh] w-[100svw]">
        {/* <Canvas>
          <ThreeModel />
        </Canvas> */}
      </div>
    </section>
  );
}
