"use strict";
require("babel-core/register");

import React from "react";
import { mount } from "enzyme";

import Game from "../index";

const positions = [
  {
    x: 0,
    y: 0,
    color: "black",
    type: "knight"
  },
  {
    x: 1,
    y: 2,
    color: "white",
    type: "rook"
  }
];

describe("<Game /> -- Component", function() {
  const wrapper = mount(<Game startingPositions={positions} />);
  it("Should render a .app-layout div", function() {
    expect(wrapper.find(".app-layout")).toHaveLength(1);
  });
});
