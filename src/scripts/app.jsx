import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Game from "./layouts/index.jsx";

const app = document.getElementById("app");

async function init() {
  ReactDOM.render(<Game />, app);
}

init();
