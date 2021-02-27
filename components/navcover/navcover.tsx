import React, { useState, useRef, useEffect } from "react";
import styles from "./navcover.module.scss";
import { motion, Variants } from "framer-motion";

interface NavCoverProps {
  open: boolean
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .1,
    }
  }
}

export default function NavCover({ open }: NavCoverProps) {
  const coverRef = useRef<HTMLDivElement>(null!);

  if (!open) return null;
  return (
    <div className={styles.navcover} ref={coverRef}>
      <motion.div
        className={styles.internal}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.a href="#" variants={item}>HOME</motion.a>
        <motion.a href="#" variants={item}>ABOUT ME</motion.a>
        <motion.a href="#" variants={item}>PORTFOLIO</motion.a>
        <motion.a href="#" variants={item}>CONTACT</motion.a>
      </motion.div>
    </div>
  )
}