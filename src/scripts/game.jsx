import { bishopMovement } from "./logics/bishop";
import { knightMovement } from "./logics/knight";
import { rookMovement } from "./logics/rook";
import { kingMovement } from "./logics/king";

const gameLogic = {
  rook: (piece, board) => rookMovement(piece, board),
  knight: (piece, board) => knightMovement(piece, board),
  bishop: (piece, board) => bishopMovement(piece, board),
  king: (piece, board) => kingMovement(piece, board)
};

export const movePiece = (piece, x, y, board, cb) => {
  let winner = "";
  const updatedBoard = board.map(row => {
    return row.map(square => {
      if (square.x === x && square.y === y) {
        if (square.type === "king") winner = piece.color;
        return {
          ...square,
          canDrop: false,
          color: piece.color,
          type: piece.type
        };
      } else if (piece.x === square.x && piece.y === square.y) {
        return {
          ...square,
          canDrop: false,
          color: undefined,
          type: undefined
        };
      } else {
        return { ...square, canDrop: false };
      }
    });
  });
  cb(updatedBoard, {}, winner);
};

export const canMovePiece = (piece, board, cb) => {
  const updatedBoard = gameLogic[piece.type](piece, board);
  cb(updatedBoard, piece);
};

export const resetBoard = (board, cb) => {
  const updatedBoard = board.map(row => {
    return row.map(square => {
      return {
        ...square,
        canDrop: false
      };
    });
  });
  cb(updatedBoard);
};
