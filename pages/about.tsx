import { useState, useRef } from "react";
import styles from "../styles/about.module.scss"
import Head from "next/head";
import Nav from "../components/nav/nav";
import DarkButton from "../components/darkbutton/darkbutton";

export default function About() {
  return (
    <>
      <Head>
        <title>Barnabas Kiss | About Me</title>
      </Head>

      <Nav logoStyle="dark" hamburgerStyle="dark" abs/>

      <div className={styles.parent}>
        <div className={styles.header}>
          <h1>About Me</h1>
          <h2>
            I’m a full-stack freelance software engineer.
            I build high-quality software for a variety of use-cases.
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