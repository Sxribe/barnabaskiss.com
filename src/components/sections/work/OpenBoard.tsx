import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../../../colors.global";
import Link from "../../Link";

interface OpenBoardProps extends React.HTMLAttributes<HTMLDivElement> {}

const OpenBoard: FunctionComponent<OpenBoardProps> = (props: OpenBoardProps): React.ReactElement => {
    const styles = StyleSheet.create({
        root: {
            color: Colors.black,
            marginTop: 50
        },
        title: {
            fontFamily: "'Heebo', sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "90%"
        },
        subtitle: {
            fontWeight: 500
        },
        content: {
            fontFamily: "'Catamaran', sans-serif",
            fontWeight: 300,
            fontSize: 13,
            lineHeight: "110%",
            marginTop: 10
        },
        footer: {
            fontSize: 10,
            fontWeight: 500
        }
    });

    return (
        <div className={css(styles.root)}>
            <h2 className={css(styles.title)}>OpenBoard</h2>
            <p className={css(styles.content)}>Developed as part of HYO (<Link href="#">Read more</Link>).<br />OpenBoard is a stand-alone implementation of a text-based thread system, much like Reddit's comment section. OpenBoard is a web application that allows for the creation of comment threads. Users can reply to existing threads, or create their own.<br />Led a team of 4 to create a small opensource project in one and a half weeks. Took on the Project Manager role - assigned critical tasks to lead toward a MVP. Wrote a large portion of the codebase.</p>
            <h3 className={css(styles.subtitle)}>Technologies used</h3>
            <p>
                Typed React
                <br/>
                Local functions written in Typescript
                <br/>
                TSLint + Prettier
                <br/>
                Firebase Firestore
            </p>
            <p className={css(styles.footer)}><Link href="#">Final writeup</Link></p>
            <p className={css(styles.footer)}><Link href="https://openboard-hyo.web.app/">Live app</Link></p>
            <p className={css(styles.footer)}><Link href="https://github.com/Hack-Your-Own-Team-Orion/openboard/">Source</Link></p>
        </div>
    );
};

export default OpenBoard;
