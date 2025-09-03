"use client";

import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
// import NavWithDialogue from "../components/NavWithDialogue";
import OptimizedNavWithDialogue from "@/components/OptimizedNavWithDialogue";
import { ViewTransitions } from "next-view-transitions";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import { section1bgimg } from "../components/all_assets";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SuissenIntl = localFont({
  src: "../../public/fonts/SuisseIntl-Regular.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-suissen-intl",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Kill old instance on route change
    if (ScrollSmoother.get()) {
      ScrollSmoother.get()?.kill();
    }

    // ✅ Only enable smooth scroll if NOT on /about
    if (pathname !== "/about") {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 3,
        effects: true,
      });
    }
  }, [pathname]);

  return (
    <ViewTransitions>
      <html lang="en" className={`${SuissenIntl.variable}`}>
        <body>
          <OptimizedNavWithDialogue />

          {/* Background outside smoother */}
          <div
            id="global-fixed-bg"
            style={{
              background: `url(${section1bgimg}) no-repeat center center`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* If on /about, render children normally */}
          {pathname === "/about" ? (
            <div>{children}</div>
          ) : (
            <div id="smooth-wrapper">
              <div id="smooth-content" key={pathname}>
                {children}
              </div>
            </div>
          )}
        </body>
      </html>
    </ViewTransitions>
  );
}
