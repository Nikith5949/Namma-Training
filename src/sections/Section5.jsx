import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa"; // FontAwesome WhatsApp icon

export default function Section5() {
  const scrollRef = useRef(null);

  const phoneNumber = "+919480009889";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

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

    const temp = document.createElement("div");
    temp.className =
      "whitespace-nowrap text-6xl font-bold uppercase absolute invisible";
    temp.innerHTML = welcomeLanguages
      .map((item) => `${item.text}&nbsp;&nbsp;&nbsp;`)
      .join("");
    document.body.appendChild(temp);
    const width = temp.offsetWidth;
    document.body.removeChild(temp);

    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: -width,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="text-[var(--theme-color)] bg-[var(--theme-bgcolor)] w-full relative z-30 pb-20">
      <div className="border-t h-0.4 mr-[5vw] ml-[5vw] bg-[var(--theme-color)] mb-10"></div>

      <h1 className="main-contactus flex justify-center text-4xl font-bold uppercase mb-8">
        Contact us
      </h1>

      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <p className="text-lg">WWW.STRYV.CO.IN</p>
          <p className="text-lg">(+91) 94800 09889</p>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg">BANGALORE, WHITEFIELD, </p>
          <p className="text-lg">
            SRI DEVIANUGRAHA, 3RD FLOOR, HOODI, ANUP LAYOUT, BANGALORE 560048
          </p>
        </div>

        {/* Social icons */}
        <div className="flex space-x-6 mb-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 text-green-500 hover:text-green-600"
          >
            <FaWhatsapp className="w-full h-full" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-blue-600 hover:text-blue-700"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12v-9.294H9.294v-3.622H12V8.414c0-2.675 1.63-4.134 4.007-4.134 1.14 0 2.12.084 2.404.122v2.788h-1.65c-1.293 0-1.544.615-1.544 1.516v1.992h3.088l-.402 3.622H15.217V24h7.458c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-red-600 hover:text-red-700"
            >
              <path d="M23.498 6.186a2.996 2.996 0 00-2.114-2.12C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.384.566a2.996 2.996 0 00-2.114 2.12C0 8.018 0 12 0 12s0 3.982.502 5.814a2.996 2.996 0 002.114 2.12C4.455 20.5 12 20.5 12 20.5s7.545 0 9.384-.566a2.996 2.996 0 002.114-2.12C24 15.982 24 12 24 12s0-3.982-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/stryv.fit.ind?igsh=MTYyZWszNWNndDN6bg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full text-pink-500 hover:text-pink-600"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="5" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <div className="rotate-6">
        <div className="border-t h-0.4 mr-[7vw] ml-[7vw] bg-[var(--theme-color)] mt-10"></div>

        <div className="overflow-hidden py-5 w-screen">
          <div
            ref={scrollRef}
            className="whitespace-nowrap text-6xl font-bold uppercase text-[var(--theme-color)]"
            dangerouslySetInnerHTML={{
              __html: welcomeLanguages
                .map((item) => `${item.text}&nbsp;&nbsp;&nbsp;`)
                .join("")
                .repeat(3),
            }}
          />
        </div>

        <div className="border-t h-0.4 mr-[7vw] ml-[7vw] bg-[var(--theme-color)] mt-5 mb-12"></div>
      </div>

      <div className="ml-[5vw] text-left py-6 text-sm">
        <p>© COPYRIGHT 2025</p>
        <p>WEBSITE BY NIKITH HOODY ANUPKUMAR</p>
      </div>
    </div>
  );
}
