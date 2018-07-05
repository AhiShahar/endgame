import React from "react";
import PropTypes from "prop-types";
import Square from "./square";

class BoardSquare extends React.Component {
  render() {
    const { x, y } = this.props;
    const black = (x + y) % 2 === 1;

    return <Square black={black}>{this.props.children}</Square>;
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default BoardSquare;
