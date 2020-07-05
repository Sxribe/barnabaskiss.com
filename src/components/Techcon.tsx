import React, { FunctionComponent, useState } from "react";
import { css, StyleSheet } from "aphrodite";

// Techcon = Tech + icon
interface TechconProps extends React.HTMLAttributes<HTMLImageElement> {
    icon: "css3" | "discordjs" | "docker" | "firebase" | "html5" | "jquery" | "js" | "nodejs" | "python" | "react" | "ts";
}

const Techcon: FunctionComponent<TechconProps> = (props: TechconProps): React.ReactElement => {

    const [hovering, setHovering] = useState(false);
    let link: string;

    switch (props.icon) {
        case "css3":
            link = "https://en.wikipedia.org/wiki/Cascading_Style_Sheets";
            break;
        case "discordjs":
            link = "https://discord.js.org/#/";
            break;
        case "docker":
            link = "https://www.docker.com/";
            break;
        case "firebase":
            link = "https://firebase.google.com/";
            break;
        case "html5":
            link = "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5";
            break;
        case "jquery":
            link = "https://jquery.com/";
            break;
        case "js":
            link = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
            break;
        case "nodejs":
            link = "https://nodejs.org/en/";
            break;
        case "python":
            link = "https://www.python.org/";
            break;
        case "react":
            link = "https://reactjs.org/";
            break;
        case "ts":
            link = "https://www.typescriptlang.org/";
            break;
        default:
            link = "#";
    }

    const styles = StyleSheet.create({
        root: {
            width: "32px",
            marginTop: "10px",
            marginRight: "24px",
            filter: hovering ? "none" : "grayscale(50%)",
            cursor: "pointer"
        }
    });

    return (
        <img
            src={`${process.env.PUBLIC_URL}/images/${props.icon}.webp`}
            alt={props.icon}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => window.open(link)}
            className={css(styles.root)}
            title={props.icon}
        />
    );
};

export default Techcon;
