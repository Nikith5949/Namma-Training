"use client";
import React from "react";
import Dialogue2 from "@/components/Dialogue2";
import GlassNavBar from "@/components/GlassNavBar";
import { useGSAP } from "@gsap/react";

export default function NavWithDialogue() {
  const [isDialogueOpen, setIsDialogueOpen] = React.useState(true);
  const [showDialogue, setShowDialogue] = React.useState(true);
  const [dialogueHeight, setDialogueHeight] = React.useState(0);
  const [showNav, setShowNav] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const navWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if user has scrolled from the very top
      setIsScrolled(currentScrollY > 40);

      // Check if we're on mobile/small device
      const isMobile = window.innerWidth <= 768;
      const scrollThreshold = isMobile ? 5 : 10;

      // Define what we consider "top of screen" - adjust this value as needed
      const topThreshold = 100; // Show dialogue only when within 100px of top

      if (isMobile) {
        // On mobile, always keep the navbar visible but handle dialogue
        setShowNav(true);

        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > scrollThreshold
        ) {
          // Scrolling down - hide dialogue
          if (isDialogueOpen) {
            setShowDialogue(false);
          }
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - only show dialogue if we're near the top
          if (isDialogueOpen && currentScrollY <= topThreshold) {
            setShowDialogue(true);
          }
        }
      } else {
        // Desktop behavior
        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > scrollThreshold
        ) {
          // Scrolling down
          setShowNav(false);
          if (isDialogueOpen) {
            setShowDialogue(false);
          }
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - only show dialogue if we're near the top
          setShowNav(true);
          if (isDialogueOpen && currentScrollY <= topThreshold) {
            setShowDialogue(true);
          }
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
      scope: navWrapperRef,
    }
  );

  const handleDialogueHeightChange = (height: number) => {
    setDialogueHeight(height);
    // console.log("Dialogue height changed:", height);
  };

  // Calculate the top position for the navbar
  const navTopOffset = isDialogueOpen && showDialogue ? dialogueHeight : 0;

  return (
    <>
      <Dialogue2
        open={isDialogueOpen}
        showDialogue={showDialogue}
        onClose={() => setIsDialogueOpen(false)}
        onHeightChange={handleDialogueHeightChange}
      />

      <GlassNavBar
        topOffset={navTopOffset}
        showNav={showNav}
        isScrolled={isScrolled}
      />
    </>
  );
}
