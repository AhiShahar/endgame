import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Game from "./layouts/index.jsx";

const app = document.getElementById("app");

const startingPositions = [
  {
    x: 0,
    y: 4,
    color: "black",
    type: "rook"
  },
  {
    x: 2,
    y: 2,
    color: "white",
    type: "bishop"
  },
  {
    x: 2,
    y: 5,
    color: "black",
    type: "king"
  },
  {
    x: 4,
    y: 5,
    color: "white",
    type: "knight"
  },
  {
    x: 5,
    y: 3,
    color: "white",
    type: "knight"
  },
  {
    x: 4,
    y: 7,
    color: "white",
    type: "king"
  }
];

async function init() {
  ReactDOM.render(<Game startingPositions={startingPositions} />, app);
}

init();
