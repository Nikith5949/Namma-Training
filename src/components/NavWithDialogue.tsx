"use client";
import React from "react";
import Dialogue2 from "@/components/Dialogue2";
import GlassNavBar from "@/components/GlassNavBar";
import { useGSAP } from "@gsap/react";

export default function NavWithDialogue() {
  const [isDialogueOpen, setIsDialogueOpen] = React.useState(true);
  const [showDialogue, setShowDialogue] = React.useState(true);
  const [showNav, setShowNav] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const navWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if user has scrolled from the very top
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        // Scrolling down
        setShowNav(false);
        if (isDialogueOpen) {
          setShowDialogue(false);
        }
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setShowNav(true);
        if (isDialogueOpen) {
          setShowDialogue(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDialogueOpen]);

  // GSAP animations using useGSAP hook
  useGSAP(
    () => {
      // Any GSAP animations can be added here if needed
      // The useGSAP hook automatically handles cleanup on unmount
    },
    { 
      dependencies: [showDialogue, showNav, isDialogueOpen],
      scope: navWrapperRef 
    }
  );

  const navTopClass = isDialogueOpen && showDialogue ? "top-7" : "top-0";

  return (
    <>
      <Dialogue2
        open={isDialogueOpen}
        showDialogue={showDialogue}
        onClose={() => setIsDialogueOpen(false)}
      />

      <GlassNavBar
        topClass={navTopClass}
        showNav={showNav}
        isScrolled={isScrolled}
      />
    </>
  );
}
