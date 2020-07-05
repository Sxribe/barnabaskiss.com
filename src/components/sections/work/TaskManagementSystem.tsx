import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import Colors from "../../../colors.global";

interface TMSProps extends React.HTMLAttributes<HTMLDivElement> {}

const TaskMS: FunctionComponent<TMSProps> = (props: TMSProps): React.ReactElement => {
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
            <h2 className={css(styles.title)}>Task Management System</h2>
            <p className={css(styles.content)}>Designed and implemented a online system for creating and distributing tasks in a team environment.<br />Users with administrative permissions could create tasks, which others could request to complete.</p>
            <h3 className={css(styles.subtitle)}>Technologies used</h3>
            <p>
                jQuery with HTML + CSS
                <br/>
                Python3
                <br/>
                SQLite3
                <br/>
                Bottle.py for RESTful API
            </p>
            <p className={css(styles.footer)}>Internal system - Closed Source, not viewable</p>
        </div>
    );
};

export default TaskMS;
