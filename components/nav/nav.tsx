import styles from "./nav.module.scss"

interface NavProps {
  logoStyle: "light" | "dark";
  hamburgerSyle: "light" | "dark";
  hamburgerPressed: ((event: React.MouseEvent<HTMLImageElement>) => void) | undefined;
}

export default function Nav(props: NavProps) {
  const { logoStyle, hamburgerSyle } = props;

  function clicked(e: React.MouseEvent<HTMLImageElement>) {
    if (props.hamburgerPressed !== undefined) {
      props.hamburgerPressed(e);
    }
  }

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
          onClick={clicked}
        />
      </div>
    </nav>
  )
}