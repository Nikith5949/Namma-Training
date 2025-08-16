import React from "react";

function MobileSeparatorCard({ imageUrl, title, description }) {
  return (
    <div className="w-full px-4 space-y-3 mb-20 max-w-sm bg-transparent  border-[var(--theme-color)] overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-100 object-cover" />
      <div className="">
        <h2 className="text-lg font-semibold text-[var(--theme-color)]">
          {title}
        </h2>
        <p className=" border-b-1 pb-10 text-sm text-[var(--theme-color)] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default MobileSeparatorCard;
