import "./reset.scss";
import "./app.scss";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import React from "react";
import BoardSquare from "../components/boardsquare";
import Piece from "../components/piece";
import { Board } from "../constants";
import { canMovePiece, resetBoard } from "../game";
import Update from "../components/update/update";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this._updateBoard = this.updateBoard.bind(this);
    this._onDragStart = this.onDragStart.bind(this);
    this._resetDrop = this.resetDrop.bind(this);
    this.init = startingPositions => {
      for (let piece of startingPositions) {
        Board[piece.x][piece.y] = {
          ...piece
        };
      }
      return Board;
    };
    this.state = {
      winner: "",
      board: this.init(this.props.startingPositions),
      dragging: {},
      castling: {
        whiteRookRight: true,
        blackRookRight: true,
        whiteRookLeft: true,
        blackRookLeft: true,
        blackKing: true,
        whiteKing: true
      }
    };
  }
  resetDrop() {
    resetBoard(this.state.board, this._updateBoard);
  }
  onDragStart(dragging) {
    canMovePiece(dragging, this.state.board, this._updateBoard);
  }
  updateBoard(board, dragging = {}, winner = "") {
    this.setState({ board, dragging, winner });
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
          maxWidth: "100vh",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    );
  }

  render() {
    return (
      <div className="app-layout">
        {this.renderBoard()}
        <Update winner={this.state.winner} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Game);
