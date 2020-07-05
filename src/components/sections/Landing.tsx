import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../../colors.global";

interface LandingProps {}

const Landing: FunctionComponent<LandingProps> = (props: LandingProps): React.ReactElement => {
    return (
        <div className={css(styles.root)}>
            <h2 className={css(styles.subtitle)}>Hi, I'm Barnabás Kiss</h2>
            <h1 className={css(styles.title)}>Fullstack web developer.</h1>
            <div className={css(styles.learnmore)}>
            <a href="#about"><p>Learn more about what I do</p></a>
            <a href="#about">
                <svg
                    className={css(styles.svg)}
                >
                    <line x1="0" y1="0" x2="7.5" y2="7.5" stroke={Colors.black} strokeWidth="1" />
                    <line x1="7.5" y1="7.5" x2="15" y2="0" stroke={Colors.black} strokeWidth="1" />
                </svg>
            </a>
            </div>
        </div>
    );
};

const bobKeyframes = {
    "0%": {
        transform: "translateY(0)"
    },

    "50%": {
        transform: "translateY(5px)"
    },

    "100%": {
        transform: "translateY(0)"
    }
};

const styles = StyleSheet.create({
    root: {
        color: Colors.black,
        paddingTop: "130px"
    },
    subtitle: {
        fontFamily: "'Heebo', sans-serif",
        fontSize: "32px",
        fontWeight: 500,
        "@media (max-width: 600px)": {
            marginBottom: 20,
            fontSize: "18px"
        }
    },
    title: {
        fontFamily: "'Heebo', sans-serif",
        fontSize: "64px",
        fontWeight: 500,
        lineHeight: "90%",
        "@media (max-width: 600px)": {
            lineHeight: "90%",
            fontSize: "36px"
        },
        marginLeft: "-0.035em"
    },
    learnmore: {
        position: "absolute",
        top: "calc(100% - 75px);",
        "@media (max-width: 600px)": {
            top: "calc(100% - 75px);"
        }
    },
    svg: {
        width: 15,
        height: 7.5,
        animationName: [bobKeyframes],
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
        "@media (max-width: 600px)": {
            width: "30px",
            height: "15px"
        }
    }
});

export default Landing;
