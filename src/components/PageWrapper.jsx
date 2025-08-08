// components/PageWrapper.jsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 1,
  },
};

const slideVariants = {
  initial: {
    y: "100vh",
  },
  animate: {
    y: "100vh",
    transition: { duration: 0 },
  },
  exit: {
    y: "0vh",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function PageWrapper({ children, className = "" }) {
  return (
    <div className="inner">
      {/* Slide overlay */}
      <motion.div
        className="slide"
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />

      {/* Page content */}
      <motion.div
        className="page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </div>
  );
}
