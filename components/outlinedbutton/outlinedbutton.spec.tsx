import React from "react";
import { shallow } from "enzyme";
import OutlinedButton from "./outlinedbutton";

export default describe("<OutlinedButton />", () => {
  it("is clickable", () => {
    let clicked = false;
    const button = shallow(<OutlinedButton onClick={() => clicked = true}>Test</OutlinedButton>);
    button.simulate("click");
    expect(clicked).toBe(true);
  })

  it("renders different texts", () => {
    const helloButton = shallow(<OutlinedButton>Hello</OutlinedButton>);
    const worldButton = shallow(<OutlinedButton>World</OutlinedButton>);

    expect(helloButton.text()).toBe("Hello");
    expect(worldButton.text()).toBe("World")
  })
})