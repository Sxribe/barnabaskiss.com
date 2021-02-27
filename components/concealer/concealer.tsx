import React, { useEffect, useRef } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import styles from "./concealer.module.scss";

interface ConcealerProps {
  open: boolean;
  sidebarRef: React.MutableRefObject<HTMLImageElement>
}

export default function Concealer(props: ConcealerProps) {
  const mainRef = useRef<HTMLDivElement>(null!);
  const width = useWindowWidth();

  useEffect(() => {
    if (typeof window !== undefined && props.sidebarRef.current !== undefined) {
      let sidebarHeight = props.sidebarRef.current.clientHeight;

      // Proportional equation to SVG top-width:height
      let correctedOffset = Math.round((106 * sidebarHeight) / 1005.1) - 1;
      mainRef.current.style.left = `${window.innerWidth - correctedOffset}px`;
    }
  }, [width, props.sidebarRef])

  useEffect(() => {
    const angle = props.open ? 90 : 0;
    mainRef.current.style.transform = `rotate(${angle}deg)`;
  }, [props.open])

  return (
    <div className={styles.concealer} ref={mainRef}></div>
  );
}