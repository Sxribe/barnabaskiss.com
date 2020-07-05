import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../../colors.global";
import Link from "../Link";
import Techcon from "../Techcon";

interface TechnologiesProps {}

const Technologies: FunctionComponent<TechnologiesProps> = (props: TechnologiesProps): React.ReactElement => {
    return (
        <div className={css(styles.root)}>
            <h1 className={css(styles.title)}>Technologies.</h1>
            <h2 className={css(styles.subtitle)}>I've worked with many technologies and tools.</h2>
            <div className={css(styles.content)}>
                <Techcon icon="html5" />
                <Techcon icon="css3" />
                <Techcon icon="js" />
                <Techcon icon="ts" />
                <Techcon icon="react" />
                <Techcon icon="jquery" />
                <Techcon icon="nodejs" />
                <Techcon icon="discordjs" />
                <Techcon icon="firebase" />
                <Techcon icon="python" />
                <Techcon icon="docker" />
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    root: {
        color: Colors.black
    },
    title: {
        fontFamily: "'Heebo', sans-serif",
        fontSize: "36px",
        fontWeight: 500,
        lineHeight: "90%",
        "@media (max-width: 600px)": {
            lineHeight: "90%"
        },
        marginLeft: "-0.035em"
    },
    subtitle: {
        fontFamily: "'Catamaran', sans-serif",
        fontSize: "13px",
        lineHeight: "110%",
        marginTop: 40
    },
    content: {
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start"
    }
});

export default Technologies;
