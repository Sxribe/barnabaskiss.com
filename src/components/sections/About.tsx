import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../../colors.global";
import Link from "../Link";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = (props: AboutProps): React.ReactElement => {
    return (
        <div className={css(styles.root)} id="about">
            <h1 className={css(styles.title)}>About me.</h1>
            <p className={css(styles.content)}>
                I’m a Fullstack freelance web developer. I build high quality software for a variety of needs. I’ve worked with many technologies over my software development experience.
            <br/>
            <p><span className={css(styles.cbold)}>Fluent in: </span>English, Hungarian, German</p>
            <br/>
            Currently for <Link href="#contact">Hire</Link>.
            </p>
        </div>
    );
};

const styles = StyleSheet.create({
    root: {
        color: Colors.black,

        // split margin and padding, allows for space above "About me." when scrolled to with a link.
        marginTop: "65vh",
        paddingTop: "10vh"
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
    content: {
        fontFamily: "'Catamaran', sans-serif",
        fontSize: 13,
        fontWeight: 300,
        marginTop: 40
    },
    cbold: {
        fontWeight: 500
    }
});

export default About;
