import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const coverRef = useRef<HTMLDivElement>(null!);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  function gotoPage(e: React.MouseEvent<HTMLAnchorElement>) {
    const attr = (e.target as HTMLAnchorElement).getAttribute("data-href")
    setTransitioning(true);
    setTimeout(() => {
      router.push(attr as string);
    }, 210);
  }

  if (!open) return null;
  return (
    <motion.div className={styles.navcover} ref={coverRef} animate={transitioning ? {opacity: 0, transition: { duration: .2 }} : undefined}>
      <motion.div
        className={styles.internal}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.a variants={item} onClick={e => gotoPage(e)} data-href="/?transitioning"         >HOME</motion.a>
        <motion.a variants={item} onClick={e => gotoPage(e)} data-href="/about"                  >ABOUT ME</motion.a>
        <motion.a variants={item} onClick={e => gotoPage(e)} data-href="/portfolio?transitioning">PORTFOLIO</motion.a>
        <motion.a variants={item} onClick={e => gotoPage(e)} data-href="/contact"                >CONTACT</motion.a>
      </motion.div>
    </motion.div>
  )
}