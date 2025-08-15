"use client";
import React, { useRef, useState } from "react";
import "@/styles/GlassNavBar.css";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { navBarLogo } from "@/components/all_assets";
import { useTransitionRouter } from "next-view-transitions";

/**
 * GlassNavBar - A navigation bar with a frosted glass effect and white elements.
 * Usage: Place <GlassNavBar /> at the top of your layout or page.
 */
interface GlassNavBarProps {
  topClass?: string; // Keep for backward compatibility
  topOffset?: number; // New prop for dynamic positioning
  showNav: boolean;
  isScrolled?: boolean;
}

export default function GlassNavBar({
  topClass = "top-7",
  topOffset,
  showNav,
  isScrolled = false,
}: GlassNavBarProps) {
  const navRef = useRef<HTMLElement>(null);
  const router = useTransitionRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use glass effect only when not scrolled (at the very top)
  const useGlassEffect = !isScrolled;

  // Determine positioning: use topOffset if provided, otherwise fall back to topClass
  const navPositioning =
    topOffset !== undefined ? { top: `${topOffset}px` } : {};
  const navClassPositioning = topOffset !== undefined ? "" : topClass;

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

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-open");
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when screen size changes to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("mobile-menu-open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  // GSAP animations using useGSAP hook
  useGSAP(
    () => {
      if (!navRef.current) return;

      // Set initial state
      gsap.set(navRef.current, {
        opacity: 0,
        y: -20,
      });

      // Animation functions
      const animateNavIn = () => {
        gsap.to(navRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const animateNavOut = () => {
        gsap.to(navRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.2,
          ease: "power2.inOut",
        });
      };

      // Handle show/hide animations based on showNav prop
      if (showNav) {
        animateNavIn();
      } else {
        animateNavOut();
      }
    },
    { dependencies: [showNav], scope: navRef }
  );

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed ${navClassPositioning} left-0 w-full z-50 ${
          useGlassEffect
            ? "backdrop-blur-sm bg-white/5 border-b border-white/10"
            : "bg-black border-b border-white/10"
        } shadow-lg flex items-center justify-between px-4 sm:px-8 py-1`}
        style={{
          ...navPositioning,
          WebkitBackdropFilter: useGlassEffect ? "blur(12px)" : "none",
          willChange: "transform, opacity",
          transition:
            topOffset !== undefined ? "top 0.3s ease-in-out" : undefined,
        }}
      >
        <div className="flex items-center space-x-4">
          {/* Logo - using namma.svg */}
          <Image
            src={navBarLogo}
            alt="Go Namma Logo"
            height={40}
            width={120}
            priority
            className="w-auto h-10 sm:h-14"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li className="text-white font-medium hover:underline cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white font-medium hover:underline cursor-pointer">
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                router.push("/about", { onTransitionReady: slideInOut });
              }}
            >
              About
            </a>
          </li>
          <li className="text-white font-medium hover:underline cursor-pointer">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                router.push("/contact", { onTransitionReady: slideInOut });
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button - deadliftonly right style hamburger lines */}
        <button
          onClick={toggleMobileMenu}
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
          <div
            className={`line h-10 w-[0.53rem] transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "" : ""
            }`}
          ></div>
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`mobile-dropdown fixed left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          ...navPositioning,
          transition:
            topOffset !== undefined
              ? "top 0.3s ease-in-out, transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
              : undefined,
        }}
      >
        <div
          className={`glass-nav-mobile ${
            useGlassEffect
              ? "backdrop-blur-sm bg-white/10 border-b border-white/20"
              : "bg-black/95 border-b border-white/20"
          } shadow-lg pt-20 pb-6`}
        >
          <ul className="flex flex-col items-center space-y-6 px-8">
            <li className="mobile-menu-item text-white font-medium text-lg hover:text-[var(--theme-color)] transition-colors duration-200">
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="mobile-menu-item text-white font-medium text-lg hover:text-[var(--theme-color)] transition-colors duration-200">
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
            <li className="mobile-menu-item text-white font-medium text-lg hover:text-[var(--theme-color)] transition-colors duration-200">
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
}
