import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "@/styles/DialogueBar2.css";

/**
 * Dialogue2 - A GSAP-powered carousel bar above the navbar to show rotating offers.
 * Usage: Place <Dialogue2 /> above <GlassNavBar /> in your layout.
 */
interface Dialogue2Props {
  open: boolean;
  onClose: () => void;
  showDialogue: boolean;
}

const offers = [
  "🎉 Latest Offer: Get 20% off on your first order! Use code: NAMMA20",
  "🚀 Free Delivery: Order above ₹500 and get free delivery to your doorstep!",
  "⭐ New Menu: Try our authentic South Indian specialties - Now Available!",
  "🔥 Weekend Special: Buy 2 Get 1 Free on all combo meals this weekend!",
  "💎 Premium Members: Enjoy exclusive 30% discount on weekend orders!",
  "🌟 Chef's Special: Limited time authentic Hyderabadi biryani available!",
];

export default function Dialogue2({
  open,
  onClose,
  showDialogue,
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
  const handleClose = async () => {
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

  if (!open) return null;

  return (
    <div
      ref={containerRef}
      className="dialogue2-bar w-full fixed top-0 left-0 z-60 flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
