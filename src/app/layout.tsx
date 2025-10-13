"use client";

import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import NavWithDialogue from "../components/NavWithDialogue";
import { ViewTransitions } from "next-view-transitions";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import { section1bgimg } from "../components/all_assets";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // ✅ install react-icons if not installed

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
    if (ScrollSmoother.get()) {
      ScrollSmoother.get()?.kill();
    }

    if (pathname !== "/about") {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 3,
        effects: true,
      });
    }
  }, [pathname]);

  const phoneNumber = "+916364501155";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <ViewTransitions>
      <html lang="en" className={`${SuissenIntl.variable}`}>
        <head>
          <title>Best Gym in Whitefield, Bengaluru | STRYV FIT</title>
          <meta
            name="description"
            content="Join STRYV – the best gym in Whitefield, Bengaluru offering strength training, CrossFit, and personal training to help you achieve your fitness goals."
          ></meta>
          <meta
            name="keywords"
            content="Best gym in Whitefield, Bengaluru, Fitness center in Whitefield, CrossFit gym in Whitefield"
          ></meta>
          <meta
            name="google-site-verification"
            content="GnrNgS9_eOWrBXTMMdQ1BA7GZt8wwS1MKddowTSJRfg"
          />
          <link rel="canonical" href="https://www.stryv.co.in/" />
        </head>

        <body>
          <NavWithDialogue />

          {/* Background */}
          <div
            id="global-fixed-bg"
            style={{
              background: `url(${section1bgimg}) no-repeat center center`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Page content */}
          {pathname === "/about" ? (
            <div>{children}</div>
          ) : (
            <div id="smooth-wrapper">
              <div id="smooth-content" key={pathname}>
                {children}
              </div>
            </div>
          )}

          {/* ✅ Floating WhatsApp & Phone Buttons */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 
             bg-white/10 
             backdrop-blur-xl 
             border border-white/20 
             text-green-500 
             p-4 rounded-full 
             shadow-lg 
             hover:bg-green-500/60 
             transition
             z-50"
          >
            <FaWhatsapp size={25} />
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="fixed bottom-4 right-4 
             bg-white/10 
             backdrop-blur-sm 
             border border-white/20 
             text-white 
             p-4 rounded-full 
             shadow-lg 
             hover:bg-red-600/70 
             transition
             z-100"
          >
            <FaPhone size={25} />
          </a>
        </body>
      </html>
    </ViewTransitions>
  );
}
