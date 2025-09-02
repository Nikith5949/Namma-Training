"use client";
import React from "react";
import { section1bgimg } from "./all_assets";

function HorizontalMobileScroll() {
  const cards = [
    { text: "Card 1" },
    { text: "Card 2" },
    { text: "Card 3" },
    { text: "Card 4" },
    { text: "Card 5" },
    { text: "Card 6" },
  ];

  return (
    <section className="bg-[var(--theme-bgcolor)] py-10 lg:hidden">
      <div className="flex flex-col items-center justify-center gap-30">
        {cards.map(({ text }, index) => (
          <div key={index} className="w-full max-w-md text-center">
            {/* Image */}
            <img
              src={section1bgimg}
              alt={text}
              className="w-full h-auto  shadow-md"
            />
            {/* Text */}
            <p className="mt-8 text-lg font-medium text-white">{text}</p>
            <div className="h-0.5 w-full max-w-6xl   mt-10  bg-[var(--theme-color)]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HorizontalMobileScroll;
