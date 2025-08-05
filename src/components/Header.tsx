import React from "react";
import { NammaMyLogo } from "@/components/NammaMyLogo";

export default function Header() {
  return (
    <header className="flex justify-center py-1">
      <NammaMyLogo className="h-13 w-60 cursor-pointer py-1" />
    </header>
  );
}
