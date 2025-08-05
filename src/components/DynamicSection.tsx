"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BackgroundType = "color" | "image" | "parallax" | "gradient" | "video";
type PositionType = "fixed" | "relative" | "sticky";

interface DynamicSectionProps {
  backgroundType?: BackgroundType;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  backgroundVideo?: string;
  position?: PositionType;
  height?: string;
  width?: string;
  className?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  parallaxSpeed?: number;
  children?: React.ReactNode;
  zIndex?: number;
}

export default function DynamicSection({
  backgroundType = "color",
  backgroundColor = "#ffffff",
  backgroundImage = "",
  backgroundGradient = "",
  backgroundVideo = "",
  position = "relative",
  height = "auto",
  width = "100%",
  className = "",
  overlayColor = "rgba(0, 0, 0, 0.3)",
  overlayOpacity = 0,
  parallaxSpeed = 0.1,
  children,
  zIndex = 0,
}: DynamicSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundType !== "parallax" || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: `${-parallaxSpeed * 100}%`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [backgroundType, parallaxSpeed]);

  const renderBackground = () => {
    switch (backgroundType) {
      case "image":
        return (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: position === "fixed" ? "fixed" : "scroll",
            }}
          />
        );
      case "parallax":
        return (
          <div
            ref={bgRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "transform",
            }}
          />
        );
      case "gradient":
        return (
          <div
            className="absolute inset-0"
            style={{ background: backgroundGradient }}
          />
        );
      case "video":
        return (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        );
      default:
        return <div className="absolute inset-0" style={{ backgroundColor }} />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${className} relative overflow-hidden`}
      style={{
        position,
        height,
        width,
        zIndex,
      }}
    >
      {renderBackground()}

      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
