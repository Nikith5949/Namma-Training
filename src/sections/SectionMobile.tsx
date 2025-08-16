import React from "react";
import "@/styles/Section.css";
import MobileSeparatorCard from "@/components/MobileSeparatorCardProps";
import { cards1 } from "@/components/assets";

export default function SectionMobile() {
  return (
    <>
      <div className="h-0.5 w-full z-35 relative bg-[var(--theme-color)]" />
      <section className="section-container3 relative z-30 bg-[var(--theme-bgcolor)] w-full overflow-hidden">
        <div className="all-containers">
          {/* Cards Grid */}
          <div className="cards-grid w-full flex justify-center py-12">
            {/* Mobile view */}
            <div className="w-full mx-auto flex flex-col items-center space-y-6 text-center">
              {/* Heading */}
              <h2
                className="text-3xl w-[100%] font-light text-[var(--theme-color)]"
                style={{ fontFamily: "var(--font-perpetua-light)" }}
              >
                ENERGIZE YOUR EXPERIENCE
                <br />
                IN
                <br />
                LIFE
              </h2>
              {/* Cards stacked below heading */}
              {cards1.map((card) => (
                <MobileSeparatorCard key={card.somekey} {...card} />
              ))}
            </div>
          </div>
          {/* Bottom Spacer and Divider */}
          <div className="h-[40svh]" />
          <div className="h-0.5 w-[90svw] max-w-6xl mx-auto bg-[var(--theme-color)]" />
        </div>
      </section>
    </>
  );
}
