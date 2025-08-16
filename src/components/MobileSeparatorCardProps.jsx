import React from "react";

function MobileSeparatorCard({ imageUrl, title, description }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default MobileSeparatorCard;
