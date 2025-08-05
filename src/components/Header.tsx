import React from "react";
import { NammaMyLogo } from "@/components/NammaMyLogo";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-center py-1">
      {/* <NammaLogo className="z-10 h-20 cursor-pointer text-sky-800"/> */}

      <NammaMyLogo className="h-13 w-60 cursor-pointer py-1" />
    </header>
  );
}
