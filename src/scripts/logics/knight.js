export const knightMovement = (piece, board) => {
  const updatedBoard = board.map((row, x) => {
    return row.map((square, y) => {
      const difX = x - piece.x;
      const difY = y - piece.y;
      return {
        ...square,
        canDrop:
          ((Math.abs(difX) === 2 && Math.abs(difY) === 1) ||
            (Math.abs(difX) === 1 && Math.abs(difY) === 2)) &&
          !square.color !== piece.color
      };
    });
  });
  return updatedBoard;
};
