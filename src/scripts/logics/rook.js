export const rookMovement = (piece, board) => {
  let xExpand = piece.x + 1;
  let yExpand = piece.y;
  loopS: while (xExpand <= 7) {
    const testSquare = board[xExpand][yExpand];
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopS;
      } else break loopS;
    }
    xExpand++;
  }

  xExpand = piece.x - 1;
  loopN: while (xExpand >= 0) {
    const testSquare = board[xExpand][yExpand];
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopN;
      } else break loopN;
    }
    xExpand--;
  }

  xExpand = piece.x;
  yExpand = piece.y + 1;
  loopE: while (yExpand <= 7) {
    const testSquare = board[xExpand][yExpand];
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopE;
      } else break loopE;
    }
    yExpand++;
  }

  yExpand = piece.y - 1;
  loopW: while (yExpand >= 0) {
    const testSquare = board[xExpand][yExpand];
    if (!testSquare.color) {
      board[xExpand][yExpand].canDrop = true;
    } else {
      if (testSquare.color !== piece.color) {
        board[xExpand][yExpand].canDrop = true;
        break loopW;
      } else break loopW;
    }
    yExpand--;
  }

  return board;
};
