import React from "react";
import PropTypes from "prop-types";
import Square from "./square";
import Troop from "./troop";
import { moveTroop, canMoveTroop } from "../game";

class Board extends React.Component {
  static propTypes = {
    positions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const troops = this.props.positions.filter(
      troop => troop.x === x && troop.y === y
    );

    const piece = troops.length ? (
      <Troop color={troops[0].color} type={troops[0].type} />
    ) : null;

    return (
      <div
        key={i}
        style={{ width: "12.5%", height: "12.5%" }}
        onClick={() =>
          this.handleSquareClick(troops[0].color, troops[0].type, x, y)
        }
      >
        <Square black={black}>{piece}</Square>
      </div>
    );
  }

  handleSquareClick(color, type, x, y) {
    if (canMoveKnight(color, type, x, y)) {
      moveKnight(color, type, x, y);
    }
  }
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    );
  }
}

export default Board;
