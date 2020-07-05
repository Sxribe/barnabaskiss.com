import React, { FunctionComponent, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../colors.global";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
    clicked?: () => void;
}

const Link: FunctionComponent<LinkProps> = (props: LinkProps): React.ReactElement => {
    const [hovering, setHovering] = useState(false);

    const styles = StyleSheet.create({
        root: {
            color: hovering ? "#FFF" : Colors.black,
            display: "inline-block",
            verticleAlign: "middle",
            position: "relative",
            padding: "0 1px",
            pointer: "cursor",
            ":before": {
                position: "absolute",
                content: "''",
                zIndex: -1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: Colors.black,
                transform: `scaleX(${hovering ? "100%" : "0"})`,
                transition: "transform .1s",
                transformOrigin: "left"
            }
        }
    });

    const shouldOpenTab = !props.href.startsWith("#");

    function handleOnClick () {
        if (props.clicked !== undefined) {
            props.clicked();
        }
    }

    if (shouldOpenTab) {
        return (
            <a
                className={css(styles.root)}
                onClick={() => window.open(props.href)}
                href=""
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClickCapture={handleOnClick}
                >
                <u>{props.children}</u>
            </a>
        );
    } else {
        return (
            <a
            className={css(styles.root)}
            href={props.href}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClickCapture={handleOnClick}
            >
                <u>{props.children}</u>
            </a>
        );
    }
};

export default Link;
