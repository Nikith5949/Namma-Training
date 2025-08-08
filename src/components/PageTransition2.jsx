"use client";
import { motion } from "framer-motion";
import "./styles.scss";
import React from "react";

const anim = (variants) => ({
  initial: "initial",
  animate: "enter", // matches the variants
  exit: "exit",
  variants,
});

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 1 },
};

const slide = {
  initial: { top: "100vh" },
  enter: { top: "0" },
  exit: { top: "100vh" },
};

export const CustomTransition = ({ children }) => {
  return (
    <div className="inner">
      <motion.div {...anim(opacity)} className="page">
        {children}
      </motion.div>
    </div>
  );
};
