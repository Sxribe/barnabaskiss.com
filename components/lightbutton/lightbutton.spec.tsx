import React from "react";
import { shallow } from "enzyme";
import LightButton from "./lightbutton";

export default describe("<LightButton />", () => {
  it("is clickable", () => {
    let clicked = false;
    const button = shallow(<LightButton onClick={() => clicked = true}>Test</LightButton>);
    button.simulate("click");
    expect(clicked).toBe(true);
  })

  it("renders different texts", () => {
    const helloButton = shallow(<LightButton>Hello</LightButton>);
    const worldButton = shallow(<LightButton>World</LightButton>);

    expect(helloButton.text()).toBe("Hello");
    expect(worldButton.text()).toBe("World")
  })
})