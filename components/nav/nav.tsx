import styles from "./nav.module.scss"
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

interface NavProps {
  logoStyle: "light" | "dark";
  hamburgerStyle: "light" | "dark";
  hamburgerPressed?: ((event: React.MouseEvent<HTMLImageElement>) => void);
  backDisplayed?: boolean;
  backPressed?: ((event: React.MouseEvent<HTMLAnchorElement>) => void);
  abs?: boolean;
  fix?: boolean;
}

const aFadeIn: Variants = {
  hide: {
    opacity: 0,
    transition: {
      duration: .1
    }
  },

  show: {
    opacity: 1
  }
}

export default function Nav(props: NavProps) {
  const { logoStyle, hamburgerStyle } = props;
  const router = useRouter();

  function clicked(e: React.MouseEvent<HTMLImageElement>) {
    if (props.hamburgerPressed !== undefined) {
      props.hamburgerPressed(e);
    }
  }

  function backClicked(e: React.MouseEvent<HTMLAnchorElement>) {
    if (props.backPressed !== undefined) {
      props.backPressed(e);
    }
  }

  function homeClicked() {
    router.push("/")
  }

  return (
    <nav className={styles.nav} style={{
      position: props.fix ? "fixed" : props.abs ? "absolute" : "relative"
    }}>
      <div className={styles.left}>
        <img
          src={logoStyle === "light" ? "/logo-light.svg" : "/logo-dark.svg"}
          alt="Barnabás Kiss"
          onClick={homeClicked}
        />
      </div>
      <div className={styles.right}>
        {props.backDisplayed && <motion.a variants={aFadeIn} initial="hide" animate="show" onClick={backClicked}>BACK</motion.a>}
        <img
          src={hamburgerStyle === "light" ? "/assets/hamburger-light.svg" : "/assets/hamburger-dark.svg"}
          alt="Menu"
          onClick={clicked}
        />
      </div>
    </nav>
  )
}