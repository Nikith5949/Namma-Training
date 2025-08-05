import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Section5() {
  const scrollRef = useRef(null);

  // Array of welcome in different Indian languages with their English names
  const welcomeLanguages = [
    { text: "WELCOME", lang: "English" },
    { text: "स्वागत हे", lang: "Hindi" },
    { text: "வரவேற்பு", lang: "Tamil" },
    { text: "స్వాగతం", lang: "Telugu" },
    { text: "WELCOME", lang: "English" },
    { text: "ಸುಸ್ವಾಗತ", lang: "Kannada" },
    { text: "സ്വാഗതം", lang: "Malayalam" },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = scrollRef.current;

    // Create temporary element to calculate accurate width
    const temp = document.createElement("div");
    temp.className =
      "whitespace-nowrap text-6xl font-bold uppercase absolute invisible";
    temp.innerHTML = welcomeLanguages
      .map((item) => `${item.text}&nbsp;&nbsp;&nbsp;`)
      .join("");
    document.body.appendChild(temp);
    const width = temp.offsetWidth;
    document.body.removeChild(temp);

    // Animation with slower speed
    gsap.fromTo(
      element,
      { x: 0 }, // Start from right edge
      {
        x: -width,
        duration: 30, // Very slow (120 seconds = 2 minutes)
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="text-[rgba(10,218,218,0.99)] bg-[rgba(251,248,237,1)] w-full relative z-30 pb-20">
      {/* Top divider */}
      <div className="border-t h-0.4 mr-[5vw] ml-[5vw] bg-[rgba(10,218,218,0.99)] mb-10"></div>

      <h1 className="main-contactus flex justify-center text-4xl font-bold uppercase mb-8">
        Contact us
      </h1>

      {/* Contact information */}
      <div className="flex flex-col items-center">
        {/* Email and Phone */}
        <div className="text-center mb-4">
          <p className="text-lg">NAMMA@SSCONTENT.COM</p>
          <p className="text-lg">(+91) 467-9780</p>
        </div>

        {/* Address */}
        <div className="text-center mb-6">
          <p className="text-lg">BANGALORE, WHITEFIELD, </p>
          <p className="text-lg">HOODI, DEVIANUGRAHA 3RD FLOOR</p>
        </div>

        {/* Social media links */}
        <div className="flex space-x-6 mb-12">
          <span className="text-lg uppercase">Vimeo</span>
          <span className="text-lg uppercase">Linkedin</span>
          <span className="text-lg uppercase">Instagram</span>
        </div>
      </div>

      <div className="rotate-6">
        {/* Dividers */}
        <div className="border-t h-0.4 mr-[7vw] ml-[7vw] bg-[rgba(10,218,218,0.99)] mt-10"></div>

        {/* Infinite scrolling text with multiple languages */}
        <div className="overflow-hidden py-5 w-screen">
          <div
            ref={scrollRef}
            className="whitespace-nowrap text-6xl font-bold uppercase text-[rgba(10,218,218,0.99)]"
            dangerouslySetInnerHTML={{
              __html: welcomeLanguages
                .map((item) => `${item.text}&nbsp;&nbsp;&nbsp;`)
                .join("")
                .repeat(3), // Repeat the sequence 3 times for longer scroll
            }}
          />
        </div>

        <div className="border-t h-0.4 mr-[7vw] ml-[7vw] bg-[rgba(10,218,218,0.99)] mt-5 mb-12"></div>
      </div>
      {/* Footer */}
      <div className="ml-[25vw] text-left py-6 text-sm">
        <p>© COPYRIGHT 2025</p>
        <p>WEBSITE BY NIKITH HOODY ANUPKUMAR</p>
      </div>
    </div>
  );
}
