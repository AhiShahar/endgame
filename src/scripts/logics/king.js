export const kingMovement = (piece, board) => {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newX = piece.x + i;
      const newY = piece.y + j;
      if (0 <= newY && newY <= 7 && 0 <= newX && newX <= 7) {
        if (board[newX][newY].color !== piece.color) {
          board[newX][newY].canDrop = true;
        } else board[newX][newY].canDrop = false;
      }
    }
  }
  return board;
};
