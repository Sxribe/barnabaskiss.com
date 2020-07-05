import React, { FunctionComponent } from "react";
import { css, StyleSheet } from "aphrodite";
import TaskMS from "./TaskManagementSystem";
import Colors from "../../../colors.global";
import TaskMSv2 from "./TaskManagementSystemV2";
import OpenBoard from "./OpenBoard";

interface WorkProps extends React.HTMLAttributes<HTMLDivElement> {}

const Work: FunctionComponent<WorkProps> = (props: WorkProps): React.ReactElement => {
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
        }
    });

    return (
        <div className={css(styles.root)}>
            <h1 className={css(styles.title)}>My work.</h1>
            <TaskMS />
            <TaskMSv2 />
            <OpenBoard />
        </div>
    );
};

export default Work;
