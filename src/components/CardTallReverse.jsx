import React from "react";

/**
 * Reusable tall card component with text on top (60%) and an image on the bottom (40%).
 *
 * Props:
 * - imageSrc (string): URL of the image (required)
 * - imageAlt (string): alt text for the image
 * - text (string | ReactNode): paragraph content (required)
 * - className (string): extra classes for the outer card
 */
export default function CardTallReverse({
  imageSrc,
  imageAlt = "Card image",
  text,
  className = "",
}) {
  return (
    <div
      className={`w-[40vw] bg-[var(--theme-bgcolor)] overflow-hidden ${className} h-screen flex flex-col`}
    >
      {/* Text occupies 60% of screen height */}
      <div className="flex-1 flex items-center justify-center px-5 text-gray-700 text-base leading-relaxed overflow-auto h-[60%] ">
        {typeof text === "string" ? (
          <p className="text-center">{text}</p>
        ) : (
          text
        )}
      </div>
      <div className="relative flex-none h-[40%] pt-25 flex items-center justify-center">
        {/* <div className="mx-5 mt-3 mb-5 h-px bg-gray-200" /> */}

        {/* Image occupies 40% of screen height with divider closer and centered */}

        {/* Divider line placed at the top of the image section */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
