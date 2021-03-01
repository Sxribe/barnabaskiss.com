import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav/nav";
import styles from "../styles/index.module.scss";
import Concealer from "../components/concealer/concealer";
import NavCover from "../components/navcover/navcover";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [transitioning, setTransitioning] = useState<boolean>(router.query.transitioning !== undefined);
  const [sliderOpen, setSliderOpen] = useState<boolean>(transitioning);
  const [navCoverOpen, setNavCoverOpen] = useState<boolean>(false);
  const [logoColor, setLogoColor] = useState<"light"|"dark">(transitioning ? "light" : "dark");
  const sidebarRef = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    if (transitioning === false) {
      if (sliderOpen) {
        setTimeout(() => setLogoColor("light"), .3 * 1000);
        setTimeout(() => setNavCoverOpen(true), .4 * 1000);
      } else {
        setLogoColor("dark")
        setNavCoverOpen(false);
      }
    } else {
      setSliderOpen(false);
      setTimeout(() => {
        setTransitioning(false);
        setLogoColor("dark");
        router.push("/portfolio");
      }, .4 * 1000);
    }
  }, [sliderOpen])

  return (
    <>
      <Head>
        <title>Barnabás Kiss</title>
      </Head>
      
      <Nav logoStyle={logoColor} hamburgerSyle="light" hamburgerPressed={() => setSliderOpen(!sliderOpen)}/>
      <NavCover open={navCoverOpen} />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 style={{marginBottom: 0}}><span>This page is under construction</span></h1>
          <h2>Please check back later.</h2>
        </div>
        <img src="/assets/sidebar.svg" alt="" ref={sidebarRef} />
        <Concealer open={sliderOpen || transitioning} sidebarRef={sidebarRef} startClosed={transitioning} />
      </main>
    </>
  )
}