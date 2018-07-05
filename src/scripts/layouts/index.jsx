import "./reset.scss";
import "./app.scss";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import React from "react";
import BoardSquare from "../components/boardsquare";
import Piece from "../components/piece";
import { Board } from "../constants";
import { canMovePiece, resetBoard } from "../game";
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
    type: "bishop"
  }
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this._updateBoard = this.updateBoard.bind(this);
    this._onDragStart = this.onDragStart.bind(this);
    this._resetDrop = this.resetDrop.bind(this);
    this.init = positions => {
      for (let piece of positions) {
        console.log(piece);
        Board[piece.x][piece.y] = {
          x: piece.x,
          y: piece.y,
          color: piece.color,
          type: piece.type,
          canDrop: false
        };
      }
      return Board;
    };
    this.state = {
      board: this.init(positions),
      dragging: {}
    };
  }
  resetDrop() {
    resetBoard(this.state.board, this._updateBoard);
  }
  onDragStart(dragging) {
    canMovePiece(dragging, this.state.board, this._updateBoard);
  }
  updateBoard(board, dragging = {}) {
    this.setState({ board, dragging });
  }
  renderSquare(x, y, square) {
    return (
      <div key={`${x}${y}`} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare
          x={x}
          y={y}
          canDrop={square.canDrop || false}
          dragging={this.state.dragging}
          board={this.state.board}
          updateBoard={this._updateBoard}
          resetDrop={this._resetDrop}
        >
          {square.color ? this.renderPiece(square) : null}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(square) {
    return (
      <Piece piece={square} onDragStart={() => this._onDragStart(square)} />
    );
  }

  renderBoard() {
    const squares = [];
    const { board } = this.state;
    for (let row in board) {
      for (let square in board[row]) {
        squares.push(
          this.renderSquare(parseInt(row), parseInt(square), board[row][square])
        );
      }
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

  render() {
    return <div className="app-layout">{this.renderBoard()}</div>;
  }
}

export default DragDropContext(HTML5Backend)(Game);
