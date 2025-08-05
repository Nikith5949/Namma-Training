import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/Section.css";
import gsap from "gsap";
import Card from "@/components/Card";

const cards = [
  {
    somekey: "card-1",
    imageUrl: "/assets/gym1.jpg",
    height: "h-120",
    width: "w-190",
    imageHeight: "h-150",
    title: "Premium Gym Equipment",
    description: "State-of-the-art machines for your workout routine",
    parallaxSpeed: 3,
    direction: "y" as const,
    zIndex: 50,
    enableRotation: false,
    rotationIntensity: 1,
    enableScale: false,
    scaleStart: 0.7,
    scaleEnd: 1,
    position: "relative" as const,
    top: "20px",
    left: "-100px",
  },
  {
    somekey: "card-2",
    imageUrl: "/assets/gym2.jpg",
    height: "h-102",
    width: "w-160",
    imageHeight: "h-80",
    title: "Personal Training",
    description: "Certified trainers for customized workout plans",
    parallaxSpeed: 0.8,
    direction: "y" as const,
    zIndex: 45,
    enableRotation: false,
    rotationIntensity: 0,
    enableScale: false,
    scaleStart: 0.9,
    scaleEnd: 1.0,
    position: "relative" as const,
    top: "100px",
    left: "50px",
  },
  {
    somekey: "card-3",
    imageUrl: "/assets/gym3.jpg",
    height: "h-64",
    width: "w-80",
    imageHeight: "h-70",
    title: "Group Classes",
    description: "Join our energizing group fitness sessions",
    parallaxSpeed: 0.7,
    direction: "y" as const,
    zIndex: 52,
    enableRotation: true,
    rotationIntensity: 3,
    enableScale: false,
    scaleStart: 0.8,
    scaleEnd: 1.2,
    position: "relative" as const,
    left: "10px",
  },
  {
    somekey: "card-4",
    imageUrl: "/assets/gym1.jpg",
    height: "h-114",
    width: "w-180",
    imageHeight: "h-110",
    title: "Nutrition Plans",
    description: "Customized meal plans for your fitness goals",
    parallaxSpeed: 3,
    direction: "y" as const,
    zIndex: 48,
    enableRotation: false,
    rotationIntensity: 5,
    enableScale: true,
    scaleStart: 1,
    scaleEnd: 1.1,
    position: "relative" as const,
    right: "15px",
  },
];

export default function Section3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Background pinning
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        pin: bgRef.current,
        pinSpacing: false,
      });

      // Refresh ScrollTrigger on images load
      const images = sectionRef.current?.querySelectorAll("img");
      images?.forEach((img) => {
        img.addEventListener("load", () => ScrollTrigger.refresh());
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <div className="h-0.5 w-full z-35 relative bg-[rgba(10,218,218,0.99)]" />
      <section
        ref={sectionRef}
        className="section-container3 relative z-30 bg-[rgba(251,248,237,1)] w-full overflow-hidden"
      >
        <div className="all-containers">
          {/* Background Section */}
          <div
            ref={bgRef}
            className="section-background3 w-full h-screen flex flex-col items-center justify-center gap-8 px-4 lg:px-8"
          >
            <div className="w-full max-w-6xl flex flex-col items-center justify-center">
              <div
                className="font-light text-[rgba(10,218,218,0.99)] text-4xl sm:text-5xl lg:text-6xl text-center px-4"
                style={{ fontFamily: "var(--font-perpetua-light)" }}
              >
                ENERGIZE YOUR EXPERIENCE
                <br />
                IN
                <br />
                LIFE
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="cards-grid w-full flex justify-center px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
              {cards.map((card) => (
                <div key={card.somekey} className="flex justify-center">
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Spacer and Divider */}
          <div className="h-[40vh]"></div>
          <div className="h-0.5 w-[90vw] max-w-6xl mx-auto bg-[rgba(10,218,218,0.99)]"></div>
        </div>
      </section>
    </>
  );
}
