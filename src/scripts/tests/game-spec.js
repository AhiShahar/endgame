"use strict";
require("babel-core/register");

import React from "react";
import { Board } from "../constants";
import { movePiece, canMovePiece, resetBoard } from "../game";

let gameBoard = Board;
function cb(res) {
  gameBoard = res;
}
describe("<Game /> -- Mechanism", function() {
  it("resetBoard() - Should return the board with no active canDrop flags", function() {
    gameBoard[1][3].canDrop = true;
    gameBoard[2][4].canDrop = true;

    expect(gameBoard).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    resetBoard(gameBoard, cb);
    expect(gameBoard).not.toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
  });
  it("canMovePiece() - Should return the board the possible dropzones for a knight", function() {
    const piece = {
      x: 0,
      y: 0,
      color: "black",
      type: "knight",
      canDrop: false
    };
    gameBoard[0][0] = piece;
    expect(gameBoard).not.toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    canMovePiece(piece, gameBoard, cb);
    expect(gameBoard).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    expect(gameBoard[1][2]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[2][1]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[2][2]).toEqual(
      expect.objectContaining({ canDrop: false })
    );
    resetBoard(gameBoard, cb);
  });
  it("canMovePiece() - Should return the board the possible dropzones for a bishop", function() {
    const piece = {
      x: 3,
      y: 4,
      color: "black",
      type: "bishop",
      canDrop: false
    };
    gameBoard[3][4] = piece;
    expect(gameBoard).not.toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    canMovePiece(piece, gameBoard, cb);
    expect(gameBoard).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    expect(gameBoard[4][5]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[2][5]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[2][3]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[5][2]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[2][2]).toEqual(
      expect.objectContaining({ canDrop: false })
    );
    expect(gameBoard[7][7]).toEqual(
      expect.objectContaining({ canDrop: false })
    );
    resetBoard(gameBoard, cb);
  });
  it("canMovePiece() - Should return the board the possible dropzones for a rook", function() {
    const piece = {
      x: 7,
      y: 6,
      color: "black",
      type: "rook",
      canDrop: false
    };
    const enemyPiece = {
      x: 2,
      y: 6,
      color: "white",
      type: "rook",
      canDrop: false
    };
    gameBoard[7][6] = piece;
    gameBoard[2][6] = enemyPiece;
    expect(gameBoard).not.toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    canMovePiece(piece, gameBoard, cb);
    expect(gameBoard).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            canDrop: true
          })
        ])
      ])
    );
    expect(gameBoard[7][3]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[7][7]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[3][6]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[2][6]).toEqual(expect.objectContaining({ canDrop: true }));
    expect(gameBoard[1][6]).toEqual(
      expect.objectContaining({ canDrop: false })
    );
    expect(gameBoard[2][7]).toEqual(
      expect.objectContaining({ canDrop: false })
    );
    resetBoard(gameBoard, cb);
  });
  it("movePiece() - Should return the board with the updated movement", function() {
    const piece = {
      x: 7,
      y: 6,
      color: "black",
      type: "rook",
      canDrop: false
    };
    expect(gameBoard).not.toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            x: 7,
            y: 4,
            color: "black",
            type: "rook"
          })
        ])
      ])
    );
    movePiece(piece, 7, 4, gameBoard, cb);
    expect(gameBoard).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            x: 7,
            y: 4,
            color: "black",
            type: "rook"
          })
        ])
      ])
    );
  });
});
