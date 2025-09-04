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
      setIsScrolled(currentScrollY > 40);

      // Ensure dialogue only appears at the very top
      if (currentScrollY === 0 && isDialogueOpen) {
        setShowDialogue(true);
      } else {
        setShowDialogue(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY.current) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDialogueOpen]);

  // GSAP hook (optional animations)
  useGSAP(() => {}, {
    dependencies: [showDialogue, showNav, isDialogueOpen],
    scope: navWrapperRef,
  });

  const handleDialogueHeightChange = (height: number) => {
    setDialogueHeight(height);
  };

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
