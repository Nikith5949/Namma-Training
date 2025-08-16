"use client";
import React from "react";
import "@/styles/Section.css";
import MobileSeparatorCard from "@/components/MobileSeparatorCardProps";
import { cards1 } from "@/components/assets";

export default function SectionMobile() {
  return (
    <>
      {/* Top Divider */}
      <div className="h-0.5 w-full relative z-35 bg-[var(--theme-color)]" />

      <section className="relative z-30 w-full overflow-hidden bg-[var(--theme-bgcolor)]">
        {/* Heading & Cards */}
        <div className="mt-25 flex flex-col items-center space-y-20 text-center py-12">
          <h2
            className="w-full text-3xl font-light text-[var(--theme-color)]"
            style={{ fontFamily: "var(--font-perpetua-light)" }}
          >
            ENERGIZE YOUR EXPERIENCE
            <br />
            IN
            <br />
            LIFE
          </h2>

          {cards1.map((card) => (
            <MobileSeparatorCard key={card.somekey} {...card} />
          ))}
        </div>

        {/* Bottom Spacer & Divider */}
        <div className="h-[8svh]" />
        <div className="h-0.5 w-[90svw] max-w-6xl mx-auto bg-[var(--theme-color)]" />
      </section>
    </>
  );
}
