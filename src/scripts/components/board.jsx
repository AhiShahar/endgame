import React from "react";
import PropTypes from "prop-types";
import BoardSquare from "./boardsquare";
import Piece from "./piece";
import { movePiece, canMovePiece } from "../game";

class Board extends React.Component {
  static propTypes = {
    positions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const pieces = this.props.positions.filter(
      piece => piece.x === x && piece.y === y
    );
    const piece = pieces.length ? (
      <Piece color={pieces[0].color} type={pieces[0].type} />
    ) : null;
    return piece;
  }

  handleSquareClick(piece, x, y) {
    if (
      canMovePiece(
        piece,
        x,
        y,
        this.props.positions,
        this.props.updatePositions
      )
    ) {
      movePiece(piece, x, y, this.props.positions);
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
