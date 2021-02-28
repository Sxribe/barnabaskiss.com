import Head from "next/head";
import Nav from "../components/nav/nav";
import OutlinedButton from "../components/outlinedbutton/outlinedbutton";
import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.parent}>
      <Head>
        <title>Barnabas Kiss | Contact</title>
      </Head>

      <Nav logoStyle="light" hamburgerSyle="light" />

      <main className={styles.inner}>
        <div className={styles.toptext}>
          <h1>Contact Me.</h1>
          <h2>Let's make something <span>great</span></h2>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <form>
              <input id="name" data-name="NAME" />
              <input id="email" data-name="EMAIL" />
              <textarea id="message" data-name="MESSAGE"/>
              <OutlinedButton>Submit</OutlinedButton>
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
      </main>
    </div>
  )
}