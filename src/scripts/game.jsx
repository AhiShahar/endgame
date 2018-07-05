const gameLogic = {
  knight: (x, y, curX, curY) => {
    const dx = x - curX;
    const dy = y - curY;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  },
  pawn: (x, y, curX, curY) => {
    // if (curX === 2)
  }
};

let positions = [
  {
    x: 0,
    y: 0,
    color: "black",
    type: "pawn"
  }
];

export const movePiece = (piece, x, y, positions, cb) => {
  positions.map(piece => {
    if (piece.color === color && piece.type === type) {
      return {
        ...piece,
        x,
        y
      };
    } else return piece;
  });
  cb(positions);
};

export const canMovePiece = (piece, x, y, positions) => {
  if (piece) {
    return gameLogic[piece.type](piece.x, piece.y, x, y);
  }
};
