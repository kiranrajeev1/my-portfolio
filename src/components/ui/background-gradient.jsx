"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js"; // Adjust path if your utils.js is elsewhere

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: "400% 400%",
          // Gradient colors are now matched to your aurora theme
          backgroundImage: `conic-gradient(from 180deg at 50% 50%, #3b82f6 0%, #a5b4fc 25%, #93c5fd 50%, #ddd6fe 75%, #3b82f6 100%)`,
        }}
        className={
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform"
        }
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{
          backgroundSize: "400% 400%",
          // Gradient colors are now matched to your aurora theme
          backgroundImage: `conic-gradient(from 180deg at 50% 50%, #3b82f6 0%, #a5b4fc 25%, #93c5fd 50%, #ddd6fe 75%, #3b82f6 100%)`,
        }}
        className={
          "absolute inset-0 rounded-3xl z-[1] will-change-transform"
        }
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};