"use client";
import React, { useRef, useState, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import StryvLogo from "./SrtyvLogo";
import { StryvText } from "./SrtyvText";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import "@/styles/GlassNavBar.css";
// Throttle utility for better performance
const useThrottle = (callback: Function, delay: number) => {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args: any[]) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    },
    [callback, delay]
  );
};

// Debounce utility for scroll end detection
const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: any[]) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
};

// Mock Dialogue2 Component
interface Dialogue2Props {
  open: boolean;
  onClose: () => void;
  showDialogue: boolean;
  onHeightChange: (height: number) => void;
}

// Updated Dialogue2 Component with perfectly centered content
// Updated Dialogue2 Component with perfectly centered content
// Updated Dialogue2 Component with perfectly centered content
// Updated Dialogue2 Component with perfectly centered content and popping animations
// Updated Dialogue2 Component with perfectly centered content and smooth animations
const Dialogue2 = ({
  open,
  onClose,
  showDialogue,
  onHeightChange,
}: Dialogue2Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const offerTextRef = useRef<HTMLSpanElement>(null);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [displayedOfferIndex, setDisplayedOfferIndex] = useState(0);
  const isAnimating = useRef(false);

  const offers = [
    "🎉 Latest Offer: Get 20% off on your first order! Use code: NAMMA20",
    "🚀 Free Delivery: Order above ₹500 and get free delivery!",
    "⭐ New Menu: Try our authentic South Indian specialties!",
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, {
      opacity: showDialogue ? 1 : 0,
      y: showDialogue ? 0 : -60,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [showDialogue]);

  // Smooth fade out and pop in animation
  useGSAP(() => {
    if (
      !offerTextRef.current ||
      isAnimating.current ||
      currentOfferIndex === displayedOfferIndex
    )
      return;

    isAnimating.current = true;

    // Fade out current text
    gsap.to(offerTextRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Update the displayed text
        setDisplayedOfferIndex(currentOfferIndex);

        // Reset position and fade in new text
        gsap.set(offerTextRef.current, { y: 10 });
        gsap.to(offerTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      },
    });
  }, [currentOfferIndex, displayedOfferIndex]);

  React.useEffect(() => {
    if (containerRef.current) {
      onHeightChange(containerRef.current.offsetHeight);
    }
  }, [open, showDialogue, onHeightChange]);

  React.useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [open, offers.length]);

  if (!open) return null;

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        {/* Centered content with smooth animation */}
        <span
          ref={offerTextRef}
          className="text-sm font-medium text-center"
          style={{ willChange: "transform, opacity" }}
        >
          {offers[displayedOfferIndex]}
        </span>

        {/* Close button positioned absolutely to the right */}
        <button
          onClick={onClose}
          className="absolute right-0 text-white/80 hover:text-white text-xl leading-none w-8 h-8 flex items-center justify-center hover:rotate-90 transition-all duration-300 ease-in-out"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};
