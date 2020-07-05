import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../../../colors.global";
import Link from "../../Link";

interface TMSPropsv2 extends React.HTMLAttributes<HTMLDivElement> {}

const TaskMSv2: FunctionComponent<TMSPropsv2> = (props: TMSPropsv2): React.ReactElement => {
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
            <h2 className={css(styles.title)}>Task Management System v2</h2>
            <p className={css(styles.content)}>Moved original management system to a <Link href="https://discord.com">Discord</Link> bot. Implemented original features with new commands. Included new feature to upload task submission data directly to storage, which is viewable by the task's creator and administrators. Implemented said feature in typed React. Learned and adapted to new framework - <Link href="https://github.com/discordjs/Commando">Commando</Link>.</p>
            <h3 className={css(styles.subtitle)}>Technologies used</h3>
            <p>
                Node.js
                <br/>
                <Link href="https://discord.js.org">Discord.js</Link>
                <br/>
                <Link href="https://github.com/discordjs/Commando">Commando</Link>
                <br/>
                Docker with docker-compose
                <br/>
                Typed React
                <br/>
                Firebase storage
            </p>
            <p className={css(styles.footer)}>Internal system - Closed Source, <Link href="#">View Screenshots</Link></p>
        </div>
    );
};

export default TaskMSv2;
