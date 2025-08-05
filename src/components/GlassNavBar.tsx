import React, { useRef } from "react";
import "@/styles/GlassNavBar.css";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

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

  // Use glass effect only when not scrolled (at the very top)
  const useGlassEffect = !isScrolled;

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
          src={`${
            process.env.NEXT_PUBLIC_BASE_PATH || ""
          }/assets/newnammanav.png`}
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
        </li>
        <li className="text-white font-medium hover:underline cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="text-white font-medium hover:underline cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
