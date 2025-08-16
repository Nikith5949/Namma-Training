"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface MobileSeparatorCardProps {
  somekey: string | number;
  imageUrl: string;
  title: string;
  description: string;
}

export default function MobileSeparatorCard({
  title,
  description,
  imageUrl,
}: MobileSeparatorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center text-center space-y-4"
    >
      {/* Optimized Next.js Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        priority={false}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 500px"
        className="w-full shadow-md object-cover reveal"
        style={{ objectFit: "cover" }}
      />

      {/* Card Title */}
      <h3 className="text-xl font-semibold text-[var(--theme-color)] reveal">
        {title}
      </h3>

      {/* Card Description */}
      <p className="text-base text-gray-600 reveal">{description}</p>
    </div>
  );
}
