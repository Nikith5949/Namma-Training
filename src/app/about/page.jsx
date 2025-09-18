// pages/about.jsx
"use client";
import React from "react";
import { videonamma } from "@/components/all_assets";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import HorizontalScroll from "@/components/HorizontalScroll";
import HorizontalMobileScroll from "@/components/HorizontalMobileScroll";
import ImageContainer from "@/components/ImageContainer";
import { section1bgimg } from "@/components/all_assets";
import "@/styles/HorizontalScroll.css";
// import StryvLogo from "@/components/SrtyvLogo";
import { StryvLogoMask } from "@/components/SrtyvLogoMask";
import StryvLogoWithText from "@/components/SrtyvLogoWithText";

function About() {
  const phoneNumber = "+919480009889";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;
  return (
    <div className="mob bg-[var(--theme-bgcolor)] w-full flex-col  min-h-screen   pt-50 ">
      <StryvLogoWithText className="block lg:hidden w-full h-[50svh]" />
      <svg
        viewBox="0 0 520 400"
        className="pc hidden lg:block w-full h-[600px]"
      >
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

          {/* Mask definition 1*/}
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

      <div className="flex flex-col items-center justify-center text-[var(--theme-color)] pt-50">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-center max-w-2xl">
          We are a team of passionate individuals committed to making a
          difference in the world through our innovative solutions and
          unwavering dedication to our clients.
        </p>
      </div>

      {/* Our Team Heading */}
      <div className="flex flex-col items-center justify-center text-[var(--theme-color)] pt-20">
        <h2 className="text-4xl font-bold ">Our Team</h2>
      </div>

      <div className="pc hidden lg:block relative">
        <HorizontalScroll />

        <div className="social-link h-[100vh] lg:h-[60vh] bg-[var(--theme-bgcolor)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--theme-color)] mb-8 lg:mb-12">
              Connect With Us
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/stryv.fit.ind?igsh=MTYyZWszNWNndDN6bg=="
                className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                aria-label="Follow us on Instagram"
                target="_blank" // ✅ opens in a new tab
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="mt-3 text-sm sm:text-base lg:text-lg font-medium text-[var(--theme-color)] group-hover:text-pink-500 transition-colors duration-300">
                  Instagram
                </span>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                aria-label="Follow us on Facebook"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="mt-3 text-sm sm:text-base lg:text-lg font-medium text-[var(--theme-color)] group-hover:text-blue-500 transition-colors duration-300">
                  Facebook
                </span>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                aria-label="Subscribe to our YouTube channel"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="mt-3 text-sm sm:text-base lg:text-lg font-medium text-[var(--theme-color)] group-hover:text-red-500 transition-colors duration-300">
                  YouTube
                </span>
              </a>
              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank" // ✅ opens in a new tab
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                aria-label="Contact us on WhatsApp"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                </div>
                <span className="mt-3 text-sm sm:text-base lg:text-lg font-medium text-[var(--theme-color)] group-hover:text-green-500 transition-colors duration-300">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Scroll */}
      <HorizontalMobileScroll />

      {/* Social Links for Mobile/Medium devices */}
      <div className="block lg:hidden social-link-mobile py-12 sm:py-16 bg-[var(--theme-bgcolor)] px-4 sm:px-6">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--theme-color)] mb-6 sm:mb-8">
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/stryv.fit.ind?igsh=MTYyZWszNWNndDN6bg=="
              className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Follow us on Instagram"
              target="_blank" // ✅ opens in a new tab
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-[var(--theme-color)] group-hover:text-pink-500 transition-colors duration-300">
                Instagram
              </span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Follow us on Facebook"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-[var(--theme-color)] group-hover:text-blue-500 transition-colors duration-300">
                Facebook
              </span>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Subscribe to our YouTube channel"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-[var(--theme-color)] group-hover:text-red-500 transition-colors duration-300">
                YouTube
              </span>
            </a>
            <a
              href={whatsappLink}
              className="group flex flex-col items-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Contact us on WhatsApp"
              target="_blank" // ✅ opens in a new tab
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-[var(--theme-color)] group-hover:text-green-500 transition-colors duration-300">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
