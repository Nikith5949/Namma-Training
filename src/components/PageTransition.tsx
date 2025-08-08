"use client";
import { motion } from "framer-motion";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

// Default fade transition with improved exit
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export const CustomTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Slide transition with smooth exit
export const SlideTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        duration: 5,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale with rotation exit effect
export const ScaleTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      style={{ transformPerspective: "1000px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Dramatic exit transition
// export const DramaticTransition: React.FC<PageTransitionProps> = ({
//   children,
//   className = "",
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8, blur: 10 }}
//       animate={{ opacity: 1, scale: 1, blur: 0 }}
//       exit={{
//         opacity: 0,
//         scale: 1.2,
//         blur: 20,
//         transition: { duration: 0.3 },
//       }}
//       transition={{
//         duration: 0.6,
//         ease: [0.23, 1, 0.32, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// Stagger with enhanced exit
export const StaggerTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            when: "afterChildren", // Wait for children to exit first
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced stagger item with better exit
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 30, scale: 0.9 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: {
          opacity: 0,
          y: -30,
          scale: 0.9,
          transition: { duration: 0.3, ease: "easeIn" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Directional transition based on navigation direction
export const DirectionalTransition: React.FC<
  PageTransitionProps & {
    direction?: "left" | "right" | "up" | "down";
  }
> = ({ children, className = "", direction = "right" }) => {
  const directions = {
    left: { enter: -100, exit: 100 },
    right: { enter: 100, exit: -100 },
    up: { enter: -100, exit: 100 },
    down: { enter: 100, exit: -100 },
  };

  const isVertical = direction === "up" || direction === "down";
  const { enter, exit } = directions[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        [isVertical ? "y" : "x"]: enter,
      }}
      animate={{
        opacity: 1,
        [isVertical ? "y" : "x"]: 0,
      }}
      exit={{
        opacity: 0,
        [isVertical ? "y" : "x"]: exit,
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
