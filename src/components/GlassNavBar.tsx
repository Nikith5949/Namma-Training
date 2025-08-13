"use client";
import React, { useRef } from "react";
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
  topClass?: string;
  showNav: boolean;
  isScrolled?: boolean;
}

export default function GlassNavBar({
  topClass = "top-7",
  showNav,
  isScrolled = false,
}: GlassNavBarProps) {
  const navRef = useRef<HTMLElement>(null);
  const router = useTransitionRouter();
  // Use glass effect only when not scrolled (at the very top)
  const useGlassEffect = !isScrolled;
  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
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
    <nav
      ref={navRef}
      className={`fixed ${topClass} left-0 w-full z-50 ${
        useGlassEffect
          ? "backdrop-blur-sm bg-white/5 border-b border-white/10"
          : "bg-black border-b border-white/10"
      } shadow-lg flex items-center justify-between px-8 py-1`}
      style={{
        WebkitBackdropFilter: useGlassEffect ? "blur(12px)" : "none",
        willChange: "transform, opacity",
      }}
    >
      <div className="flex items-center space-x-4">
        {/* Logo - using namma.svg */}
        {/* <NammaOgLogo className="w-12 h-12" /> */}
        {/* <NammaMyLogo id="nama1" className="h-13 w-60 cursor-pointer py-1" /> */}
        <Image
          src={navBarLogo}
          alt="Go Namma Logo"
          height={40}
          width={120}
          priority
          className="w-auto h-14"
        />
      </div>
      <ul className="flex space-x-8">
        <li className="text-white font-medium hover:underline cursor-pointer">
          <Link href="/">Home</Link>
          {/* <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push("/", { onTransitionReady: slideInOut });
            }}
          >
            Home
          </a> */}
        </li>
        <li className="text-white font-medium hover:underline cursor-pointer">
          {/* <Link
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              router.push("/about", { onTransitionReady: pageAnimation });
            }}
          >
            About
          </Link> */}
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
          {/* <Link
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact", { onTransitionReady:  });
            }}
          >
            Contact
          </Link> */}
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
    </nav>
  );
}
