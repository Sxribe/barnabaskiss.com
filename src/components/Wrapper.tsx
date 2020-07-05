import React, { FunctionComponent } from "react";
import { StyleSheet, css } from "aphrodite";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper: FunctionComponent<WrapperProps> = (props: WrapperProps): React.ReactElement => {
    return (
        <div className={css(styles.root)}>
            {props.children}
        </div>
    );
};

const styles = StyleSheet.create({
    root: {
        margin: "70px"
    }
});

export default Wrapper;
