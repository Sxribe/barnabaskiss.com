import React from "react";
import { shallow } from "enzyme";
import DarkButton from "./darkbutton";

export default describe("<DarkButton />", () => {
  it("is clickable", () => {
    let clicked = false;
    const button = shallow(<DarkButton onClick={() => clicked = true}>Test</DarkButton>);
    button.simulate("click");
    expect(clicked).toBe(true);
  })

  it("renders different texts", () => {
    const helloButton = shallow(<DarkButton>Hello</DarkButton>);
    const worldButton = shallow(<DarkButton>World</DarkButton>);

    expect(helloButton.text()).toBe("Hello");
    expect(worldButton.text()).toBe("World")
  })
})