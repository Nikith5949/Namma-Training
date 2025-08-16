import React from "react";

function MobileSeparatorCard({ imageUrl, title, description }) {
  return (
    <div className="w-full mb-10 max-w-sm bg-transparent border-b-2 border-[var(--theme-color)] overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-100 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-[var(--theme-color)]">
          {title}
        </h2>
        <p className="text-sm text-[var(--theme-color)] mt-2">{description}</p>
      </div>
    </div>
  );
}

export default MobileSeparatorCard;
