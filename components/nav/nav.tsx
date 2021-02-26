import styles from "./nav.module.scss"

interface NavProps {
  logoStyle: "light" | "dark",
  hamburgerSyle: "light" | "dark"
}

export default function Nav(props: NavProps) {
  const { logoStyle, hamburgerSyle } = props;

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img
          src={logoStyle === "light" ? "/logo-light.svg" : "/logo-dark.svg"}
          alt="Barnabás Kiss"
        />
      </div>
      <div className={styles.right}>
        <img
          src={hamburgerSyle === "light" ? "/assets/hamburger-light.svg" : "/assets/hamburger-dark.svg"}
          alt="Menu"
        />
      </div>
    </nav>
  )
}