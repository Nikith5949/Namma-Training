import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  width?: string;
  height?: string;
  imageHeight?: string;
  priority?: boolean;
  parallaxSpeed?: number;
  direction?: "x" | "y";
  zIndex?: number;
  enableRotation?: boolean;
  rotationIntensity?: number;
  enableScale?: boolean;
  scaleStart?: number;
  scaleEnd?: number;
  position?: "absolute" | "relative" | "fixed" | "sticky";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  width = "w-52",
  imageHeight = "h-32",
  height = "h-auto",
  priority = false,
  parallaxSpeed = 0.5,
  direction = "y",
  zIndex = 40,
  enableRotation = false,
  rotationIntensity = 0,
  enableScale = false,
  scaleStart = 0.8,
  scaleEnd = 1,
  position = "relative",
  top,
  left,
  right,
  bottom,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      const distance = 150 * parallaxSpeed;

      if (direction === "x") {
        gsap.fromTo(
          cardRef.current,
          { x: distance },
          {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: enableRotation
                ? (self) => {
                    const rotation = (self.progress - 0.5) * rotationIntensity;
                    gsap.set(cardRef.current, { rotation });
                  }
                : undefined,
            },
          }
        );
      } else {
        gsap.fromTo(
          cardRef.current,
          { y: distance },
          {
            y: -distance * 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 100%",
              end: "bottom 0%",
              scrub: 3,
              invalidateOnRefresh: true,
              onUpdate: enableRotation
                ? (self) => {
                    const rotation = (self.progress - 0.5) * rotationIntensity;
                    gsap.set(cardRef.current, { rotation });
                  }
                : undefined,
            },
          }
        );
      }
    },
    {
      scope: cardRef,
      dependencies: [
        direction,
        parallaxSpeed,
        enableRotation,
        rotationIntensity,
        enableScale,
        scaleStart,
        scaleEnd,
      ],
    }
  );

  const positionStyles: React.CSSProperties = {
    zIndex,
    position,
    ...(top && { top }),
    ...(left && { left }),
    ...(right && { right }),
    ...(bottom && { bottom }),
    perspective: 1000, // Needed for 3D flip
  };

  return (
    <div
      ref={cardRef}
      className={`${width} ${height} cursor-pointer`}
      style={positionStyles}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full backface-hidden bg-[var(--theme-bgcolor)] flex flex-col min-h-[200px] overflow-hidden"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <div className={`${imageHeight} relative w-full overflow-hidden`}>
            <Image
              src={imageUrl}
              alt={title?.toUpperCase()}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={priority}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="p-4 flex flex-col">
            <h3 className="text-[var(--theme-color)] font-bold mb-2 line-clamp-2">
              {title?.toUpperCase()}
            </h3>
          </div>
          <div className="linediv h-0.5 w-full bg-[var(--theme-color)]"></div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full rotate-y-180 backface-hidden bg-[rgba(105,8,16,0.81)] p-4 flex flex-col justify-center items-center text-center"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-[rgba(248,250,250,0.99)] font-bold mb-2">
            {title?.toUpperCase()}
          </h3>
          <p className="text-[rgba(248,250,250,0.99)]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
