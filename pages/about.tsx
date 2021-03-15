import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/about.module.scss"
import Head from "next/head";
import Nav from "../components/nav/nav";
import NavCover from "../components/navcover/navcover";

const concealerVariants: Variants = {
  hidden: {
    y: "100%",
  },

  show: {
    y: 0,

    transition: {
      duration: .1,
    }
  }
}

export default function About() {
  const router = useRouter();

  const [navConcealerOpen, setNavConcealerOpen] = useState<boolean>(false);
  const [navStyle, setNavStyle] = useState<"light"|"dark">("dark");
  const [concealerState, setConcealerState] = useState<"show"|"hidden">("hidden");

  const transitioning = router.query.transitioning !== undefined;

  function toggleNav() {
    if (concealerState == "hidden") {
      setConcealerState("show");
      setTimeout(() => {
        setNavStyle("light");
      }, .2)
      setTimeout(() => {
        setNavConcealerOpen(true);
      }, .4)
    } else {
      setConcealerState("hidden");
      setNavStyle("dark")
      setTimeout(() => {
        setNavConcealerOpen(false);
      }, .4)
    }
  }

  return (
    <>
      <Head>
        <title>Barnabas Kiss | About Me</title>
      </Head>

      <Nav logoStyle={navStyle} hamburgerStyle={navStyle} fix={navStyle === "light"} hamburgerPressed={toggleNav} abs/>

      {transitioning && <motion.div
        className={styles.navConcealer}
        variants={concealerVariants}
        initial="show"
        animate={concealerState}
        transition={{ duration: .3 }}
      />}
      <NavCover open={navConcealerOpen} />

      <div className={styles.parent}>
        <div className={styles.header}>
          <h1>About Me</h1>
          <h2>
            I’m a full-stack freelance software engineer.
            I build high-quality software for a variety of usecases.
            I’ve worked with many technologies over my software development experience.
            Fluent in English, Hungarian and German.
          </h2>
        </div>

        <_Skills />
        <_Experience />
      </div>
    </>  
  );
}

function _Skills() {
  return (
    <div className={styles.skills}>
      <div>
        <h4>SKILLS</h4>
      </div>

      <div>
        <h4>LANGUAGES</h4>
        <div>
          <p>JavaScript (ES6+)</p>
          <p>TypeScript</p>
          <p>HTML5/CSS3</p>
          <p>SASS/SCSS</p>
          <p>Python</p>
          <p>Dart</p>
        </div>
      </div>
      <div>
        <h4>FRAMEWORKS</h4>
        <div>
          <p>Next.js</p>
          <p>React</p>
          <p>Node</p>
          <p>Express.js + Flask</p>
          <p>Flutter</p>
          <p>jQuery</p>
        </div>
      </div>
      <div>
        <h4>TOOLS</h4>
        <div>
          <p>Bash</p>
          <p>Git &amp; Github</p>
          <p>Gulp &amp; Make</p>
          <p>Firefox/Chrome DevTools</p>
          <p>Prettier</p>
          <p>Docker</p>
        </div>
      </div>
      <div>
        <h4>TECHNOLOGIES</h4>
        <div>
          <p>Firebase Firestore</p>
          <p>Firebase Auth</p>
          <p>Firebase Cloud Messaging</p>
          <p>Firebase Functions</p>
          <p>Discord.js</p>
          <p>MongoDB</p>
          <p>SQLite3</p>
        </div>
      </div>
    </div>
  )
}

function _Experience() {
  return (
    <div className={styles.exp}>
      <div className={styles.exp_title}>
        <h4>EXPERIENCE</h4>
      </div>
      <div className={styles.exp_content}>
        <div>
          <h4>Baumschule von Ehren</h4>
          <p>Freelance Fullstack Developer (Remote)</p>
          <p>2018 - Present</p>
        </div>
        <div>
          <h4>Baumschule von Ehren</h4>
          <p>Freelance Mobile App Developer (Remote)</p>
          <p>2020 - Present</p>
        </div>
        <div>
          <h4>CreepySins Studios</h4>
          <p>Freelace Contractor (Website &amp; Backend)</p>
          <p>2020 - Present</p>
        </div>
      </div>
    </div>
  )
}