// Enhanced GlassNavBar Component with Mobile Dropdown
interface GlassNavBarProps {
  topOffset?: number;
  showNav: boolean;
  isScrolled?: boolean;
}
const GlassNavBar = ({
  topOffset = 0,
  showNav,
  isScrolled = false,
}: GlassNavBarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const router = useTransitionRouter();

  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuContentRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const useGlassEffect = !isScrolled;
  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.8, transform: "translateY(-35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0.0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0.0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  // Calculate positioning for mobile dropdown
  const navPositioning = useMemo(() => {
    const baseTop = topOffset + 64; // nav height is 64px (h-16)
    return {
      top: `${baseTop}px`,
    };
  }, [topOffset]);

  // Close mobile menu handler
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Navigation animations
  useGSAP(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      opacity: showNav ? 1 : 0,
      y: showNav ? 0 : -60,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [showNav]);

  // Mobile dropdown animations
  useGSAP(() => {
    if (!mobileDropdownRef.current) return;

    if (isMobileMenuOpen) {
      // Show dropdown
      gsap.set(mobileDropdownRef.current, { display: "block" });
      gsap.to(mobileDropdownRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate menu items
      if (mobileMenuContentRef.current) {
        const menuItems =
          mobileMenuContentRef.current.querySelectorAll(".mobile-menu-item");
        gsap.fromTo(
          menuItems,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }
        );
      }
    } else {
      // Hide dropdown
      gsap.to(mobileDropdownRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileDropdownRef.current, { display: "none" });
        },
      });
    }
  }, [isMobileMenuOpen]);

  // Handle navigation item clicks (mock implementation)
  const handleNavClick = (path: string) => {
    console.log(`Navigating to: ${path}`);
    closeMobileMenu();
    // In a real app, you'd use your router here
    // router.push(path, { onTransitionReady: slideInOut });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 w-full z-40 h-16 ${
          useGlassEffect
            ? "backdrop-blur-sm bg-white/10 border-b border-white/20"
            : "bg-black/90 border-b border-white/10"
        } shadow-lg flex items-center justify-between px-4 py-3`}
        style={{
          top: `${topOffset}px`,
          willChange: "transform, opacity",
          WebkitBackdropFilter: useGlassEffect ? "blur(12px)" : "none",
        }}
      >
        <div className="flex items-center space-x-3">
          <StryvLogo className="w-[50px] h-[50px]" />
          <StryvText className="w-[100px] h-[50px]" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li className="text-white font-medium hover:text-red-300 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
            <Link href="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="text-white font-medium hover:text-red-300 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                router.push("/about", { onTransitionReady: slideInOut });
              }}
            >
              About
            </a>
          </li>
          <li className="text-white font-medium hover:text-red-300 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                router.push("/contact", { onTransitionReady: slideInOut });
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`mobile-menu-button md:hidden flex flex-row justify-center items-center w-12 h-12 space-x-[0.25rem] group relative transition-all duration-300 ease-in-out transform  ${
            isMobileMenuOpen ? "rotate-90  -translate-y-2" : ""
          }`}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`line h-1 w-[1.2rem] transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "scale-x-[0%]" : ""
            }`}
          ></div>
          <div className="line h-10 w-[0.53rem] transition-all duration-300 ease-in-out transform"></div>
          <div
            className={`line h-10 w-[0.3rem] transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "scale-y-[70%]" : ""
            }`}
          ></div>
          <div
            className={`line h-8 w-[0.35rem] transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "scale-y-[50%]" : ""
            }`}
          ></div>
          <div
            className={`line h-4 w-[0.2rem] transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "scale-y-[20%]" : ""
            }`}
          ></div>
        </button>
      </nav>

      {/* Enhanced Mobile Dropdown Menu */}
      <div
        ref={mobileDropdownRef}
        className="mobile-dropdown   fixed left-0 w-full z-40 opacity-0 hidden"
        style={{
          ...navPositioning,
          transition:
            topOffset !== undefined ? "top 0.3s ease-in-out" : undefined,
        }}
      >
        <div
          ref={mobileMenuContentRef}
          className={`glass-nav-mobile h-full ${
            useGlassEffect
              ? "backdrop-blur-[7px] bg-white/5 border-b border-white/20"
              : "bg-black/95 border-b border-white/20"
          } shadow-lg pt-5 pb-6`}
          style={{
            WebkitBackdropFilter: useGlassEffect ? "blur(2px)" : "none",
          }}
        >
          <ul className="flex flex-col items-center space-y-6 px-8">
            <li className="mobile-menu-item text-white font-medium text-lg hover:text-red-300 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="mobile-menu-item text-white font-medium text-lg hover:text-red-300 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  router.push("/about", { onTransitionReady: slideInOut });
                }}
              >
                About
              </a>
            </li>
            <li className="mobile-menu-item text-white font-medium text-lg hover:text-red-300 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  router.push("/contact", { onTransitionReady: slideInOut });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
// Main Navigation Component with Optimizations
export default function OptimizedNavWithDialogue() {
  const [isDialogueOpen, setIsDialogueOpen] = useState(true);
  const [showDialogue, setShowDialogue] = useState(true);
  const [dialogueHeight, setDialogueHeight] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for scroll tracking
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<"up" | "down">("up");
  const isScrolling = useRef(false);
  const navWrapperRef = useRef<HTMLDivElement>(null);

  // Mobile detection with useMemo for performance
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
  }, []);

  // Optimized scroll handler with better mobile logic
  const handleScrollOptimized = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

    // Set scrolled state
    setIsScrolled(currentScrollY > 40);

    // Mobile-specific optimizations
    if (isMobile) {
      // Higher threshold for mobile to prevent jittery behavior
      const mobileScrollThreshold = 15;

      // Ignore very small scroll movements on mobile
      if (scrollDelta < mobileScrollThreshold) {
        return;
      }

      // At the very top or very small scroll values, always show
      if (currentScrollY < 50) {
        setShowNav(true);
        if (isDialogueOpen) setShowDialogue(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Near the bottom of the page, be less aggressive about hiding
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const distanceFromBottom =
        documentHeight - (currentScrollY + windowHeight);

      if (distanceFromBottom < 100) {
        // Near bottom - be more conservative about animations
        if (currentScrollY > lastScrollY.current + mobileScrollThreshold) {
          // Only hide if scrolling down significantly
          setShowNav(false);
          if (isDialogueOpen) setShowDialogue(false);
        }
        lastScrollY.current = currentScrollY;
        return;
      }
    }

    // Standard scroll behavior
    const scrollThreshold = isMobile ? 15 : 10;

    if (currentScrollY > lastScrollY.current + scrollThreshold) {
      // Scrolling down
      if (scrollDirection.current !== "down") {
        scrollDirection.current = "down";
        setShowNav(false);
        if (isDialogueOpen) setShowDialogue(false);
      }
    } else if (currentScrollY < lastScrollY.current - scrollThreshold) {
      // Scrolling up
      if (scrollDirection.current !== "up") {
        scrollDirection.current = "up";
        setShowNav(true);
        if (isDialogueOpen) setShowDialogue(true);
      }
    }

    lastScrollY.current = currentScrollY;
  }, [isMobile, isDialogueOpen]);

  // Throttled scroll handler for better performance
  const throttledScrollHandler = useThrottle(
    handleScrollOptimized,
    isMobile ? 16 : 8
  );

  // Debounced scroll end handler
  const debouncedScrollEnd = useDebounce(() => {
    isScrolling.current = false;
    // Ensure navbar is visible when scrolling stops
    if (window.scrollY < 100) {
      setShowNav(true);
      if (isDialogueOpen) setShowDialogue(true);
    }
  }, 150);

  // Enhanced scroll listener with performance optimizations
  React.useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
      }

      throttledScrollHandler();
      debouncedScrollEnd();
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: false,
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [throttledScrollHandler, debouncedScrollEnd]);

  // Handle resize events to recalculate mobile state
  React.useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize to update mobile state
      setShowNav(true);
      if (isDialogueOpen) setShowDialogue(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDialogueOpen]);

  // Handle dialogue height changes with better performance
  const handleDialogueHeightChange = useCallback((height: number) => {
    setDialogueHeight(height);
  }, []);

  // Calculate navbar position
  const navTopOffset = useMemo(() => {
    return isDialogueOpen && showDialogue ? dialogueHeight : 0;
  }, [isDialogueOpen, showDialogue, dialogueHeight]);

  return (
    <div ref={navWrapperRef}>
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
    </div>
  );
}
