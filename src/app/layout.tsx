// app/layout.tsx
"use client";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavWithDialogue from "../components/NavWithDialogue";
import { CustomTransition } from "@/components/PageTransition2";

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

  return (
    <html lang="en" className={SuissenIntl.variable}>
      <body className="overflow-x-hidden">
        <NavWithDialogue />

        {/* AnimatePresence only wraps the content that changes */}
        <AnimatePresence mode="wait" initial={false}>
          <div key={pathname}>
            <CustomTransition>{children}</CustomTransition>
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
