import React from "react";
import styles from "./lightbutton.module.scss";

interface LightButtonProps {
  children?: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}

export default function LightButton(props: LightButtonProps) {
  function clicked(e: React.MouseEvent<HTMLButtonElement>) {
    if (props.onClick !== undefined) {
      props.onClick(e);
    }
  }

  return (
    <button
      onClick={clicked}
      className={styles.button_light}
    >
      {props.children}
    </button>
  )

}