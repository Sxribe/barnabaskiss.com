import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Landing from "./components/sections/Landing";
import Section from "./components/Section";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Contact from "./components/sections/Contact";
import Work from "./components/sections/work/Work";

interface ApplicationProps {}
interface ApplicationState {}

export default class Application extends Component<ApplicationProps, ApplicationState> {
    render (): React.ReactNode {
        return (
            <Wrapper>
                <Section>
                    <Landing />
                </Section>
                <Section>
                    <About />
                </Section>
                <Section>
                    <Work />
                </Section>
                <Section>
                    <Technologies />
                </Section>
                <Section>
                    <Contact />
                </Section>
            </Wrapper>
        );
    }
}
