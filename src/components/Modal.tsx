import React, { FunctionComponent, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../colors.global";
import Link from "./Link";

interface ModalProps {
    type: "none" | "success" | "error";
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps): React.ReactElement => {

    const [closed, setClosed] = useState(false);

    const enterKeyframes = {
        "0%": {
            transform: "translateX(100%);"
        },

        "100%": {
            transform: "translateX(0)"
        }
    };

    const styles = StyleSheet.create({
        root: {
            position: "fixed",
            top: "0",
            right: "0",
            backgroundColor: "#FFF",
            padding: 20,
            margin: 20,
            borderRadius: 5,
            border: `1px solid ${Colors.black}`,

            animationName: [enterKeyframes],
            animationDuration: ".3s",
            animationIterationCount: 1,
            animationTimingFunction: "cubic-bezier(0.685, 0.010, 0.850, 1.000)"
        },

        title: {
            fontFamily: "'Heebo', sans-serif",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "90%",
            "@media (max-width: 600px)": {
                lineHeight: "90%"
            },
            marginLeft: "-0.035em",
            color: Colors.black
        },

        content: {
            fontFamily: "'Catamaran', sans-serif",
            fontSize: 13,
            fontWeight: 300,
            marginTop: 20
        }
    });

    if (closed) return <></>;
    if (props.type === "none") return <></>;

    return (
        <div className={css(styles.root)}>
            <h1 className={css(styles.title)}>{props.type === "success" ? "Success!" : "Error!"}</h1>
            {props.type === "success" &&
                <p className={css(styles.content)}>I've successfully received your message. I'll get back to you soon!</p>
            }
            {props.type === "error" &&
                <p className={css(styles.content)}>There has been an issue contacting the server. Please try again later, or email me at barnabas.05.kiss@gmail.com</p>
            }
            <Link href="#contact" clicked={() => setClosed(true)}>Close</Link>
        </div>
    );
};

export default Modal;
