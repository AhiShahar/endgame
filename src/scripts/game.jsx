const gameLogic = {
  knight: (piece, board) => {
    console.log("check knight movement");
    return board;
  },
  bishop: (piece, board) => {
    console.log("check bishop movement");
    return board;
  }
};

const isPositionTaken = (piece, x, y, positions) => {
  return positions.filter(
    item => item.x === x && item.y === y && item.color === piece.color
  ).length;
};

export const movePiece = (piece, x, y, board, cb) => {
  const updatedBoard = board.map(row => {
    return row.map(square => {
      if (square.x === x && square.y === y) {
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
  cb(updatedBoard);
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
