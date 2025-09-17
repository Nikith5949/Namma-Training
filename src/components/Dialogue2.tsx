import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "@/styles/DialogueBar2.css";

/**
 * Dialogue2 - A GSAP-powered carousel bar above the navbar to show rotating offers.
 * Usage: Place <Dialogue2 /> above <GlassNavBar /> in your layout.
 * Now clickable and navigates to /Stryv-pass
 */
interface Dialogue2Props {
  open: boolean;
  onClose: () => void;
  showDialogue: boolean;
  onHeightChange: (height: number) => void;
}

const offers = [
  "🌅 Early Bird Special: Kickstart your day with Namma Strength & MMA classes! Use code: NAMMA10",
  "💪 Independent Workouts: Enjoy early bird open gym access at Stryv Fit! Use code: STRYV1",
  "🏋️‍♂️ Universal Access: Train at both Namma and Stryv techniques at STRYV FIT! Use code: ALLFIT",
];

export default function Dialogue2({
  open,
  onClose,
  showDialogue,
  onHeightChange,
}: Dialogue2Props) {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // GSAP animations using useGSAP hook
  const { contextSafe } = useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      // Set initial states
      gsap.set(containerRef.current, {
        opacity: 0,
        y: -20,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 15,
        scale: 1.05,
      });
    },
    { scope: containerRef }
  );

  // Context-safe animation functions
  const animateTextOut = contextSafe(() => {
    if (!textRef.current) return Promise.resolve();

    return new Promise<void>((resolve) => {
      gsap.to(textRef.current, {
        opacity: 0,
        y: -15,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  });

  const animateTextIn = contextSafe(() => {
    if (!textRef.current) return Promise.resolve();

    return new Promise<void>((resolve) => {
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: resolve,
      });
    });
  });

  const animateContainerIn = contextSafe(() => {
    if (!containerRef.current) return Promise.resolve();

    return new Promise<void>((resolve) => {
      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
        onComplete: resolve,
      });
    });
  });

  const animateContainerOut = contextSafe(() => {
    if (!containerRef.current) return Promise.resolve();

    return new Promise<void>((resolve) => {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  });

  // Hover animations
  const handleMouseEnter = contextSafe(() => {
    setIsPaused(true);
    if (textRef.current) {
      gsap.to(textRef.current, {
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  const handleMouseLeave = contextSafe(() => {
    setIsPaused(false);
    if (textRef.current) {
      gsap.to(textRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  // Button hover animations
  const handleButtonMouseEnter = contextSafe(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1.2,
        rotation: 90,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  );

  const handleButtonMouseLeave = contextSafe(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  );

  // Navigation handler for clicking the dialogue
  const handleDialogueClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent navigation if clicking the close button
    if ((e.target as HTMLElement).closest(".dialogue2-close")) {
      return;
    }

    // Navigate to Stryv-pass page
    window.location.href = "/Stryv-pass";
  };

  // Keyboard navigation handler
  const handleDialogueKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      // Navigate to Stryv-pass page
      window.location.href = "/Stryv-pass";
    }
  };
  //
  // Carousel rotation logic
  const rotateOffer = async () => {
    await animateTextOut();
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    setTimeout(async () => {
      await animateTextIn();
    }, 50);
  };

  // Setup carousel interval
  React.useEffect(() => {
    if (!open || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(rotateOffer, 4500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [open, isPaused]);

  // Handle scroll show/hide animations
  React.useEffect(() => {
    if (!open) return;

    const handleAnimation = async () => {
      if (showDialogue) {
        // Show dialogue with animation
        await animateContainerIn();
        setTimeout(async () => {
          await animateTextIn();
        }, 200);
      } else {
        // Hide dialogue with animation
        await animateContainerOut();
      }
    };

    handleAnimation();
  }, [showDialogue, open]);

  // Initial setup when component opens
  React.useEffect(() => {
    const initializeDialogue = async () => {
      if (open && showDialogue) {
        await animateContainerIn();
        setTimeout(async () => {
          await animateTextIn();
        }, 200);
      }
    };

    initializeDialogue();
  }, [open]);

  // Handle close with proper animation
  const handleClose = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent dialogue click from firing
    try {
      await animateContainerOut();
      onClose();
    } catch (error) {
      // Fallback: close immediately if animation fails
      onClose();
      console.error("Error closing dialogue:", error);
    }
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (containerRef.current) {
      onHeightChange(containerRef.current.offsetHeight);
    }
  }, [open, showDialogue, onHeightChange]);

  if (!open) return null;

  return (
    <div
      ref={containerRef}
      className="dialogue2-bar w-full fixed top-0 left-0 z-60 flex items-center justify-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleDialogueClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleDialogueKeyDown}
      aria-label="Click to visit Stryv Pass page"
    >
      <span ref={textRef} className="dialogue2-text dialogue2-carousel-text">
        {offers[currentOfferIndex]}
      </span>
      <button
        className="dialogue2-close absolute right-4 text-xl text-slate-400 hover:text-slate-700 focus:outline-none bg-transparent border-none cursor-pointer"
        aria-label="Close"
        onClick={handleClose}
        style={{ background: "none", border: "none" }}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        ×
      </button>
    </div>
  );
}
