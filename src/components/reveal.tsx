"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

export function Reveal({ children, className, delay = 0, y = 24, x = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}