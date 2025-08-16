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
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full  shadow-md object-cover"
        style={{ objectFit: "cover" }}
      />

      {/* Card Title */}
      <h3 className="text-xl font-semibold text-[var(--theme-color)]">
        {title}
      </h3>

      {/* Card Description */}
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
}
