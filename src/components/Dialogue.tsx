import React, { useState, useEffect } from "react";
import "@/styles/DialogueBar.css";

/**
 * Dialogue - A carousel bar above the navbar to show rotating offers.
 * Usage: Place <Dialogue /> above <GlassNavBar /> in your layout.
 */
interface DialogueProps {
  open: boolean;
  onClose: () => void;
}

const offers = [
  "🎉 Latest Offer: Get 20% off on your first order! Use code: NAMMA20",
  "🚀 Free Delivery: Order above ₹500 and get free delivery to your doorstep!",
  "⭐ New Menu: Try our authentic South Indian specialties - Now Available!",
  "🔥 Weekend Special: Buy 2 Get 1 Free on all combo meals this weekend!",
];

export default function Dialogue({ open, onClose }: DialogueProps) {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!open || isPaused) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
        setIsVisible(true);
      }, 300); // Half of transition duration
    }, 4000); // Change offer every 4 seconds

    return () => clearInterval(interval);
  }, [open, isPaused]);

  if (!open) return null;

  return (
    <div
      className="dialogue-bar w-full fixed top-0 left-0 z-60 flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span
        className={`dialogue-text dialogue-carousel-text ${
          isVisible ? "dialogue-fade-in" : "dialogue-fade-out"
        }`}
      >
        {offers[currentOfferIndex]}
      </span>
      <button
        className="dialogue-close absolute right-4 text-xl text-slate-400 hover:text-slate-700 focus:outline-none bg-transparent border-none cursor-pointer"
        aria-label="Close"
        onClick={onClose}
        style={{ background: "none", border: "none" }}
      >
        ×
      </button>
    </div>
  );
}
