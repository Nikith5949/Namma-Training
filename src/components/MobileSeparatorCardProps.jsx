import React from "react";

function MobileSeparatorCard({ imageUrl, title, description }) {
  return (
    <div className="mobile-card-container w-[90svw] mx-auto bg-transparent border border-[var(--theme-color)] overflow-hidden h-[420px]">
      {/* Image wrapper — fixed height, no extra text below */}
      <div className="relative h-full w-full overflow-hidden image-wrapper">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out select-none"
          style={{ objectFit: "cover" }}
        />
        {/* Overlay text (only appears on hold) */}
        <div className="card-overlay absolute inset-0 flex flex-col justify-center items-center text-center bg-black/60 text-white opacity-0 p-4">
          <h2 className="text-xl text-red-600 font-semibold mb-2 leading-tight">
            {title}
          </h2>
          <p className="text-sm text-red-600 opacity-90 leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileSeparatorCard;
