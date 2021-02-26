import { useState, useRef, useEffect } from "react";

import Head from "next/head";
import DarkButton from "../components/darkbutton/darkbutton";
import LightButton from "../components/lightbutton/lightbutton";
import Nav from "../components/nav/nav";
import styles from "../styles/index.module.scss";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Home() {
  
  const width = useWindowWidth();

  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLImageElement>(null!)
  const concealerRef= useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (typeof window !== undefined) {
      let sidebarHeight = sidebarRef.current.clientHeight;

      // Proportional equation to SVG top-width:height
      let correctedOffset = Math.round((106 * sidebarHeight) / 1005.1) - 1;
      concealerRef.current.style.left = `${window.innerWidth - correctedOffset}px`;
    }
  }, [width])

  useEffect(() => {
    const angle = sliderOpen ? 90 : 0;
    concealerRef.current.style.transform = `rotate(${angle}deg)`;
  }, [sliderOpen])

  return (
    <>
      <Head>
        <title>Barnabás Kiss</title>
      </Head>
      
      <Nav logoStyle="dark" hamburgerSyle="light" hamburgerPressed={() => setSliderOpen(!sliderOpen)}/>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>I'm <span>Barnabás Kiss</span>, a full-stack<br />software engineer and student</h1>
          <div className={styles.buttons}>
            <DarkButton>Get in touch</DarkButton>
            <LightButton>About Me</LightButton>
          </div>
        </div>
        <img src="/assets/sidebar.svg" alt="" ref={sidebarRef} />
        <div className={styles.concealer} ref={concealerRef}></div>
      </main>
    </>
  )
}