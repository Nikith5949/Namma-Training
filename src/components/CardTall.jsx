import React from "react";

/**
 * Reusable tall card component with an image on top, a divider line, and text at the bottom.
 *
 * Props:
 * - imageSrc (string): URL of the top image (required)
 * - imageAlt (string): alt text for the image
 * - text (string | ReactNode): paragraph content (required)
 * - className (string): extra classes for the outer card
 */
export default function CardTall({
  imageSrc,
  imageAlt = "Card image",
  text,
  className = "",
}) {
  return (
    <div
      className={`w-[40vw] relative bg-[var(--theme-bgcolor)] overflow-hidden ${className} h-screen flex flex-col`}
    >
      {/* Image occupies 40% of screen height with top padding and centered */}
      <div className="relative flex-none h-[40%] pt-25 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      {/* <div className="mx-5 mt-5 mb-3 h-px bg-gray-200" /> */}

      {/* Text occupies 60% of screen height */}
      <div className="flex-1 flex items-center justify-center px-5 text-gray-700 text-base leading-relaxed overflow-auto h-[60%]">
        {typeof text === "string" ? (
          <p className="text-center">{text}</p>
        ) : (
          text
        )}
      </div>
    </div>
  );
}
