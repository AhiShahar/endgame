import React from "react";
import PropTypes from "prop-types";
import { ItemTypes } from "../constants";
import { DragSource } from "react-dnd";

const pieceSource = {
  beginDrag(props) {
    props.onDragStart(props.piece);
    return {
      piece: props.piece
    };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class Piece extends React.Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <img
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: "bold",
          cursor: "move"
        }}
        src={`/assets/${this.props.piece.color}${this.props.piece.type}.png`}
        alt={`${this.props.piece.color}${this.props.piece.type}`}
      />
    );
  }
}

Piece.propTypes = {
  color: PropTypes.string,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  type: PropTypes.string
};

export default DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);
