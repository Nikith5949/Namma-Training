import React, { useRef } from "react";
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

  useGSAP(
    () => {
      if (!cardRef.current) return;

      const distance = 150 * parallaxSpeed;

      if (direction === "x") {
        // Horizontal parallax
        gsap.fromTo(
          cardRef.current,
          {
            x: distance,
            // scale: enableScale ? scaleStart : 1,
          },
          {
            x: -distance,
            // scale: enableScale ? scaleEnd : 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              markers: false,
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
        // Vertical parallax
        gsap.fromTo(
          cardRef.current,
          {
            y: distance,
            // scale: enableScale ? scaleStart : 0.9,
          },
          {
            y: -distance * 0.5,
            // scale: enableScale ? scaleEnd : 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 100%",
              end: "bottom 0%",
              scrub: 3,
              markers: false,
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

  // Build position styles
  const positionStyles: React.CSSProperties = {
    zIndex,
    position,
    ...(top && { top }),
    ...(left && { left }),
    ...(right && { right }),
    ...(bottom && { bottom }),
  };

  return (
    <div
      ref={cardRef}
      className={`${width} ${height} bg-[rgba(251,248,237,1)] flex flex-col min-h-[200px] overflow-hidden`}
      style={positionStyles}
    >
      <div
        className={`${imageHeight} relative w-full overflow-hidden bg-[rgba(251,248,237,1)]`}
      >
        <Image
          src={imageUrl}
          alt={title && title.toUpperCase()}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="p-4  flex flex-col">
        <h3 className="text-[rgba(10,218,218,0.99)] font-bold mb-2 line-clamp-2">
          {title && title.toUpperCase()}
        </h3>
        {/* <p className="text-[rgba(10,218,218,0.99)] line-clamp-3">
          {description && description.toUpperCase()}
        </p> */}
      </div>
      <div className="linediv h-0.5 w-full bg-[rgba(10,218,218,0.99)]"></div>
    </div>
  );
};

export default Card;
