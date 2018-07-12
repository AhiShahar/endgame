"use strict";
require("babel-core/register");

import React from "react";
import { mount } from "enzyme";

import BoardSquare from "../boardsquare";

describe("<BoardSquare /> -- Component", function() {
  const wrapper = mount(<BoardSquare x={4} y={4} />);
  it("Should render a .app-layout div", function() {
    expect(wrapper.find(".app-layout")).toHaveLength(1);
  });
});
