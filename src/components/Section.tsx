import React, { FunctionComponent } from "react";
import { StyleSheet, css } from "aphrodite";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section: FunctionComponent<SectionProps> = (props: SectionProps): React.ReactElement => {
    return (
        <div className={css(styles.root)}>
            {props.children}
        </div>
    );
};

const styles = StyleSheet.create({
    root: {
        width: "100%",
        marginBottom: "150px"
    }
});

export default Section;
