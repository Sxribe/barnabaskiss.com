import React from "react";
import styles from "./darkbutton.module.scss";

interface DarkButtonProps {
  children?: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}

export default function DarkButton(props: DarkButtonProps) {
  function clicked(e: React.MouseEvent<HTMLButtonElement>) {
    if (props.onClick !== undefined) {
      props.onClick(e);
    }
  }

  return (
    <button
      onClick={clicked}
      className={styles.button_dark}
    >
      {props.children}
    </button>
  )

}