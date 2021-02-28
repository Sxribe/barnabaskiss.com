import React from "react";
import styles from "./outlinedbutton.module.scss";

interface OutlinedButtonProps {
  children?: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}

export default function OutlinedButton(props: OutlinedButtonProps) {
  function clicked(e: React.MouseEvent<HTMLButtonElement>) {
    if (props.onClick !== undefined) {
      props.onClick(e);
    }
  }

  return (
    <button
      onClick={clicked}
      className={styles.button_outlined}
    >
      {props.children}
    </button>
  )

}