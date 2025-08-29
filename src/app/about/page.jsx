// pages/about.jsx
"use client";
import React from "react";
import { videonamma } from "@/components/all_assets";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function About() {
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  // });

  // const center = {
  //   lat: 12.99847575274743,
  //   lng: 77.71763229703619,
  // };

  return (
    <div className="bg-[var(--theme-bgcolor)]  w-screen flex-col  items-center justify-center pt-50">
      <svg viewBox="0 0 520 400" className=" w-full h-[600px]">
        <defs>
          {/* Drop shadow filter */}
          <filter id="logo-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="6"
              dy="6"
              stdDeviation="6"
              floodColor="black"
              floodOpacity="0.6"
            />
          </filter>

          {/* Mask definition */}
          <mask id="stryv-mask">
            <rect width="100%" height="100%" fill="black" />
            <path
              fill="white"
              d="M1 341c-.333 1-.6 3.5 1 5.5.667.5 2.5 1.2 4.5 0L197 182l-74 28 55-29.5 72-3.5-31.5 35-14.5 52.5c-1.167 3.333-1.7 9.5 5.5 7.5l27-25 80-101-143.5 6-34.5 22.5zM200 5.5l-35.5 53L240 0zM94 83.5 157.5 15l-18 50.5-56 61.5 82-4-34.5 28-96 5z"
            />
            <path
              fill="white"
              d="m162.5 71-48 24.5 91.5-6 41.5-26-41.5 52L339.5.5 322 11z"
            />
            <path
              fill="#fff"
              d="M428 342h-46v4h46zM382 353h44v4h-39.5v11H382v-15M433 368v-26h4.5v26zM489 342v4.5h-20.5V368H464v-21.5h-20.5V342zM395 286h-10l27.5 19v16.5h7V305l28.5-19h-10.5L416 300zM462.5 286h-8l32.5 35.5 32.5-35.5h-8L487 313zM371 286.5h-56.5v5.5H369c5 .5 4.5 9.5 0 9.5l-54.5.5v20h5v-15h40l13 15h7.5l-13.5-15h4.5c10.5-4.5 8.5-16.5 0-20.5M176.5 286.5H233v5.5h-54.5c-3 1.5-4.5 6 0 9H224c10 1 14 17.5 0 20.5h-54.5V316H224c4 0 4-9 0-9h-47.5c-7.5-1.5-13-15 0-20.5M241.5 286.5h64v5.5H277v30h-6.5v-30h-29z"
            ></path>
          </mask>
        </defs>

        {/* --- Shadow shape behind --- */}
        <g filter="url(#logo-shadow)" fill="black" opacity="0.7">
          <path d="M1 341c-.333 1-.6 3.5 1 5.5.667.5 2.5 1.2 4.5 0L197 182l-74 28 55-29.5 72-3.5-31.5 35-14.5 52.5c-1.167 3.333-1.7 9.5 5.5 7.5l27-25 80-101-143.5 6-34.5 22.5zM200 5.5l-35.5 53L240 0zM94 83.5 157.5 15l-18 50.5-56 61.5 82-4-34.5 28-96 5z" />
          <path d="m162.5 71-48 24.5 91.5-6 41.5-26-41.5 52L339.5.5 322 11z" />
          <path
            fill="#fff"
            d="M428 342h-46v4h46zM382 353h44v4h-39.5v11H382v-15M433 368v-26h4.5v26zM489 342v4.5h-20.5V368H464v-21.5h-20.5V342zM395 286h-10l27.5 19v16.5h7V305l28.5-19h-10.5L416 300zM462.5 286h-8l32.5 35.5 32.5-35.5h-8L487 313zM371 286.5h-56.5v5.5H369c5 .5 4.5 9.5 0 9.5l-54.5.5v20h5v-15h40l13 15h7.5l-13.5-15h4.5c10.5-4.5 8.5-16.5 0-20.5M176.5 286.5H233v5.5h-54.5c-3 1.5-4.5 6 0 9H224c10 1 14 17.5 0 20.5h-54.5V316H224c4 0 4-9 0-9h-47.5c-7.5-1.5-13-15 0-20.5M241.5 286.5h64v5.5H277v30h-6.5v-30h-29z"
          ></path>
        </g>

        {/* --- Video clipped with mask --- */}
        <foreignObject width="100%" height="100%" mask="url(#stryv-mask)">
          <video
            src={videonamma}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
      {/* --- Flex Row Content --- */}
      {/* --- Flex Row Content --- */}
      {/* --- Flex Row Content --- */}
      <div className="flex flex-row items-center justify-center gap-12 mt-12 px-12">
        {/* Map container */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=12.99847575274743,77.71763229703619"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden shadow-lg block"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.87544270778!2d77.71763229703619!3d12.99847575274743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzU0LjUiTiA3N8KwNDMnMDMuNSJF!5e0!3m2!1sen!2sin!4v1698843982342!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: 0, pointerEvents: "none" }} // disables iframe interactions
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>

        {/* Text container */}
        <div className="flex items-center justify-center max-w-md text-center">
          <p>
            cool placeholder cool placeholder cool placeholder cool placeholder
            cool placeholder cool placeholder cool placeholder cool placeholder
            cool placeholder cool placeholder cool placeholder cool placeholder
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
