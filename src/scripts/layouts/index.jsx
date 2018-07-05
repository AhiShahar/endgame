import "./reset.scss";
import "./app.scss";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import React from "react";

import Board from "../components/board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this._updatePositions = this.updatePositions.bind(this);
    this.state = {
      positions: [
        {
          x: 0,
          y: 0,
          color: "black",
          type: "pawn"
        }
      ]
    };
  }
  updatePositions(positions) {
    this.setState({ positions });
  }
  render() {
    return (
      <div className="app-layout">
        <Board
          positions={this.state.positions}
          updatePositions={this._updatePositions}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Game);
