export const bishopMovement = (piece, board) => {
  let xExpand = piece.x + 1;
  let yExpand = piece.y + 1;

  loopSW: while (xExpand < 8 && yExpand < 8) {
    const testSquare = board[xExpand][yExpand];
    console.log(testSquare);
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopSW;
      } else break loopSW;
    }
    xExpand++;
    yExpand++;
  }

  xExpand = piece.x + 1;
  yExpand = piece.y - 1;
  loopSE: while (xExpand < 8 && yExpand >= 0) {
    const testSquare = board[xExpand][yExpand];
    console.log(testSquare);
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopSE;
      } else break loopSE;
    }
    xExpand++;
    yExpand--;
  }

  xExpand = piece.x - 1;
  yExpand = piece.y + 1;
  loopNE: while (xExpand >= 0 && yExpand < 8) {
    const testSquare = board[xExpand][yExpand];
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopNE;
      } else break loopNE;
    }
    xExpand--;
    yExpand++;
  }

  xExpand = piece.x - 1;
  yExpand = piece.y - 1;
  loopNW: while (xExpand >= 0 && yExpand >= 0) {
    const testSquare = board[xExpand][yExpand];
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopNW;
      } else break loopNW;
    }
    xExpand--;
    yExpand--;
  }

  return board;
};
