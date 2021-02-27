import { useState, useRef, useEffect } from "react";

import Head from "next/head";
import DarkButton from "../components/darkbutton/darkbutton";
import LightButton from "../components/lightbutton/lightbutton";
import Nav from "../components/nav/nav";
import styles from "../styles/index.module.scss";
import useWindowWidth from "../hooks/useWindowWidth";
import Concealer from "../components/concealer/concealer";

export default function Home() {
  const width = useWindowWidth();

  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const [logoColor, setLogoColor] = useState<"light"|"dark">("dark");
  const sidebarRef = useRef<HTMLImageElement>(null!)

  useEffect(() => {
    if (sliderOpen) {
      setTimeout(() => setLogoColor("light"), .3 * 1000);
    } else {
      setLogoColor("dark")
    }
  }, [sliderOpen])
  
  return (
    <>
      <Head>
        <title>Barnabás Kiss</title>
      </Head>
      
      <Nav logoStyle={logoColor} hamburgerSyle="light" hamburgerPressed={() => setSliderOpen(!sliderOpen)}/>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>I'm <span>Barnabás Kiss</span>, a full-stack<br />software engineer and student</h1>
          <div className={styles.buttons}>
            <DarkButton>Get in touch</DarkButton>
            <LightButton>About Me</LightButton>
          </div>
        </div>
        <img src="/assets/sidebar.svg" alt="" ref={sidebarRef} />
        <Concealer open={sliderOpen} sidebarRef={sidebarRef} />
      </main>
    </>
  )
}