import Head from "next/head";
import Nav from "../components/nav/nav";
import OutlinedButton from "../components/outlinedbutton/outlinedbutton";
import styles from "../styles/contact.module.scss";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import NavCover from "../components/navcover/navcover";

const introAnimation: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: .2
    }
  },
  show: {
    opacity: 1,
    transition: {
      duration: .2
    }
  }
}

export default function Contact() {

  const router = useRouter();
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  function transitionOut() {
    setTransitioning(true);
    setTimeout(() => {
      router.push("/?transitioning")
    }, 200);
  }

  function toggleNav() {
    if (navOpen) {
      setNavOpen(false);
      setTimeout(() => setTransitioning(false), 200);
    } else {
      setTransitioning(true);
      setTimeout(() => setNavOpen(true), 200);
    }
  }
  
  return (
    <div className={styles.parent}>
      <Head>
        <title>Barnabas Kiss | Contact</title>
      </Head>

      <Nav logoStyle="light" hamburgerStyle="light" hamburgerPressed={toggleNav} backDisplayed={true} backPressed={transitionOut} abs/>
      <NavCover open={navOpen} />

      <motion.main className={styles.inner} variants={introAnimation} initial="hidden" animate={transitioning ? "hidden" : "show"}>
        <div className={styles.toptext}>
          <h1>Contact Me.</h1>
          <h2>Let's make something <span>great</span></h2>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <form>
              <div className={styles.inp_container} data-name="NAME">
                <input id="name" />
              </div>
              <div className={styles.inp_container} data-name="EMAIL">
                <input id="email" />
              </div>
              <div className={styles.inp_container} data-name="MESSAGE">
                <textarea id="message" />
              </div>
              <OutlinedButton onClick={e => e.preventDefault()}>Submit</OutlinedButton>
            </form>
          </div>
          <div className={styles.center}>
            <p>OR</p>
          </div>
          <div className={styles.right}>
            <p>Send me an email at <span>hello@barnabaskiss.com</span></p>
            <p>Shoot me a message on <span>Discord</span> at <span>Sxribe#1182</span></p>
          </div>
        </div>
      </motion.main>
    </div>
  )
}