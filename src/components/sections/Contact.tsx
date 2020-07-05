import React, { FunctionComponent, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import axios from "axios";
import Colors from "../../colors.global";
import Link from "../Link";
import Modal from "../Modal";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = (props: ContactProps): React.ReactElement => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [errored, setErrored] = useState<boolean>(false);
    const [nameErrored, setNameErrored] = useState<boolean>(false);
    const [emailErrored, setEmailErrored] = useState<boolean>(false);
    const [messageErrored, setMessageErrored] = useState<boolean>(false);

    const [modalType, setModalType] = useState<"none" | "error" | "success">("none");

    const [messageSending, setMessageSending] = useState<boolean>(false);

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
            marginTop: 10,
            marginBottom: 20
        },
        regInp: {
            width: "100%",
            height: 30,
            border: `1px solid ${Colors.black}`,
            marginTop: 5,
            paddingLeft: 5
        },
        bigInp: {
            width: "100%",
            height: 90,
            border: `1px solid ${Colors.black}`,
            marginTop: 5,
            padding: "5px 0 0 5px",
            resize: "none"
        },
        button: {
            padding: "5px 10px",
            border: `1px solid ${Colors.black}`,
            backgroundColor: "#FFF",
            transition: "transform .1s ease-in-out",
            transformOrigin: "left",
            cursor: "pointer",
            ":hover": {
                transform: "scaleX(1.1)"
            }
        },
        footer: {
            marginTop: 100,
            fontFamily: "'Catamaran', sans-serif",
            fontSize: "13px",
            lineHeight: "110%"
        },
        errored: {
            border: "2px solid #ff7675;"
        }
    });

    function showModal (type: "error" | "success") {
        switch (type) {
            case "error":
                setModalType("error");
                break;
            case "success":
                setModalType("success");
                break;
        }
    }

    async function attemptSubmit (): Promise<void> {
        // check for incorrect input

        setErrored(false);
        setNameErrored(false);
        setEmailErrored(false);
        setMessageErrored(false);
        let haderror = false;

        if (name === "") {
            setErrored(true);
            setNameErrored(true);
            haderror = true;
        }

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(email) === false) {
            setErrored(true);
            setEmailErrored(true);
            haderror = true;
        }

        if (message === "") {
            setErrored(true);
            setMessageErrored(true);
            haderror = true;
        }

        if (!haderror) {
            setMessageSending(true);
            const res = await axios.get(`https://us-central1-barnabaskiss-dev.cloudfunctions.net/sendMail?name=${name}&email=${email}&message=${message}`);
            if (res.data !== "ok") {
                showModal("error");
                setMessageSending(false);
            } else {
                showModal("success");
                setMessageSending(false);
            }
        }
    }

    return (
        <>
            <div className={css(styles.root)} id="contact">
                <h1 className={css(styles.title)}>Contact.</h1>
                <h2 className={css(styles.subtitle)}>Let's make something great.</h2>
                {errored && <h2 className={css(styles.subtitle)} style={{ fontWeight: 500 }}>Oops! Looks like you entered something incorrectly.</h2>}

                <input
                    type="text"
                    name="name"
                    id="name"
                    className={css(styles.regInp, nameErrored ? styles.errored : null)}
                    placeholder="NAME"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    />
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={css(styles.regInp, emailErrored ? styles.errored : null)}
                    placeholder="EMAIL"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <textarea
                    className={css(styles.bigInp, messageErrored ? styles.errored : null)}
                    placeholder="YOUR MESSAGE"
                    onChange={(e) => setMessage(e.target.value)}
                    />
                <button className={css(styles.button)} onClick={attemptSubmit}>{messageSending ? "SENDING..." : "SUBMIT"}</button>

                <p className={css(styles.footer)}>
                    &copy;&nbsp;twentytwenty
                    <br/>
                    Made with React, Typescript and Aphrodite.
                    <br/>
                    <Link href="#">Website source code</Link>
                </p>
            </div>

            <Modal type={modalType} />
        </>
    );
};

export default Contact;
