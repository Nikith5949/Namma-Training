"use client";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import NavWithDialogue from "../components/NavWithDialogue";
const SuissenIntl = localFont({
  src: "../../public/fonts/SuisseIntl-Regular.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-suissen-intl",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SuissenIntl.variable}>
      <body className="overflow-x-hidden">
        <NavWithDialogue />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
