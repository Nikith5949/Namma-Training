"use client";
import React from "react";
import Image from "next/image";

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
  return (
    <div className="flex flex-col items-center text-center space-y-4">
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
