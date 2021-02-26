import React from "react";
import { shallow } from "enzyme";
import Nav from "./nav";

describe("<Nav />", () => {
  it("should render light logo", () => {
    const nav = shallow(<Nav logoStyle="light" hamburgerSyle="light" />);
    let correctImages = nav.findWhere(el => el.prop("src") === "/logo-light.svg");
    expect(correctImages).toHaveLength(1);
  })

  it("should render dark logo", () => {
    const nav = shallow(<Nav logoStyle="dark" hamburgerSyle="light" />);
    let correctImages = nav.findWhere(el => el.prop("src") === "/logo-dark.svg");
    expect(correctImages).toHaveLength(1);
  })
  
  it("should render light hamburger", () => {
    const nav = shallow(<Nav logoStyle="light" hamburgerSyle="light" />);
    let correctImages = nav.findWhere(el => el.prop("src") === "/assets/hamburger-light.svg");
    expect(correctImages).toHaveLength(1);
  })
  
  it("should render dark hamburger", () => {
    const nav = shallow(<Nav logoStyle="light" hamburgerSyle="dark" />);
    let correctImages = nav.findWhere(el => el.prop("src") === "/assets/hamburger-dark.svg");
    expect(correctImages).toHaveLength(1);
  })
})