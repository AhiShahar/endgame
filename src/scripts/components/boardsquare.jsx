import React from "react";
import PropTypes from "prop-types";
import Square from "./square";
import { ItemTypes } from "../constants";
import { DropTarget } from "react-dnd";
import { canMovePiece, movePiece } from "../game";
const squareTarget = {
  drop(props) {
    if (props.canDrop)
      movePiece(
        props.dragging,
        props.x,
        props.y,
        props.board,
        props.updateBoard
      );
    else props.resetDrop();
  }
};

export const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

class BoardSquare extends React.Component {
  renderOverlay(color) {
    return (
      <div
        className="square-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color
        }}
      />
    );
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div
        className="square-container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <Square black={black}>{this.props.children}</Square>
        {isOver && !canDrop && this.renderOverlay("red")}
        {!isOver && canDrop && this.renderOverlay("yellow")}
        {isOver && canDrop && this.renderOverlay("green")}
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};
export default DropTarget(ItemTypes.PIECE, squareTarget, collect)(BoardSquare);
